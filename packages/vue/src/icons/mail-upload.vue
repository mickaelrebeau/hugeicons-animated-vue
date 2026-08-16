<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MailUploadIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after upload-01: the arrow launches off the top
// generated from @hugeicons/core-free-icons
const trayVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(0.94px)', 'translateY(0px)'],
    transition: {
      duration: 0.31,
      ease: 'easeOut',
      delay: 0.08,
    },
  },
}

const arrowVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
    visibility: 'visible',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(-5.38px)', 'translateY(5.38px)', 'translateY(0px)'],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.73,
      times: [0, 0.42, 0.5, 1],
      ease: ['easeIn', 'linear', 'easeOut'],
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
            <motion.path d="M13.5 19.4902C12.0328 19.5093 10.5713 19.5004 9.09883 19.4634C5.95033 19.3843 4.37608 19.3448 3.24496 18.2093C2.11383 17.0739 2.08114 15.5411 2.01577 12.4756C1.99475 11.4899 1.99474 10.51 2.01576 9.52435C2.08114 6.45882 2.11382 4.92605 3.24495 3.79062C4.37608 2.65518 5.95033 2.61563 9.09882 2.53653C11.0393 2.48778 12.9607 2.48778 14.9012 2.53654C18.0497 2.61565 19.6239 2.6552 20.7551 3.79063C21.8862 4.92606 21.9189 6.45883 21.9842 9.52436C21.9947 10.0172 22 10.5086 22 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="trayVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
            <motion.path d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="trayVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7.68px' }" />
            <motion.path d="M16 16C16.4915 15.4943 17.7998 13.5 18.5 13.5M21 16C20.5085 15.4943 19.2002 13.5 18.5 13.5M18.5 13.5V21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 17.5px' }" />
          </svg>
        </div>
</template>
