<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlphabetKoreanIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// giyeok draws its corner, then the vertical iueung stands beside it
// authored from scripts/authored
const giyeokVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.72,
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
      ],
    },
  },
};

const iueungVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.18)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: { duration: 0.54, delay: 0.18, times: [0, 0.14, 0.58, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M5 6H11.1554C12.0231 6 12.4569 6 12.7534 6.31741C13.0498 6.63483 13.0234 7.02125 12.9707 7.79408C12.7255 11.3825 10.8793 17.0157 5 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="giyeokVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16 3V12M16 21V12M16 12H19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iueungVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 12px' }" />
          </svg>
        </div>
</template>
