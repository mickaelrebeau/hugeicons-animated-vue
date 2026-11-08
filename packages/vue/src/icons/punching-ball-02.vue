<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PunchingBall02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the ball wobbles on its spring stand
// authored from scripts/authored
const standVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.67px, 0.07px) rotate(-12deg)',
      'translate(0.47px, 0.03px) rotate(8.399999999999999deg)',
      'translate(-0.20px, 0.01px) rotate(-3.5999999999999996deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const stand2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.39px, 0.25px) rotate(-12deg)',
      'translate(1.68px, 0.12px) rotate(8.399999999999999deg)',
      'translate(-0.72px, 0.02px) rotate(-3.5999999999999996deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <path d="M14.6897 18.5H9.31035C8.63048 18.5 8.00273 18.8846 7.66542 19.5077L7.12621 20.5039C6.76535 21.1705 7.22133 22 7.94867 22H16.0513C16.7787 22 17.2347 21.1705 16.8738 20.5039L16.3346 19.5077C15.9973 18.8846 15.3695 18.5 14.6897 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 12V18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="standVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.3px' }" />
            <motion.path d="M12 2C9.51472 2 7.5 3.17807 7.5 5.84619C7.5 8.18121 9.5105 8.74889 10.5152 10.9489C10.6595 11.2648 10.7316 11.4227 10.7782 11.4936C10.9831 11.8056 11.1795 11.9309 11.5517 11.9872C11.6363 12 11.7575 12 11.9999 12C12.2423 12 12.3636 12 12.4481 11.9873C12.8204 11.9311 13.0162 11.8063 13.2214 11.4945C13.268 11.4236 13.3404 11.2655 13.4853 10.9491C14.4901 8.75415 16.5 8.20205 16.5 5.84619C16.5 3.15386 14.4853 2 12 2Z" stroke="currentColor" stroke-width="1.5" :variants="stand2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7px' }" />
          </svg>
        </div>
</template>
