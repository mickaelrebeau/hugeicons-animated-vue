<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TextFootnoteIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the footnote mark pops beside the T
// authored from scripts/authored
const noteVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.3)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const tVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.5,
      delay: 0.1,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M19.75 5.88792L19.7494 8.72342M19.7494 8.72342L22 7.7061M19.7494 8.72342L17.5 7.7061M19.7494 8.72342L17.95 10.8879M19.7494 8.72342L21.55 10.8879" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="noteVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.8px 8.4px' }" />
            <path d="M12 21.0017H6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M16 5.99779C16 5.34082 16 5.01235 15.9194 4.7245C15.7518 4.12577 15.3066 3.61001 14.7541 3.37477C14.4886 3.26167 14.1885 3.2296 13.5884 3.16547C12.1695 3.01383 10.3874 2.99779 9 2.99779C7.61262 2.99779 5.83047 3.01383 4.41161 3.16547C3.8115 3.2296 3.51144 3.26167 3.24586 3.37477C2.69344 3.61001 2.24816 4.12577 2.08057 4.7245C2 5.01235 2 5.34082 2 5.99779" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="tVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M9 3.34984L9 21.0015" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
