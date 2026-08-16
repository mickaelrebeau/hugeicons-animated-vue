<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UserUnlockIcon' })

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
    transform: ['rotate(0deg)', 'rotate(-18.61deg)', 'rotate(-16.54deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.83,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

const bodyVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-0.95deg) scale(0.985)', 'rotate(1.32deg) scale(1.018)', 'rotate(-0.33deg) scale(0.997)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.68,
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
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.71px) rotate(-2.01deg)', 'translateY(0.4px) rotate(0.71deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M14.502 8C14.502 5.23858 12.2635 3 9.50204 3C6.74062 3 4.50204 5.23858 4.50204 8C4.50204 10.7614 6.74062 13 9.50204 13C12.2635 13 14.502 10.7614 14.502 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shackleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 8px' }" />
            <motion.path d="M16.2375 15.6747V14.2523C16.2375 13.2845 17.022 12.5 17.9898 12.5C18.4669 12.5 18.8995 12.6907 19.2155 13M16.307 21H19.693C20.6899 21 21.498 20.1934 21.498 19.1984V17.6947C21.498 16.6997 20.6899 15.8931 19.693 15.8931H16.307C15.3102 15.8931 14.502 16.6997 14.502 17.6947L14.502 19.1984C14.502 20.1934 15.3102 21 16.307 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 16.75px' }" />
            <motion.path d="M2.50204 20C2.50204 16.134 5.63605 13 9.50204 13C10.9893 13 12.3682 13.4638 13.502 14.2547" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
