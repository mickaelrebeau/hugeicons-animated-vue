<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Upload03Icon' })

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
    transform: ['translateY(0px)', 'translateY(0.99px)', 'translateY(0px)'],
    transition: {
      duration: 0.32,
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
    transform: ['translateY(0px)', 'translateY(-4.74px)', 'translateY(4.74px)', 'translateY(0px)'],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
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
            <motion.path d="M14 21.5H9.99995C6.71247 21.5 5.06873 21.5 3.96238 20.592C3.75984 20.4258 3.57413 20.2401 3.40791 20.0376C2.49995 18.9312 2.49995 17.2875 2.49995 14C2.49995 10.7125 2.49995 9.06878 3.40791 7.96243C3.57413 7.75989 3.75984 7.57418 3.96238 7.40796C5.06873 6.5 6.71247 6.5 9.99995 6.5H14C17.2874 6.5 18.9312 6.5 20.0375 7.40796C20.2401 7.57418 20.4258 7.75989 20.592 7.96243C21.5 9.06878 21.5 10.7125 21.5 14C21.5 17.2875 21.5 18.9312 20.592 20.0376C20.4258 20.2401 20.2401 20.4258 20.0375 20.592C18.9312 21.5 17.2874 21.5 14 21.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="trayVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M2.49995 14.5V10.5C2.49995 6.72876 2.49995 4.84315 3.67153 3.67157C4.8431 2.5 6.72872 2.5 10.5 2.5H13.5C17.2712 2.5 19.1568 2.5 20.3284 3.67157C21.5 4.84315 21.5 6.72876 21.5 10.5V14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="trayVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.5px' }" />
            <motion.path d="M15 13.5C15 13.5 12.7905 10.5 11.9999 10.5C11.2094 10.5 8.99995 13.5 8.99995 13.5M11.9999 11L12 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
          </svg>
        </div>
</template>
