/**
 * Animation families derived from the hand-crafted icons in packages/vue/src/icons.
 * Curves and durations match those sources (ease-out [0.23, 1, 0.32, 1], 0.42–0.92s).
 */

const EASE_OUT = [0.23, 1, 0.32, 1]
const EASE_IN_OUT = [0.77, 0, 0.175, 1]

function group(variants, extra = {}) {
  return { mode: 'group', loops: false, variants, ...extra }
}

function svg(variants, extra = {}) {
  return { mode: 'svg', loops: false, variants, ...extra }
}

function split(frame, mark, extra = {}) {
  return { mode: 'split', loops: false, frame, mark, ...extra }
}

function nudge(tx, ty, scale = 0.94) {
  return group({
    normal: { transform: 'translate(0px, 0px) scale(1)' },
    animate: {
      transform: [
        'translate(0px, 0px) scale(1)',
        `translate(${tx}px, ${ty}px) scale(${scale})`,
        `translate(${round(-tx * 0.12)}px, ${round(-ty * 0.12)}px) scale(1.02)`,
        `translate(${round(tx * 0.17)}px, ${round(ty * 0.17)}px) scale(0.99)`,
        'translate(0px, 0px) scale(1)',
      ],
      transition: { duration: 0.5, ease: EASE_OUT },
    },
  })
}

function chevron(axis, delta) {
  const start = axis === 'x' ? 'translateX(0px) scaleY(1)' : 'translateY(0px) scaleX(1)'
  const key = axis === 'x' ? 'translateX' : 'translateY'
  const scaleKey = axis === 'x' ? 'scaleY' : 'scaleX'
  return group({
    normal: { transform: start },
    animate: {
      transform: [
        start,
        `${key}(${delta}px) ${scaleKey}(0.9)`,
        `${key}(${round(-delta * 0.19)}px) ${scaleKey}(1.04)`,
        `${key}(${round(delta * 0.33)}px) ${scaleKey}(0.97)`,
        start,
      ],
      transition: { duration: 0.56, ease: EASE_OUT },
    },
  })
}

function pulse(peak = 1.12) {
  return group({
    normal: { transform: 'scale(1)' },
    animate: {
      transform: [
        'scale(1)',
        'scale(0.96)',
        `scale(${peak})`,
        'scale(0.98)',
        `scale(${round((peak + 1) / 2)})`,
        'scale(1)',
      ],
      transition: {
        duration: 0.72,
        ease: EASE_OUT,
        times: [0, 0.12, 0.32, 0.48, 0.68, 1],
      },
    },
  })
}

function settle() {
  return group({
    normal: { transform: 'scale(1)' },
    animate: {
      transform: ['scale(1)', 'scale(0.96)', 'scale(1.025)', 'scale(1)'],
      transition: { duration: 0.48, ease: EASE_OUT },
    },
  })
}

function bob(dy = -1.5) {
  return group({
    normal: { transform: 'translateY(0px) scale(1)' },
    animate: {
      transform: [
        'translateY(0px) scale(1)',
        `translateY(${dy}px) scale(1.03)`,
        `translateY(${round(-dy * 0.33)}px) scale(0.98)`,
        'translateY(0px) scale(1)',
      ],
      transition: { duration: 0.56, ease: EASE_OUT },
    },
  })
}

function swing(deg = 14) {
  return svg({
    normal: { rotate: 0 },
    animate: {
      rotate: [0, -deg, round(deg * 0.79), round(-deg * 0.57), round(deg * 0.36), round(-deg * 0.14), 0],
      transition: {
        duration: 0.9,
        ease: 'easeInOut',
        times: [0, 0.18, 0.38, 0.56, 0.72, 0.87, 1],
      },
    },
  })
}

function shake() {
  return group({
    normal: { transform: 'rotate(0deg)' },
    animate: {
      transform: [
        'rotate(0deg)',
        'rotate(-8deg)',
        'rotate(7deg)',
        'rotate(-4deg)',
        'rotate(2deg)',
        'rotate(0deg)',
      ],
      transition: { duration: 0.52, ease: EASE_IN_OUT },
    },
  })
}

function jiggle() {
  return group({
    normal: { transform: 'rotate(0deg) scale(1)' },
    animate: {
      transform: [
        'rotate(0deg) scale(1)',
        'rotate(-1deg) scale(0.985)',
        'rotate(1.4deg) scale(1.018)',
        'rotate(-0.35deg) scale(0.997)',
        'rotate(0deg) scale(1)',
      ],
      transition: { duration: 0.72, times: [0, 0.18, 0.48, 0.78, 1], ease: EASE_OUT },
    },
  })
}

function tilt(deg = 8) {
  return group({
    normal: { transform: 'rotate(0deg)' },
    animate: {
      transform: [
        'rotate(0deg)',
        `rotate(${-deg}deg)`,
        `rotate(${round(deg * 0.35)}deg)`,
        'rotate(0deg)',
      ],
      transition: { duration: 0.56, ease: EASE_OUT },
    },
  })
}

function lift(dy = -1.8) {
  return group({
    normal: { transform: 'translateY(0px)' },
    animate: {
      transform: [
        'translateY(0px)',
        `translateY(${dy}px)`,
        `translateY(${round(-dy * 0.2)}px)`,
        'translateY(0px)',
      ],
      transition: { duration: 0.5, ease: EASE_OUT },
    },
  })
}

function slide(tx) {
  return group({
    normal: { transform: 'translateX(0px)' },
    animate: {
      transform: [
        'translateX(0px)',
        `translateX(${tx}px)`,
        `translateX(${round(-tx * 0.15)}px)`,
        'translateX(0px)',
      ],
      transition: { duration: 0.5, ease: EASE_OUT },
    },
  })
}

function conveyor(dy) {
  return group({
    normal: { transform: 'translateY(0px)' },
    animate: {
      transform: [
        'translateY(0px)',
        `translateY(${dy}px)`,
        `translateY(${round(-dy * 0.15)}px)`,
        'translateY(0px)',
      ],
      transition: { duration: 0.56, ease: EASE_OUT },
    },
  })
}

function rotateOnce(windup = -25) {
  return svg({
    normal: { rotate: 0, transition: { duration: 0.15, ease: 'easeOut' } },
    animate: {
      rotate: [0, windup, 360],
      transition: { duration: 0.9, times: [0, 0.2, 1], ease: ['easeIn', 'easeOut'] },
    },
  })
}

function rotateTo(deg) {
  return group({
    normal: { transform: 'rotate(0deg)' },
    animate: {
      transform: [
        'rotate(0deg)',
        `rotate(${round(deg + 22)}deg)`,
        `rotate(${round(deg - 2.5)}deg)`,
        `rotate(${deg}deg)`,
      ],
      transition: {
        duration: 0.92,
        times: [0, 0.72, 0.9, 1],
        ease: [EASE_IN_OUT, EASE_OUT, EASE_OUT],
      },
    },
  })
}

function wobble() {
  return group({
    normal: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
    animate: {
      transform: [
        'translate(0px, 0px) rotate(0deg) scale(1)',
        'translate(1.25px, -0.55px) rotate(14deg) scale(0.78)',
        'translate(0.4px, -0.8px) rotate(6deg) scale(0.76)',
        'translate(-0.65px, 0.25px) rotate(-8deg) scale(0.8)',
        'translate(-0.15px, 0.1px) rotate(-2.5deg) scale(1.08)',
        'translate(0px, 0px) rotate(0deg) scale(1)',
      ],
      transition: {
        duration: 1.24,
        times: [0, 0.32, 0.48, 0.64, 0.84, 1],
        ease: [EASE_IN_OUT, 'linear', 'linear', EASE_IN_OUT, EASE_OUT],
      },
    },
  })
}

function press(tx = 2) {
  return group({
    normal: { transform: 'translateX(0px) scaleX(1) scaleY(1)' },
    animate: {
      transform: [
        'translateX(0px) scaleX(1) scaleY(1)',
        'translateX(-0.8px) scaleX(0.9) scaleY(1.04)',
        `translateX(${tx}px) scaleX(1.1) scaleY(0.97)`,
        'translateX(-0.2px) scaleX(0.99) scaleY(1.005)',
        'translateX(0px) scaleX(1) scaleY(1)',
      ],
      transition: { duration: 0.52, times: [0, 0.2, 0.52, 0.78, 1], ease: EASE_OUT },
    },
  })
}

function blink() {
  return group({
    normal: { transform: 'scaleY(1)' },
    animate: {
      transform: ['scaleY(1)', 'scaleY(0.12)', 'scaleY(1.06)', 'scaleY(1)'],
      transition: { duration: 0.42, ease: EASE_OUT },
    },
  })
}

function flicker() {
  return group({
    normal: { transform: 'scale(1) rotate(0deg)' },
    animate: {
      transform: [
        'scale(1) rotate(0deg)',
        'scale(1.08) rotate(-3deg)',
        'scale(0.96) rotate(2deg)',
        'scale(1.04) rotate(-1deg)',
        'scale(1) rotate(0deg)',
      ],
      transition: { duration: 0.56, ease: EASE_IN_OUT },
    },
  })
}

function drop(dy = 2.2) {
  return group({
    normal: { transform: 'translateY(0px) scale(1)' },
    animate: {
      transform: [
        'translateY(0px) scale(1)',
        `translateY(${-dy}px) scale(0.96)`,
        `translateY(${round(dy * 0.2)}px) scale(1.04)`,
        'translateY(0px) scale(1)',
      ],
      transition: { duration: 0.56, ease: EASE_OUT },
    },
  })
}

function plusPop() {
  return split(
    {
      normal: { transform: 'scale(1)' },
      animate: {
        transform: ['scale(1)', 'scale(0.96)', 'scale(1.025)', 'scale(1)'],
        transition: { duration: 0.48, ease: EASE_OUT },
      },
    },
    {
      normal: { transform: 'rotate(0deg) scale(1)' },
      animate: {
        transform: [
          'rotate(0deg) scale(1)',
          'rotate(-10deg) scale(0.82)',
          'rotate(3deg) scale(1.08)',
          'rotate(0deg) scale(1)',
        ],
        transition: { duration: 0.42, delay: 0.04, ease: EASE_OUT },
      },
    },
  )
}

function minusPinch() {
  return split(
    {
      normal: { transform: 'scale(1)' },
      animate: {
        transform: ['scale(1)', 'scale(0.97)', 'scale(1)'],
        transition: { duration: 0.42, ease: EASE_OUT },
      },
    },
    {
      normal: { transform: 'scaleX(1)' },
      animate: {
        transform: ['scaleX(1)', 'scaleX(0.35)', 'scaleX(1.08)', 'scaleX(1)'],
        transition: { duration: 0.42, ease: 'easeOut' },
      },
    },
  )
}

function drawCheck() {
  return {
    mode: 'draw',
    loops: false,
    frame: {
      normal: { transform: 'scale(1)' },
      animate: {
        transform: [
          'scale(1)',
          'scale(1)',
          'scale(1.08)',
          'scale(1)',
        ],
        transition: {
          duration: 0.82,
          ease: ['linear', EASE_OUT, EASE_OUT],
          times: [0, 0.78, 0.9, 1],
        },
      },
    },
    mark: {
      normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
      animate: {
        pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
        pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
        visibility: [
          'visible',
          'visible',
          'hidden',
          'hidden',
          'hidden',
          'hidden',
          'visible',
          'visible',
        ],
        transition: {
          duration: 0.82,
          ease: ['linear', EASE_IN_OUT, 'linear', 'linear', 'linear', EASE_IN_OUT, 'linear'],
          times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
        },
      },
    },
  }
}

function stamp() {
  return svg({
    normal: { transform: 'translateY(0px) rotate(0deg) scale(1)' },
    animate: {
      transform: [
        'translateY(0px) rotate(0deg) scale(1)',
        'translateY(0px) rotate(0deg) scale(0.86)',
        'translateY(-0.35px) rotate(0.8deg) scale(1.08)',
        'translateY(0px) rotate(0deg) scale(1)',
      ],
      transition: { duration: 0.52, ease: EASE_OUT },
    },
  })
}

export const FAMILIES = {
  'nudge-right': nudge(2.6, 0),
  'nudge-left': nudge(-2.6, 0),
  'nudge-up': nudge(0, -2.6),
  'nudge-down': nudge(0, 2.6),
  'nudge-up-right': nudge(2.1, -2.1, 0.97),
  'nudge-up-left': nudge(-2.1, -2.1, 0.97),
  'nudge-down-right': nudge(2.1, 2.1, 0.97),
  'nudge-down-left': nudge(-2.1, 2.1, 0.97),
  'chevron-right': chevron('x', 2.4),
  'chevron-left': chevron('x', -2.4),
  'chevron-up': chevron('y', -2.4),
  'chevron-down': chevron('y', 2.4),
  'rotate-once': rotateOnce(-25),
  'rotate-gear': rotateTo(180),
  'rotate-loop': svg(
    {
      normal: { transform: 'rotate(0deg)', transition: { duration: 0.18 } },
      animate: {
        transform: 'rotate(360deg)',
        transition: { duration: 0.82, ease: 'linear', repeat: Infinity },
      },
    },
    { loops: true },
  ),
  'undo-rotate': rotateOnce(25),
  'redo-rotate': rotateOnce(-25),
  'plus-pop': plusPop(),
  'minus-pinch': minusPinch(),
  'draw-check': drawCheck(),
  'stamp-x': stamp(),
  'conveyor-down': conveyor(2.4),
  'conveyor-up': conveyor(-2.4),
  'save-press': group({
    normal: { transform: 'scale(1)' },
    animate: {
      transform: ['scale(1)', 'scale(0.9)', 'scale(1.04)', 'scale(1)'],
      transition: { duration: 0.42, ease: EASE_OUT },
    },
  }),
  swing: swing(14),
  'call-swing': swing(10),
  shake: shake(),
  'bug-wiggle': shake(),
  'pulse-heart': pulse(1.16),
  'pulse-star': pulse(1.14),
  'magic-twinkle': pulse(1.1),
  'thumbs-pop': pulse(1.12),
  bob: bob(-1.5),
  'lock-jiggle': jiggle(),
  'key-turn': rotateTo(90),
  'shield-pulse': pulse(1.08),
  'folder-tilt': tilt(7),
  'file-lift': lift(-1.6),
  'mail-bob': bob(-1.1),
  'message-pop': pulse(1.08),
  'search-wobble': wobble(),
  'zoom-in': group({
    normal: { transform: 'scale(1)' },
    animate: {
      transform: ['scale(1)', 'scale(0.88)', 'scale(1.12)', 'scale(1)'],
      transition: { duration: 0.5, ease: EASE_OUT },
    },
  }),
  'zoom-out': group({
    normal: { transform: 'scale(1)' },
    animate: {
      transform: ['scale(1)', 'scale(1.12)', 'scale(0.9)', 'scale(1)'],
      transition: { duration: 0.5, ease: EASE_OUT },
    },
  }),
  'eye-blink': blink(),
  'play-press': press(2),
  'pause-compress': group({
    normal: { transform: 'scaleX(1)' },
    animate: {
      transform: ['scaleX(1)', 'scaleX(0.72)', 'scaleX(1.06)', 'scaleX(1)'],
      transition: { duration: 0.42, ease: EASE_OUT },
    },
  }),
  'volume-pulse': pulse(1.08),
  'wifi-ripple': pulse(1.1),
  'mic-pulse': pulse(1.08),
  'video-pulse': pulse(1.08),
  'camera-shutter': group({
    normal: { transform: 'scale(1)' },
    animate: {
      transform: ['scale(1)', 'scale(0.86)', 'scale(1.04)', 'scale(1)'],
      transition: { duration: 0.36, ease: EASE_OUT },
    },
  }),
  'image-settle': settle(),
  'cart-roll': slide(2.2),
  'wallet-slide': slide(1.8),
  'calendar-flip': tilt(6),
  'clock-tick': rotateOnce(-20),
  'location-drop': drop(2.2),
  'pin-drop': drop(2.4),
  'compass-spin': rotateOnce(-30),
  'globe-spin': rotateTo(180),
  'sun-spin': rotateOnce(-15),
  'moon-settle': settle(),
  'cloud-float': bob(-1.2),
  'rain-fall': conveyor(2.2),
  'fire-flicker': flicker(),
  'snow-fall': conveyor(1.8),
  'leaf-sway': tilt(10),
  'umbrella-sway': tilt(8),
  'vehicle-move': slide(2.6),
  'book-tilt': tilt(6),
  'edit-wiggle': group({
    normal: { transform: 'rotate(0deg) translate(0px, 0px)' },
    animate: {
      transform: [
        'rotate(0deg) translate(0px, 0px)',
        'rotate(-8deg) translate(-0.4px, 0.6px)',
        'rotate(4deg) translate(0.3px, -0.3px)',
        'rotate(0deg) translate(0px, 0px)',
      ],
      transition: { duration: 0.56, ease: EASE_OUT },
    },
  }),
  'trash-shake': tilt(-9),
  'copy-flash': pulse(1.06),
  'clipboard-lift': lift(-1.4),
  'link-pull': slide(1.4),
  'share-burst': pulse(1.1),
  'attachment-swing': tilt(12),
  'external-nudge': nudge(1.8, -1.8, 0.97),
  'filter-slide': slide(1.6),
  'menu-stagger': group({
    normal: { transform: 'scaleY(1)' },
    animate: {
      transform: ['scaleY(1)', 'scaleY(0.82)', 'scaleY(1.06)', 'scaleY(1)'],
      transition: { duration: 0.42, ease: EASE_OUT },
    },
  }),
  'more-pulse': pulse(1.12),
  'grid-pop': pulse(1.08),
  'list-stagger': lift(-1.2),
  expand: group({
    normal: { transform: 'scale(1)' },
    animate: {
      transform: ['scale(1)', 'scale(0.9)', 'scale(1.08)', 'scale(1)'],
      transition: { duration: 0.5, ease: EASE_OUT },
    },
  }),
  collapse: group({
    normal: { transform: 'scale(1)' },
    animate: {
      transform: ['scale(1)', 'scale(1.08)', 'scale(0.92)', 'scale(1)'],
      transition: { duration: 0.5, ease: EASE_OUT },
    },
  }),
  'print-bounce': bob(-1.4),
  'scissors-snip': tilt(14),
  'code-pulse': pulse(1.06),
  'battery-pulse': pulse(1.06),
  'bluetooth-pulse': pulse(1.08),
  'power-pulse': pulse(1.1),
  'info-bob': bob(-1.1),
  'home-settle': settle(),
  'login-nudge': nudge(2.2, 0),
  'logout-nudge': nudge(2.2, 0),
  'target-pulse': pulse(1.1),
  'flag-wave': tilt(10),
  'tag-swing': tilt(8),
  'gift-bounce': bob(-2),
  'diamond-sparkle': pulse(1.1),
  'crown-settle': settle(),
  'smile-bounce': bob(-1.6),
  'robot-bob': bob(-1.2),
  'coffee-steam': bob(-1.3),
  'headphones-bob': bob(-1.1),
  'music-bounce': bob(-1.8),
  'default-settle': settle(),
}

function round(n) {
  return Math.round(n * 100) / 100
}

const DIRECTIONAL = new Set(['arrow', 'chevron', 'caret', 'triangle'])

export function classifyIcon(name) {
  const t = new Set(name.split('-').filter((p) => !/^\d+$/.test(p)))
  const has = (...words) => words.some((w) => t.has(w))
  const hasAll = (...words) => words.every((w) => t.has(w))
  const dir = [...t].some((w) => DIRECTIONAL.has(w))

  if (has('loading', 'spinner')) return 'rotate-loop'

  if (dir && has('up') && has('right')) return 'nudge-up-right'
  if (dir && has('up') && has('left')) return 'nudge-up-left'
  if (dir && has('down') && has('right')) return 'nudge-down-right'
  if (dir && has('down') && has('left')) return 'nudge-down-left'
  if (has('chevron', 'chevrons', 'caret') && has('right')) return 'chevron-right'
  if (has('chevron', 'chevrons', 'caret') && has('left')) return 'chevron-left'
  if (has('chevron', 'chevrons', 'caret') && has('up')) return 'chevron-up'
  if (has('chevron', 'chevrons', 'caret') && has('down')) return 'chevron-down'
  if (dir && has('right', 'forward', 'next')) return 'nudge-right'
  if (dir && has('left', 'backward', 'previous', 'back', 'reply')) return 'nudge-left'
  if (dir && has('up') && !has('upload')) return 'nudge-up'
  if (dir && has('down') && !has('download')) return 'nudge-down'

  if (has('undo', 'revert', 'rollback')) return 'undo-rotate'
  if (has('redo')) return 'redo-rotate'
  if (has('refresh', 'sync', 'reload', 'restart', 'recycle', 'reset', 'update', 'rotate')) {
    return 'rotate-once'
  }
  if (has('setting', 'settings', 'gear', 'cog', 'configuration', 'configure')) return 'rotate-gear'
  if (has('history', 'recent')) return 'rotate-once'

  if (has('delete', 'trash', 'bin', 'waste', 'garbage')) return 'trash-shake'
  if (has('tick', 'check', 'checkmark', 'checklist', 'done', 'verify', 'success', 'approve', 'valid', 'verified', 'agreement')) {
    return 'draw-check'
  }
  if (has('cancel', 'close', 'cross', 'multiply', 'forbidden', 'block', 'ban')) return 'stamp-x'
  if (has('add', 'plus') && !has('address')) return 'plus-pop'
  if (has('minus', 'subtract', 'remove')) return 'minus-pinch'

  if (has('download', 'import', 'install')) return 'conveyor-down'
  if (has('upload', 'export', 'publish')) return 'conveyor-up'
  if (has('save', 'disk', 'floppy')) return 'save-press'

  if (has('notification', 'bell', 'alarm', 'ring')) return 'swing'
  if (has('call', 'phone', 'telephone', 'dial', 'handset')) return 'call-swing'
  if (has('alert', 'warning', 'error', 'danger', 'caution')) return 'shake'
  if (has('bug', 'debug', 'virus', 'malware')) return 'bug-wiggle'
  if (has('off', 'slash', 'disabled', 'unavailable', 'mute') && has('volume', 'mic', 'bell', 'notification', 'wifi', 'sound')) {
    return 'shake'
  }

  if (has('heart', 'favourite', 'favorite', 'love')) return 'pulse-heart'
  if (has('star', 'sparkle', 'glitter')) return 'pulse-star'
  if (has('magic', 'wand', 'wizard', 'shine', 'glow') || name.startsWith('ai-') || t.has('ai')) {
    return 'magic-twinkle'
  }
  if (has('thumbs', 'like', 'dislike', 'vote', 'clap')) return 'thumbs-pop'

  if (has('search', 'find', 'magnifier', 'lookup')) return 'search-wobble'
  if (has('zoom') && has('in')) return 'zoom-in'
  if (has('zoom') && has('out')) return 'zoom-out'
  if (has('eye', 'view', 'visible', 'visibility', 'preview', 'show', 'hide')) return 'eye-blink'

  if (t.has('play')) return 'play-press'
  if (t.has('pause')) return 'pause-compress'
  if (has('volume', 'speaker', 'sound', 'mute')) return 'volume-pulse'
  if (has('wifi', 'signal', 'antenna', 'broadcast', 'hotspot', 'rss')) return 'wifi-ripple'
  if (has('mic', 'microphone', 'podcast')) return 'mic-pulse'
  if (has('video', 'movie', 'film', 'cinema', 'camcorder')) return 'video-pulse'
  if (has('camera', 'snapshot')) return 'camera-shutter'
  if (has('image', 'picture', 'gallery', 'album', 'photo', 'landscape')) return 'image-settle'

  if (has('user', 'profile', 'person', 'people', 'avatar', 'member', 'team', 'contact', 'account', 'customer', 'employee')) {
    return 'bob'
  }
  if (has('unlock')) return 'lock-jiggle'
  if (has('lock', 'padlock', 'secure')) return 'lock-jiggle'
  if (has('key', 'password', 'credential')) return 'key-turn'
  if (has('shield', 'security', 'protect', 'insurance', 'vpn')) return 'shield-pulse'

  if (has('folder', 'directory')) return 'folder-tilt'
  if (has('file', 'document', 'page', 'paper', 'note', 'invoice', 'contract', 'pdf', 'txt', 'doc')) {
    return 'file-lift'
  }
  if (has('mail', 'email', 'envelope', 'inbox', 'mailbox')) return 'mail-bob'
  if (has('message', 'chat', 'comment', 'bubble', 'conversation', 'sms', 'discuss')) {
    return 'message-pop'
  }

  if (has('cart', 'basket', 'bag', 'shop', 'store', 'grocery', 'checkout')) return 'cart-roll'
  if (has('wallet', 'purse', 'money', 'payment', 'credit', 'debit', 'bank', 'dollar', 'coin', 'cash', 'currency', 'bitcoin', 'card')) {
    return 'wallet-slide'
  }
  if (has('calendar', 'schedule', 'agenda', 'event') || (has('date') && !has('update'))) {
    return 'calendar-flip'
  }
  if (has('clock', 'time', 'timer', 'stopwatch', 'hour', 'watch')) return 'clock-tick'
  if (has('location', 'map', 'marker', 'place', 'gps', 'address')) return 'location-drop'
  if (has('pin', 'pushpin', 'thumbtack')) return 'pin-drop'
  if (has('compass')) return 'compass-spin'
  if (has('globe', 'earth', 'world', 'planet', 'language', 'translate')) return 'globe-spin'
  if (has('sun', 'brightness', 'daylight', 'sunny')) return 'sun-spin'
  if (has('moon', 'night', 'sleep', 'crescent')) return 'moon-settle'
  if (has('rain', 'drizzle', 'storm')) return 'rain-fall'
  if (has('snow', 'winter', 'freeze')) return 'snow-fall'
  if (has('cloud', 'weather')) return 'cloud-float'
  if (has('fire', 'flame', 'flash', 'zap', 'bolt', 'lightning', 'thunder')) return 'fire-flicker'
  if (has('leaf', 'plant', 'tree', 'nature', 'flower', 'forest', 'garden', 'eco')) return 'leaf-sway'
  if (has('umbrella')) return 'umbrella-sway'

  if (has('car', 'plane', 'airplane', 'bike', 'bicycle', 'bus', 'train', 'ship', 'boat', 'rocket', 'truck', 'taxi', 'scooter', 'motorcycle', 'helicopter', 'flight')) {
    return 'vehicle-move'
  }
  if (has('book', 'bookmark', 'library', 'read', 'magazine', 'journal')) return 'book-tilt'
  if (has('edit', 'pencil', 'pen', 'write', 'draft', 'compose', 'signature')) return 'edit-wiggle'
  if (has('copy', 'clone', 'duplicate')) return 'copy-flash'
  if (has('clipboard', 'paste')) return 'clipboard-lift'
  if (has('link', 'chain', 'url', 'hyperlink')) return 'link-pull'
  if (has('share')) return 'share-burst'
  if (has('attachment', 'clip', 'paperclip')) return 'attachment-swing'
  if (has('external')) return 'external-nudge'
  if (has('filter', 'sort')) return 'filter-slide'
  if (has('menu', 'hamburger', 'bars')) return 'menu-stagger'
  if (has('more', 'kebab', 'meatballs')) return 'more-pulse'
  if (has('grid', 'dashboard', 'layout', 'widget', 'mosaic', 'kanban')) return 'grid-pop'
  if (has('list', 'queue')) return 'list-stagger'
  if (has('fullscreen', 'maximize', 'expand') || hasAll('full', 'screen')) return 'expand'
  if (has('minimize', 'collapse', 'shrink')) return 'collapse'
  if (has('print', 'printer')) return 'print-bounce'
  if (has('scissor', 'scissors', 'cut', 'crop', 'snip')) return 'scissors-snip'
  if (has('code', 'terminal', 'developer', 'git', 'github', 'gitlab', 'branch', 'commit', 'html', 'xml', 'curly')) {
    return 'code-pulse'
  }
  if (has('battery', 'charge', 'charging')) return 'battery-pulse'
  if (has('bluetooth')) return 'bluetooth-pulse'
  if (has('power', 'shutdown', 'switch')) return 'power-pulse'
  if (has('information', 'info', 'help', 'question', 'faq', 'support', 'about')) return 'info-bob'
  if (has('home', 'house', 'cabin')) return 'home-settle'
  if (has('login', 'signin', 'enter')) return 'login-nudge'
  if (has('logout', 'signout', 'exit', 'quit')) return 'logout-nudge'
  if (has('target', 'aim', 'focus', 'crosshair', 'bullseye')) return 'target-pulse'
  if (has('flag')) return 'flag-wave'
  if (has('tag', 'label', 'price')) return 'tag-swing'
  if (has('gift', 'present', 'party', 'confetti', 'balloon', 'cake', 'birthday')) return 'gift-bounce'
  if (has('diamond', 'gem', 'crystal', 'jewel')) return 'diamond-sparkle'
  if (has('crown', 'king', 'premium', 'vip', 'royal')) return 'crown-settle'
  if (has('smile', 'emoji', 'face', 'mood', 'happy', 'sad', 'angry', 'wow', 'funny')) {
    return 'smile-bounce'
  }
  if (has('robot', 'android', 'bot', 'cyborg')) return 'robot-bob'
  if (has('coffee', 'tea', 'cup', 'drink', 'mug', 'beverage')) return 'coffee-steam'
  if (has('headphone', 'headphones', 'earphone', 'headset', 'earbud')) return 'headphones-bob'
  if (has('music', 'note', 'song', 'melody', 'playlist')) return 'music-bounce'

  if (has('chart', 'pie', 'graph', 'analytics', 'statistic', 'presentation', 'workflow', 'hierarchy', 'layer', 'layers', 'table')) {
    return 'grid-pop'
  }
  if (has('align', 'text', 'font', 'typography', 'alphabet', 'paragraph')) return 'list-stagger'
  if (has('mouse', 'cursor', 'swipe', 'touch', 'drag', 'tap', 'hold', 'pointing', 'click', 'hand')) {
    return 'play-press'
  }
  if (has('package', 'delivery', 'shipping', 'parcel', 'box', 'crate')) return 'conveyor-down'
  if (has('sorting')) return 'filter-slide'
  if (has('maps', 'navigation', 'route', 'direction')) return 'location-drop'
  if (has('badge', 'medal', 'laurel', 'award', 'trophy', 'ribbon')) return 'pulse-star'
  if (has('archive', 'receipt')) return 'file-lift'
  if (has('coins')) return 'wallet-slide'
  if (has('building', 'city', 'office', 'hospital', 'school', 'mosque', 'church', 'airport')) {
    return 'home-settle'
  }
  if (has('move', 'go')) return 'nudge-right'
  if (has('lamp', 'light')) return 'fire-flicker'
  if (has('dice')) return 'shake'
  if (has('activity', 'workout', 'gym', 'yoga', 'sport', 'sports')) return 'pulse-heart'
  if (has('blockchain', 'algorithm')) return 'code-pulse'
  if (has('solar')) return 'sun-spin'
  if (has('ice')) return 'snow-fall'
  if (has('keyframe')) return 'play-press'
  if (has('airplay', 'airpod', 'airdrop', 'airpods')) return 'wifi-ripple'
  if (has('aircraft')) return 'vehicle-move'
  if (has('artificial')) return 'magic-twinkle'
  if (has('baby', 'kid', 'child', 'infant')) return 'bob'
  if (has('accessibility', 'access')) return 'bob'
  if (has('adobe')) return 'edit-wiggle'
  if (has('briefcase', 'suitcase')) return 'wallet-slide'
  if (has('computer', 'laptop', 'desktop', 'monitor', 'server', 'cpu', 'usb', 'keyboard')) {
    return 'save-press'
  }
  if (has('border', 'square', 'circle') && !has('add', 'plus', 'minus', 'check', 'cancel')) {
    return 'default-settle'
  }

  return 'default-settle'
}

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
  return (
    kebab
      .split('-')
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join('') + 'Icon'
  )
}
