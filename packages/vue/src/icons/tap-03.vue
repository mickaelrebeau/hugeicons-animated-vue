<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Tap03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the hand wags as the ripple pulses
// authored from scripts/authored
const handVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.11px, 0.08px) rotate(8deg)',
      'translate(-0.84px, 0.04px) rotate(-6deg)',
      'translate(0.42px, 0.01px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.66,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const rippleVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.16, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

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
            <motion.path d="M6.70235 13.1617L8.71072 14.8945V6.15789C8.71072 5.24227 9.44813 4.5 10.3578 4.5C11.2674 4.5 12.0048 5.24226 12.0048 6.15789V10.6314L14.817 11.0838C16.6321 11.3579 17.5397 11.4949 18.179 11.8804C19.235 12.5172 20 13.4735 20 14.8695C20 15.8419 19.7612 16.4942 19.1808 18.247C18.8125 19.3591 18.6284 19.9152 18.3281 20.3554C17.8337 21.0801 17.1043 21.6093 16.2649 21.8522C15.7551 21.9998 15.1728 21.9998 14.0081 21.9998H13.0209C11.4725 21.9998 10.6983 21.9998 10.0091 21.7138C9.88545 21.6625 9.76465 21.6046 9.64717 21.5404C8.99204 21.1823 8.50384 20.5775 7.52744 19.3679L4.3665 15.4519C3.88077 14.8501 3.87753 13.9889 4.35872 13.3835C4.93708 12.6557 5.99941 12.5552 6.70235 13.1617Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.9px 13.2px' }" />
            <motion.path d="M14.3164 6C14.3164 3.79086 12.5255 2 10.3164 2C8.10727 2 6.31641 3.79086 6.31641 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rippleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.3px 4px' }" />
          </svg>
        </div>
</template>
