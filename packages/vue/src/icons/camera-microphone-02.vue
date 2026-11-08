<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CameraMicrophone02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the side light blinks on and sound rings out around the mic
// authored from scripts/authored
const ledVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1],
    transition: { duration: 0.5, times: [0, 0.25, 0.5, 0.75, 1], ease: 'linear' },
  },
};

const wavesVariants: Variants = {
  normal: { transform: 'scale(0.7)', opacity: 0 },
  animate: {
    transform: ['scale(0.7)', 'scale(0.7)', 'scale(1)', 'scale(1.2)', 'scale(1.2)'],
    opacity: [0, 0, 1, 0, 0],
    transition: {
      duration: 0.7,
      delay: 0.1,
      times: [0, 0.12, 0.4, 0.9, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        'linear',
      ],
    },
  },
};

const waves2Variants: Variants = {
  normal: { transform: 'scale(0.7)', opacity: 0 },
  animate: {
    transform: ['scale(0.7)', 'scale(0.7)', 'scale(1)', 'scale(1.2)', 'scale(1.2)'],
    opacity: [0, 0, 1, 0, 0],
    transition: {
      duration: 0.7,
      delay: 0.36,
      times: [0, 0.12, 0.4, 0.9, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
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
            <path d="M22 14.5V8.27201C22 7.01721 20.9828 6 19.728 6C19.2679 6 18.8327 5.79084 18.5452 5.43154L18 4.75C17.6086 4.26074 17.4129 4.01611 17.1647 3.84705C16.9991 3.73428 16.8176 3.64702 16.6261 3.58819C16.3391 3.5 16.0258 3.5 15.3992 3.5H13.6008C12.9742 3.5 12.6609 3.5 12.3739 3.58819C12.1824 3.64702 12.0009 3.73428 11.8353 3.84705C11.5871 4.01611 11.3914 4.26074 11 4.75C10.6086 5.23926 10.4129 5.48389 10.1647 5.65295C9.99914 5.76572 9.81759 5.85298 9.62612 5.91181C9.33906 6 9.02578 6 8.39922 6H8C5.17157 6 3.75736 6 2.87868 6.87868C2 7.75736 2 9.17157 2 12V14.5C2 17.3284 2 18.7426 2.87868 19.6213C3.75736 20.5 5.17157 20.5 8 20.5H16C18.8284 20.5 20.2426 20.5 21.1213 19.6213C22 18.7426 22 17.3284 22 14.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M5 9H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ledVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M14.5001 16C15.8963 16 17.5 15 18 14M14.5001 16C13.1039 16 11.5002 15 11.0002 14M14.5001 16L14.5001 17.5M14.5001 13.5C13.6717 13.5 13.0001 12.8284 13.0001 12L13.0001 10C13.0001 9.17157 13.6717 8.5 14.5001 8.5C15.3285 8.5 16.0001 9.17157 16.0001 10V12C16.0001 12.8284 15.3285 13.5 14.5001 13.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M10.1 9.5C9.4 10.5 9.4 12.5 10.1 13.5M18.9 9.5C19.599999999999998 10.5 19.599999999999998 12.5 18.9 13.5" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="wavesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M10.1 9.5C9.4 10.5 9.4 12.5 10.1 13.5M18.9 9.5C19.599999999999998 10.5 19.599999999999998 12.5 18.9 13.5" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="waves2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
