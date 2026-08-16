<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Agreement01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two hands drive together, clasp, and pump twice before letting go
// authored from scripts/authored
const leftHandVariants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: {
    transform: [
      'translateX(0px)',
      'translateX(1.1px)',
      'translateX(0.6px)',
      'translateX(0.95px)',
      'translateX(0px)',
    ],
    transition: {
      duration: 0.82,
      times: [0, 0.3, 0.48, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const rightHandVariants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: {
    transform: [
      'translateX(0px)',
      'translateX(-1.1px)',
      'translateX(-0.6px)',
      'translateX(-0.95px)',
      'translateX(0px)',
    ],
    transition: {
      duration: 0.82,
      times: [0, 0.3, 0.48, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
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
            <motion.path d="M2 7H4.86503C5.59174 7 6.28868 6.64031 6.80255 6.00005C7.53643 5.08565 8.62195 4.76636 9.60655 5.17529L11 5.75402M2 15.9668H3.62068C4.78017 15.9668 5.35991 15.9668 5.90812 16.1213C5.93477 16.1288 5.96134 16.1366 5.98782 16.1446C6.53259 16.3101 7.01496 16.6209 7.97971 17.2427C9.86787 18.4596 10.812 19.0681 11.8407 18.994C11.8892 18.9905 11.9376 18.9858 11.9859 18.9801C13.0096 18.8577 13.8119 18.0821 15.4166 16.5308L17 15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="leftHandVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 12px' }" />
            <motion.path d="M22 7.23384H19.4832C18.4174 7.23384 17.6649 6.65468 16.9003 5.88258C16.4051 5.38247 15.7731 5.08772 15.1088 5.04713C14.366 5.00175 13.5053 4.93785 12.784 5.13601C11.9811 5.35656 11.451 5.96063 10.8902 6.59196L9.44309 8.22111C8.8523 8.88621 8.8523 9.96455 9.44309 10.6297C9.953 11.2037 10.7519 11.2928 11.3519 10.8424C11.7837 10.5184 12.2743 9.99506 12.7831 9.83025C13.3557 9.64476 13.7109 10.0615 14.0354 10.4999L16.3556 13.6344C17.2167 14.7976 17.6472 15.3793 18.2358 15.6896C18.8244 16 19.4969 16 20.842 16H22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="rightHandVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '22px 10.5px' }" />
          </svg>
        </div>
</template>
