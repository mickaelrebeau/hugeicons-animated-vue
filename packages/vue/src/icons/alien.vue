<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlienIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the head floats up and both eyes blink together — a hover, not a tilt
// authored from scripts/authored
const eyeLeftVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.14)', 'scaleY(1.08)', 'scaleY(1)'],
    transition: { duration: 0.5, delay: 0.12, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const mouthVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(1.25)', 'scaleX(1)'],
    transition: { duration: 0.56, delay: 0.2, times: [0, 0.42, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const headVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1.6px)', 'translateY(0.2px)', 'translateY(0px)'],
    transition: {
      duration: 0.72,
      times: [0, 0.4, 0.74, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M7.33333 10H6.5C6.22386 10 6 10.2239 6 10.5V11.3333C6 12.8061 7.19391 14 8.66667 14H9.5C9.77614 14 10 13.7761 10 13.5V12.6667C10 11.1939 8.80609 10 7.33333 10Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="eyeLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 12px' }" />
            <motion.path d="M16.6667 10H17C17.4714 10 17.7071 10 17.8536 10.1464C18 10.2929 18 10.5286 18 11V11.3333C18 12.8061 16.8061 14 15.3333 14H15C14.5286 14 14.2929 14 14.1464 13.8536C14 13.7071 14 13.4714 14 13V12.6667C14 11.1939 15.1939 10 16.6667 10Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="eyeLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 12px' }" />
            <motion.path d="M11 18H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="mouthVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M21 11C21 16.5228 15 22 12 22C9 22 3 16.5228 3 11C3 5.47715 7.02944 2 12 2C16.9706 2 21 5.47715 21 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
