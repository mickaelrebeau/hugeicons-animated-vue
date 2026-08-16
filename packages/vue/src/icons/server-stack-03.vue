<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ServerStack03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after database: the rack rows wake from top to bottom like a health check
// generated from @hugeicons/core-free-icons
const rowVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: (i: number) => ({
    transform: ['scaleX(1)', 'scaleX(0.68)', 'scaleX(1.04)', 'scaleX(0.98)', 'scaleX(1)'],
    transition: { duration: 0.46, ease: [0.77, 0, 0.175, 1], times: [0, 0.28, 0.56, 0.76, 1], delay: i * 0.06 },
  }),
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.77px) rotate(-0.96deg)', 'translateY(0.43px) rotate(0.48deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M18 3H6C5.06812 3 4.60218 3 4.23463 3.15224C3.74458 3.35523 3.35523 3.74458 3.15224 4.23463C3 4.60218 3 5.06812 3 6C3 6.93188 3 7.39782 3.15224 7.76537C3.35523 8.25542 3.74458 8.64477 4.23463 8.84776C4.60218 9 5.06812 9 6 9H18C18.9319 9 19.3978 9 19.7654 8.84776C20.2554 8.64477 20.6448 8.25542 20.8478 7.76537C21 7.39782 21 6.93188 21 6C21 5.06812 21 4.60218 20.8478 4.23463C20.6448 3.74458 20.2554 3.35523 19.7654 3.15224C19.3978 3 18.9319 3 18 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 6px' }" />
            <motion.path d="M18 9H6C5.06812 9 4.60218 9 4.23463 9.15224C3.74458 9.35523 3.35523 9.74458 3.15224 10.2346C3 10.6022 3 11.0681 3 12C3 12.9319 3 13.3978 3.15224 13.7654C3.35523 14.2554 3.74458 14.6448 4.23463 14.8478C4.60218 15 5.06812 15 6 15H18C18.9319 15 19.3978 15 19.7654 14.8478C20.2554 14.6448 20.6448 14.2554 20.8478 13.7654C21 13.3978 21 12.9319 21 12C21 11.0681 21 10.6022 20.8478 10.2346C20.6448 9.74458 20.2554 9.35523 19.7654 9.15224C19.3978 9 18.9319 9 18 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '21px 12px' }" />
            <motion.path d="M18 15H6C5.06812 15 4.60218 15 4.23463 15.1522C3.74458 15.3552 3.35523 15.7446 3.15224 16.2346C3 16.6022 3 17.0681 3 18C3 18.9319 3 19.3978 3.15224 19.7654C3.35523 20.2554 3.74458 20.6448 4.23463 20.8478C4.60218 21 5.06812 21 6 21H18C18.9319 21 19.3978 21 19.7654 20.8478C20.2554 20.6448 20.6448 20.2554 20.8478 19.7654C21 19.3978 21 18.9319 21 18C21 17.0681 21 16.6022 20.8478 16.2346C20.6448 15.7446 20.2554 15.3552 19.7654 15.1522C19.3978 15 18.9319 15 18 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 18px' }" />
            <motion.path d="M6 6H6.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.01px 6px' }" />
            <motion.path d="M6 12H6.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.01px 12px' }" />
            <motion.path d="M6 18H6.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.01px 18px' }" />
            <motion.path d="M9 6H9.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 6px' }" />
            <motion.path d="M9 12H9.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 12px' }" />
            <motion.path d="M9 18H9.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 18px' }" />
          </svg>
        </div>
</template>
