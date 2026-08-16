<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BabyBottleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after user: the small head bobs while the body follows softly
// generated from @hugeicons/core-free-icons
const bodyVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(0.85px)', 'translateY(0px)'],
    transition: {
      duration: 0.28,
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
    transform: ['rotate(0deg)', 'rotate(15.17deg)', 'rotate(-3.79deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.57,
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
    transform: ['translateY(0px) scale(1)', 'translateY(-1.56px) scale(1.03)', 'translateY(0.52px) scale(0.98)', 'translateY(0px) scale(1)'],
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
            <motion.path d="M17 10.4999C17 10.4999 18 12.9999 18 16.2499C18 17.4211 17.8701 18.4948 17.704 19.3893C17.4952 20.5136 17.3908 21.0757 16.835 21.5378C16.2792 21.9999 15.6168 21.9999 14.2919 21.9999H9.70813C8.38323 21.9999 7.72079 21.9999 7.16499 21.5378C6.60919 21.0757 6.50478 20.5136 6.29598 19.3893C6.12986 18.4948 6 17.4211 6 16.2499C6 12.9999 7 10.4999 7 10.4999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.25px' }" />
            <motion.path d="M7.00011 10.5109H17.0001C17.148 9.69502 16.9213 8.12207 14.9607 7.49988C14.4954 7.35226 13.95 7.07619 13.7045 6.61167C13.4872 6.20036 13.3855 5.64345 13.7112 5.02533C14.3134 3.88252 13.7323 2.48044 12.4822 2.08711C12.326 2.03794 12.1632 2.00167 12.0001 2.00006C11.826 1.99834 11.6517 2.03461 11.4849 2.08711C10.2348 2.48044 9.65373 3.88252 10.2559 5.02533C10.5816 5.64345 10.4799 6.20036 10.2626 6.61167C10.0247 7.06186 9.50673 7.46163 9.02371 7.61486C7.67057 8.04418 6.73858 9.06774 7.00011 10.5109Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.94px 10.51px' }" />
            <motion.path d="M15 13.9999H17.5M15 17.9999H17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.25px 16px' }" />
          </svg>
        </div>
</template>
