<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Target01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the dart strikes and the inner target ring expands into the next ring
const dartVariants: Variants = {
  normal: { translateX: 0, translateY: 0, transition: { duration: 0.3 } },
  animate: {
    translateX: [0, 2.4, 2.4, 0],
    translateY: [0, -2.4, -2.4, 0],
    transition: {
      duration: 1,
      times: [0, 0.3, 0.45, 0.58],
      ease: ['easeOut', 'linear', 'easeIn'],
    },
  },
};

const ringVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: (i: number) => ({
    transform: i === 0
      ? ['scale(1)', 'scale(1)', 'scale(1.06)', 'scale(1)']
      : ['scale(1)', 'scale(1)', 'scale(1.58)', 'scale(1)'],
    transition: { duration: 0.86, times: [0, 0.58, 0.76, 1], ease: [0.23, 1, 0.32, 1] },
  }),
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
            <motion.path d="M15.1312 2.5C14.1462 2.17555 13.0936 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.9548 21.8396 9.94704 21.5422 9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="ringVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ringVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19.5 4.5L12 12M19.5 4.5V2M19.5 4.5H22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="dartVariants" :animate="controls" initial="normal" />
          </svg>
        </div>
</template>
