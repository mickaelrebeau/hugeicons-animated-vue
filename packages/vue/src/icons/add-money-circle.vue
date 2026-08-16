<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AddMoneyCircleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the amount jumps up as it is credited, the coin edge answers, and the add mark is stamped above
// authored from scripts/authored
const amountVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1.5px)', 'translateY(0.3px)', 'translateY(0px)'],
    transition: {
      duration: 0.66,
      times: [0, 0.36, 0.7, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const coinVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.975)', 'scale(1.02)', 'scale(1)'],
    transition: { duration: 0.56, times: [0, 0.34, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const plusVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.5, delay: 0.16, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M11 9.5H12.5C13.3284 9.5 14 10.1716 14 11M11 9.5H9.5C8.67157 9.5 8 10.1716 8 11V11.5C8 12.3284 8.67157 13 9.5 13H12.5C13.3284 13 14 13.6716 14 14.5V15C14 15.8284 13.3284 16.5 12.5 16.5H11M11 9.5V8M11 16.5H9.5C8.67157 16.5 8 15.8284 8 15M11 16.5V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="amountVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 18px' }" />
            <motion.path d="M12 4.05493C11.6717 4.01863 11.338 4 11 4C6.02944 4 2 8.02944 2 13C2 17.9705 6.02944 22 11 22C15.9705 22 20 17.9705 20 13C20 12.662 19.9814 12.3283 19.9451 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="coinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 13px' }" />
            <motion.path d="M18.5 2V9M22 5.5L15 5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 5.5px' }" />
          </svg>
        </div>
</template>
