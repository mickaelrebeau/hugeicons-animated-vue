<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FerryBoatIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cloud: it rides a short swell and settles back on the waterline
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.48px) rotate(-3.18deg)', 'translateY(1.06px) rotate(2.65deg)', 'translateY(-0.42px) rotate(-1.06deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.9,
      ease: 'easeInOut',
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
            <motion.path d="M19.0203 14.3033L17.8099 17M19.0203 14.3033H16M19.0203 14.3033C19.7848 12.5999 20.1671 11.7483 19.9303 10.9736C19.9079 10.9 19.8814 10.8278 19.8512 10.7573C19.5333 10.016 18.7088 9.65877 17.0598 8.94437L14.201 7.70592C13.1147 7.23531 12.5716 7 12 7C11.4284 7 10.8853 7.23531 9.79896 7.70592L6.94025 8.94437C5.2912 9.65877 4.46668 10.016 4.14878 10.7573C4.11857 10.8278 4.09215 10.9 4.06965 10.9736C3.83293 11.7483 4.21519 12.5999 4.97971 14.3033M6.1901 17L4.97971 14.3033M4.97971 14.3033H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M18 9V8C18 6.11438 18 5.17157 17.4142 4.58579C16.8284 4 15.8856 4 14 4H10C8.11438 4 7.17157 4 6.58579 4.58579C6 5.17157 6 6.11438 6 8V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 4V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2 21.1932C2.68524 22.2443 3.57104 22.2443 4.27299 21.1932C6.52985 17.7408 8.67954 23.6764 10.273 21.2321C12.703 17.5694 14.4508 23.9218 16.273 21.1932C18.6492 17.5582 20.1295 23.5776 22 21.5842" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
