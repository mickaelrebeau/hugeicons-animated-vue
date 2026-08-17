<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AutomotiveBattery01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the plus pole stamps, the minus bar holds, then both posts seat on the case
// authored from scripts/authored
const plusVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.48, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const minusVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.22)', 'scaleX(1.08)', 'scaleX(1)'],
    transition: {
      duration: 0.46,
      delay: 0.08,
      times: [0, 0.14, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const postLVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.5px)',
      'translate(0px, 0.21000000000000002px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.54,
      delay: 0.14,
      times: [0, 0.12, 0.62, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const postRVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.5px)',
      'translate(0px, 0.21000000000000002px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.54,
      delay: 0.2,
      times: [0, 0.12, 0.62, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: false,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <path d="M16 5.5H8C5.17157 5.5 3.75736 5.5 2.87868 6.37868C2 7.25736 2 8.67157 2 11.5V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H16C18.8284 21 20.2426 21 21.1213 20.1213C22 19.2426 22 17.8284 22 15V11.5C22 8.67157 22 7.25736 21.1213 6.37868C20.2426 5.5 18.8284 5.5 16 5.5Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M17 8.5V12.5M19 10.5H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 10.5px' }" />
            <motion.path d="M9 10.5H5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="minusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 10.5px' }" />
            <motion.path d="M9 5.5V4.75C9 4.04777 9 3.69665 8.83147 3.44443C8.75851 3.33524 8.66476 3.24149 8.55557 3.16853C8.30335 3 7.95223 3 7.25 3C6.54777 3 6.19665 3 5.94443 3.16853C5.83524 3.24149 5.74149 3.33524 5.66853 3.44443C5.5 3.69665 5.5 4.04777 5.5 4.75V5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="postLVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.3px 4.3px' }" />
            <motion.path d="M18.5 5.5V4.75C18.5 4.04777 18.5 3.69665 18.3315 3.44443C18.2585 3.33524 18.1648 3.24149 18.0556 3.16853C17.8033 3 17.4522 3 16.75 3C16.0478 3 15.6967 3 15.4444 3.16853C15.3352 3.24149 15.2415 3.33524 15.1685 3.44443C15 3.69665 15 4.04777 15 4.75V5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="postRVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.8px 4.3px' }" />
          </svg>
        </div>
</template>
