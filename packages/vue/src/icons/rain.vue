<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RainIcon' })

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
    transform: ['translateY(0px)', 'translateY(-1.23px)', 'translateY(0.31px)', 'translateY(0px)'],
    transition: {
      duration: 0.7,
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
    transform: ['translateY(0px)', 'translateY(3.45px)', 'translateY(-2.47px)', 'translateY(0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.68,
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
            <motion.path d="M3 7.67122C3 5.99755 4.47444 4.34363 5.50935 3.38889C6.0714 2.87037 6.9286 2.87037 7.49065 3.38889C8.52556 4.34363 10 5.99755 10 7.67122C10 9.31217 8.67462 11 6.5 11C4.32538 11 3 9.31217 3 7.67122Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 6.94px' }" />
            <motion.path d="M8.5 17.6712C8.5 15.9975 9.97444 14.3436 11.0093 13.3889C11.5714 12.8704 12.4286 12.8704 12.9907 13.3889C14.0256 14.3436 15.5 15.9975 15.5 17.6712C15.5 19.3122 14.1746 21 12 21C9.82538 21 8.5 19.3122 8.5 17.6712Z" stroke="currentColor" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.94px' }" />
            <motion.path d="M14 7.67122C14 5.99755 15.4744 4.34363 16.5093 3.38889C17.0714 2.87037 17.9286 2.87037 18.4907 3.38889C19.5256 4.34363 21 5.99755 21 7.67122C21 9.31217 19.6746 11 17.5 11C15.3254 11 14 9.31217 14 7.67122Z" stroke="currentColor" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 6.94px' }" />
          </svg>
        </div>
</template>
