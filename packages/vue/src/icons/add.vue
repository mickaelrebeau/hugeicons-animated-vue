<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AddIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// both strokes swing in through the crossing point and square up
// authored from scripts/authored
const uprightVariants: Variants = {
  normal: { transform: 'rotate(0deg) scaleY(1)' },
  animate: {
    transform: [
      'rotate(0deg) scaleY(1)',
      'rotate(9deg) scaleY(0.3)',
      'rotate(-3deg) scaleY(1.1)',
      'rotate(0deg) scaleY(1)',
    ],
    transition: { duration: 0.54, times: [0, 0.3, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const crossbarVariants: Variants = {
  normal: { transform: 'rotate(0deg) scaleX(1)' },
  animate: {
    transform: [
      'rotate(0deg) scaleX(1)',
      'rotate(-9deg) scaleX(0.3)',
      'rotate(3deg) scaleX(1.1)',
      'rotate(0deg) scaleX(1)',
    ],
    transition: { duration: 0.54, times: [0, 0.3, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M12.001 5.00003V19.002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="uprightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19.002 12.002L4.99998 12.002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="crossbarVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
