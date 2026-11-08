<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Upload02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the solid arrow pushes up and the baseline stretches
// authored from scripts/authored
const arrowVariants: Variants = {
  normal: { transform: 'translateY(0px) scaleX(1)' },
  animate: {
    transform: [
      'translateY(0px) scaleX(1)',
      'translateY(-2.4px) scaleX(0.94)',
      'translateY(0.288px) scaleX(1.02)',
      'translateY(0px) scaleX(1)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const baseVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(1.1)', 'scaleX(0.98)', 'scaleX(1)'],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M16.9503 8.3183C17.198 7.68602 16.5075 6.92738 15.1266 5.41011C13.6701 3.80984 12.92 3.00959 11.9999 3C11.0798 3.00959 10.3297 3.80984 8.8732 5.41011C7.49228 6.92738 6.80182 7.68602 7.04953 8.3183C7.05858 8.34138 7.0684 8.36414 7.07899 8.38653C7.34917 8.95795 8.24467 8.99712 9.99989 8.9998V15.5C9.99989 15.965 9.99989 16.1975 10.051 16.3882C10.1897 16.9059 10.594 17.3102 11.1117 17.4489C11.3024 17.5 11.5349 17.5 11.9999 17.5C12.4648 17.5 12.6973 17.5 12.8881 17.4489C13.4057 17.3102 13.81 16.9059 13.9487 16.3882C13.9999 16.1975 13.9999 15.965 13.9999 15.5V8.9998C15.7551 8.99712 16.6506 8.95796 16.9208 8.38653C16.9314 8.36414 16.9412 8.34138 16.9503 8.3183Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.3px' }" />
            <motion.path d="M4.99998 21H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="baseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
          </svg>
        </div>
</template>
