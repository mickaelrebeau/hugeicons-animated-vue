<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MouseRightClick05Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after mouse-left-click-01: the shell presses under the active button and releases
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.8px) scaleX(0.9) scaleY(1.04)', 'translateX(1.99px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
    transition: {
      duration: 0.51,
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
            <motion.path d="M11 5.5V2M11 12V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 12px' }" />
            <motion.path d="M13.5 2.31844C12.7694 2.11067 11.9399 2 11 2C5 2 3.5 6.50998 3.5 12C3.5 17.49 5 22 11 22C17.0001 22 18.5 17.49 18.5 12C18.5 11.4906 18.4871 10.9897 18.4589 10.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 12px' }" />
            <motion.path d="M12.5 7C12.5 6.53406 12.5 6.30109 12.4239 6.11732C12.3224 5.87229 12.1277 5.67761 11.8827 5.57612C11.6989 5.5 11.4659 5.5 11 5.5C10.5341 5.5 10.3011 5.5 10.1173 5.57612C9.87229 5.67761 9.67761 5.87229 9.57612 6.11732C9.5 6.30109 9.5 6.53406 9.5 7V7.5C9.5 7.96594 9.5 8.19891 9.57612 8.38268C9.67761 8.62771 9.87229 8.82239 10.1173 8.92388C10.3011 9 10.5341 9 11 9C11.4659 9 11.6989 9 11.8827 8.92388C12.1277 8.82239 12.3224 8.62771 12.4239 8.38268C12.5 8.19891 12.5 7.96594 12.5 7.5V7Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 12px' }" />
            <motion.path d="M4 12H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 12px' }" />
            <motion.circle cx="18" cy="5.5" r="2.5" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 12px' }" />
          </svg>
        </div>
</template>
