<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Group01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after user-group: the profiles gather toward one another and settle as a group
// generated from @hugeicons/core-free-icons
const personVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px) scale(1)', 'translateY(-1.53px) scale(1.03)', 'translateY(0.51px) scale(0.98)', 'translateY(0px) scale(1)'],
    transition: {
      duration: 0.56,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const personVariants2: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(0px) scale(1)', 'translateX(-1.53px) scale(0.97)', 'translateX(0.36px) scale(1.01)', 'translateX(0px) scale(1)'],
    transition: {
      duration: 0.54,
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
            <motion.path d="M8 5L20 5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 5px' }" />
            <motion.path d="M13 12L20 12" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="personVariants2" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 12px' }" />
            <motion.path d="M13 19L20 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="personVariants2" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 19px' }" />
            <motion.path d="M4.375 5H4.25M4.5 5C4.5 5.13807 4.38807 5.25 4.25 5.25C4.11193 5.25 4 5.13807 4 5C4 4.86193 4.11193 4.75 4.25 4.75C4.38807 4.75 4.5 4.86193 4.5 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants2" :animate="controls" initial="normal" :style="{ transformOrigin: '4.25px 5px' }" />
            <motion.path d="M8.375 12H8.25M8.5 12C8.5 12.1381 8.38807 12.25 8.25 12.25C8.11193 12.25 8 12.1381 8 12C8 11.8619 8.11193 11.75 8.25 11.75C8.38807 11.75 8.5 11.8619 8.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants2" :animate="controls" initial="normal" :style="{ transformOrigin: '8.25px 12px' }" />
            <motion.path d="M8.375 19H8.25M8.5 19C8.5 19.1381 8.38807 19.25 8.25 19.25C8.11193 19.25 8 19.1381 8 19C8 18.8619 8.11193 18.75 8.25 18.75C8.38807 18.75 8.5 18.8619 8.5 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants2" :animate="controls" initial="normal" :style="{ transformOrigin: '8.25px 19px' }" />
          </svg>
        </div>
</template>
