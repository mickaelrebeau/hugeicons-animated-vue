<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GoalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the goal take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-4.66deg)', 'scale(1.1) rotate(1.86deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.49, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
  }),
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
            <motion.path d="M11 7.10156C8.71776 7.56483 7 9.58259 7 12.0015C7 14.763 9.23858 17.0015 12 17.0015C14.419 17.0015 16.4367 15.2838 16.9 13.0015" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '11.95px 12.05px' }" />
            <motion.path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14.5 7.11525V9.5H16.8847C17.7168 9.5 18.1328 9.5 18.5068 9.34506C18.8809 9.19011 19.1751 8.89595 19.7634 8.30762L20.0977 7.97337C21.0515 7.01951 21.5284 6.54258 21.4987 6.0829C21.4874 5.90785 21.431 5.73869 21.335 5.59185C21.083 5.20626 20.4153 5.11087 19.0799 4.9201C18.8891 3.5847 18.7937 2.917 18.4081 2.665C18.2613 2.56903 18.0922 2.51264 17.9171 2.50131C17.4574 2.47156 16.9805 2.94849 16.0266 3.90235L15.6924 4.2366C15.1041 4.82493 14.8099 5.11909 14.6549 5.49316C14.5 5.86723 14.5 6.28323 14.5 7.11525Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '18.01px 5.99px' }" />
            <motion.path d="M14.5 9.5L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '13.25px 10.75px' }" />
          </svg>
        </div>
</template>
