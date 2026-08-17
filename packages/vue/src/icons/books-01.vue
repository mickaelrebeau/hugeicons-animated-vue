<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Books01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the offset volume tucks into the pile while the top volume settles onto it
// authored from scripts/authored
const topVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.66px) scaleY(0.78)',
      'translate(0px, 0.66px) scaleY(0.78)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.74,
      times: [0, 0.26, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const midVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(-4px, 0px)', 'translate(-4px, 0px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.74,
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
            <path d="M2 15H15C15.9319 15 16.3978 15 16.7654 15.1522C17.2554 15.3552 17.6448 15.7446 17.8478 16.2346C18 16.6022 18 17.0681 18 18C18 18.9319 18 19.3978 17.8478 19.7654C17.6448 20.2554 17.2554 20.6448 16.7654 20.8478C16.3978 21 15.9319 21 15 21H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M2 3H15C15.9319 3 16.3978 3 16.7654 3.15224C17.2554 3.35523 17.6448 3.74458 17.8478 4.23463C18 4.60218 18 5.06812 18 6C18 6.93188 18 7.39782 17.8478 7.76537C17.6448 8.25542 17.2554 8.64477 16.7654 8.84776C16.3978 9 15.9319 9 15 9H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="topVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 6px' }" />
            <motion.path d="M22 9H9C8.06812 9 7.60218 9 7.23463 9.15224C6.74458 9.35523 6.35523 9.74458 6.15224 10.2346C6 10.6022 6 11.0681 6 12C6 12.9319 6 13.3978 6.15224 13.7654C6.35523 14.2554 6.74458 14.6448 7.23463 14.8478C7.60218 15 8.06812 15 9 15H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="midVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 12px' }" />
            <motion.path d="M21 15C19.8954 15 19 13.6569 19 12C19 10.3431 19.8954 9 21 9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="midVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 12px' }" />
            <motion.path d="M3 3C4.10457 3 5 4.34315 5 6C5 7.65685 4.10457 9 3 9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="topVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 6px' }" />
            <path d="M3 15C4.10457 15 5 16.3431 5 18C5 19.6569 4.10457 21 3 21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
