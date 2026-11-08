<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WorkflowSquare10Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the root pops, the arms draw and the leaves hop
// authored from scripts/authored
const nodeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.12)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const hopVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.11200000000000002px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.24,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const lineVariants: Variants = {
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

const hop2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.11200000000000002px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.3,
      times: [0, 0.32, 0.62, 0.86, 1],
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
            <motion.path d="M9.69406 3.61965C10.8161 2.53262 11.3771 1.98911 12.0634 1.99998C12.7496 2.01085 13.2931 2.57186 14.3802 3.69388C15.4672 4.8159 16.0107 5.37691 15.9998 6.06318C15.989 6.74944 15.428 7.29295 14.3059 8.37998C13.1839 9.46701 12.6229 10.0105 11.9366 9.99966C11.2504 9.98879 10.7069 9.42777 9.61983 8.30575C8.5328 7.18373 7.98929 6.62272 8.00016 5.93646C8.01103 5.25019 8.57204 4.70668 9.69406 3.61965Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6px' }" />
            <motion.path d="M7 13.4998C7 14.8805 5.88071 15.9998 4.5 15.9998C3.11929 15.9998 2 14.8805 2 13.4998C2 12.1191 3.11929 10.9998 4.5 10.9998C5.88071 10.9998 7 12.1191 7 13.4998Z" stroke="currentColor" stroke-width="1.5" :variants="hopVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 13.5px' }" />
            <motion.path d="M22 13.4998C22 12.1191 20.8807 10.9998 19.5 10.9998C18.1193 10.9998 17 12.1191 17 13.4998C17 14.8805 18.1193 15.9998 19.5 15.9998C20.8807 15.9998 22 14.8805 22 13.4998Z" stroke="currentColor" stroke-width="1.5" :variants="hopVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 13.5px' }" />
            <motion.path d="M12 9.99982L12 16.9998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9.5 8.49982L6.5 11.4998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14.5 8.49982L17.5 11.4998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9.5 19.3998C9.5 18.2684 9.5 17.7028 9.85147 17.3513C10.2029 16.9998 10.7686 16.9998 11.9 16.9998H12.1C13.2314 16.9998 13.7971 16.9998 14.1485 17.3513C14.5 17.7028 14.5 18.2684 14.5 19.3998V19.5998C14.5 20.7312 14.5 21.2969 14.1485 21.6483C13.7971 21.9998 13.2314 21.9998 12.1 21.9998H11.9C10.7686 21.9998 10.2029 21.9998 9.85147 21.6483C9.5 21.2969 9.5 20.7312 9.5 19.5998V19.3998Z" stroke="currentColor" stroke-width="1.5" :variants="hop2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19.5px' }" />
          </svg>
        </div>
</template>
