<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LocationUpdate02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after location-01: the pin lifts, drops onto its point, and carries the landing ring
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: {
    transform: ['translateY(0px) scale(1)', 'translateY(-2.23px) scale(0.96)', 'translateY(0.4px) scale(1.04)', 'translateY(0px) scale(1)'],
    transition: {
      duration: 0.56,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

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
            <motion.path d="M20 11L22 12C22 6.47715 17.5228 2 12 2C7.89936 2 4.3752 4.46819 2.83209 8M4 13L2 12C2 17.5228 6.47715 22 12 22C16.1006 22 19.6248 19.5318 21.1679 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M12.125 11H12M12.25 11C12.25 11.1381 12.1381 11.25 12 11.25C11.8619 11.25 11.75 11.1381 11.75 11C11.75 10.8619 11.8619 10.75 12 10.75C12.1381 10.75 12.25 10.8619 12.25 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M12 6.50012C9.51472 6.50012 7.5 8.48994 7.5 10.9445C7.5 12.348 8.0625 13.4393 9.1875 14.4141C9.91041 15.0405 11.1734 16.3208 11.8279 17.243C11.912 17.3615 12.0921 17.3642 12.1783 17.2473C12.8507 16.3363 14.0895 15.0406 14.8125 14.4141C15.9375 13.4393 16.5 12.348 16.5 10.9445C16.5 8.48994 14.4853 6.50012 12 6.50012Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
