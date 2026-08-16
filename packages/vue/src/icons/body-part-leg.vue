<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BodyPartLegIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after user: the figure shifts its weight from head to feet
// generated from @hugeicons/core-free-icons
const headVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(14.92deg)', 'rotate(-3.73deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.64,
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
    transform: ['translateY(0px)', 'translateY(0.84px)', 'translateY(0px)'],
    transition: {
      duration: 0.32,
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
    transform: ['translateY(0px) scale(1)', 'translateY(-1.54px) scale(1.03)', 'translateY(0.51px) scale(0.98)', 'translateY(0px) scale(1)'],
    transition: {
      duration: 0.56,
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
            <motion.path d="M5.00183 2C7.69316 2.31359 13.8994 3.89572 16.6428 7.74552C16.9785 8.21643 17.3319 8.54976 17.9113 8.69637C18.6361 8.87638 19.2359 9.36245 19.4537 10.0961C19.6856 10.8944 20.1138 11.7364 19.9778 12.5901C19.9257 12.9169 19.7657 13.218 19.4457 13.82L15.0988 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.56px 22px' }" />
            <motion.path d="M4.00183 12C5.00183 13.7264 8.16622 14.5959 12.0018 13.7264C11.4156 14.0677 10.4146 14.6835 9.31712 15.9511C8.75814 16.5968 8.51959 17.4954 8.48067 18.4026C8.42865 19.615 8.24879 20.9338 7.62683 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 17px' }" />
            <motion.path d="M5.00183 7C5.00183 7 6.9608 7.28919 8.50183 8.5C9.50183 9.28571 11.4185 9.80952 12.0018 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 8.5px' }" />
          </svg>
        </div>
</template>
