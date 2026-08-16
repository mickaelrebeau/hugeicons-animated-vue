<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RadarIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after loading-03: the sweep turns around the fixed center and reveals each contact
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
    transition: {
      duration: 0.17,
    },
  },
  animate: {
    transform: 'rotate(360deg)',
    transition: {
      duration: 0.79,
      ease: 'linear',
      repeat: Infinity,
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
            <motion.path d="M16.5962 16.5962C14.0578 19.1346 9.94221 19.1346 7.40381 16.5962C4.8654 14.0578 4.8654 9.94221 7.40381 7.40381C8.92815 5.87946 11.0212 5.27051 13 5.57693" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 12L16.9497 7.05025C17.9829 6.01707 18.4995 5.50048 18.3867 4.75173C18.2739 4.00298 17.7382 3.7198 16.6667 3.15343C15.2736 2.41699 13.6855 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.5778 21.7031 9.22492 21.1679 8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
