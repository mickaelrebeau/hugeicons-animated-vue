<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SurpriseIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the mouth drops open in an O and the brows jump
// authored from scripts/authored
const mouthVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.3)', 'scale(0.92)', 'scale(1)'],
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

const browsVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.15px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.18, 0.46, 0.74, 1],
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
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.ellipse cx="12" cy="15.5" rx="2" ry="2.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="mouthVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.5px' }" />
            <motion.path d="M16.125 8.387V8.91649M7.875 8.387V8.91649M8.25 8.75C8.25 8.33579 8.08211 8 7.875 8C7.66789 8 7.5 8.33579 7.5 8.75C7.5 9.16421 7.66789 9.5 7.875 9.5C8.08211 9.5 8.25 9.16421 8.25 8.75ZM16.5 8.75C16.5 8.33579 16.3321 8 16.125 8C15.9179 8 15.75 8.33579 15.75 8.75C15.75 9.16421 15.9179 9.5 16.125 9.5C16.3321 9.5 16.5 9.16421 16.5 8.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="browsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.8px' }" />
          </svg>
        </div>
</template>
