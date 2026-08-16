<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Activity02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the trace redraws across the panel, then the status dot registers the reading
// authored from scripts/authored
const statusDotVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(1.5)', 'scale(1)'],
    opacity: [1, 0.55, 1],
    transition: { duration: 0.5, delay: 0.62, times: [0, 0.4, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const panelVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1)', 'scale(1.035)', 'scale(1)'],
    transition: {
      duration: 0.86,
      times: [0, 0.7, 0.85, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const traceVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.8,
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
            <motion.path d="M21.5 4.5C21.5 5.60457 20.6046 6.5 19.5 6.5C18.3954 6.5 17.5 5.60457 17.5 4.5C17.5 3.39543 18.3954 2.5 19.5 2.5C20.6046 2.5 21.5 3.39543 21.5 4.5Z" stroke="currentColor" stroke-width="1.5" :variants="statusDotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 4.5px' }" />
            <motion.path d="M20.4711 9.40577C20.5 10.2901 20.5 11.3119 20.5 12.5C20.5 16.7426 20.5 18.864 19.182 20.182C17.864 21.5 15.7426 21.5 11.5 21.5C7.25736 21.5 5.13604 21.5 3.81802 20.182C2.5 18.864 2.5 16.7426 2.5 12.5C2.5 8.25736 2.5 6.13604 3.81802 4.81802C5.13604 3.5 7.25736 3.5 11.5 3.5C12.6881 3.5 13.7099 3.5 14.5942 3.52895" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="panelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 12.5px' }" />
            <motion.path d="M6.5 14.5L9.29289 11.7071C9.68342 11.3166 10.3166 11.3166 10.7071 11.7071L12.2929 13.2929C12.6834 13.6834 13.3166 13.6834 13.7071 13.2929L16.5 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="traceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 12.5px' }" />
          </svg>
        </div>
</template>
