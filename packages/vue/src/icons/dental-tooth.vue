<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DentalToothIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the tooth gleams
// authored from scripts/authored
const toothVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.06)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const glintVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(0.2)', opacity: 0 },
  animate: {
    transform: [
      'rotate(0deg) scale(0.2)',
      'rotate(0deg) scale(0.2)',
      'rotate(45deg) scale(1.1)',
      'rotate(90deg) scale(0.2)',
    ],
    opacity: [0, 0, 1, 0],
    transition: {
      duration: 0.8,
      delay: 0.14,
      times: [0, 0.3, 0.6, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M9 6C9.5 6.5 10.5033 6.41228 12 5.17632M12 5.17632C11.7786 4.99352 11.5486 4.78582 11.311 4.55032C9.0053 2.2656 5.86519 2.71292 4.39399 4.55032C3.37784 5.8194 0.777521 8.97857 7.14215 20.2396C7.40566 20.7058 7.9306 21 8.49601 21C9.398 21 10.103 20.2801 10.1323 19.4399C10.1945 17.6579 10.5397 15.6035 12 15.6035C13.4603 15.6035 13.8055 17.6579 13.8677 19.4399C13.897 20.2801 14.602 21 15.504 21C16.0694 21 16.5943 20.7058 16.8578 20.2396C23.2225 8.97857 20.6222 5.8194 19.606 4.55032C18.1348 2.71292 14.9947 2.2656 12.689 4.55032C12.4514 4.78582 12.2214 4.99352 12 5.17632Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="toothVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.6px' }" />
            <motion.path d="M17.5 3.6V5.6M16.5 4.6H18.5" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="glintVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
