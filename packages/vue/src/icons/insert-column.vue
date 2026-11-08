<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'InsertColumnIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the plus turns in the new column slot
// authored from scripts/authored
const plusVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(18deg)',
      'rotate(62.99999999999999deg)',
      'rotate(92.7deg)',
      'rotate(90deg)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
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
            <motion.path d="M21.5 12L17.5 12M17.5 12H13.5M17.5 12V16M17.5 12L17.5 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 12px' }" />
            <path d="M9 21.5L9 2.5" stroke="currentColor" stroke-width="1.5" />
            <path d="M2.5 15.5L9 15.5M2.5 8.5L9 8.5" stroke="currentColor" stroke-width="1.5" />
          </svg>
        </div>
</template>
