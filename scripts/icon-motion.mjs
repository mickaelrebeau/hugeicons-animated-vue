/**
 * Geometry-aware motion planner.
 * Each generated icon inherits a transferable recipe from one of the 165 hand-crafted donors.
 */
import { applyDonor, matchDonor } from './handcrafted-atlas.mjs'
import { storyOf } from './name-stories.mjs'

export {
  EASE_IN_OUT,
  EASE_OUT,
  emitVariantsTs,
  toMotionVariants,
  usesCustom,
  variantConstName,
  variantsFor,
  serialize,
} from './icon-gestures.mjs'

export function toKebab(name) {
  return name
    .replace(/Icon$/, '')
    .replace(/FreeIcons$/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-z])(\d)/g, '$1-$2')
    .replace(/(\d)([A-Z])/g, '$1-$2')
    .toLowerCase()
}

export function toPascal(kebab) {
  return kebab.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('') + 'Icon'
}

export function seedOf(name) {
  let h = 2166136261
  for (let i = 0; i < name.length; i += 1) {
    h ^= name.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function parseCommands(d) {
  if (!d) return []
  const out = []
  const re = /([MmLlHhVvCcSsQqTtAaZz])([^MmLlHhVvCcSsQqTtAaZz]*)/g
  let m
  while ((m = re.exec(String(d)))) {
    const type = m[1]
    const nums = (m[2].match(/[+-]?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?/gi) || []).map(Number)
    out.push({ type, nums })
  }
  return out
}

function flattenPath(commands) {
  const pts = []
  const strokes = []
  let x = 0
  let y = 0
  let sx = 0
  let sy = 0
  let current = []
  let closed = false
  let hasCurve = false
  let hasArc = false

  const push = (nx, ny) => {
    x = nx
    y = ny
    const p = { x, y }
    pts.push(p)
    current.push(p)
  }

  const endStroke = () => {
    if (current.length) {
      strokes.push(current)
      current = []
    }
  }

  for (const { type, nums } of commands) {
    const abs = type === type.toUpperCase()
    const t = type.toUpperCase()
    if (t === 'M') {
      endStroke()
      for (let i = 0; i + 1 < nums.length; i += 2) {
        const nx = abs ? nums[i] : x + nums[i]
        const ny = abs ? nums[i + 1] : y + nums[i + 1]
        if (i === 0) {
          sx = nx
          sy = ny
        }
        push(nx, ny)
      }
    } else if (t === 'L') {
      for (let i = 0; i + 1 < nums.length; i += 2) {
        push(abs ? nums[i] : x + nums[i], abs ? nums[i + 1] : y + nums[i + 1])
      }
    } else if (t === 'H') {
      for (const n of nums) push(abs ? n : x + n, y)
    } else if (t === 'V') {
      for (const n of nums) push(x, abs ? n : y + n)
    } else if (t === 'C') {
      hasCurve = true
      for (let i = 0; i + 5 < nums.length; i += 6) {
        const x1 = abs ? nums[i] : x + nums[i]
        const y1 = abs ? nums[i + 1] : y + nums[i + 1]
        const x2 = abs ? nums[i + 2] : x + nums[i + 2]
        const y2 = abs ? nums[i + 3] : y + nums[i + 3]
        const nx = abs ? nums[i + 4] : x + nums[i + 4]
        const ny = abs ? nums[i + 5] : y + nums[i + 5]
        pts.push({ x: x1, y: y1 }, { x: x2, y: y2 })
        push(nx, ny)
      }
    } else if (t === 'S' || t === 'Q' || t === 'T') {
      hasCurve = true
      const step = t === 'Q' ? 4 : 2
      for (let i = 0; i + step - 1 < nums.length; i += step) {
        const nx = abs ? nums[i + step - 2] : x + nums[i + step - 2]
        const ny = abs ? nums[i + step - 1] : y + nums[i + step - 1]
        push(nx, ny)
      }
    } else if (t === 'A') {
      hasArc = true
      for (let i = 0; i + 6 < nums.length; i += 7) {
        push(abs ? nums[i + 5] : x + nums[i + 5], abs ? nums[i + 6] : y + nums[i + 6])
      }
    } else if (t === 'Z') {
      closed = true
      push(sx, sy)
      endStroke()
    }
  }
  endStroke()
  return { pts, strokes, closed, hasCurve, hasArc, commands }
}

function bboxOfPoints(pts, fallback = { minX: 12, maxX: 12, minY: 12, maxY: 12, cx: 12, cy: 12 }) {
  if (!pts.length) return fallback
  let minX = Infinity
  let maxX = -Infinity
  let minY = Infinity
  let maxY = -Infinity
  for (const p of pts) {
    if (p.x < minX) minX = p.x
    if (p.x > maxX) maxX = p.x
    if (p.y < minY) minY = p.y
    if (p.y > maxY) maxY = p.y
  }
  return { minX, maxX, minY, maxY, cx: (minX + maxX) / 2, cy: (minY + maxY) / 2 }
}

function strokeBox(stroke) {
  return bboxOfPoints(stroke)
}

function strokeDir(stroke) {
  if (stroke.length < 2) return { w: 0, h: 0, horiz: false, vert: false, diag: false }
  const a = stroke[0]
  const b = stroke[stroke.length - 1]
  const w = Math.abs(b.x - a.x)
  const h = Math.abs(b.y - a.y)
  return {
    w,
    h,
    horiz: h <= 1.15 && w > 3,
    vert: w <= 1.15 && h > 3,
    diag: w > 2 && h > 2 && Math.abs(w - h) < Math.max(w, h) * 0.55,
  }
}

function looksLikePlusPath(parsed, box) {
  if (parsed.closed || parsed.hasCurve || parsed.hasArc) return false
  if (parsed.strokes.length !== 2) return false
  const a = strokeDir(parsed.strokes[0])
  const b = strokeDir(parsed.strokes[1])
  const crossed = (a.horiz && b.vert) || (a.vert && b.horiz)
  if (!crossed) return false
  const squareish = Math.abs(box.w - box.h) < Math.max(box.w, box.h) * 0.65
  return squareish && box.w > 3 && box.h > 3
}

function looksLikeCheckPath(parsed) {
  if (parsed.closed || parsed.hasCurve || parsed.hasArc) return false
  if (parsed.strokes.length !== 1) return false
  const s = parsed.strokes[0]
  if (s.length < 3 || s.length > 4) return false
  const a = s[0]
  const b = s[1]
  const c = s[s.length - 1]
  const dx1 = b.x - a.x
  const dy1 = b.y - a.y
  const dx2 = c.x - b.x
  const dy2 = c.y - b.y
  const downRight = dx1 > 0.8 && dy1 > 0.8
  const upRight = dx2 > 1.2 && dy2 < -1.2
  const secondLonger = Math.hypot(dx2, dy2) > Math.hypot(dx1, dy1) * 1.15
  return downRight && upRight && secondLonger
}

function looksLikeXPath(parsed, box) {
  if (parsed.closed || parsed.hasCurve || parsed.hasArc) return false
  if (parsed.strokes.length !== 2) return false
  const a = strokeDir(parsed.strokes[0])
  const b = strokeDir(parsed.strokes[1])
  const squareish = Math.abs(box.w - box.h) < Math.max(box.w, box.h) * 0.45
  return a.diag && b.diag && squareish && box.w > 4
}

function chevronDir(stroke) {
  if (stroke.length < 3) return null
  const first = stroke[0]
  const mid = stroke[Math.floor(stroke.length / 2)]
  const last = stroke[stroke.length - 1]
  if (mid.y > first.y + 2 && mid.y > last.y + 2) return 'down'
  if (mid.y < first.y - 2 && mid.y < last.y - 2) return 'up'
  if (mid.x > first.x + 2 && mid.x > last.x + 2) return 'right'
  if (mid.x < first.x - 2 && mid.x < last.x - 2) return 'left'
  return null
}

function dominantDir(stroke) {
  if (!stroke || stroke.length < 2) return null
  const first = stroke[0]
  const last = stroke[stroke.length - 1]
  const dx = last.x - first.x
  const dy = last.y - first.y
  if (Math.abs(dx) < 1.2 && Math.abs(dy) < 1.2) return null
  if (Math.abs(dx) > Math.abs(dy) * 1.25) return dx > 0 ? 'right' : 'left'
  if (Math.abs(dy) > Math.abs(dx) * 1.25) return dy > 0 ? 'down' : 'up'
  return `${dy < 0 ? 'up' : 'down'}-${dx > 0 ? 'right' : 'left'}`
}

export function analyzeElement(el, index) {
  const [tag, attrs] = el
  const parsed = tag === 'path' ? flattenPath(parseCommands(attrs.d)) : {
    pts: [],
    strokes: [],
    closed: tag === 'circle' || tag === 'ellipse' || tag === 'rect',
    hasCurve: false,
    hasArc: false,
    commands: [],
  }

  let box
  if (tag === 'circle') {
    const cx = Number(attrs.cx) || 0
    const cy = Number(attrs.cy) || 0
    const r = Number(attrs.r) || 0
    box = { minX: cx - r, maxX: cx + r, minY: cy - r, maxY: cy + r, cx, cy }
  } else if (tag === 'ellipse') {
    const cx = Number(attrs.cx) || 0
    const cy = Number(attrs.cy) || 0
    const rx = Number(attrs.rx) || 0
    const ry = Number(attrs.ry) || 0
    box = { minX: cx - rx, maxX: cx + rx, minY: cy - ry, maxY: cy + ry, cx, cy }
  } else if (tag === 'rect') {
    const x = Number(attrs.x) || 0
    const y = Number(attrs.y) || 0
    const w = Number(attrs.width) || 0
    const h = Number(attrs.height) || 0
    box = { minX: x, maxX: x + w, minY: y, maxY: y + h, cx: x + w / 2, cy: y + h / 2 }
  } else {
    box = bboxOfPoints(parsed.pts)
  }

  const w = Math.max(0, box.maxX - box.minX)
  const h = Math.max(0, box.maxY - box.minY)
  const area = Math.max(0.01, w * h)
  const aspect = h < 0.01 ? 99 : w / h
  const isCircle = tag === 'circle' || tag === 'ellipse'
  const r = tag === 'circle' ? Number(attrs.r) || 0 : 0
  const simple = parsed.strokes.length === 1 && parsed.strokes[0].length <= 2 && !parsed.hasCurve
  const isVLine = simple && w <= 1.2 && h > 3.5
  const isHLine = simple && h <= 1.2 && w > 3.5
  const isBar = parsed.closed && aspect > 2.6 && h > 1.2 && h < 7.5 && w > 8
  const isDot = (isCircle && r > 0 && r <= 2.2) || (parsed.closed && area < 9 && w < 3.4 && h < 3.4 && !isHLine && !isVLine)
  const isArc = !parsed.closed && (parsed.hasArc || parsed.hasCurve) && h < 8 && w > 4 && aspect > 1.6
  const isPlus = looksLikePlusPath(parsed, { w, h })
  const isCheck = looksLikeCheckPath(parsed)
  const isX = looksLikeXPath(parsed, { w, h })
  const mainStroke = parsed.strokes[0] || []
  const chevron = !parsed.closed && !parsed.hasCurve ? chevronDir(mainStroke) : null
  const dir = !parsed.closed && parsed.strokes.length === 1 ? dominantDir(mainStroke) : null

  return {
    index,
    tag,
    attrs,
    parsed,
    ...box,
    w,
    h,
    area,
    aspect,
    isCircle,
    isDot,
    isHLine,
    isVLine,
    isBar,
    isArc,
    isPlus,
    isCheck,
    isX,
    closed: parsed.closed || isCircle || tag === 'rect',
    chevron,
    dir,
  }
}

export function planIcon(name, elements) {
  const seed = seedOf(name)
  const analyzed = elements.map((el, i) => analyzeElement(el, i))
  const story = storyOf(name, analyzed)
  const donor = story?.donor || matchDonor(name, analyzed)
  const planned = applyDonor(donor, name, analyzed, story)
  return { ...planned, seed }
}
