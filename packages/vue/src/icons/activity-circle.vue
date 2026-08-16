<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ActivityCircleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the dial breathes while the reading is traced across it
// authored from scripts/authored
const dialVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.98)', 'scale(1.025)', 'scale(1)'],
    transition: { duration: 0.86, times: [0, 0.3, 0.74, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const traceVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.84,
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
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
            <motion.path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dialVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2 12.329H6.08839C6.48134 12.329 6.67782 12.329 6.8471 12.2488C6.9301 12.2095 7.0073 12.1565 7.07611 12.0917C7.21644 11.9595 7.30431 11.7644 7.48005 11.3742C8.43341 9.25756 8.91009 8.19922 9.52719 8.03926C9.81603 7.96439 10.119 7.9972 10.3894 8.13262C10.967 8.42196 11.2505 9.56261 11.8174 11.8439L12.087 12.929C12.6981 15.3882 13.0037 16.6179 13.627 16.8936C13.8758 17.0036 14.1485 17.029 14.4104 16.9665C15.0663 16.81 15.5522 15.6541 16.524 13.3424C16.7018 12.9196 16.7906 12.7082 16.9402 12.567C17.0032 12.5075 17.0732 12.458 17.1484 12.4198C17.3269 12.329 17.537 12.329 17.9573 12.329H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="traceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
          </svg>
        </div>
</template>
