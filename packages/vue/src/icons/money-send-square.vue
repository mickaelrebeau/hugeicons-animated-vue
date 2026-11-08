<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MoneySendSquareIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the arrow leaves the square and the dollar rewrites
// authored from scripts/authored
const dollarVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.82,
      delay: 0.1,
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

const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1px, -1px)',
      'translate(-0.15px, 0.15px)',
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
            <motion.path d="M12.002 9.00146C10.8974 9.00146 10.002 9.67303 10.002 10.5015C10.002 11.3299 10.8974 12.0015 12.002 12.0015C13.1065 12.0015 14.002 12.6731 14.002 13.5015C14.002 14.3299 13.1065 15.0015 12.002 15.0015M12.002 9.00146C12.8728 9.00146 13.6136 9.41886 13.8881 10.0015M12.002 9.00146V8.00146M12.002 15.0015C11.1311 15.0015 10.3903 14.5841 10.1158 14.0015M12.002 15.0015V16.0015" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="dollarVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M13.5 2.50146C13.5 2.50146 12.6839 2.50146 12 2.50146C7.52166 2.50146 5.28249 2.50146 3.89124 3.89271C2.5 5.28395 2.5 7.52312 2.5 12.0015C2.5 16.4798 2.5 18.719 3.89124 20.1103C5.28249 21.5015 7.52166 21.5015 12 21.5015C16.4783 21.5015 18.7175 21.5015 20.1088 20.1103C21.5 18.719 21.5 16.4798 21.5 12.0015C21.5 11.3176 21.5 10.5015 21.5 10.5015" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M16.5 7.49927L20.6758 3.32107M21.5 6.97751L21.3818 3.88602C21.3818 3.15737 20.9467 2.70339 20.1542 2.64612L17.0302 2.49927" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 5px' }" />
          </svg>
        </div>
</template>
