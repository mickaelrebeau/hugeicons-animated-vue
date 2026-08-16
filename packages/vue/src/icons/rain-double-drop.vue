<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RainDoubleDropIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cloud-rain: drops fall through the glyph while the cloud holds
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1.27px)', 'translateY(0.32px)', 'translateY(0px)'],
    transition: {
      duration: 0.72,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

const dropVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
    opacity: 1,
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(3.59px)', 'translateY(-2.56px)', 'translateY(0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      times: [0, 0.42, 0.5, 1],
      ease: ['easeIn', 'linear', 'easeOut'],
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M2 13.3424C2 9.9951 4.73825 6.68726 6.66022 4.77778C7.70404 3.74074 9.29597 3.74074 10.3398 4.77778C12.2617 6.68726 15 9.9951 15 13.3424C15 16.6243 12.5386 20 8.5 20C4.46142 20 2 16.6243 2 13.3424Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 11.87px' }" />
            <motion.path d="M15.5 20C19.5386 20 22 16.6243 22 13.3424C22 9.9951 19.2617 6.68726 17.3398 4.77778C16.296 3.74074 14.704 3.74074 13.6602 4.77778" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.83px 11.87px' }" />
          </svg>
        </div>
</template>
