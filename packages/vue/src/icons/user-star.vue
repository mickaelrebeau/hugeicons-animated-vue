<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UserStarIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after user: the head reacts first; the shoulders follow with human weight
// generated from @hugeicons/core-free-icons
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
            <motion.path d="M15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13C12.7614 13 15 10.7614 15 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 13px' }" />
            <motion.path d="M3 20C3 16.134 6.13401 13 10 13C11.275 13 12.4704 13.3409 13.5 13.9365" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.25px 16.5px' }" />
            <motion.path d="M18.1047 14.5055L18.7206 15.7475C18.8046 15.9204 19.0286 16.0862 19.2175 16.118L20.3339 16.305C21.0478 16.425 21.2158 16.9472 20.7014 17.4624L19.8335 18.3374C19.6865 18.4856 19.606 18.7715 19.6515 18.9761L19.9 20.0594C20.096 20.9168 19.6445 21.2485 18.8921 20.8004L17.8457 20.1758C17.6567 20.0629 17.3453 20.0629 17.1528 20.1758L16.1064 20.8004C15.3575 21.2485 14.9025 20.9133 15.0985 20.0594L15.347 18.9761C15.3925 18.7715 15.312 18.4856 15.165 18.3374L14.2971 17.4624C13.7861 16.9472 13.9506 16.425 14.6646 16.305L15.7809 16.118C15.9664 16.0862 16.1904 15.9204 16.2744 15.7475L16.8903 14.5055C17.2263 13.8315 17.7722 13.8315 18.1047 14.5055Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 17.54px' }" />
          </svg>
        </div>
</template>
