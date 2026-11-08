<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ColumnsThreeCogIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cog turns a full revolution in the corner of the table
// authored from scripts/authored
const cogVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(72deg)',
      'rotate(251.99999999999997deg)',
      'rotate(370.8deg)',
      'rotate(360deg)',
    ],
    transition: {
      duration: 1,
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
            <motion.path d="M20 17.5C20 18.8807 18.8807 20 17.5 20M20 17.5C20 16.1193 18.8807 15 17.5 15M20 17.5H21.5M17.5 20C16.1193 20 15 18.8807 15 17.5M17.5 20V21.5M15 17.5C15 16.1193 16.1193 15 17.5 15M15 17.5H13.5M17.5 15V13.5M19.2678 15.7322L20.3284 14.6716M15.7322 19.2678L14.6716 20.3284M19.2678 19.2678L20.3284 20.3284M15.7322 15.7322L14.6716 14.6716" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cogVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 17.5px' }" />
            <path d="M20.4993 10.5C20.4912 6.91543 20.3921 5.02814 19.182 3.81802C17.864 2.5 15.7426 2.5 11.5 2.5C7.25736 2.5 5.13604 2.5 3.81802 3.81802C2.5 5.13604 2.5 7.25736 2.5 11.5C2.5 15.7426 2.5 17.864 3.81802 19.182C5.02814 20.3921 6.91543 20.4912 10.5 20.4993" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M8.5 3V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M14.5 3V10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
