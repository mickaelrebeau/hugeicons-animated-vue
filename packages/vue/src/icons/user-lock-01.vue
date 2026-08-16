<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UserLock01Icon' })

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
    transform: ['rotate(0deg)', 'rotate(17.04deg)', 'rotate(-4.26deg)', 'rotate(0deg)'],
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
    transform: ['translateY(0px) scale(1)', 'translateY(-1.47px) scale(1.03)', 'translateY(0.49px) scale(0.98)', 'translateY(0px) scale(1)'],
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
            <motion.path d="M14.502 8.00003C14.502 5.23861 12.2634 3.00003 9.50195 3.00003C6.74053 3.00003 4.50195 5.23861 4.50195 8.00003C4.50195 10.7615 6.74053 13 9.50195 13C12.2634 13 14.502 10.7615 14.502 8.00003Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 13px' }" />
            <motion.path d="M16.2374 15.6742V14.2523C16.2374 13.2846 17.0219 12.5 17.9897 12.5C18.9575 12.5 19.742 13.2846 19.742 14.2523V15.6742M16.3069 20.9995H19.6929C20.6898 20.9995 21.4979 20.1929 21.4979 19.198V17.6942C21.4979 16.6992 20.6898 15.8926 19.6929 15.8926H16.3069C15.3101 15.8926 14.502 16.6992 14.502 17.6942L14.502 19.198C14.502 20.1929 15.3101 20.9995 16.3069 20.9995Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 16.75px' }" />
            <motion.path d="M2.50195 20C2.50195 16.134 5.63596 13 9.50195 13C10.9892 13 12.3681 13.4638 13.502 14.2547" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 16.5px' }" />
          </svg>
        </div>
</template>
