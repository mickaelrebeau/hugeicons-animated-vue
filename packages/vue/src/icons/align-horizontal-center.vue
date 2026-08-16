<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlignHorizontalCenterIcon' })

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
    transition: { duration: 0.47, ease: [0.77, 0, 0.175, 1], times: [0, 0.28, 0.56, 0.76, 1], delay: i * 0.06 },
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
            <motion.path d="M12 19L12 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.5px' }" />
            <motion.path d="M12 10L12 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 2L12 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3.5px' }" />
            <motion.path d="M8.00036 7.5C8.00036 6.65611 7.91699 5.68211 8.75036 5.20096C9.09844 5 9.56575 5 10.5004 5H13.5004C14.435 5 14.9023 5 15.2504 5.20096C16.0837 5.68211 16.0004 6.65611 16.0004 7.5C16.0004 8.34389 16.0837 9.31789 15.2504 9.79904C14.9023 10 14.435 10 13.5004 10H10.5004C9.56575 10 9.09844 10 8.75036 9.79904C7.91699 9.31789 8.00036 8.34389 8.00036 7.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '16.08px 7.5px' }" />
            <motion.path d="M4.00036 16.5C4.00036 15.6561 3.91699 14.6821 4.75036 14.201C5.09844 14 5.56575 14 6.50036 14H17.5004C18.435 14 18.9023 14 19.2504 14.201C20.0837 14.6821 20.0004 15.6561 20.0004 16.5C20.0004 17.3439 20.0837 18.3179 19.2504 18.799C18.9023 19 18.435 19 17.5004 19H6.50036C5.56575 19 5.09844 19 4.75036 18.799C3.91699 18.3179 4.00036 17.3439 4.00036 16.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '20.08px 16.5px' }" />
          </svg>
        </div>
</template>
