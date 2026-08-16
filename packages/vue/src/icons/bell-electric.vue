<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BellElectricIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after notification-03: the bell rings from its hanging point and decays naturally
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-14.28deg)', 'rotate(11.22deg)', 'rotate(-8.16deg)', 'rotate(5.1deg)', 'rotate(-2.04deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.9,
      ease: 'easeInOut',
      times: [0, 0.18, 0.38, 0.56, 0.72, 0.87, 1],
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
            <motion.circle cx="20" cy="15" r="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 2px' }" />
            <motion.path d="M20 17C19.3333 17.6667 17.2 19 14 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 2px' }" />
            <motion.circle cx="9" cy="9" r="7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 2px' }" />
            <motion.path d="M9 8.75V9M9.5 9C9.5 9.27614 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.27614 8.5 9C8.5 8.72386 8.72386 8.5 9 8.5C9.27614 8.5 9.5 8.72386 9.5 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 2px' }" />
            <motion.path d="M11 16H7C6.06812 16 5.60218 16 5.23463 16.1522C4.74458 16.3552 4.35523 16.7446 4.15224 17.2346C4 17.6022 4 18.0681 4 19C4 19.9319 4 20.3978 4.15224 20.7654C4.35523 21.2554 4.74458 21.6448 5.23463 21.8478C5.60218 22 6.06812 22 7 22H11C11.9319 22 12.3978 22 12.7654 21.8478C13.2554 21.6448 13.6448 21.2554 13.8478 20.7654C14 20.3978 14 19.9319 14 19C14 18.0681 14 17.6022 13.8478 17.2346C13.6448 16.7446 13.2554 16.3552 12.7654 16.1522C12.3978 16 11.9319 16 11 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 2px' }" />
          </svg>
        </div>
</template>
