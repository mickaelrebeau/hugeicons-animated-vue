<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CombineIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the arrow pushes and the top square slides toward the merged one
// authored from scripts/authored
const pieceVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.4px, 1.4px)',
      'translate(-0.21px, -0.21px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const mergedVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.3, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.2px, 0px)',
      'translate(-0.144px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

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
            <motion.path d="M8.84776 4.23463C9 4.60218 9 5.06812 9 6C9 6.93188 9 7.39782 8.84776 7.76537C8.64477 8.25542 8.25542 8.64477 7.76537 8.84776C7.39782 9 6.93188 9 6 9C5.06812 9 4.60218 9 4.23463 8.84776C3.74458 8.64477 3.35523 8.25542 3.15224 7.76537C3 7.39782 3 6.93188 3 6C3 5.06812 3 4.60218 3.15224 4.23463C3.35523 3.74458 3.74458 3.35523 4.23463 3.15224C4.60218 3 5.06812 3 6 3C6.93188 3 7.39782 3 7.76537 3.15224C8.25542 3.35523 8.64477 3.74458 8.84776 4.23463Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pieceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 6px' }" />
            <path d="M12.5 3.00195C13.1119 3.00671 13.4703 3.03082 13.7654 3.15302C14.2554 3.35601 14.6448 3.74536 14.8478 4.23542C15 4.60296 15 5.0689 15 6.00078C15 6.93267 15 7.39861 14.8478 7.76615C14.6448 8.25621 14.2554 8.64556 13.7654 8.84854C13.4703 8.97075 13.1119 8.99486 12.5 8.99961" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M18.5 3C19.1119 3.00476 19.4703 3.02887 19.7654 3.15107C20.2554 3.35406 20.6448 3.74341 20.8478 4.23346C21 4.60101 21 5.06695 21 5.99883C21 6.93071 21 7.39666 20.8478 7.7642C20.6448 8.25425 20.2554 8.6436 19.7654 8.84659C19.4703 8.96879 19.1119 8.9929 18.5 8.99766" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M20.7275 14.365C21 14.8998 21 15.5999 21 17C21 18.4001 21 19.1002 20.7275 19.635C20.4878 20.1054 20.1054 20.4878 19.635 20.7275C19.1002 21 18.4001 21 17 21C15.5999 21 14.8998 21 14.365 20.7275C13.8946 20.4878 13.5122 20.1054 13.2725 19.635C13 19.1002 13 18.4001 13 17C13 15.5999 13 14.8998 13.2725 14.365C13.5122 13.8946 13.8946 13.5122 14.365 13.2725C14.8998 13 15.5999 13 17 13C18.4001 13 19.1002 13 19.635 13.2725C20.1054 13.5122 20.4878 13.8946 20.7275 14.365Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="mergedVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 17px' }" />
            <motion.path d="M7 15L9 17L7 19M8.5 17H7C5.59987 17 4.8998 17 4.36502 16.7275C3.89462 16.4878 3.51217 16.1054 3.27248 15.635C3 15.1002 3 14.4001 3 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 16px' }" />
          </svg>
        </div>
</template>
