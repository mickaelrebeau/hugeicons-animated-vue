<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'IpodIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the click wheel turns and the screen lights
// authored from scripts/authored
const wheelVariants: Variants = {
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

const screenVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <path d="M19.5 13.5V10.5C19.5 6.74142 19.5 4.86213 18.5711 3.60746C18.4225 3.40678 18.2587 3.22119 18.0817 3.0528C16.9746 2 15.3164 2 12 2C8.68361 2 7.02541 2 5.91834 3.0528C5.74128 3.22119 5.57752 3.40678 5.42894 3.60746C4.5 4.86213 4.5 6.74142 4.5 10.5V13.5C4.5 17.2586 4.5 19.1379 5.42894 20.3925C5.57752 20.5932 5.74128 20.7788 5.91834 20.9472C7.02541 22 8.68361 22 12 22C15.3164 22 16.9746 22 18.0817 20.9472C18.2587 20.7788 18.4225 20.5932 18.5711 20.3925C19.5 19.1379 19.5 17.2586 19.5 13.5Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M15 16C15 17.6569 13.6569 19 12 19C10.3431 19 9 17.6569 9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16Z" stroke="currentColor" stroke-width="1.5" :variants="wheelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
            <motion.path d="M4.5 10H19.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="screenVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
