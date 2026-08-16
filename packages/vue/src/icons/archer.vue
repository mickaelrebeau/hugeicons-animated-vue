<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArcherIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bow draws, the string tightens, then the arrow flies a step along its shaft
// authored from scripts/authored
const bowVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.9)', 'scaleX(1.04)', 'scaleX(1)'],
    transition: { duration: 0.62, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const fletchingVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.46, delay: 0.22, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const shaftVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.8px, -1.8px)',
      'translate(-0.216px, 0.216px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.08,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const headVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.8px, -1.8px)',
      'translate(-0.216px, 0.216px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.12,
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
            <motion.path d="M11 17.0294L20 21C19.4444 20.4444 18.4898 18.6435 19.1158 15.8842C19.8982 12.4351 21.3667 8.96668 15.9368 7.06317C14.0333 1.63335 10.5649 3.10176 7.11578 3.88422C4.35649 4.51018 2.55556 3.55556 2 3L6 12.0741" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.7px 11.3px' }" />
            <motion.path d="M5 18H2L5 15H8V18L5 21V18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fletchingVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 18px' }" />
            <motion.path d="M8 15L20 3" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="shaftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 9px' }" />
            <motion.path d="M17 3H19C19.4714 3 19.7071 3 19.8536 3.14645C20 3.29289 20 3.5286 20 4V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 4.5px' }" />
          </svg>
        </div>
</template>
