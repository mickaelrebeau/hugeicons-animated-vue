<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ApplePieIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after favourite: it hangs, swells to ripe, and settles on its stem
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scale(1) rotate(0deg)',
  },
  animate: {
    transform: ['scale(1) rotate(0deg)', 'scale(0.94) rotate(-2.98deg)', 'scale(1.08) rotate(1.98deg)', 'scale(1) rotate(0deg)'],
    transition: {
      duration: 0.59,
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
            <motion.path d="M16.5 7C18.6111 8.09821 20.1802 9.94542 20.7578 12.1376C21.5 12.1376 22 13.1645 22 14.0106C22 16.3424 18.5658 16.7405 18 14.5165C17.4968 16.4945 14.5032 16.4945 14 14.5165C13.4968 16.4945 10.5032 16.4945 10 14.5165C9.49677 16.4945 6.50323 16.4945 6 14.5165C5.43417 16.7405 2 16.3424 2 14.0106C2 13.1645 2.5 12.1376 3.24224 12.1376C3.81984 9.94542 5.38887 8.09821 7.5 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.74px' }" />
            <motion.path d="M12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4ZM12 4C12 3.5 12.4 2.4 14 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.74px' }" />
            <motion.path d="M14.5 10.5L15 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.74px' }" />
            <motion.path d="M9.5 10.5L9 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.74px' }" />
            <motion.path d="M3.5 16L4.13246 17.8974C4.79247 19.8774 5.12248 20.8675 5.90815 21.4337C6.69381 22 7.73739 22 9.82456 22H14.1754C16.2626 22 17.3062 22 18.0919 21.4337C18.8775 20.8675 19.2075 19.8774 19.8675 17.8974L20.5 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.74px' }" />
          </svg>
        </div>
</template>
