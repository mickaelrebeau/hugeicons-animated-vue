<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'InboxCheckIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the check badge pops and the tray dips
// authored from scripts/authored
const trayVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 0.8px)',
      'translate(0px, -0.12px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.24,
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

const checkVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      delay: 0.1,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const badgeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.15)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M20.9999 13.9824H16.0742C15.2321 13.9824 14.5705 14.686 14.1994 15.4296C13.7962 16.2375 12.9888 16.9824 11.4999 16.9824C10.011 16.9824 9.20365 16.2375 8.80046 15.4296C8.42934 14.686 7.76769 13.9824 6.92558 13.9824H1.99992" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="trayVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15px' }" />
            <motion.path d="M16.6601 5.97537C16.6601 5.97537 17.0371 6.09064 17.5607 6.85858C17.5607 6.85858 18.3287 5.20059 19.3933 4.62463" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="checkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M21.0166 12.4916C21.0166 16.9739 21.0166 19.215 19.6242 20.6076C18.2317 22 15.9905 22 11.5083 22C7.026 22 4.78486 22 3.39239 20.6076C1.99992 19.215 1.99992 16.9739 1.99992 12.4916C1.99992 8.00935 1.99992 5.76821 3.39239 4.37574C4.78486 2.98328 7.026 2.98328 11.5083 2.98328" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M22.0001 5.98324C22.0001 8.18312 20.2167 9.96647 18.0169 9.96647C15.817 9.96647 14.0336 8.18312 14.0336 5.98324C14.0336 3.78336 15.817 2 18.0169 2C20.2167 2 22.0001 3.78336 22.0001 5.98324Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="badgeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 6px' }" />
          </svg>
        </div>
</template>
