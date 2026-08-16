<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FileDigitIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the sheet lifts from its stack while its details follow
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.82px) rotate(-1.02deg)', 'translateY(0.46px) rotate(0.51deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const lineVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1.1)', 'scaleX(1)'],
    transition: {
      duration: 0.47,
      delay: 0.12,
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
            <motion.path d="M7 20V18C7 16.8954 6.10457 16 5 16C3.89543 16 3 16.8954 3 18V20C3 21.1046 3.89543 22 5 22C6.10457 22 7 21.1046 7 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 19px' }" />
            <motion.path d="M15 22H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 22px' }" />
            <motion.path d="M13 22V17.4878C13 16.6127 13 16.1752 12.7236 16.0367C12.4472 15.8981 12.0981 16.1606 11.4 16.6856L11 16.9864" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18.95px' }" />
            <motion.path d="M5 12V9.45584C5 6.21082 5 4.58831 5.88607 3.48933C6.06508 3.26731 6.26731 3.06508 6.48933 2.88607C7.58831 2 9.21082 2 12.4558 2C13.1614 2 13.5141 2 13.8372 2.11401C13.9044 2.13772 13.9702 2.165 14.0345 2.19575C14.3436 2.34355 14.593 2.593 15.0919 3.09188L19.8284 7.82843C20.4065 8.40649 20.6955 8.69552 20.8478 9.06306C21 9.4306 21 9.83935 21 10.6569V14.5849C21 18.3561 21 20.2417 19.8284 21.4133C19.5862 21.6555 19.3136 21.8476 19 22M14 2.5V3C14 5.82843 14 7.24264 14.8787 8.12132C15.7574 9 17.1716 9 20 9H20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 12px' }" />
          </svg>
        </div>
</template>
