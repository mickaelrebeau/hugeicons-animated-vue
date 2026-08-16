<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArchiveRestoreIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the lid holds while the file-arrow climbs back out of the box
// authored from scripts/authored
const fileVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -2.6px)',
      'translate(0px, 0.312px)',
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

const boxVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.94)', 'scaleY(1.03)', 'scaleY(1)'],
    transition: { duration: 0.58, delay: 0.08, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const lidVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0px)'],
    transition: { duration: 0.54, delay: 0.04, times: [0, 0.36, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M9 15C9 15 11.2095 12 12 12C12.7906 12 15 15 15 15M12 13V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.5px' }" />
            <motion.path d="M20 8V15.0093C20 17.8415 20 19.2576 19.1213 20.1375C18.48 20.7797 17.5534 20.9531 16 21M4 8V15.0093C4 17.8415 4 19.2576 4.87868 20.1375C5.51998 20.7797 6.44655 20.9531 7.99999 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="boxVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
            <motion.path d="M19.5 3H4.5C3.56538 3 3.09808 3 2.75 3.20096C2.52197 3.33261 2.33261 3.52197 2.20096 3.75C2 4.09808 2 4.56538 2 5.5C2 6.43462 2 6.90192 2.20096 7.25C2.33261 7.47803 2.52197 7.66739 2.75 7.79904C3.09808 8 3.56538 8 4.5 8H19.5C20.4346 8 20.9019 8 21.25 7.79904C21.478 7.66739 21.6674 7.47803 21.799 7.25C22 6.90192 22 6.43462 22 5.5C22 4.56538 22 4.09808 21.799 3.75C21.6674 3.52197 21.478 3.33261 21.25 3.20096C20.9019 3 20.4346 3 19.5 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lidVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5.5px' }" />
          </svg>
        </div>
</template>
