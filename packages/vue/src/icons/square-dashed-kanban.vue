<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SquareDashedKanbanIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the kanban columns grow in turn and the dashed frame traces
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.3, 1],
    pathOffset: [0, 1, 2],
    transition: { duration: 1, times: [0, 0.5, 1], ease: 'easeInOut' },
  },
};

const columnVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.80px) scaleY(1.4)',
      'translate(0px, -0.20px) scaleY(0.9)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.1,
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

const column2Variants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -1.20px) scaleY(0.6)',
      'translate(0px, 0.24px) scaleY(1.08)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.7,
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

const column3Variants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -1.20px) scaleY(0.7)',
      'translate(0px, 0.24px) scaleY(1.06)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.2,
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
            <motion.path d="M9.99877 2.5C9.45899 2.50516 8.96002 2.51488 8.49784 2.53315M14.0012 2.5C14.541 2.50516 15.04 2.51488 15.5022 2.53315M19.0043 3.13088C19.43 3.32055 19.7943 3.56673 20.1138 3.88624C20.4333 4.20575 20.6794 4.56995 20.8691 4.99568M3.13088 4.99568C3.32056 4.56995 3.56673 4.20575 3.88624 3.88624C4.20575 3.56673 4.56995 3.32055 4.99568 3.13088M21.5 9.99877C21.4948 9.45899 21.4851 8.96002 21.4669 8.49784M21.5 14.0012C21.4948 14.5409 21.4851 15.0399 21.4669 15.5021M20.8691 19.0043C20.6794 19.43 20.4333 19.7943 20.1138 20.1138C19.7943 20.4333 19.43 20.6794 19.0043 20.8691M15.5022 21.4668C15.04 21.4851 14.541 21.4948 14.0012 21.5M9.99877 21.5C9.45898 21.4948 8.96 21.4851 8.49781 21.4668M4.99568 20.8691C4.56995 20.6794 4.20575 20.4333 3.88624 20.1138C3.56673 19.7943 3.32056 19.43 3.13088 19.0043M2.5 14.0012C2.50516 14.5409 2.51488 15.0399 2.53315 15.5021M2.5 9.99884C2.50516 9.45904 2.51488 8.96004 2.53315 8.49784" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 8V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="columnVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M8 8V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="column2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 11px' }" />
            <motion.path d="M16 8V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="column3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 12px' }" />
          </svg>
        </div>
</template>
