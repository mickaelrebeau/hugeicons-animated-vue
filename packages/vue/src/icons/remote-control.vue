<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RemoteControlIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the big button presses and the small keys blink in turn
// authored from scripts/authored
const keyVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.1, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const key2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const key3Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.15, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const key4Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.25, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const buttonVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.78)', 'scale(0.78)', 'scale(1)'],
    transition: {
      duration: 0.5,
      times: [0, 0.26, 0.72, 1],
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
            <path d="M12.5 2C15.7998 2 17.4497 2 18.4749 3.02513C19.5 4.05025 19.5 5.70017 19.5 9V15C19.5 18.2998 19.5 19.9497 18.4749 20.9749C17.4497 22 15.7998 22 12.5 22H11.5C8.20017 22 6.55025 22 5.52513 20.9749C4.5 19.9497 4.5 18.2998 4.5 15L4.5 9C4.5 5.70017 4.5 4.05025 5.52513 3.02513C6.55025 2 8.20017 2 11.5 2L12.5 2Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M8 15H10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="keyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8 18H10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="key2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14 15H16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="key3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14 18H16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="key4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z" stroke="currentColor" stroke-width="1.5" :variants="buttonVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
          </svg>
        </div>
</template>
