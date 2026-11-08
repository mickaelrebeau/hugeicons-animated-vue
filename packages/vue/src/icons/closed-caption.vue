<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ClosedCaptionIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the CC letters retract and rewrite
// authored from scripts/authored
const screenVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.4, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const ccVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.82,
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
            <motion.path d="M2 12C2 8.02033 2 6.03049 3.0528 4.70201C3.22119 4.48953 3.40678 4.29302 3.60746 4.11473C4.86213 3 6.74142 3 10.5 3H13.5C17.2586 3 19.1379 3 20.3925 4.11473C20.5932 4.29302 20.7788 4.48953 20.9472 4.70201C22 6.03049 22 8.02033 22 12C22 15.9797 22 17.9695 20.9472 19.298C20.7788 19.5105 20.5932 19.707 20.3925 19.8853C19.1379 21 17.2586 21 13.5 21H10.5C6.74142 21 4.86213 21 3.60746 19.8853C3.40678 19.707 3.22119 19.5105 3.0528 19.298C2 17.9695 2 15.9797 2 12Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="screenVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M10.5 9H10C9.06812 9 8.60218 9 8.23463 9.15224C7.74458 9.35523 7.35523 9.74458 7.15224 10.2346C7 10.6022 7 11.0681 7 12C7 12.9319 7 13.3978 7.15224 13.7654C7.35523 14.2554 7.74458 14.6448 8.23463 14.8478C8.60218 15 9.06812 15 10 15H10.5M17 9H16.5C15.5681 9 15.1022 9 14.7346 9.15224C14.2446 9.35523 13.8552 9.74458 13.6522 10.2346C13.5 10.6022 13.5 11.0681 13.5 12C13.5 12.9319 13.5 13.3978 13.6522 13.7654C13.8552 14.2554 14.2446 14.6448 14.7346 14.8478C15.1022 15 15.5681 15 16.5 15H17" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="ccVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
