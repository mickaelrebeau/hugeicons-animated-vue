<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'InputCursorTextIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cursor-pointer-01: the pointer leans into its tip and clicks
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.85px) scaleX(0.9) scaleY(1.04)', 'translateX(2.13px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
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
            <motion.path d="M9 6V18M9 6C9 4.89543 9.89543 4 11 4M9 6C9 4.89543 8.10457 4 7 4M9 18C9 19.1046 9.89543 20 11 20M9 18C9 19.1046 8.10457 20 7 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 12px' }" />
            <motion.path d="M12 8H18C19.8856 8 20.8284 8 21.4142 8.58579C22 9.17157 22 10.1144 22 12C22 13.8856 22 14.8284 21.4142 15.4142C20.8284 16 19.8856 16 18 16H12M6 16C4.11438 16 3.17157 16 2.58579 15.4142C2 14.8284 2 13.8856 2 12C2 10.1144 2 9.17157 2.58579 8.58579C3.17157 8 4.11438 8 6 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 12px' }" />
          </svg>
        </div>
</template>
