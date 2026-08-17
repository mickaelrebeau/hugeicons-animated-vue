<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BaseballBatIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bat swings from the grip, the ball popping off the barrel
// authored from scripts/authored
const batVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-3.89px, -2.63px) rotate(-22deg)',
      'translate(1.85px, 2.36px) rotate(14deg)',
      'translate(-0.63px, -0.59px) rotate(-4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.32, 0.54, 0.78, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.18, 0.9, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const gripVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(-22deg)',
      'translate(0.00px, 0.00px) rotate(14deg)',
      'translate(0.00px, 0.00px) rotate(-4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.32, 0.54, 0.78, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.18, 0.9, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const tapeVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.79px, -1.21px) rotate(-22deg)',
      'translate(0.85px, 1.09px) rotate(14deg)',
      'translate(-0.29px, -0.27px) rotate(-4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.32, 0.54, 0.78, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.18, 0.9, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const ballVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.8px, -1.4px)',
      'translate(-0.25200000000000006px, 0.196px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.48,
      delay: 0.28,
      times: [0, 0.12, 0.62, 1],
      ease: [
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
            <motion.path d="M5.45946 20L20.5567 8.68934C22.3317 7.30882 22.495 4.68503 20.905 3.09501C19.315 1.50499 16.6912 1.66834 15.3107 3.4433L4 18.5405" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="batVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.2px 10.8px' }" />
            <motion.path d="M5.57835 21.8426C7.08033 19.7713 4.24567 16.9109 2.15723 18.4251C1.96763 18.5625 1.94595 18.8368 2.11159 19.0023L5.00015 21.8884C5.16597 22.0541 5.44077 22.0323 5.57835 21.8426Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="gripVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 19.5px' }" />
            <motion.path d="M10 17L7 14" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="tapeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 15.5px' }" />
            <motion.circle cx="2.5" cy="2.5" r="2.5" transform="matrix(-1 0 0 1 21 16)" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="ballVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 18.5px' }" />
          </svg>
        </div>
</template>
