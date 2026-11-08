<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FireExtinguisherIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the hose sprays and the tank shudders
// authored from scripts/authored
const tankVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-4deg) scale(0.97)',
      'rotate(3.2deg) scale(1.03)',
      'rotate(-1.2deg) scale(0.995)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.56, times: [0, 0.2, 0.46, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const hoseVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const leverVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.8px, 0px)',
      'translate(-0.096px, 0px)',
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

const sprayVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(0.4)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, 0px) scale(0.4)',
      'translate(-0.5px, 0.75px) scale(1)',
      'translate(-1px, 1.5px) scale(1.5)',
    ],
    opacity: [0, 0, 0.9, 0],
    transition: {
      duration: 0.8,
      delay: 0.1,
      times: [0, 0.16, 0.42, 1],
      ease: [
        'linear',
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
            <motion.path d="M10 18V10C10 7.79086 11.7909 6 14 6C16.2091 6 18 7.79086 18 10V18C18 19.8856 18 20.8284 17.4142 21.4142C16.8284 22 15.8856 22 14 22C12.1144 22 11.1716 22 10.5858 21.4142C10 20.8284 10 19.8856 10 18Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="tankVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 14px' }" />
            <path d="M10 13H18" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M12 6V4C12 3.25231 12 2.87846 12.1608 2.6C12.2661 2.41758 12.4176 2.26609 12.6 2.16077C12.8785 2 13.2523 2 14 2C14.7477 2 15.1215 2 15.4 2.16077C15.5824 2.26609 15.7339 2.41758 15.8392 2.6C16 2.87846 16 3.25231 16 4V6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M12 3H11C8.23855 3 5.99997 5.23858 5.99997 8V14C5.99997 15.1046 5.10454 16 3.99997 16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="hoseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16 3H20" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="leverVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 3px' }" />
            <motion.circle cx="5" cy="17" r="0.7" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="sprayVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
