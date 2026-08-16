<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UserUnlock02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after square-lock-01: the shackle swings open on its hinge, hangs, then clicks shut
// generated from @hugeicons/core-free-icons
const shackleVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-19.53deg)', 'rotate(-17.36deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.86,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

const bodyVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-1deg) scale(0.985)', 'rotate(1.4deg) scale(1.018)', 'rotate(-0.35deg) scale(0.997)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.71,
      times: [0, 0.18, 0.48, 0.78, 1],
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.8px) rotate(-2.12deg)', 'translateY(0.42px) rotate(0.74deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
      ease: [0.23, 1, 0.32, 1],
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
            <motion.path d="M14.5 7.5C14.5 4.73858 12.2614 2.5 9.5 2.5C6.73858 2.5 4.5 4.73858 4.5 7.5C4.5 10.2614 6.73858 12.5 9.5 12.5C12.2614 12.5 14.5 10.2614 14.5 7.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shackleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 7.5px' }" />
            <motion.path d="M16.5 19.5C16.5 15.634 13.366 12.5 9.5 12.5C5.63401 12.5 2.5 15.634 2.5 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 16px' }" />
            <motion.path d="M17.5 9H20.5C21.0523 9 21.5 9.44772 21.5 10V12C21.5 12.5523 21.0523 13 20.5 13H17.5C16.9477 13 16.5 12.5523 16.5 12V10C16.5 9.44772 16.9477 9 17.5 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17.5 9V7.5C17.5 6.67157 18.1716 6 19 6C19.3842 6 19.7346 6.14443 20 6.38195" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
