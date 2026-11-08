<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CpuSettingsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cog turns a full revolution in the corner of the chip
// authored from scripts/authored
const cogVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(72deg)',
      'rotate(251.99999999999997deg)',
      'rotate(370.8deg)',
      'rotate(360deg)',
    ],
    transition: {
      duration: 1,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const traceVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      delay: 0.2,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
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
            <path d="M20 10C19.9641 7.52043 19.7801 6.11466 18.8365 5.17157C17.6643 4 15.7776 4 12.0043 4C8.23106 4 6.34442 4 5.17221 5.17157C4 6.34315 4 8.22876 4 12C4 15.7712 4 17.6569 5.17221 18.8284C6.23545 19.8911 7.88646 19.9899 11 19.9991" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M18 19.7143V21M18 19.7143C16.8432 19.7143 15.8241 19.1461 15.2263 18.2833M18 19.7143C19.1568 19.7143 20.1759 19.1461 20.7737 18.2833M18 13.2857C19.1569 13.2857 20.1761 13.854 20.7738 14.7169M18 13.2857C16.8431 13.2857 15.8239 13.854 15.2262 14.7169M18 13.2857V12M22 13.9286L20.7738 14.7169M14.0004 19.0714L15.2263 18.2833M14 13.9286L15.2262 14.7169M21.9996 19.0714L20.7737 18.2833M20.7738 14.7169C21.1273 15.2271 21.3333 15.8403 21.3333 16.5C21.3333 17.1597 21.1272 17.773 20.7737 18.2833M15.2262 14.7169C14.8727 15.2271 14.6667 15.8403 14.6667 16.5C14.6667 17.1597 14.8728 17.773 15.2263 18.2833" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="cogVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 16.5px' }" />
            <path d="M9.5 2V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M14.5 2V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M9.5 20V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M4 9.5L2 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M4 14.5L2 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M22 9.5L20 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 8H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="traceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
