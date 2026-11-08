<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PenTool02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the nib swings on its curve and the curve rewrites
// authored from scripts/authored
const curveVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.6,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const nibVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.04px, -0.07px) rotate(8deg)',
      'translate(0.65px, -0.03px) rotate(-5deg)',
      'translate(-0.26px, -0.00px) rotate(2deg)',
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

const nib2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.53px, -0.11px) rotate(8deg)',
      'translate(0.96px, -0.04px) rotate(-5deg)',
      'translate(-0.38px, -0.01px) rotate(2deg)',
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
            <motion.path d="M16.4215 7C16.6828 5.81796 17.5116 3.8044 16.5398 2.73202C15.8765 2 14.6288 2 12.1335 2L11.8665 2C9.37118 2 8.12353 2 7.46018 2.73202C6.4884 3.80441 7.31722 5.81796 7.57854 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="curveVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M18.0068 14.6526L13.7868 20.3584C12.9774 21.4528 12.5726 22 12 22C11.4274 22 11.0227 21.4528 10.2132 20.3584L5.99325 14.6526C5.31656 13.7377 4.97821 13.2802 5.00109 12.7927C5.02396 12.3052 5.47593 11.7946 6.37986 10.7732C7.25108 9.78884 7.57854 8.76948 7.57854 7.00045L16.4215 7C16.4215 8.76902 16.7493 9.78857 17.6203 10.7731C18.5242 11.7947 18.9761 12.3054 18.9989 12.7929C19.0217 13.2803 18.6834 13.7377 18.0068 14.6526Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nibVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
            <motion.path d="M13.5 14C13.0587 14.318 12.5464 14.5 12 14.5M12 14.5C11.4536 14.5 10.9413 14.318 10.5 14M12 14.5L12 22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="nib2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
          </svg>
        </div>
</template>
