<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DeleteColumnIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the X rattles and the column it marks fades
// authored from scripts/authored
const xVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-4deg) scale(0.97)',
      'rotate(3.2deg) scale(1.03)',
      'rotate(-1.2deg) scale(0.995)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.56, times: [0, 0.2, 0.46, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const columnVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.2, 0.2, 1],
    transition: { duration: 0.8, delay: 0.1, times: [0, 0.24, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M21.187 5.99805C20.9854 5.10929 20.6539 4.43424 20.1089 3.88929C18.7177 2.49805 16.4785 2.49805 12.0002 2.49805C7.52184 2.49805 5.28267 2.49805 3.89143 3.88929C2.50018 5.28053 2.50018 7.5197 2.50018 11.998C2.50018 16.4764 2.50018 18.7156 3.89143 20.1068C5.28267 21.498 7.52184 21.498 12.0002 21.498C16.4785 21.498 18.7177 21.498 20.1089 20.1068C20.6539 19.5619 20.9854 18.8868 21.187 17.998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M21.5 15L18.5 12M18.5 12L15.5 9M18.5 12L15.5 15M18.5 12L21.5 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="xVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 12px' }" />
            <path d="M9 21.5L9 2.5" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M2.5 15.5L9 15.5M2.5 8.5L9 8.5" stroke="currentColor" stroke-width="1.5" :variants="columnVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
