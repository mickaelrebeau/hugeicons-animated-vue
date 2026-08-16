<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ScrollHorizontalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after list-view: the content rows travel through the viewport and ease to a stop
// generated from @hugeicons/core-free-icons
const rowVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: (i: number) => ({
    transform: ['scaleX(1)', 'scaleX(0.68)', 'scaleX(1.04)', 'scaleX(0.98)', 'scaleX(1)'],
    transition: { duration: 0.43, ease: [0.77, 0, 0.175, 1], times: [0, 0.28, 0.56, 0.76, 1], delay: i * 0.06 },
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
            <motion.path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="currentColor" stroke-width="1.5" :variants="rowVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 12px' }" />
            <motion.path d="M2.00023 12.0672C1.95947 10.6863 7.34458 7.43916 7.8518 8.08367C8.42696 8.81452 7.05181 10.9863 6.74208 11.6779C6.55582 12.0938 6.56093 12.2741 6.77271 12.6896C7.73186 14.571 8.20766 15.5084 7.91196 15.9136C7.44063 16.5595 2.04001 13.4149 2.00023 12.0672Z" stroke="currentColor" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '1.96px 12px' }" />
            <motion.path d="M21.9989 12.0672C22.0396 10.6863 16.6545 7.43916 16.1473 8.08367C15.5721 8.81452 16.9473 10.9863 17.257 11.6779C17.4433 12.0938 17.4382 12.2741 17.2264 12.6896C16.2672 14.571 15.7915 15.5084 16.0871 15.9136C16.5585 16.5595 21.9591 13.4149 21.9989 12.0672Z" stroke="currentColor" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '22.04px 12px' }" />
          </svg>
        </div>
</template>
