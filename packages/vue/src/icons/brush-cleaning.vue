<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BrushCleaningIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the brush cleaning move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.8px) rotate(-2.12deg)', 'translateY(0.42px) rotate(0.74deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
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
            <motion.path d="M14.204 15.6319L14.6279 19.0232C14.8255 20.6038 13.593 22 12 22C10.407 22 9.17452 20.6038 9.3721 19.0232L9.79601 15.6319C9.85436 15.1651 9.88354 14.9317 9.83397 14.7443C9.7533 14.4393 9.53347 14.1903 9.24087 14.0724C9.06106 14 8.82585 14 8.35542 14H8C7.07003 14 6.60504 14 6.22354 13.8978C5.18827 13.6204 4.37962 12.8117 4.10222 11.7765C4 11.395 4 10.93 4 10H20C20 10.93 20 11.395 19.8978 11.7765C19.6204 12.8117 18.8117 13.6204 17.7765 13.8978C17.395 14 16.93 14 16 14H15.6446C15.1742 14 14.9389 14 14.7591 14.0724C14.4665 14.1903 14.2467 14.4393 14.166 14.7443C14.1165 14.9317 14.1456 15.1651 14.204 15.6319Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M4 10V5.51472C4 5.03662 4 4.79756 4.0272 4.59696C4.20846 3.25997 5.25997 2.20846 6.59696 2.0272C6.79756 2 7.03662 2 7.51472 2C7.58456 2 7.61949 2 7.65311 2.00227C7.87143 2.017 8.07889 2.10293 8.24368 2.24689C8.26906 2.26906 8.29376 2.29376 8.34315 2.34315L8.58579 2.58579C9.25245 3.25245 9.58579 3.58579 10 3.58579C10.4142 3.58579 10.7475 3.25245 11.4142 2.58579C11.7032 2.29676 11.8478 2.15224 12.0315 2.07612C12.2153 2 12.4197 2 12.8284 2H14C16.8284 2 18.2426 2 19.1213 2.87868C20 3.75736 20 5.17157 20 8V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
