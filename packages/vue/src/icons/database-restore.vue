<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DatabaseRestoreIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the restore arrow turns back a full circle and the disk ticks blink
// authored from scripts/authored
const tickVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.6, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const tick2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.6, delay: 0.12, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const spinVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(-72deg)',
      'rotate(-251.99999999999997deg)',
      'rotate(-370.8deg)',
      'rotate(-360deg)',
    ],
    transition: {
      duration: 0.9,
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
            <ellipse cx="11" cy="5" rx="8" ry="3" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M6 10.8418C6.60158 11.0226 7.27434 11.1716 8 11.2817" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="tickVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6 17.8418C6.60158 18.0226 7.27434 18.1716 8 18.2817" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="tick2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19.842 13L20.4127 15.3449L19.4647 14.7618C18.7894 14.2569 17.9501 13.9576 17.0404 13.9576C14.809 13.9576 13 15.7579 13 17.9788C13 20.1996 14.809 22 17.0404 22C18.9951 22 20.6256 20.6185 21 18.783" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="spinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 17.5px' }" />
            <path d="M19 5V10M3 5V19C3 20.6569 6.58172 22 11 22C11.0849 22 11.1694 21.9995 11.2537 21.9985" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M3 12C3 13.616 6.40729 14.9336 10.6748 14.9976" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
