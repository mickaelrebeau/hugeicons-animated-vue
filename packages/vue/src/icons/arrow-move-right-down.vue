<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowMoveRightDownIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the path runs right then down, the start-head leaving and the end-head arriving
// authored from scripts/authored
const pathVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.94)', 'scale(1.02)', 'scale(1)'],
    transition: { duration: 0.6, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const startVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.8px, 0px)',
      'translate(-0.216px, 0px)',
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

const endVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.8px)',
      'translate(0px, -0.216px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.12,
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
            <motion.path d="M20 5H19.0667C12.907 5 9.82714 5 7.91357 7.12067C6 9.24133 6 12.6545 6 19.4808V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pathVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 13px' }" />
            <motion.path d="M18 2C18.6068 2.58984 21 4.15973 21 5C21 5.84027 18.6068 7.41016 18 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="startVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 5px' }" />
            <motion.path d="M9 19C8.41016 19.6068 6.84027 22 6 22C5.15973 22 3.58984 19.6068 3 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="endVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 20.5px' }" />
          </svg>
        </div>
</template>
