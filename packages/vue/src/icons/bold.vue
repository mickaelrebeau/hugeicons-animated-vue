<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BoldIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the whole letter thickens into bold, both bowls sharing the stroke
// authored from scripts/authored
const bowlTVariants: Variants = {
  normal: { strokeWidth: 1.5 },
  animate: {
    strokeWidth: [1.5, 2.9, 2.9, 1.5],
    transition: {
      duration: 0.7,
      times: [0, 0.26, 0.72, 1],
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
            <motion.path d="M13 4H10C8.11438 4 7.17157 4 6.58579 4.58579C6 5.17157 6 6.11438 6 8V12H13C15.2091 12 17 10.2091 17 8C17 5.79086 15.2091 4 13 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bowlTVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 8px' }" />
            <motion.path d="M14 12H6V16C6 17.8856 6 18.8284 6.58579 19.4142C7.17157 20 8.11438 20 10 20H14C16.2091 20 18 18.2091 18 16C18 13.7909 16.2091 12 14 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bowlTVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
          </svg>
        </div>
</template>
