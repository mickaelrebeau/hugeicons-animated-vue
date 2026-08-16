/**
 * Exact motion recipes copied from the 165 hand-crafted icons.
 * Generated icons may only use these — no invented pulse/rotate defaults.
 */

export const EASE_OUT = [0.23, 1, 0.32, 1]
export const EASE_IN_OUT = [0.77, 0, 0.175, 1]

function stagger(normal, animate, delayPer, delayBase = 0) {
  return { normal, animate, custom: { delayPer, delayBase } }
}

function baseVariantsFor(kind) {
  switch (kind) {
    case 'collision-left':
      return {
        normal: { transform: 'translateX(0px) rotate(0deg)' },
        animate: {
          transform: [
            'translateX(0px) rotate(0deg)',
            'translateX(1px) rotate(0deg)',
            'translateX(3.1px) rotate(1.5deg)',
            'translateX(1.9px) rotate(-3deg)',
            'translateX(-0.8px) rotate(-1deg)',
            'translateX(0px) rotate(0deg)',
          ],
          transition: {
            duration: 0.78,
            times: [0, 0.18, 0.38, 0.48, 0.72, 1],
            ease: ['easeIn', 'easeIn', EASE_OUT, EASE_OUT, EASE_OUT],
          },
        },
      }
    case 'collision-right':
      return {
        normal: { transform: 'translateX(0px) rotate(0deg)' },
        animate: {
          transform: [
            'translateX(0px) rotate(0deg)',
            'translateX(-1px) rotate(0deg)',
            'translateX(-3.1px) rotate(-1.5deg)',
            'translateX(-1.9px) rotate(3deg)',
            'translateX(0.8px) rotate(1deg)',
            'translateX(0px) rotate(0deg)',
          ],
          transition: {
            duration: 0.78,
            times: [0, 0.18, 0.38, 0.48, 0.72, 1],
            ease: ['easeIn', 'easeIn', EASE_OUT, EASE_OUT, EASE_OUT],
          },
        },
      }
    case 'impact-burst':
      return {
        normal: { transform: 'scale(1) rotate(0deg)', opacity: 1 },
        animate: {
          transform: [
            'scale(0.72) rotate(-7deg)',
            'scale(0.72) rotate(-7deg)',
            'scale(1.28) rotate(5deg)',
            'scale(0.94) rotate(-2deg)',
            'scale(1) rotate(0deg)',
          ],
          opacity: [0.45, 0.45, 1, 1, 1],
          transition: {
            duration: 0.78,
            times: [0, 0.35, 0.48, 0.7, 1],
            ease: ['linear', EASE_OUT, EASE_OUT, EASE_OUT],
          },
        },
      }
    case 'emergency-drive':
      return {
        normal: { transform: 'translateX(0px) rotate(0deg)' },
        animate: {
          transform: [
            'translateX(0px) rotate(0deg)',
            'translateX(-0.7px) rotate(-1deg)',
            'translateX(3.4px) rotate(1.8deg)',
            'translateX(-0.3px) rotate(-0.5deg)',
            'translateX(0px) rotate(0deg)',
          ],
          transition: { duration: 0.62, times: [0, 0.16, 0.48, 0.78, 1], ease: EASE_OUT },
        },
      }
    case 'emergency-beacon':
      return {
        normal: { transform: 'scale(1)', opacity: 1 },
        animate: {
          transform: ['scale(1)', 'scale(1.25)', 'scale(0.9)', 'scale(1.2)', 'scale(1)'],
          opacity: [1, 0.45, 1, 0.5, 1],
          transition: { duration: 0.62, ease: 'easeInOut' },
        },
      }
    case 'orbit-path':
      return {
        normal: { transform: 'rotate(0deg)' },
        animate: {
          transform: ['rotate(0deg)', 'rotate(180deg)', 'rotate(360deg)'],
          transition: { duration: 1.6, ease: 'linear' },
        },
      }
    case 'orbit-core':
      return {
        normal: { transform: 'scale(1)' },
        animate: {
          transform: ['scale(1)', 'scale(1.14)', 'scale(0.96)', 'scale(1)'],
          transition: { duration: 1.6, ease: 'easeInOut' },
        },
      }
    case 'twist':
      return {
        normal: { transform: 'rotate(0deg) scaleX(1)' },
        animate: {
          transform: [
            'rotate(0deg) scaleX(1)',
            'rotate(6deg) scaleX(0.82)',
            'rotate(-5deg) scaleX(0.9)',
            'rotate(0deg) scaleX(1)',
          ],
          transition: { duration: 0.92, ease: EASE_IN_OUT },
        },
      }
    case 'buzz':
      return {
        normal: { transform: 'translate(0px, 0px) rotate(0deg)' },
        animate: {
          transform: [
            'translate(0px, 0px) rotate(0deg)',
            'translate(0.6px, -0.5px) rotate(3deg)',
            'translate(-0.5px, 0.4px) rotate(-3deg)',
            'translate(0.4px, 0.5px) rotate(2deg)',
            'translate(-0.3px, -0.4px) rotate(-1deg)',
            'translate(0px, 0px) rotate(0deg)',
          ],
          transition: { duration: 0.46, ease: 'linear' },
        },
      }
    case 'slither':
      return {
        normal: { transform: 'skewX(0deg) translateX(0px)' },
        animate: {
          transform: [
            'skewX(0deg) translateX(0px)',
            'skewX(-7deg) translateX(1.2px)',
            'skewX(6deg) translateX(2.2px)',
            'skewX(-3deg) translateX(1px)',
            'skewX(0deg) translateX(0px)',
          ],
          transition: { duration: 0.86, ease: EASE_IN_OUT },
        },
      }
    case 'ticker':
      return stagger(
        { transform: 'translateY(0px) scaleY(1)' },
        {
          transform: ['translateY(2.2px) scaleY(0.6)', 'translateY(-0.5px) scaleY(1.08)', 'translateY(0px) scaleY(1)'],
          transition: { duration: 0.5, ease: EASE_OUT },
        },
        0.07,
      )
    case 'bloom':
      return stagger(
        { transform: 'rotate(0deg) scale(1)' },
        {
          transform: ['rotate(0deg) scale(0.82)', 'rotate(4deg) scale(1.1)', 'rotate(0deg) scale(1)'],
          transition: { duration: 0.6, ease: EASE_OUT },
        },
        0.08,
      )
    case 'ripen':
      return {
        normal: { transform: 'scale(1) rotate(0deg)' },
        animate: {
          transform: ['scale(1) rotate(0deg)', 'scale(0.94) rotate(-3deg)', 'scale(1.08) rotate(2deg)', 'scale(1) rotate(0deg)'],
          transition: { duration: 0.6, ease: EASE_OUT },
        },
      }
    case 'lift':
      return {
        normal: { transform: 'translateY(0px) scaleY(1)' },
        animate: {
          transform: [
            'translateY(0px) scaleY(1)',
            'translateY(1.1px) scaleY(0.94)',
            'translateY(-2.8px) scaleY(1.04)',
            'translateY(-2.4px) scaleY(1)',
            'translateY(0px) scaleY(1)',
          ],
          transition: { duration: 0.82, times: [0, 0.18, 0.5, 0.68, 1], ease: EASE_OUT },
        },
      }
    case 'add-frame':
      return {
        normal: { transform: 'scale(1)' },
        animate: {
          transform: ['scale(1)', 'scale(0.96)', 'scale(1.025)', 'scale(1)'],
          transition: { duration: 0.48, ease: EASE_OUT },
        },
      }
    case 'add-plus':
      return {
        normal: { transform: 'rotate(0deg) scale(1)' },
        animate: {
          transform: ['rotate(0deg) scale(1)', 'rotate(-10deg) scale(0.82)', 'rotate(3deg) scale(1.08)', 'rotate(0deg) scale(1)'],
          transition: { duration: 0.42, delay: 0.04, ease: EASE_OUT },
        },
      }
    case 'folder-plus':
      return {
        normal: { transform: 'rotate(0deg) scale(1)' },
        animate: {
          transform: ['rotate(-18deg) scale(0.5)', 'rotate(5deg) scale(1.22)', 'rotate(-2deg) scale(0.97)', 'rotate(0deg) scale(1)'],
          transition: { duration: 0.5, delay: 0.08, ease: EASE_OUT },
        },
      }
    case 'minus':
      return {
        normal: { transform: 'scaleX(1)' },
        animate: {
          transform: ['scaleX(1)', 'scaleX(0.35)', 'scaleX(1.08)', 'scaleX(1)'],
          transition: { duration: 0.42, ease: 'easeOut' },
        },
      }
    case 'draw-check':
      return {
        normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
        animate: {
          pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
          pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
          visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
          transition: {
            duration: 0.82,
            ease: ['linear', EASE_IN_OUT, 'linear', 'linear', 'linear', EASE_IN_OUT, 'linear'],
            times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
          },
        },
      }
    case 'check-impact':
      return {
        normal: { transform: 'translateY(0px) rotate(0deg) scale(1)' },
        animate: {
          transform: [
            'translateY(0px) rotate(0deg) scale(1)',
            'translateY(0px) rotate(0deg) scale(1)',
            'translateY(-0.35px) rotate(0.8deg) scale(1.08)',
            'translateY(0px) rotate(0deg) scale(1)',
          ],
          transition: { duration: 0.82, ease: ['linear', EASE_OUT, EASE_OUT], times: [0, 0.78, 0.9, 1] },
        },
      }
    case 'stamp-x':
      return {
        normal: { transform: 'scale(1) rotate(0deg)' },
        animate: {
          transform: ['scale(1) rotate(0deg)', 'scale(0.86) rotate(-2deg)', 'scale(1.08) rotate(0.8deg)', 'scale(1) rotate(0deg)'],
          transition: { duration: 0.52, ease: EASE_OUT },
        },
      }
    case 'arrow-right':
      return {
        normal: { transform: 'translateX(0px) scaleY(1)' },
        animate: {
          transform: ['translateX(0px) scaleY(1)', 'translateX(2.6px) scaleY(0.94)', 'translateX(-0.3px) scaleY(1.02)', 'translateX(0.45px) scaleY(0.99)', 'translateX(0px) scaleY(1)'],
          transition: { duration: 0.5, ease: EASE_OUT },
        },
      }
    case 'arrow-left':
      return {
        normal: { transform: 'translateX(0px) scaleY(1)' },
        animate: {
          transform: ['translateX(0px) scaleY(1)', 'translateX(-2.6px) scaleY(0.94)', 'translateX(0.3px) scaleY(1.02)', 'translateX(-0.45px) scaleY(0.99)', 'translateX(0px) scaleY(1)'],
          transition: { duration: 0.5, ease: EASE_OUT },
        },
      }
    case 'arrow-down':
      return {
        normal: { transform: 'translateY(0px) scaleX(1)' },
        animate: {
          transform: ['translateY(0px) scaleX(1)', 'translateY(2.6px) scaleX(0.94)', 'translateY(-0.3px) scaleX(1.02)', 'translateY(0.45px) scaleX(0.99)', 'translateY(0px) scaleX(1)'],
          transition: { duration: 0.5, ease: EASE_OUT },
        },
      }
    case 'arrow-up':
      return {
        normal: { transform: 'translateY(0px) scaleX(1)' },
        animate: {
          transform: ['translateY(0px) scaleX(1)', 'translateY(-2.6px) scaleX(0.94)', 'translateY(0.3px) scaleX(1.02)', 'translateY(-0.45px) scaleX(0.99)', 'translateY(0px) scaleX(1)'],
          transition: { duration: 0.5, ease: EASE_OUT },
        },
      }
    case 'arrow-up-right':
      return {
        normal: { transform: 'translate(0px, 0px) rotate(0deg)' },
        animate: {
          transform: [
            'translate(0px, 0px) rotate(0deg)',
            'translate(2.1px, -2.1px) rotate(-1.5deg)',
            'translate(-0.25px, 0.25px) rotate(0.5deg)',
            'translate(0.35px, -0.35px) rotate(-0.2deg)',
            'translate(0px, 0px) rotate(0deg)',
          ],
          transition: { duration: 0.52, ease: EASE_OUT },
        },
      }
    case 'arrow-up-left':
      return {
        normal: { transform: 'translate(0px, 0px) rotate(0deg)' },
        animate: {
          transform: [
            'translate(0px, 0px) rotate(0deg)',
            'translate(-2.1px, -2.1px) rotate(1.5deg)',
            'translate(0.25px, 0.25px) rotate(-0.5deg)',
            'translate(-0.35px, -0.35px) rotate(0.2deg)',
            'translate(0px, 0px) rotate(0deg)',
          ],
          transition: { duration: 0.52, ease: EASE_OUT },
        },
      }
    case 'arrow-down-right':
      return {
        normal: { transform: 'translate(0px, 0px) rotate(0deg)' },
        animate: {
          transform: [
            'translate(0px, 0px) rotate(0deg)',
            'translate(2.1px, 2.1px) rotate(1.5deg)',
            'translate(-0.25px, -0.25px) rotate(-0.5deg)',
            'translate(0.35px, 0.35px) rotate(0.2deg)',
            'translate(0px, 0px) rotate(0deg)',
          ],
          transition: { duration: 0.52, ease: EASE_OUT },
        },
      }
    case 'arrow-down-left':
      return {
        normal: { transform: 'translate(0px, 0px) rotate(0deg)' },
        animate: {
          transform: [
            'translate(0px, 0px) rotate(0deg)',
            'translate(-2.1px, 2.1px) rotate(-1.5deg)',
            'translate(0.25px, -0.25px) rotate(0.5deg)',
            'translate(-0.35px, 0.35px) rotate(-0.2deg)',
            'translate(0px, 0px) rotate(0deg)',
          ],
          transition: { duration: 0.52, ease: EASE_OUT },
        },
      }
    case 'chevron-right':
      return {
        normal: { transform: 'translateX(0px) scaleY(1)' },
        animate: {
          transform: ['translateX(0px) scaleY(1)', 'translateX(2.4px) scaleY(0.9)', 'translateX(-0.45px) scaleY(1.04)', 'translateX(0.8px) scaleY(0.97)', 'translateX(0px) scaleY(1)'],
          transition: { duration: 0.56, ease: EASE_OUT },
        },
      }
    case 'chevron-left':
      return {
        normal: { transform: 'translateX(0px) scaleY(1)' },
        animate: {
          transform: ['translateX(0px) scaleY(1)', 'translateX(-2.4px) scaleY(0.9)', 'translateX(0.45px) scaleY(1.04)', 'translateX(-0.8px) scaleY(0.97)', 'translateX(0px) scaleY(1)'],
          transition: { duration: 0.56, ease: EASE_OUT },
        },
      }
    case 'chevron-down':
      return {
        normal: { transform: 'translateY(0px) scaleX(1)' },
        animate: {
          transform: ['translateY(0px) scaleX(1)', 'translateY(2.4px) scaleX(0.9)', 'translateY(-0.45px) scaleX(1.04)', 'translateY(0.8px) scaleX(0.97)', 'translateY(0px) scaleX(1)'],
          transition: { duration: 0.56, ease: EASE_OUT },
        },
      }
    case 'chevron-up':
      return {
        normal: { transform: 'translateY(0px) scaleX(1)' },
        animate: {
          transform: ['translateY(0px) scaleX(1)', 'translateY(-2.4px) scaleX(0.9)', 'translateY(0.45px) scaleX(1.04)', 'translateY(-0.8px) scaleX(0.97)', 'translateY(0px) scaleX(1)'],
          transition: { duration: 0.56, ease: EASE_OUT },
        },
      }
    case 'download-arrow':
      return {
        normal: { transform: 'translateY(0px)', visibility: 'visible' },
        animate: {
          transform: ['translateY(0px)', 'translateY(5px)', 'translateY(-5px)', 'translateY(0px)'],
          visibility: ['visible', 'hidden', 'hidden', 'visible'],
          transition: { duration: 0.7, times: [0, 0.42, 0.5, 1], ease: ['easeIn', 'linear', 'easeOut'] },
        },
      }
    case 'upload-arrow':
      return {
        normal: { transform: 'translateY(0px)', visibility: 'visible' },
        animate: {
          transform: ['translateY(0px)', 'translateY(-5px)', 'translateY(5px)', 'translateY(0px)'],
          visibility: ['visible', 'hidden', 'hidden', 'visible'],
          transition: { duration: 0.7, times: [0, 0.42, 0.5, 1], ease: ['easeIn', 'linear', 'easeOut'] },
        },
      }
    case 'download-tray':
      return {
        normal: { transform: 'translateY(0px)' },
        animate: {
          transform: ['translateY(0px)', 'translateY(1.2px)', 'translateY(0px)'],
          transition: { duration: 0.3, ease: 'easeOut', delay: 0.32 },
        },
      }
    case 'upload-tray':
      return {
        normal: { transform: 'translateY(0px)' },
        animate: {
          transform: ['translateY(0px)', 'translateY(0.9px)', 'translateY(0px)'],
          transition: { duration: 0.3, ease: 'easeOut', delay: 0.08 },
        },
      }
    case 'swing-bell':
      return {
        normal: { transform: 'rotate(0deg)' },
        animate: {
          transform: ['rotate(0deg)', 'rotate(-14deg)', 'rotate(11deg)', 'rotate(-8deg)', 'rotate(5deg)', 'rotate(-2deg)', 'rotate(0deg)'],
          transition: { duration: 0.9, ease: 'easeInOut', times: [0, 0.18, 0.38, 0.56, 0.72, 0.87, 1] },
        },
      }
    case 'user-head':
      return {
        normal: { transform: 'rotate(0deg)' },
        animate: {
          transform: ['rotate(0deg)', 'rotate(16deg)', 'rotate(-4deg)', 'rotate(0deg)'],
          transition: { duration: 0.6, ease: 'easeInOut', times: [0, 0.4, 0.7, 1] },
        },
      }
    case 'user-body':
      return {
        normal: { transform: 'translateY(0px)' },
        animate: {
          transform: ['translateY(0px)', 'translateY(0.9px)', 'translateY(0px)'],
          transition: { duration: 0.3, ease: 'easeOut', delay: 0.28 },
        },
      }
    case 'user-nod-all':
      return {
        normal: { transform: 'translateY(0px)' },
        animate: {
          transform: ['translateY(0px) scale(1)', 'translateY(-1.5px) scale(1.03)', 'translateY(0.5px) scale(0.98)', 'translateY(0px) scale(1)'],
          transition: { duration: 0.56, ease: EASE_OUT },
        },
      }
    case 'user-recoil':
      return {
        normal: { transform: 'translateX(0px)' },
        animate: {
          transform: ['translateX(0px) scale(1)', 'translateX(-1.5px) scale(0.97)', 'translateX(0.35px) scale(1.01)', 'translateX(0px) scale(1)'],
          transition: { duration: 0.54, ease: EASE_OUT },
        },
      }
    case 'user-remove-mark':
      return {
        normal: { transform: 'rotate(0deg) scale(1)' },
        animate: {
          transform: ['rotate(-10deg) scale(0.58)', 'rotate(12deg) scale(1.2)', 'rotate(-3deg) scale(0.98)', 'rotate(0deg) scale(1)'],
          transition: { duration: 0.5, delay: 0.06, ease: EASE_OUT },
        },
      }
    case 'folder-tilt':
      return {
        normal: { transform: 'translateY(0px) rotate(0deg)' },
        animate: {
          transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.7px) rotate(-2deg)', 'translateY(0.4px) rotate(0.7deg)', 'translateY(0px) rotate(0deg)'],
          transition: { duration: 0.56, ease: EASE_OUT },
        },
      }
    case 'file-sheet':
      return {
        normal: { transform: 'translateY(0px) rotate(0deg)' },
        animate: {
          transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.8px) rotate(-1deg)', 'translateY(0.45px) rotate(0.5deg)', 'translateY(0px) rotate(0deg)'],
          transition: { duration: 0.58, ease: EASE_OUT },
        },
      }
    case 'file-line':
      return {
        normal: { transform: 'scaleX(1)' },
        animate: {
          transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1.1)', 'scaleX(1)'],
          transition: { duration: 0.48, delay: 0.12, ease: EASE_OUT },
        },
      }
    case 'list-row':
      return stagger(
        { transform: 'scaleX(1)' },
        {
          transform: ['scaleX(1)', 'scaleX(0.68)', 'scaleX(1.04)', 'scaleX(0.98)', 'scaleX(1)'],
          transition: { duration: 0.44, ease: EASE_IN_OUT, times: [0, 0.28, 0.56, 0.76, 1] },
        },
        0.06,
      )
    case 'grid-tile':
      return stagger(
        { transform: 'scale(1)', visibility: 'visible' },
        {
          transform: ['translateY(1.4px) scale(0.74)', 'translateY(-0.4px) scale(1.1)', 'translateY(0px) scale(1)'],
          visibility: ['visible', 'visible', 'visible'],
          transition: { duration: 0.48, ease: EASE_OUT },
        },
        0.06,
      )
    case 'grid-cell':
      return stagger(
        { transform: 'scale(1)', visibility: 'visible' },
        {
          transform: ['scale(0.72) rotate(-5deg)', 'scale(1.1) rotate(2deg)', 'scale(1) rotate(0deg)'],
          visibility: ['visible', 'visible', 'visible'],
          transition: { duration: 0.46, ease: EASE_OUT },
        },
        0.055,
      )
    case 'more-dot':
      return stagger(
        { transform: 'translateY(0px) scale(1)' },
        {
          transform: ['translateY(0px) scale(1)', 'translateY(-1.5px) scale(1.2)', 'translateY(0.35px) scale(0.95)', 'translateY(0px) scale(1)'],
          transition: { duration: 0.42, ease: 'easeOut' },
        },
        0.08,
      )
    case 'heart':
      return {
        normal: { transform: 'scale(1)' },
        animate: {
          transform: ['scale(1)', 'scale(0.96)', 'scale(1.16)', 'scale(0.98)', 'scale(1.09)', 'scale(1)'],
          transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1], times: [0, 0.12, 0.32, 0.48, 0.68, 1] },
        },
      }
    case 'wifi-arc':
      return stagger(
        { transform: 'translateY(0px) scale(1)' },
        {
          transform: ['translateY(0.8px) scale(0.82)', 'translateY(0px) scale(1.06)', 'translateY(0px) scale(1)'],
          transition: { duration: 0.95, ease: EASE_OUT },
        },
        0.12,
      )
    case 'wifi-source':
      return {
        normal: { transform: 'scale(1)' },
        animate: {
          transform: ['scale(1)', 'scale(0.86)', 'scale(1.18)', 'scale(1)'],
          transition: { duration: 0.95, ease: EASE_OUT },
        },
      }
    case 'search':
      return {
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
          transition: { duration: 1.24, times: [0, 0.32, 0.48, 0.64, 0.84, 1], ease: [EASE_IN_OUT, 'linear', 'linear', EASE_IN_OUT, EASE_OUT] },
        },
      }
    case 'gear':
      return {
        normal: { transform: 'rotate(0deg)' },
        animate: {
          transform: ['rotate(0deg)', 'rotate(202deg)', 'rotate(177.5deg)', 'rotate(180deg)'],
          transition: { duration: 0.92, times: [0, 0.72, 0.9, 1], ease: [EASE_IN_OUT, EASE_OUT, EASE_OUT] },
        },
      }
    case 'refresh':
      return {
        normal: { transform: 'rotate(0deg)' },
        animate: {
          transform: ['rotate(0deg)', 'rotate(-25deg)', 'rotate(360deg)'],
          transition: { duration: 0.9, times: [0, 0.2, 1], ease: ['easeIn', 'easeOut'] },
        },
      }
    case 'lock-body':
      return {
        normal: { transform: 'rotate(0deg) scale(1)' },
        animate: {
          transform: ['rotate(0deg) scale(1)', 'rotate(-1deg) scale(0.985)', 'rotate(1.4deg) scale(1.018)', 'rotate(-0.35deg) scale(0.997)', 'rotate(0deg) scale(1)'],
          transition: { duration: 0.72, times: [0, 0.18, 0.48, 0.78, 1], ease: EASE_OUT },
        },
      }
    case 'lock-key':
      return {
        normal: { transform: 'translateY(0px) rotate(0deg) scale(1)' },
        animate: {
          transform: [
            'translateY(0px) rotate(0deg) scale(1)',
            'translateY(0.2px) rotate(0deg) scale(0.96)',
            'translateY(-0.35px) rotate(-16deg) scale(1.035)',
            'translateY(-0.12px) rotate(4deg) scale(1.012)',
            'translateY(0px) rotate(0deg) scale(1)',
          ],
          transition: { duration: 0.72, times: [0, 0.16, 0.42, 0.68, 0.86, 1], ease: EASE_OUT },
        },
      }
    case 'trash-lid':
      return {
        normal: { transform: 'rotate(0deg)' },
        animate: {
          transform: ['rotate(0deg)', 'rotate(-9deg)', 'rotate(-8deg)', 'rotate(0deg)'],
          transition: { duration: 0.82, ease: EASE_IN_OUT },
        },
      }
    case 'trash-bin':
      return {
        normal: { transform: 'translateY(0px)' },
        animate: {
          transform: ['translateY(0px)', 'translateY(0.9px)', 'translateY(0px)'],
          transition: { duration: 0.3, ease: 'easeOut', delay: 0.28 },
        },
      }
    case 'play':
      return {
        normal: { transform: 'translateX(0px) scaleX(1) scaleY(1)' },
        animate: {
          transform: [
            'translateX(0px) scaleX(1) scaleY(1)',
            'translateX(-0.8px) scaleX(0.9) scaleY(1.04)',
            'translateX(2px) scaleX(1.1) scaleY(0.97)',
            'translateX(0px) scaleX(1) scaleY(1)',
          ],
          transition: { duration: 0.52, ease: EASE_OUT },
        },
      }
    case 'pause':
      return stagger(
        { transform: 'scaleX(1)' },
        {
          transform: ['scaleX(1)', 'scaleX(0.72)', 'scaleX(1.06)', 'scaleX(1)'],
          transition: { duration: 0.42, ease: EASE_OUT },
        },
        0.05,
      )
    case 'blink':
      return {
        normal: { transform: 'scaleY(1)' },
        animate: {
          transform: ['scaleY(1)', 'scaleY(0.12)', 'scaleY(1.06)', 'scaleY(1)'],
          transition: { duration: 0.42, ease: EASE_OUT },
        },
      }
    case 'home-hop':
      return {
        normal: { transform: 'translateY(0px)' },
        animate: {
          transform: ['translateY(0px)', 'translateY(-2px)', 'translateY(0px)'],
          transition: { duration: 0.5, ease: 'easeInOut', times: [0, 0.35, 1] },
        },
      }
    case 'home-smile':
      return {
        normal: { pathLength: 1, visibility: 'visible' },
        animate: {
          pathLength: [0, 1],
          visibility: ['hidden', 'visible'],
          transition: { duration: 0.4, ease: 'easeOut', delay: 0.2 },
        },
      }
    case 'login-door':
      return {
        normal: { transform: 'translateX(0px) scaleX(1)' },
        animate: {
          transform: ['translateX(0px) scaleX(1)', 'translateX(0.7px) scaleX(0.96)', 'translateX(-0.2px) scaleX(1.01)', 'translateX(0px) scaleX(1)'],
          transition: { duration: 0.56, delay: 0.08, ease: EASE_OUT },
        },
      }
    case 'login-arrow':
      return {
        normal: { transform: 'translateX(0px)' },
        animate: {
          transform: ['translateX(-3px)', 'translateX(1px)', 'translateX(-0.3px)', 'translateX(0px)'],
          transition: { duration: 0.56, ease: EASE_OUT },
        },
      }
    case 'logout-arrow':
      return {
        normal: { transform: 'translateX(0px)' },
        animate: {
          transform: ['translateX(0px)', 'translateX(3px)', 'translateX(-0.3px)', 'translateX(0px)'],
          transition: { duration: 0.56, ease: EASE_OUT },
        },
      }
    case 'edit-nib':
      return {
        normal: { transform: 'rotate(0deg) translate(0px, 0px)' },
        animate: {
          transform: ['rotate(0deg) translate(0px, 0px)', 'rotate(-8deg) translate(-0.4px, 0.6px)', 'rotate(4deg) translate(0.3px, -0.3px)', 'rotate(0deg) translate(0px, 0px)'],
          transition: { duration: 0.56, ease: EASE_OUT },
        },
      }
    case 'edit-line':
      return {
        normal: { pathLength: 1, visibility: 'visible' },
        animate: {
          pathLength: [1, 0.15, 1],
          visibility: ['visible', 'visible', 'visible'],
          transition: { duration: 0.56, ease: EASE_IN_OUT },
        },
      }
    case 'share-node':
      return stagger(
        { transform: 'scale(1)' },
        {
          transform: ['scale(1)', 'scale(1.25)', 'scale(1)'],
          transition: { duration: 0.45, ease: 'easeInOut' },
        },
        0.12,
      )
    case 'share-wire':
      return {
        normal: { pathLength: 1, visibility: 'visible' },
        animate: {
          pathLength: [0, 1],
          visibility: 'visible',
          transition: { duration: 0.45, ease: 'easeOut' },
        },
      }
    case 'cart-roll':
      return {
        normal: { transform: 'translateX(0px)' },
        animate: {
          transform: ['translateX(0px)', 'translateX(2.2px)', 'translateX(-0.3px)', 'translateX(0px)'],
          transition: { duration: 0.5, ease: EASE_OUT },
        },
      }
    case 'pin-drop':
      return {
        normal: { transform: 'translateY(0px) scale(1)' },
        animate: {
          transform: ['translateY(0px) scale(1)', 'translateY(-2.2px) scale(0.96)', 'translateY(0.4px) scale(1.04)', 'translateY(0px) scale(1)'],
          transition: { duration: 0.56, ease: EASE_OUT },
        },
      }
    case 'camera':
      return {
        normal: { transform: 'scale(1)' },
        animate: {
          transform: ['scale(1)', 'scale(0.86)', 'scale(1.04)', 'scale(1)'],
          transition: { duration: 0.36, ease: EASE_OUT },
        },
      }
    case 'fire':
      return {
        normal: { transform: 'scale(1) rotate(0deg)' },
        animate: {
          transform: ['scale(1) rotate(0deg)', 'scale(1.08) rotate(-3deg)', 'scale(0.96) rotate(2deg)', 'scale(1.04) rotate(-1deg)', 'scale(1) rotate(0deg)'],
          transition: { duration: 0.56, ease: EASE_IN_OUT },
        },
      }
    case 'leaf-sway':
      return {
        normal: { transform: 'rotate(0deg)' },
        animate: {
          transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(3deg)', 'rotate(0deg)'],
          transition: { duration: 0.56, ease: EASE_OUT },
        },
      }
    case 'cloud-float':
      return {
        normal: { transform: 'translateY(0px)' },
        animate: {
          transform: ['translateY(0px)', 'translateY(-1.2px)', 'translateY(0.3px)', 'translateY(0px)'],
          transition: { duration: 0.7, ease: EASE_IN_OUT },
        },
      }
    case 'alert':
      return {
        normal: { transform: 'rotate(0deg)' },
        animate: {
          transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(7deg)', 'rotate(-4deg)', 'rotate(2deg)', 'rotate(0deg)'],
          transition: { duration: 0.52, ease: EASE_IN_OUT },
        },
      }
    case 'thumbs':
      return {
        normal: { transform: 'translateY(0px) rotate(0deg)' },
        animate: {
          transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.6px) rotate(-4deg)', 'translateY(0.3px) rotate(1deg)', 'translateY(0px) rotate(0deg)'],
          transition: { duration: 0.56, ease: EASE_OUT },
        },
      }
    case 'bookmark':
      return {
        normal: { transform: 'translateY(0px) rotate(0deg)' },
        animate: {
          transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.4px) rotate(-3deg)', 'translateY(0.3px) rotate(0.8deg)', 'translateY(0px) rotate(0deg)'],
          transition: { duration: 0.56, ease: EASE_OUT },
        },
      }
    case 'copy-front':
      return {
        normal: { transform: 'translate(0px, 0px)' },
        animate: {
          transform: ['translate(0px, 0px)', 'translate(1.4px, -1.2px)', 'translate(0.2px, -0.2px)', 'translate(0px, 0px)'],
          transition: { duration: 0.52, ease: EASE_OUT },
        },
      }
    case 'link-pull':
      return {
        normal: { transform: 'translateX(0px)' },
        animate: {
          transform: ['translateX(0px)', 'translateX(1.4px)', 'translateX(-0.2px)', 'translateX(0px)'],
          transition: { duration: 0.48, ease: EASE_OUT },
        },
      }
    case 'external-arrow':
      return {
        normal: { transform: 'translate(0px, 0px)' },
        animate: {
          transform: ['translate(0px, 0px)', 'translate(1.8px, -1.8px) scale(0.97)', 'translate(-0.2px, 0.2px)', 'translate(0px, 0px)'],
          transition: { duration: 0.5, ease: EASE_OUT },
        },
      }
    case 'shield':
      return {
        normal: { transform: 'scale(1)' },
        animate: {
          transform: ['scale(1)', 'scale(0.94)', 'scale(1.08)', 'scale(1)'],
          transition: { duration: 0.52, ease: EASE_OUT },
        },
      }
    case 'wallet':
      return {
        normal: { transform: 'translateX(0px)' },
        animate: {
          transform: ['translateX(0px)', 'translateX(1.8px)', 'translateX(-0.25px)', 'translateX(0px)'],
          transition: { duration: 0.5, ease: EASE_OUT },
        },
      }
    case 'card-swipe':
      return {
        normal: { transform: 'translateX(0px) rotate(0deg)' },
        animate: {
          transform: ['translateX(0px) rotate(0deg)', 'translateX(2.4px) rotate(2deg)', 'translateX(-0.3px) rotate(-0.5deg)', 'translateX(0px) rotate(0deg)'],
          transition: { duration: 0.56, ease: EASE_OUT },
        },
      }
    case 'battery':
      return {
        normal: { transform: 'scaleX(1)' },
        animate: {
          transform: ['scaleX(1)', 'scaleX(0.72)', 'scaleX(1.06)', 'scaleX(1)'],
          transition: { duration: 0.5, ease: EASE_OUT },
        },
      }
    case 'zoom-in':
      return {
        normal: { transform: 'scale(1)' },
        animate: {
          transform: ['scale(1)', 'scale(0.88)', 'scale(1.12)', 'scale(1)'],
          transition: { duration: 0.5, ease: EASE_OUT },
        },
      }
    case 'zoom-out':
      return {
        normal: { transform: 'scale(1)' },
        animate: {
          transform: ['scale(1)', 'scale(1.12)', 'scale(0.9)', 'scale(1)'],
          transition: { duration: 0.5, ease: EASE_OUT },
        },
      }
    case 'expand':
      return {
        normal: { transform: 'scale(1)' },
        animate: {
          transform: ['scale(1)', 'scale(0.9)', 'scale(1.08)', 'scale(1)'],
          transition: { duration: 0.5, ease: EASE_OUT },
        },
      }
    case 'collapse':
      return {
        normal: { transform: 'scale(1)' },
        animate: {
          transform: ['scale(1)', 'scale(1.08)', 'scale(0.92)', 'scale(1)'],
          transition: { duration: 0.5, ease: EASE_OUT },
        },
      }
    case 'filter':
      return {
        normal: { transform: 'translateX(0px)' },
        animate: {
          transform: ['translateX(0px)', 'translateX(1.6px)', 'translateX(-0.2px)', 'translateX(0px)'],
          transition: { duration: 0.48, ease: EASE_OUT },
        },
      }
    case 'slider':
      return stagger(
        { transform: 'translateX(0px)' },
        {
          transform: ['translateX(0px)', 'translateX(2px)', 'translateX(-0.3px)', 'translateX(0px)'],
          transition: { duration: 0.42, ease: EASE_OUT },
        },
        0.07,
      )
    case 'volume':
      return stagger(
        { transform: 'scale(1)' },
        {
          transform: ['scale(0.82)', 'scale(1.08)', 'scale(1)'],
          transition: { duration: 0.5, ease: EASE_OUT },
        },
        0.1,
      )
    case 'call':
      return {
        normal: { transform: 'rotate(0deg)' },
        animate: {
          transform: ['rotate(0deg)', 'rotate(-10deg)', 'rotate(8deg)', 'rotate(-5deg)', 'rotate(0deg)'],
          transition: { duration: 0.7, ease: 'easeInOut' },
        },
      }
    case 'spin-loop':
      return {
        normal: { transform: 'rotate(0deg)', transition: { duration: 0.18 } },
        animate: {
          transform: 'rotate(360deg)',
          transition: { duration: 0.82, ease: 'linear', repeat: Infinity },
        },
      }
    case 'undo':
      return {
        normal: { transform: 'rotate(0deg)' },
        animate: {
          transform: ['rotate(0deg)', 'rotate(25deg)', 'rotate(-360deg)'],
          transition: { duration: 0.9, times: [0, 0.2, 1], ease: ['easeIn', 'easeOut'] },
        },
      }
    case 'mail-body':
      return {
        normal: { transform: 'scaleX(1) scaleY(1)' },
        animate: {
          transform: ['scaleX(1) scaleY(1)', 'scaleX(1.03) scaleY(0.96)', 'scaleX(0.99) scaleY(1.02)', 'scaleX(1) scaleY(1)'],
          transition: { duration: 0.64, ease: EASE_OUT },
        },
      }
    case 'message':
      return {
        normal: { transform: 'scale(1)' },
        animate: {
          transform: ['scale(1)', 'scale(0.92)', 'scale(1.08)', 'scale(1)'],
          transition: { duration: 0.5, ease: EASE_OUT },
        },
      }
    case 'takeoff':
      return {
        normal: { transform: 'translate(0px, 0px) rotate(0deg)', visibility: 'visible' },
        animate: {
          transform: [
            'translate(0px, 0px) rotate(0deg)',
            'translate(2px, -0.6px) rotate(-1deg)',
            'translate(8px, -5px) rotate(-6deg)',
            'translate(16px, -12px) rotate(-11deg)',
            'translate(26px, -18px) rotate(-13deg)',
            'translate(-22px, 12px) rotate(12deg)',
            'translate(-8px, 4px) rotate(4deg)',
            'translate(0px, 0px) rotate(0deg)',
          ],
          visibility: ['visible', 'visible', 'visible', 'visible', 'hidden', 'hidden', 'visible', 'visible'],
          transition: {
            duration: 1.45,
            times: [0, 0.08, 0.2, 0.36, 0.48, 0.52, 0.78, 1],
            ease: ['easeIn', 'easeIn', 'easeIn', 'linear', 'linear', 'easeOut', EASE_OUT],
          },
        },
      }
    case 'landing':
      return {
        normal: { transform: 'translate(0px, 0px) rotate(0deg)', visibility: 'visible' },
        animate: {
          transform: [
            'translate(-20px, -14px) rotate(10deg)',
            'translate(-20px, -14px) rotate(10deg)',
            'translate(-10px, -7px) rotate(6deg)',
            'translate(-3px, -1.5px) rotate(2deg)',
            'translate(0.6px, 1.1px) rotate(-0.4deg)',
            'translate(0px, 0px) rotate(0deg)',
          ],
          visibility: 'visible',
          transition: {
            duration: 1.15,
            times: [0, 0.12, 0.38, 0.62, 0.82, 1],
            ease: ['linear', 'easeIn', EASE_OUT, EASE_OUT, EASE_OUT],
          },
        },
      }
    case 'cruise':
      return {
        normal: { transform: 'translate(0px, 0px) rotate(0deg)' },
        animate: {
          transform: [
            'translate(0px, 0px) rotate(0deg)',
            'translate(1.6px, -1.4px) rotate(-7deg)',
            'translate(3.2px, -0.5px) rotate(-2deg)',
            'translate(0.4px, 0.35px) rotate(1.2deg)',
            'translate(0px, 0px) rotate(0deg)',
          ],
          transition: { duration: 0.92, times: [0, 0.28, 0.55, 0.8, 1], ease: EASE_IN_OUT },
        },
      }
    case 'sit':
      return {
        normal: { transform: 'translateY(0px) scaleY(1)' },
        animate: {
          transform: ['translateY(0px) scaleY(1)', 'translateY(-0.6px) scaleY(1.04)', 'translateY(1.4px) scaleY(0.86)', 'translateY(-0.15px) scaleY(1.02)', 'translateY(0px) scaleY(1)'],
          transition: { duration: 0.62, times: [0, 0.18, 0.48, 0.78, 1], ease: EASE_OUT },
        },
      }
    case 'power-down':
      return {
        normal: { transform: 'rotate(0deg) translateY(0px)', opacity: 1 },
        animate: {
          transform: ['rotate(0deg) translateY(0px)', 'rotate(-8deg) translateY(0.4px)', 'rotate(0deg) translateY(1.2px)', 'rotate(0deg) translateY(0px)'],
          opacity: [1, 1, 0.55, 1],
          transition: { duration: 0.7, ease: EASE_IN_OUT },
        },
      }
    case 'hover-flight':
      return {
        normal: { transform: 'translateY(0px) rotate(0deg)' },
        animate: {
          transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.6px) rotate(-3deg)', 'translateY(-0.4px) rotate(2deg)', 'translateY(-1.8px) rotate(-1deg)', 'translateY(0px) rotate(0deg)'],
          transition: { duration: 0.85, ease: 'easeInOut' },
        },
      }
    case 'launch':
      return {
        normal: { transform: 'translateY(0px) scaleY(1)', visibility: 'visible' },
        animate: {
          transform: [
            'translateY(0px) scaleY(1)',
            'translateY(1.2px) scaleY(0.9)',
            'translateY(-8px) scaleY(1.12)',
            'translateY(-22px) scaleY(1.05)',
            'translateY(16px) scaleY(0.92)',
            'translateY(0px) scaleY(1)',
          ],
          visibility: ['visible', 'visible', 'visible', 'hidden', 'hidden', 'visible'],
          transition: { duration: 1.05, times: [0, 0.16, 0.4, 0.52, 0.58, 1], ease: ['easeIn', 'easeIn', 'linear', 'linear', EASE_OUT] },
        },
      }
    case 'roll':
      return {
        normal: { transform: 'translateX(0px) rotate(0deg)' },
        animate: {
          transform: ['translateX(0px) rotate(0deg)', 'translateX(3.2px) rotate(4deg)', 'translateX(-0.4px) rotate(-1deg)', 'translateX(0px) rotate(0deg)'],
          transition: { duration: 0.62, ease: EASE_OUT },
        },
      }
    case 'bob-water':
      return {
        normal: { transform: 'translateY(0px) rotate(0deg)' },
        animate: {
          transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.4px) rotate(-3deg)', 'translateY(1px) rotate(2.5deg)', 'translateY(-0.4px) rotate(-1deg)', 'translateY(0px) rotate(0deg)'],
          transition: { duration: 0.88, ease: 'easeInOut' },
        },
      }
    case 'park':
      return {
        normal: { transform: 'translateX(0px)' },
        animate: {
          transform: ['translateX(0px)', 'translateX(2.4px)', 'translateX(3px)', 'translateX(2.6px)', 'translateX(0px)'],
          transition: { duration: 0.7, times: [0, 0.4, 0.58, 0.72, 1], ease: EASE_OUT },
        },
      }
    case 'float-up':
      return {
        normal: { transform: 'translateY(0px)' },
        animate: {
          transform: ['translateY(0px)', 'translateY(0.8px)', 'translateY(-3.2px)', 'translateY(-2.4px)', 'translateY(0px)'],
          transition: { duration: 0.9, ease: EASE_IN_OUT },
        },
      }
    case 'gust':
      return {
        normal: { transform: 'rotate(0deg) translateX(0px)' },
        animate: {
          transform: ['rotate(0deg) translateX(0px)', 'rotate(-12deg) translateX(1.6px)', 'rotate(5deg) translateX(-0.4px)', 'rotate(-2deg) translateX(0.2px)', 'rotate(0deg) translateX(0px)'],
          transition: { duration: 0.7, ease: EASE_OUT },
        },
      }
    case 'rain':
      return {
        normal: { transform: 'translateY(0px)', opacity: 1 },
        animate: {
          transform: ['translateY(0px)', 'translateY(3.5px)', 'translateY(-2.5px)', 'translateY(0px)'],
          opacity: [1, 0, 0, 1],
          transition: { duration: 0.7, times: [0, 0.42, 0.5, 1], ease: ['easeIn', 'linear', 'easeOut'] },
        },
      }
    case 'snow':
      return {
        normal: { transform: 'translate(0px, 0px) rotate(0deg)' },
        animate: {
          transform: ['translate(0px, 0px) rotate(0deg)', 'translate(1.4px, 2.2px) rotate(18deg)', 'translate(-0.8px, 3.6px) rotate(-8deg)', 'translate(0px, 0px) rotate(0deg)'],
          transition: { duration: 0.95, ease: EASE_IN_OUT },
        },
      }
    case 'unlock':
      return {
        normal: { transform: 'rotate(0deg)' },
        animate: {
          transform: ['rotate(0deg)', 'rotate(-18deg)', 'rotate(-16deg)', 'rotate(0deg)'],
          transition: { duration: 0.82, ease: EASE_IN_OUT },
        },
      }
    case 'unfold':
      return {
        normal: { transform: 'rotateX(0deg) scaleY(1)' },
        animate: {
          transform: ['rotateX(0deg) scaleY(1)', 'rotateX(-55deg) scaleY(0.72)', 'rotateX(8deg) scaleY(1.04)', 'rotateX(0deg) scaleY(1)'],
          transition: { duration: 0.64, ease: EASE_OUT },
        },
      }
    case 'fold':
      return {
        normal: { transform: 'rotateX(0deg) scaleY(1)' },
        animate: {
          transform: ['rotateX(0deg) scaleY(1)', 'rotateX(8deg) scaleY(1.04)', 'rotateX(-50deg) scaleY(0.74)', 'rotateX(0deg) scaleY(1)'],
          transition: { duration: 0.64, ease: EASE_OUT },
        },
      }
    case 'flap':
      return {
        normal: { transform: 'rotate(0deg) translateY(0px)' },
        animate: {
          transform: ['rotate(0deg) translateY(0px)', 'rotate(-9deg) translateY(-1.2px)', 'rotate(7deg) translateY(-0.4px)', 'rotate(-3deg) translateY(-1px)', 'rotate(0deg) translateY(0px)'],
          transition: { duration: 0.56, ease: EASE_OUT },
        },
      }
    case 'swim':
      return {
        normal: { transform: 'translateX(0px) rotate(0deg)' },
        animate: {
          transform: ['translateX(0px) rotate(0deg)', 'translateX(2.4px) rotate(-6deg)', 'translateX(3.2px) rotate(4deg)', 'translateX(0px) rotate(0deg)'],
          transition: { duration: 0.7, ease: EASE_IN_OUT },
        },
      }
    case 'run':
      return {
        normal: { transform: 'translateX(0px) skewX(0deg)' },
        animate: {
          transform: ['translateX(0px) skewX(0deg)', 'translateX(1.6px) skewX(-8deg)', 'translateX(3px) skewX(4deg)', 'translateX(0px) skewX(0deg)'],
          transition: { duration: 0.52, ease: EASE_OUT },
        },
      }
    case 'walk':
      return {
        normal: { transform: 'translateX(0px) rotate(0deg)' },
        animate: {
          transform: ['translateX(0px) rotate(0deg)', 'translateX(1.1px) rotate(-3deg)', 'translateX(2px) rotate(2deg)', 'translateX(0px) rotate(0deg)'],
          transition: { duration: 0.64, ease: EASE_IN_OUT },
        },
      }
    case 'bounce':
      return {
        normal: { transform: 'translateY(0px) scaleY(1)' },
        animate: {
          transform: ['translateY(0px) scaleY(1)', 'translateY(1.4px) scaleY(0.82)', 'translateY(-3.4px) scaleY(1.08)', 'translateY(0.5px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
          transition: { duration: 0.68, times: [0, 0.18, 0.48, 0.78, 1], ease: EASE_OUT },
        },
      }
    case 'strike':
      return {
        normal: { transform: 'rotate(0deg)' },
        animate: {
          transform: ['rotate(0deg)', 'rotate(-22deg)', 'rotate(8deg)', 'rotate(-2deg)', 'rotate(0deg)'],
          transition: { duration: 0.52, times: [0, 0.32, 0.55, 0.8, 1], ease: EASE_OUT },
        },
      }
    case 'saw':
      return {
        normal: { transform: 'translateX(0px)' },
        animate: {
          transform: ['translateX(0px)', 'translateX(2.2px)', 'translateX(-1.6px)', 'translateX(1.2px)', 'translateX(0px)'],
          transition: { duration: 0.48, ease: 'linear' },
        },
      }
    case 'attract':
      return {
        normal: { transform: 'scale(1)' },
        animate: {
          transform: ['scale(1)', 'scale(0.9)', 'scale(1.12)', 'scale(1)'],
          transition: { duration: 0.56, ease: EASE_OUT },
        },
      }
    case 'flip':
      return {
        normal: { transform: 'rotateY(0deg)' },
        animate: {
          transform: ['rotateY(0deg)', 'rotateY(90deg)', 'rotateY(180deg)', 'rotateY(270deg)', 'rotateY(360deg)'],
          transition: { duration: 0.7, ease: EASE_IN_OUT },
        },
      }
    case 'pour':
      return {
        normal: { transform: 'rotate(0deg)' },
        animate: {
          transform: ['rotate(0deg)', 'rotate(18deg)', 'rotate(22deg)', 'rotate(-2deg)', 'rotate(0deg)'],
          transition: { duration: 0.78, times: [0, 0.28, 0.55, 0.82, 1], ease: EASE_IN_OUT },
        },
      }
    case 'static':
      return { normal: { transform: 'none' }, animate: { transform: 'none' } }
    default:
      return {
        normal: { transform: 'translateY(0px) rotate(0deg)' },
        animate: {
          transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.7px) rotate(-2deg)', 'translateY(0.4px) rotate(0.7deg)', 'translateY(0px) rotate(0deg)'],
          transition: { duration: 0.56, ease: EASE_OUT },
        },
      }
  }
}

function profileValue(seed, lane, min, max) {
  const mixed = Math.imul((seed + lane * 0x9e3779b9) >>> 0, 2246822519) >>> 0
  return min + (mixed / 0xffffffff) * (max - min)
}

function roundMotion(value) {
  return Math.round(value * 100) / 100
}

function tuneTransform(value, factor) {
  if (typeof value !== 'string') return value
  return value.replace(/(-?\d+(?:\.\d+)?)(px|deg)/g, (match, raw, unit) => {
    const number = Number(raw)
    if (number === 0 || Math.abs(number) >= 45) return match
    return `${roundMotion(number * factor)}${unit}`
  })
}

function tuneState(state, amplitude, tempo) {
  const tuned = { ...state }
  if (typeof tuned.transform === 'string') {
    tuned.transform = tuneTransform(tuned.transform, amplitude)
  } else if (Array.isArray(tuned.transform)) {
    tuned.transform = tuned.transform.map((value) => tuneTransform(value, amplitude))
  }
  if (tuned.transition && typeof tuned.transition === 'object') {
    tuned.transition = { ...tuned.transition }
    if (typeof tuned.transition.duration === 'number') {
      tuned.transition.duration = roundMotion(tuned.transition.duration * tempo)
    }
    for (const [key, transition] of Object.entries(tuned.transition)) {
      if (!transition || typeof transition !== 'object' || Array.isArray(transition)) continue
      if (typeof transition.duration === 'number') {
        tuned.transition[key] = {
          ...transition,
          duration: roundMotion(transition.duration * tempo),
        }
      }
    }
  }
  return tuned
}

export function variantsFor(kind, role = {}, seed = 0) {
  const spec = baseVariantsFor(kind)
  if (!spec || kind === 'static') return spec
  const lane = (role.custom ?? 0) + kind.length
  const amplitude = profileValue(seed, lane, 0.92, 1.1)
  const tempo = profileValue(seed, lane + 17, 0.94, 1.07)
  return {
    ...spec,
    normal: tuneState(spec.normal, amplitude, tempo),
    animate: tuneState(spec.animate, amplitude, tempo),
  }
}

export function toMotionVariants(spec) {
  if (!spec?.custom) return { normal: spec.normal, animate: spec.animate }
  const { delayPer, delayBase = 0 } = spec.custom
  return {
    normal: spec.normal,
    animate: (i) => ({
      ...spec.animate,
      transition: {
        ...spec.animate.transition,
        delay: delayBase + i * delayPer,
      },
    }),
  }
}

export function usesCustom(kind) {
  return ['list-row', 'grid-tile', 'grid-cell', 'more-dot', 'wifi-arc', 'share-node', 'pause', 'slider', 'volume', 'file-line', 'ticker', 'bloom'].includes(kind)
}

const KIND_NAMES = {
  'collision-left': 'leftVehicleVariants',
  'collision-right': 'rightVehicleVariants',
  'impact-burst': 'impactVariants',
  'emergency-drive': 'vehicleVariants',
  'emergency-beacon': 'beaconVariants',
  'add-frame': 'frameVariants',
  'add-plus': 'plusVariants',
  'folder-plus': 'plusVariants',
  minus: 'minusVariants',
  'draw-check': 'markVariants',
  'check-impact': 'frameVariants',
  'stamp-x': 'markVariants',
  'arrow-right': 'arrowVariants',
  'arrow-left': 'arrowVariants',
  'arrow-down': 'arrowVariants',
  'arrow-up': 'arrowVariants',
  'arrow-up-right': 'arrowVariants',
  'arrow-up-left': 'arrowVariants',
  'arrow-down-right': 'arrowVariants',
  'arrow-down-left': 'arrowVariants',
  'chevron-right': 'chevronVariants',
  'chevron-left': 'chevronVariants',
  'chevron-down': 'chevronVariants',
  'chevron-up': 'chevronVariants',
  'download-arrow': 'arrowVariants',
  'upload-arrow': 'arrowVariants',
  'download-tray': 'trayVariants',
  'upload-tray': 'trayVariants',
  'swing-bell': 'iconVariants',
  'user-head': 'headVariants',
  'user-body': 'bodyVariants',
  'user-nod-all': 'personVariants',
  'user-recoil': 'personVariants',
  'user-remove-mark': 'removeVariants',
  'folder-tilt': 'folderVariants',
  'file-sheet': 'fileVariants',
  'file-line': 'lineVariants',
  'list-row': 'rowVariants',
  'grid-tile': 'tileVariants',
  'grid-cell': 'cellVariants',
  'more-dot': 'dotVariants',
  heart: 'iconVariants',
  'wifi-arc': 'arcVariants',
  'wifi-source': 'sourceVariants',
  search: 'iconVariants',
  gear: 'iconVariants',
  refresh: 'iconVariants',
  'lock-body': 'bodyVariants',
  'lock-key': 'keyVariants',
  'trash-lid': 'lidVariants',
  'trash-bin': 'binVariants',
  play: 'iconVariants',
  pause: 'barVariants',
  blink: 'iconVariants',
  'home-hop': 'iconVariants',
  'home-smile': 'markVariants',
  'login-door': 'frameVariants',
  'login-arrow': 'arrowVariants',
  'logout-arrow': 'arrowVariants',
  'edit-nib': 'nibVariants',
  'edit-line': 'lineVariants',
  'share-node': 'nodeVariants',
  'share-wire': 'wireVariants',
  'cart-roll': 'iconVariants',
  'pin-drop': 'iconVariants',
  camera: 'iconVariants',
  fire: 'iconVariants',
  'leaf-sway': 'iconVariants',
  'cloud-float': 'iconVariants',
  alert: 'iconVariants',
  thumbs: 'iconVariants',
  bookmark: 'iconVariants',
  'copy-front': 'frontVariants',
  'link-pull': 'iconVariants',
  'external-arrow': 'arrowVariants',
  shield: 'iconVariants',
  wallet: 'iconVariants',
  'card-swipe': 'iconVariants',
  battery: 'iconVariants',
  'zoom-in': 'iconVariants',
  'zoom-out': 'iconVariants',
  expand: 'iconVariants',
  collapse: 'iconVariants',
  filter: 'iconVariants',
  slider: 'knobVariants',
  volume: 'waveVariants',
  call: 'iconVariants',
  'spin-loop': 'iconVariants',
  undo: 'iconVariants',
  'mail-body': 'iconVariants',
  message: 'iconVariants',
  takeoff: 'planeVariants',
  landing: 'planeVariants',
  cruise: 'planeVariants',
  sit: 'seatVariants',
  'power-down': 'iconVariants',
  'hover-flight': 'iconVariants',
  launch: 'iconVariants',
  roll: 'iconVariants',
  'bob-water': 'iconVariants',
  park: 'iconVariants',
  'float-up': 'iconVariants',
  gust: 'iconVariants',
  rain: 'dropVariants',
  snow: 'iconVariants',
  unlock: 'shackleVariants',
  unfold: 'iconVariants',
  fold: 'iconVariants',
  flap: 'iconVariants',
  swim: 'iconVariants',
  run: 'iconVariants',
  walk: 'iconVariants',
  bounce: 'iconVariants',
  strike: 'iconVariants',
  saw: 'iconVariants',
  attract: 'iconVariants',
  flip: 'iconVariants',
  pour: 'iconVariants',
  'orbit-path': 'orbitVariants',
  'orbit-core': 'nucleusVariants',
  twist: 'iconVariants',
  buzz: 'iconVariants',
  slither: 'iconVariants',
  ticker: 'barVariants',
  bloom: 'petalVariants',
  ripen: 'iconVariants',
  lift: 'iconVariants',
}

export function variantConstName(kind, used) {
  const base = KIND_NAMES[kind] || 'iconVariants'
  if (!used.has(base)) return base
  let i = 2
  while (used.has(`${base}${i}`)) i += 1
  return `${base}${i}`
}

export function serialize(value, indent = 0) {
  const pad = ' '.repeat(indent)
  const inner = ' '.repeat(indent + 2)
  if (value === undefined) return 'undefined'
  if (value === null) return 'null'
  if (typeof value === 'string') return `'${value.replaceAll("'", "\\'")}'`
  if (typeof value === 'number' || typeof value === 'boolean') return String(value)
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]'
    const primitive = value.every((v) => typeof v !== 'object' || v === null)
    if (primitive) return `[${value.map((v) => serialize(v)).join(', ')}]`
    return `[\n${value.map((v) => inner + serialize(v, indent + 2)).join(',\n')},\n${pad}]`
  }
  const entries = Object.entries(value)
  if (entries.length === 0) return '{}'
  return `{\n${entries
    .map(([k, v]) => `${inner}${/^[A-Za-z_$][\w$]*$/.test(k) ? k : `'${k}'`}: ${serialize(v, indent + 2)}`)
    .join(',\n')},\n${pad}}`
}

export function emitVariantsTs(spec) {
  if (!spec.custom) return serialize({ normal: spec.normal, animate: spec.animate })
  const { delayPer, delayBase = 0 } = spec.custom
  const delayExpr = delayBase ? `${delayBase} + i * ${delayPer}` : `i * ${delayPer}`
  const transition = spec.animate.transition || {}
  const transitionEntries = Object.entries(transition)
    .map(([k, v]) => `${k}: ${serialize(v)}`)
    .join(', ')
  const rest = { ...spec.animate }
  delete rest.transition
  const restEntries = Object.entries(rest)
    .map(([k, v]) => `${k}: ${serialize(v, 4)}`)
    .join(',\n    ')
  return `{
  normal: ${serialize(spec.normal, 2)},
  animate: (i: number) => ({
    ${restEntries},
    transition: { ${transitionEntries}, delay: ${delayExpr} },
  }),
}`
}
