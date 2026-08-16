<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiBrain03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the skull breathes once and the letter resolves inside it
// authored from scripts/authored
const brainVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.032)', 'scale(1)'],
    transition: { duration: 0.68, times: [0, 0.36, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const letterVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-7deg) scale(0.82)',
      'rotate(2deg) scale(1.08)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.58, delay: 0.08, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M4 16.4999C4 18.1567 5.34315 19.4999 7 19.4999C7 20.8806 8.11929 21.9999 9.5 21.9999C10.8807 21.9999 12 20.8806 12 19.4999C12 20.8806 13.1193 21.9998 14.5 21.9998C15.8807 21.9998 17 20.8805 17 19.4998C18.6569 19.4998 20 18.1566 20 16.4998C20 15.9311 19.8418 15.3994 19.567 14.9463C20.9527 14.6812 22 13.4628 22 11.9998C22 10.5367 20.9527 9.31831 19.567 9.05325C19.8418 8.60012 20 8.06842 20 7.49976C20 5.8429 18.6569 4.49976 17 4.49976C17 3.11904 15.8807 1.99976 14.5 1.99976C13.1193 1.99976 12 3.11914 12 4.49985C12 3.11914 10.8807 1.99985 9.5 1.99985C8.11929 1.99985 7 3.11914 7 4.49985C5.34315 4.49985 4 5.843 4 7.49985C4 8.06851 4.15822 8.60022 4.43304 9.05335C3.04727 9.3184 2 10.5368 2 11.9999C2 13.4629 3.04727 14.6813 4.43304 14.9464C4.15822 15.3995 4 15.9312 4 16.4999Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="brainVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7.5 14.4999L9.34189 8.97422C9.43631 8.69095 9.7014 8.49988 10 8.49988C10.2986 8.49988 10.5637 8.69095 10.6581 8.97422L12.5 14.4999M15.5 8.49988V14.4999M8.5 12.4999H11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="letterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 14.5px' }" />
          </svg>
        </div>
</template>
