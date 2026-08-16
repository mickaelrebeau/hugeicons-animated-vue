<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SuitIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the suit separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.79px) rotate(-0.99deg)', 'translateY(0.45px) rotate(0.5deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.39px, -1.19px)', 'translate(0.2px, -0.2px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.51,
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
            <motion.path d="M6.00233 3.99988C4.44888 4.04668 3.52231 4.21993 2.88101 4.86123C2.00233 5.73991 2.00233 7.15413 2.00233 9.98255L1.99762 16.0001C1.99762 18.8286 1.99762 20.2428 2.8763 21.1215C3.75498 22.0001 5.16919 22.0001 7.99762 22.0001H15.9976C18.826 22.0001 20.2403 22.0001 21.1189 21.1215C21.9976 20.2428 21.9976 18.8286 21.9976 16.0001L22.0023 9.98255C22.0023 7.15413 22.0023 5.73991 21.1236 4.86123C20.4823 4.21993 19.5558 4.04668 18.0023 3.99988" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
            <motion.path d="M17.9976 3.99988L16.9382 6.03993C15.9374 7.93246 15.4371 8.87873 14.6835 8.98535C14.5531 9.0038 14.4208 9.00468 14.2902 8.98798C13.5353 8.89147 13.0227 7.87885 11.9976 5.99988L15.9976 1.99988L17.9976 3.99988Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 5.5px' }" />
            <motion.path d="M5.99762 3.99988L7.05704 6.03993C8.0578 7.93246 8.55818 8.87873 9.31176 8.98535C9.44217 9.0038 9.5744 9.00468 9.70504 8.98798C10.4599 8.89147 10.9725 7.87885 11.9976 5.99988L7.99762 1.99988L5.99762 3.99988Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 5.5px' }" />
            <motion.path d="M17.9976 3.99988L14.9976 21.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 13px' }" />
            <motion.path d="M5.99762 3.99988L8.99762 21.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 13px' }" />
            <motion.path d="M15.9976 1.99988H7.99762" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2px' }" />
            <motion.path d="M12.1246 12.7499H11.9996M12.1246 16.7499H11.9996M12.2496 12.7499C12.2496 12.8879 12.1376 12.9999 11.9996 12.9999C11.8615 12.9999 11.7496 12.8879 11.7496 12.7499C11.7496 12.6118 11.8615 12.4999 11.9996 12.4999C12.1376 12.4999 12.2496 12.6118 12.2496 12.7499ZM12.2496 16.7499C12.2496 16.8879 12.1376 16.9999 11.9996 16.9999C11.8615 16.9999 11.7496 16.8879 11.7496 16.7499C11.7496 16.6118 11.8615 16.4999 11.9996 16.4999C12.1376 16.4999 12.2496 16.6118 12.2496 16.7499Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.75px' }" />
          </svg>
        </div>
</template>
