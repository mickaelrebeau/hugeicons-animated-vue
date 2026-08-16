<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'KettleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after coffee-02: it tips over the spout and comes back level
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(16.61deg)', 'rotate(20.3deg)', 'rotate(-1.85deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.83,
      times: [0, 0.28, 0.55, 0.82, 1],
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M2 17C2 18.9497 2.02815 21 4.4 21H15.6C17.9718 21 18 18.9497 18 17C18 12.5817 14.4183 9 10 9C5.58172 9 2 12.5817 2 17Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 21px' }" />
            <motion.path d="M8 9V8C8 6.89543 8.89543 6 10 6C11.1046 6 12 6.89543 12 8V9" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 21px' }" />
            <motion.path d="M18 17C19.1046 17 20 16.1046 20 15V13C20 11.8954 20.8954 11 22 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 21px' }" />
            <motion.path d="M16 11.5V9C16 5.68629 13.3137 3 10 3C6.68629 3 4 5.68629 4 9V11.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 21px' }" />
            <motion.path d="M2 17H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 21px' }" />
          </svg>
        </div>
</template>
