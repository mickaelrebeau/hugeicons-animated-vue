<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MpFour01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the mp four move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.68px) rotate(-1.97deg)', 'translateY(0.39px) rotate(0.69deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M20 12.999V10.6559C20 9.83838 20 9.42963 19.8478 9.06208C19.6955 8.69454 19.4065 8.40551 18.8284 7.82745L14.0919 3.09091C13.593 2.59202 13.3436 2.34258 13.0345 2.19477C12.9702 2.16403 12.9044 2.13674 12.8372 2.11303C12.5141 1.99902 12.1614 1.99902 11.4558 1.99902C8.21082 1.99902 6.58831 1.99902 5.48933 2.8851C5.26731 3.0641 5.06508 3.26634 4.88607 3.48835C4 4.58733 4 6.20984 4 9.45487V12.999M13 2.49902V2.99902C13 5.82745 13 7.24166 13.8787 8.12034C14.7574 8.99902 16.1716 8.99902 19 8.99902H19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
            <motion.path d="M4 22.001V16.001L6 19.001L8 16.001V22.001M10.5 22.001V19.501M10.5 19.501V16.001H12.25C13.2165 16.001 14 16.7845 14 17.751C14 18.7175 13.2165 19.501 12.25 19.501H10.5ZM16.5 16.001V18.001C16.5 18.5533 16.9477 19.001 17.5 19.001H20M20 19.001V16.001M20 19.001V21.501" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
          </svg>
        </div>
</template>
