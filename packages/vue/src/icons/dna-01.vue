<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Dna01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after refresh: the strands rotate around the shared axis
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scaleX(1)',
  },
  animate: {
    transform: ['rotate(0deg) scaleX(1)', 'rotate(5.57deg) scaleX(0.82)', 'rotate(-4.64deg) scaleX(0.9)', 'rotate(0deg) scaleX(1)'],
    transition: {
      duration: 0.98,
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
            <motion.path d="M8.6671 22C9.20107 21.466 9.73505 20.9321 9.24127 18M8.6671 15.3336C7.33381 10.0004 8.33378 9.00042 8.6671 8.6671C9.00042 8.33378 10.0004 7.33381 15.3336 8.6671M8.6671 15.3336C3.33394 14.0003 2.66664 14.6663 2 15.3329M8.6671 15.3336C14.0003 16.6668 14.9996 15.6662 15.3329 15.3329C15.6662 14.9996 16.6668 14.0003 15.3336 8.6671M22 8.6671C21.3334 9.33375 20.6667 10.0004 15.3336 8.6671M15.3329 2C14.799 2.53394 14.2654 3.06829 14.7592 6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
