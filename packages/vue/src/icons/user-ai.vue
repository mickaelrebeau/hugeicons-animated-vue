<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UserAiIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after user: the head reacts first; the shoulders follow with human weight
// generated from @hugeicons/core-free-icons
const bodyVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(0.96px)', 'translateY(0px)'],
    transition: {
      duration: 0.31,
      ease: 'easeOut',
      delay: 0.28,
    },
  },
}

const headVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(17.01deg)', 'rotate(-4.25deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.62,
      ease: 'easeInOut',
      times: [0, 0.4, 0.7, 1],
    },
  },
}

const personVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px) scale(1)', 'translateY(-1.46px) scale(1.03)', 'translateY(0.49px) scale(0.98)', 'translateY(0px) scale(1)'],
    transition: {
      duration: 0.54,
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
            <motion.path d="M15 2.4578C14.053 2.16035 13.0452 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.9548 21.8396 9.94704 21.5422 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
            <motion.path d="M5.49994 19.5001L6.06034 18.5194C6.95055 16.9616 8.60727 16.0001 10.4016 16.0001H13.5983C15.3926 16.0001 17.0493 16.9616 17.9395 18.5194L18.4999 19.5001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17.75px' }" />
            <motion.path d="M18.9737 2.02148C18.9795 1.99284 19.0205 1.99284 19.0263 2.02148C19.3302 3.50808 20.4919 4.66984 21.9785 4.97368C22.0072 4.97954 22.0072 5.02046 21.9785 5.02632C20.4919 5.33016 19.3302 6.49192 19.0263 7.97852C19.0205 8.00716 18.9795 8.00716 18.9737 7.97852C18.6698 6.49192 17.5081 5.33016 16.0215 5.02632C15.9928 5.02046 15.9928 4.97954 16.0215 4.97368C17.5081 4.66984 18.6698 3.50808 18.9737 2.02148Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 5px' }" />
          </svg>
        </div>
</template>
