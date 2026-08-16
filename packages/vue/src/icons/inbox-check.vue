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

// after circle-check: the confirmation stroke writes from tail to tip and lands once
// generated from @hugeicons/core-free-icons
const frameVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg) scale(1)', 'translateY(0px) rotate(0deg) scale(1)', 'translateY(-0.35px) rotate(0.8deg) scale(1.08)', 'translateY(0px) rotate(0deg) scale(1)'],
    transition: {
      duration: 0.81,
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
      times: [0, 0.78, 0.9, 1],
    },
  },
}

const markVariants: Variants = {
  normal: {
    pathLength: 1,
    pathOffset: 0,
    visibility: 'visible',
  },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.88,
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
      ],
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
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
            <motion.path d="M20.9999 13.9824H16.0742C15.2321 13.9824 14.5705 14.686 14.1994 15.4296C13.7962 16.2375 12.9888 16.9824 11.4999 16.9824C10.011 16.9824 9.20365 16.2375 8.80046 15.4296C8.42934 14.686 7.76769 13.9824 6.92558 13.9824H1.99992" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 15.48px' }" />
            <motion.path d="M16.6601 5.97537C16.6601 5.97537 17.0371 6.09064 17.5607 6.85858C17.5607 6.85858 18.3287 5.20059 19.3933 4.62463" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.03px 5.74px' }" />
            <motion.path d="M21.0166 12.4916C21.0166 16.9739 21.0166 19.215 19.6242 20.6076C18.2317 22 15.9905 22 11.5083 22C7.026 22 4.78486 22 3.39239 20.6076C1.99992 19.215 1.99992 16.9739 1.99992 12.4916C1.99992 8.00935 1.99992 5.76821 3.39239 4.37574C4.78486 2.98328 7.026 2.98328 11.5083 2.98328" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.51px 12.49px' }" />
            <motion.path d="M22.0001 5.98324C22.0001 8.18312 20.2167 9.96647 18.0169 9.96647C15.817 9.96647 14.0336 8.18312 14.0336 5.98324C14.0336 3.78336 15.817 2 18.0169 2C20.2167 2 22.0001 3.78336 22.0001 5.98324Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.02px 5.98px' }" />
          </svg>
        </div>
</template>
