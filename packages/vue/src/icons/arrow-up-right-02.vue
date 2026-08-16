<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowUpRight02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the filled head leads up-right, the shaft following along the same diagonal
// authored from scripts/authored
const shaftVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(2.1px, -2.1px)',
      'translate(-0.252px, 0.252px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.04,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const headVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(2.1px, -2.1px)',
      'translate(-0.252px, 0.252px)',
      'translate(0px, 0px)',
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
            <motion.path d="M12.9997 11L5.99969 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shaftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 14.5px' }" />
            <motion.path d="M15.5407 6.08278L14.2989 6.19567C12.287 6.37857 11.2811 6.47002 11.0444 7.12388C10.8076 7.77774 11.5219 8.49198 12.9504 9.92046L14.0792 11.0493C15.5077 12.4778 16.222 13.1921 16.8758 12.9553C17.5297 12.7186 17.6211 11.7127 17.804 9.70078L17.9169 8.45902C18.027 7.24766 18.0821 6.64198 17.7199 6.27979C17.3577 5.9176 16.752 5.97266 15.5407 6.08278Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.4px 9.6px' }" />
          </svg>
        </div>
</template>
