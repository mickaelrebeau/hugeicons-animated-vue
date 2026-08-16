<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MoveToIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cursor-pointer-01: the object travels along the direction encoded by its handles and returns
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(3.12px) rotate(3.9deg)', 'translateX(-0.39px) rotate(-0.97deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
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
            <motion.path d="M8 17.625L20 17.625" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 20.63px' }" />
            <motion.path d="M17 14.625L20 17.625L17 20.625" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 20.63px' }" />
            <motion.path d="M8 3.625L20 3.625" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 20.63px' }" />
            <motion.path d="M8 10.625L20 10.625" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 20.63px' }" />
            <motion.path d="M4.375 3.625H4.25M4.5 3.625C4.5 3.76307 4.38807 3.875 4.25 3.875C4.11193 3.875 4 3.76307 4 3.625C4 3.48693 4.11193 3.375 4.25 3.375C4.38807 3.375 4.5 3.48693 4.5 3.625Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 20.63px' }" />
            <motion.path d="M4.375 10.625H4.25M4.5 10.625C4.5 10.7631 4.38807 10.875 4.25 10.875C4.11193 10.875 4 10.7631 4 10.625C4 10.4869 4.11193 10.375 4.25 10.375C4.38807 10.375 4.5 10.4869 4.5 10.625Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 20.63px' }" />
            <motion.path d="M4.375 17.625H4.25M4.5 17.625C4.5 17.7631 4.38807 17.875 4.25 17.875C4.11193 17.875 4 17.7631 4 17.625C4 17.4869 4.11193 17.375 4.25 17.375C4.38807 17.375 4.5 17.4869 4.5 17.625Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 20.63px' }" />
          </svg>
        </div>
</template>
