<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiSearchIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the glass rocks over what it is reading and the letter comes up sharp
// authored from scripts/authored
const handleVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-5deg)', 'rotate(1.4deg)', 'rotate(0deg)'],
    transition: { duration: 0.64, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const letterVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.5, delay: 0.18, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M17.5 17.5L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 17.5px' }" />
            <motion.path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="handleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 11px' }" />
            <motion.path d="M6.5 14L8.34189 8.47434C8.43631 8.19107 8.7014 8 9 8C9.2986 8 9.56369 8.19107 9.65811 8.47434L11.5 14M14.5 8V14M7.5 12H10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="letterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 11px' }" />
          </svg>
        </div>
</template>
