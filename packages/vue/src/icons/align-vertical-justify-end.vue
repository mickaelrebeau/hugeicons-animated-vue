<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlignVerticalJustifyEndIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after list-view: the rows slide toward the named alignment edge
// generated from @hugeicons/core-free-icons
const rowVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: (i: number) => ({
    transform: ['scaleX(1)', 'scaleX(0.68)', 'scaleX(1.04)', 'scaleX(0.98)', 'scaleX(1)'],
    transition: { duration: 0.44, ease: [0.77, 0, 0.175, 1], times: [0, 0.28, 0.56, 0.76, 1], delay: i * 0.06 },
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
            <motion.path d="M21 21L3 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 21px' }" />
            <motion.path d="M6.00232 14.5C6.00232 13.6561 5.91895 12.6821 6.75232 12.201C7.10039 12 7.5677 12 8.50232 12L15.5023 12C16.4369 12 16.9042 12 17.2523 12.201C18.0857 12.6821 18.0023 13.6561 18.0023 14.5C18.0023 15.3439 18.0857 16.3179 17.2523 16.799C16.9042 17 16.4369 17 15.5023 17H8.50232C7.5677 17 7.10039 17 6.75232 16.799C5.91895 16.3179 6.00232 15.3439 6.00232 14.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '18.09px 14.5px' }" />
            <motion.path d="M8.00232 5.5C8.00232 4.65611 7.91895 3.68211 8.75232 3.20096C9.10039 3 9.5677 3 10.5023 3H13.5023C14.4369 3 14.9042 3 15.2523 3.20096C16.0857 3.68211 16.0023 4.65611 16.0023 5.5C16.0023 6.34389 16.0857 7.31789 15.2523 7.79904C14.9042 8 14.4369 8 13.5023 8H10.5023C9.5677 8 9.10039 8 8.75232 7.79904C7.91895 7.31789 8.00232 6.34389 8.00232 5.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '7.92px 5.5px' }" />
          </svg>
        </div>
</template>
