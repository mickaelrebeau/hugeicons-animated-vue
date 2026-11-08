<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LassoTool02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the loop swings and the knot drops
// authored from scripts/authored
const loopVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.03px, -0.54px) rotate(-8deg)',
      'translate(0.72px, 0.50px) rotate(6deg)',
      'translate(-0.25px, -0.15px) rotate(-2deg)',
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

const knotVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.14px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.1,
      times: [0, 0.32, 0.62, 0.86, 1],
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
            <motion.path d="M5.5 15.5L2.61096 5.5905C2.04631 3.6603 1.76399 2.6952 2.24574 2.21566C2.72749 1.73612 3.60877 2.105 5.37133 2.84278L11.692 5.48851C13.1841 6.11304 13.8363 6.06315 15.2313 5.24565L18.7973 3.15593C20.3091 2.26998 21.065 1.827 21.5902 2.19348C22.1155 2.55996 22.0396 3.47742 21.8877 5.31232L21.3335 12.0109C21.1225 14.5617 20.6625 15.2995 18.1681 15.9572L10 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="loopVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.9px 9.9px' }" />
            <motion.path d="M9.98703 17C9.98703 18.1046 8.87064 19 7.49351 19C6.11638 19 5 18.1046 5 17C5 15.8954 6.11638 15 7.49351 15C8.87064 15 9.98703 15.8954 9.98703 17ZM9.98703 17C10.0493 17.7724 10.0064 20.5 7.00254 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="knotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 18.5px' }" />
          </svg>
        </div>
</template>
