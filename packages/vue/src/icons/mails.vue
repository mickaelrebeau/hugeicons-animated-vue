<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MailsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the back envelope slides out from behind the front one
// authored from scripts/authored
const backVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1px, -1px)',
      'translate(-0.15px, 0.15px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
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
            <motion.path d="M13 3H16C18.8284 3 20.2426 3 21.1213 3.87868C22 4.75736 22 6.17157 22 9C22 11.8284 22 13.2426 21.1213 14.1213C20.2426 15 18.8284 15 16 15H13C10.1716 15 8.75736 15 7.87868 14.1213C7 13.2426 7 11.8284 7 9C7 6.17157 7 4.75736 7.87868 3.87868C8.75736 3 10.1716 3 13 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="backVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 9px' }" />
            <path d="M17 17.9358C16.9036 18.9318 16.6857 19.6022 16.1933 20.1025C15.3102 21 13.8888 21 11.0459 21H8.0306C5.18775 21 3.76632 21 2.88316 20.1025C2 19.2051 2 17.7606 2 14.8717C2 11.9828 2 10.5383 2.88316 9.64085C3.18449 9.33464 3.54848 9.1329 4.0102 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M21.7585 6.12671L17.587 8.31597C16.083 9.1053 15.331 9.49996 14.5 9.49996C13.6691 9.49996 12.917 9.1053 11.413 8.31597L7.24152 6.12671" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="backVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 7.8px' }" />
          </svg>
        </div>
</template>
