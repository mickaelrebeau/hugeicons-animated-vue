<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RightToLeftListNumberIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after arrow-right-02: the mark commits right along its own axis
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleY(1)', 'translateX(2.8px) scaleY(0.94)', 'translateX(-0.32px) scaleY(1.02)', 'translateX(0.48px) scaleY(0.99)', 'translateX(0px) scaleY(1)'],
    transition: {
      duration: 0.52,
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
            <motion.path d="M3 6L13 6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M3 12L13 12" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M3 18L13 18" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M18 15H19.5C19.7788 15 19.9182 15 20.0341 15.0231C20.5101 15.1177 20.8823 15.4899 20.9769 15.9659C21 16.0818 21 16.2212 21 16.5C21 16.7788 21 16.9182 20.9769 17.0341C20.8823 17.5101 20.5101 17.8823 20.0341 17.9769C19.9182 18 19.7788 18 19.5 18C19.2212 18 19.0818 18 18.9659 18.0231C18.4899 18.1177 18.1177 18.4899 18.0231 18.9659C18 19.0818 18 19.2212 18 19.5V20.4C18 20.6828 18 20.8243 18.0879 20.9121C18.1757 21 18.3172 21 18.6 21H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M18 3H19.2C19.3657 3 19.5 3.13431 19.5 3.3V9M19.5 9H18M19.5 9H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
