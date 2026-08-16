<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlignHorizontalJustifyCenterIcon' })

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
    transition: { duration: 0.41, ease: [0.77, 0, 0.175, 1], times: [0, 0.28, 0.56, 0.76, 1], delay: i * 0.06 },
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
            <motion.path d="M12 21V3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M18.5 8.00232C19.3439 8.00232 20.3179 7.91895 20.799 8.75232C21 9.10039 21 9.5677 21 10.5023L21 13.5023C21 14.4369 21 14.9042 20.799 15.2523C20.3179 16.0857 19.3439 16.0023 18.5 16.0023C17.6561 16.0023 16.6821 16.0857 16.201 15.2523C16 14.9042 16 14.4369 16 13.5023L16 10.5023C16 9.5677 16 9.10039 16.201 8.75232C16.6821 7.91895 17.6561 8.00232 18.5 8.00232Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '21px 12px' }" />
            <motion.path d="M5.5 6.00232C6.34389 6.00232 7.31789 5.91895 7.79904 6.75232C8 7.10039 8 7.5677 8 8.50232L8 15.5023C8 16.4369 8 16.9042 7.79904 17.2523C7.31789 18.0857 6.34389 18.0023 5.5 18.0023C4.65611 18.0023 3.68211 18.0857 3.20096 17.2523C3 16.9042 3 16.4369 3 15.5023L3 8.50232C3 7.5677 3 7.10039 3.20096 6.75232C3.68211 5.91895 4.65611 6.00232 5.5 6.00232Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 12px' }" />
          </svg>
        </div>
</template>
