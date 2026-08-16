<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WifiUnlockIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after square-lock-01: the shackle swings open on its hinge, hangs, then clicks shut
// generated from @hugeicons/core-free-icons
const bodyVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-1.04deg) scale(0.985)', 'rotate(1.45deg) scale(1.018)', 'rotate(-0.36deg) scale(0.997)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.73,
      times: [0, 0.18, 0.48, 0.78, 1],
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const shackleVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-17.03deg)', 'rotate(-15.14deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.78,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.87px) rotate(-2.2deg)', 'translateY(0.44px) rotate(0.77deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
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
            <motion.path d="M8.5 15.5C9.76795 14.2321 11.4378 13.7679 13 14.1077" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.75px 14.63px' }" />
            <motion.path d="M5.5 12C8.67327 8.85033 12.1221 8.16715 15.5 10.0149" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shackleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 10.08px' }" />
            <motion.path d="M2 8C8.31579 2.66669 15.6842 2.66668 22 7.99989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16.5312 15.36V13.9523C16.5312 12.8741 17.4127 12 18.5 12C18.9887 12 19.4359 12.1766 19.7801 12.469M17.8437 21H19.1563C20.1777 21 20.6884 21 21.0749 20.7951C21.3802 20.6333 21.6302 20.3854 21.7934 20.0827C22 19.6993 22 19.1929 22 18.18C22 17.1671 22 16.6607 21.7934 16.2773C21.6302 15.9746 21.3802 15.7267 21.0749 15.5649C20.6884 15.36 20.1777 15.36 19.1563 15.36H17.8437C16.8223 15.36 16.3116 15.36 15.9251 15.5649C15.6198 15.7267 15.3698 15.9746 15.2066 16.2773C15 16.6607 15 17.1671 15 18.18C15 19.1929 15 19.6993 15.2066 20.0827C15.3698 20.3854 15.6198 20.6333 15.9251 20.7951C16.3116 21 16.8223 21 17.8437 21Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
