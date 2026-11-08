<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Radio01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the antenna wobbles and the speaker arcs pulse
// authored from scripts/authored
const soundVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const antennaVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.53px, -1.06px) rotate(-12deg)',
      'translate(0.24px, 0.80px) rotate(8.399999999999999deg)',
      'translate(-0.14px, -0.33px) rotate(-3.5999999999999996deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const ledVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.1, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <path d="M14 6H10C6.22876 6 4.34315 6 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14C22 10.2288 22 8.34315 20.8284 7.17157C19.6569 6 17.7712 6 14 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M17.4635 12.0003C18.5679 13.9132 17.9125 16.3591 15.9997 17.4635C14.0868 18.5679 11.6409 17.9125 10.5365 15.9997M17.4635 12.0003C16.3591 10.0875 13.9132 9.43209 12.0003 10.5365C10.0875 11.6409 9.43209 14.0868 10.5365 15.9997M17.4635 12.0003L10.5365 15.9997" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="soundVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 14px' }" />
            <motion.path d="M17 2L6.5 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="antennaVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.8px 4px' }" />
            <motion.path d="M6.125 10H6M6.25 10C6.25 10.1381 6.13807 10.25 6 10.25C5.86193 10.25 5.75 10.1381 5.75 10C5.75 9.86193 5.86193 9.75 6 9.75C6.13807 9.75 6.25 9.86193 6.25 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ledVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
