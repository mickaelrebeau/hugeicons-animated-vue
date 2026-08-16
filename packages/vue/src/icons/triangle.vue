<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TriangleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after shield-02: the triangular mass loads toward its point and settles
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.94)', 'scale(1.08)', 'scale(1)'],
    transition: {
      duration: 0.49,
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
            <motion.path d="M5.59347 9.22474C7.83881 5.62322 8.96148 3.82246 10.4326 3.28C11.445 2.90667 12.555 2.90667 13.5674 3.28C15.0385 3.82246 16.1612 5.62322 18.4065 9.22474C20.9338 13.2785 22.1975 15.3054 21.9749 16.9779C21.8222 18.125 21.2521 19.173 20.3762 19.9163C19.0993 21 16.7328 21 12 21C7.26716 21 4.90074 21 3.62378 19.9163C2.74792 19.173 2.17775 18.125 2.02509 16.9779C1.80252 15.3054 3.06617 13.2785 5.59347 9.22474Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.95px' }" />
          </svg>
        </div>
</template>
