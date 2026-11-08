<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WebSecurityIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the padlock shackle clicks shut on the browser
// authored from scripts/authored
const shackleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.3px)',
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

const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.2, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M3 7.5H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M10.5 20.5C6.72876 20.5 4.84315 20.5 3.67157 19.3284C2.5 18.1569 2.5 16.2712 2.5 12.5V10.5C2.5 6.72876 2.5 4.84315 3.67157 3.67157C4.84315 2.5 6.72876 2.5 10.5 2.5H12.5C16.2712 2.5 18.1569 2.5 19.3284 3.67157C20.5 4.84315 20.5 6.72876 20.5 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M15.5 16.5V14.5C15.5 13.3954 16.3954 12.5 17.5 12.5C18.6046 12.5 19.5 13.3954 19.5 14.5V16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shackleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 14.5px' }" />
            <motion.path d="M19 16.5H16C15.0654 16.5 14.5981 16.5 14.25 16.701C14.022 16.8326 13.8326 17.022 13.701 17.25C13.5 17.5981 13.5 18.0654 13.5 19C13.5 19.9346 13.5 20.4019 13.701 20.75C13.8326 20.978 14.022 21.1674 14.25 21.299C14.5981 21.5 15.0654 21.5 16 21.5H19C19.9346 21.5 20.4019 21.5 20.75 21.299C20.978 21.1674 21.1674 20.978 21.299 20.75C21.5 20.4019 21.5 19.9346 21.5 19C21.5 18.0654 21.5 17.5981 21.299 17.25C21.1674 17.022 20.978 16.8326 20.75 16.701C20.4019 16.5 19.9346 16.5 19 16.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 19px' }" />
          </svg>
        </div>
</template>
