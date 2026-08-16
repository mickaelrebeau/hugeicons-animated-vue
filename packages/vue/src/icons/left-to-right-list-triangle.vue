<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LeftToRightListTriangleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after arrow-left-02: the mark commits left along its own axis
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleY(1)', 'translateX(-2.65px) scaleY(0.94)', 'translateX(0.31px) scaleY(1.02)', 'translateX(-0.46px) scaleY(0.99)', 'translateX(0px) scaleY(1)'],
    transition: {
      duration: 0.5,
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
            <motion.path d="M11 5.5L21 5.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M5.4 16.8926C6.46667 17.607 7 17.9642 7 18.5C7 19.0358 6.46667 19.393 5.4 20.1074C4.33333 20.8218 3.8 21.1789 3.4 20.9111C3 20.6432 3 19.9288 3 18.5C3 17.0712 3 16.3568 3.4 16.0889C3.8 15.8211 4.33333 16.1782 5.4 16.8926Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M5.4 3.89263C6.46667 4.60702 7 4.96421 7 5.5C7 6.03579 6.46667 6.39298 5.4 7.10737C4.33333 7.82176 3.8 8.17895 3.4 7.91105C3 7.64316 3 6.92877 3 5.5C3 4.07123 3 3.35684 3.4 3.08895C3.8 2.82105 4.33333 3.17824 5.4 3.89263Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M11 12L21 12" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M11 18.5L21 18.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
