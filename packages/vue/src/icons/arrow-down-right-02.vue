<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowDownRight02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the filled head leads down-right, the shaft following along the same diagonal
// authored from scripts/authored
const shaftVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(2.1px, 2.1px)',
      'translate(-0.252px, -0.252px)',
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
      'translate(2.1px, 2.1px)',
      'translate(-0.252px, -0.252px)',
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
            <motion.path d="M13 13L6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shaftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 9.5px' }" />
            <motion.path d="M15.541 17.9172L14.2992 17.8043C12.2873 17.6214 11.2814 17.53 11.0447 16.8761C10.8079 16.2223 11.5222 15.508 12.9507 14.0795L14.0795 12.9507C15.508 11.5222 16.2223 10.8079 16.8761 11.0447C17.53 11.2814 17.6214 12.2873 17.8043 14.2992L17.9172 15.541C18.0273 16.7523 18.0824 17.358 17.7202 17.7202C17.358 18.0824 16.7523 18.0273 15.541 17.9172Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.4px 14.4px' }" />
          </svg>
        </div>
</template>
