<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CodepenIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after arrow-up-02: the codepen follows the up direction already encoded by its geometry
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleX(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleX(1)', 'translateY(-2.53px) scaleX(0.94)', 'translateY(0.29px) scaleX(1.02)', 'translateY(-0.44px) scaleX(0.99)', 'translateY(0px) scaleX(1)'],
    transition: {
      duration: 0.48,
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
            <motion.path d="M21 15L12 9.5L2.5 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 9.5V3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M21 9L12 14.5L2.5 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 14.5V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19.7249 7.03077L14.7249 3.78702C13.4024 2.92901 12.7411 2.5 12 2.5C11.2589 2.5 10.5976 2.92901 9.27506 3.78702L4.27506 7.03078C3.16196 7.7529 2.60542 8.11396 2.30271 8.67068C2 9.22741 2 9.88992 2 11.2149V12.7851C2 14.1101 2 14.7726 2.30271 15.3293C2.60542 15.886 3.16197 16.2471 4.27506 16.9692L9.27506 20.213C10.5976 21.071 11.2589 21.5 12 21.5C12.7411 21.5 13.4024 21.071 14.7249 20.213L19.7249 16.9692C20.838 16.2471 21.3946 15.886 21.6973 15.3293C22 14.7726 22 14.1101 22 12.7851V11.2149C22 9.88992 22 9.22741 21.6973 8.67068C21.3946 8.11396 20.838 7.7529 19.7249 7.03077Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
