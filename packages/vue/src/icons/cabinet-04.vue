<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Cabinet04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-open: the cabinet opens from its hinge and closes with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotateX(0deg) scaleY(1)',
  },
  animate: {
    transform: ['rotateX(0deg) scaleY(1)', 'rotateX(-55deg) scaleY(0.72)', 'rotateX(7.67deg) scaleY(1.04)', 'rotateX(0deg) scaleY(1)'],
    transition: {
      duration: 0.61,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

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
            <motion.path d="M18 8H6C4.11438 8 3.17157 8 2.58579 8.53253C2 9.06507 2 9.92217 2 11.6364V14.3636C2 16.0778 2 16.9349 2.58579 17.4675C3.17157 18 4.11438 18 6 18H18C19.8856 18 20.8284 18 21.4142 17.4675C22 16.9349 22 16.0778 22 14.3636V11.6364C22 9.92217 22 9.06507 21.4142 8.53253C20.8284 8 19.8856 8 18 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
            <motion.path d="M5 18L4 22M19 18L20 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
            <motion.path d="M14 18V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
            <motion.path d="M7 11.5H9M7 14.5H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
            <motion.path d="M5.43934 7.56066C5 7.12132 5 6.41421 5 5C5 3.58579 5 2.87868 5.43934 2.43934C5.87868 2 6.58579 2 8 2C9.41421 2 10.1213 2 10.5607 2.43934C11 2.87868 11 3.58579 11 5C11 6.41421 11 7.12132 10.5607 7.56066C10.1213 8 9.41421 8 8 8C6.58579 8 5.87868 8 5.43934 7.56066Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
          </svg>
        </div>
</template>
