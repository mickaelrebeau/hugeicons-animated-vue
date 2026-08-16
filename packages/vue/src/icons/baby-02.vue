<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Baby02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after user: the small head bobs while the body follows softly
// generated from @hugeicons/core-free-icons
const headVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(15.96deg)', 'rotate(-3.99deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.59,
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
    transform: ['translateY(0px)', 'translateY(0.9px)', 'translateY(0px)'],
    transition: {
      duration: 0.29,
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
    transform: ['translateY(0px) scale(1)', 'translateY(-1.63px) scale(1.03)', 'translateY(0.54px) scale(0.98)', 'translateY(0px) scale(1)'],
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
            <motion.circle cx="12" cy="8" r="6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M16.874 12C17.5826 13.037 18 14.3093 18 15.6842C18 16.5017 17.8524 17.2829 17.5838 18M7.12605 12C6.41738 13.037 6 14.3093 6 15.6842C6 19.1723 8.68629 22 12 22C14.5371 22 16.7064 20.3424 17.5838 18M17.5838 18C14.8509 16.8 12.0559 14.8333 11 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <motion.path d="M11.9992 2C11.0051 2 10.1992 2.7835 10.1992 3.75C10.1992 4.7165 11.0051 5.5 11.9992 5.5C12.4602 5.5 12.8808 5.3315 13.1992 5.0544" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.7px 3.75px' }" />
            <motion.path d="M9.65 8.4993H9.6M14.4492 8.49844H14.3992M9.7 8.4993C9.7 8.55453 9.65523 8.5993 9.6 8.5993C9.54477 8.5993 9.5 8.55453 9.5 8.4993C9.5 8.44407 9.54477 8.3993 9.6 8.3993C9.65523 8.3993 9.7 8.44407 9.7 8.4993ZM14.4992 8.49844C14.4992 8.55367 14.4544 8.59844 14.3992 8.59844C14.344 8.59844 14.2992 8.55367 14.2992 8.49844C14.2992 8.44321 14.344 8.39844 14.3992 8.39844C14.4544 8.39844 14.4992 8.44321 14.4992 8.49844Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.5px' }" />
          </svg>
        </div>
</template>
