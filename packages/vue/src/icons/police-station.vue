<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PoliceStationIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the roof star glints and the windows light
// authored from scripts/authored
const windowsVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const starVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', opacity: 1 },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-26deg) scale(0.5)',
      'rotate(9deg) scale(1.2)',
      'rotate(0deg) scale(1)',
    ],
    opacity: [1, 0.5, 1, 1],
    transition: { duration: 0.62, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M15.6181 6.99985C16.2653 7.12386 16.7429 7.34165 17.1213 7.72416C18 8.61245 18 10.0421 18 12.9015V21.9998H6V12.9015C6 10.0421 6 8.61245 6.87868 7.72416C7.25705 7.34165 7.73473 7.12386 8.38188 6.99985" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M18 21.9998H21C21.4714 21.9998 21.7071 21.9998 21.8536 21.8534C22 21.707 22 21.4713 22 20.9998V15.9998C22 14.1142 22 13.1714 21.4142 12.5856C20.8284 11.9998 19.8856 11.9998 18 11.9998" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M6 21.9998H3C2.5286 21.9998 2.29289 21.9998 2.14645 21.8534C2 21.707 2 21.4713 2 20.9998V15.9998C2 14.1142 2 13.1714 2.58579 12.5856C3.17157 11.9998 4.11438 11.9998 6 11.9998" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M12 22L12 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M9 15H10.2M15 15H13.8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="windowsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8.04217 4C10.9662 4 12.0004 2 12.0004 2C12.0004 2 13.0338 4 15.9578 4C16.1752 5.6875 15.6528 9.65 12.0004 11C8.34791 9.65 7.82476 5.6875 8.04217 4Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="starVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6.5px' }" />
          </svg>
        </div>
</template>
