<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BbqGrillIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// heat shimmers off the lid, then the three legs take the weight together
// authored from scripts/authored
const legLVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.23px, -0.32px) rotate(4deg)',
      'translate(0.19px, 0.23px) rotate(-3deg)',
      'translate(-0.06px, -0.08px) rotate(1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.16,
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

const legRVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.23px, -0.32px) rotate(-4deg)',
      'translate(-0.19px, 0.23px) rotate(3deg)',
      'translate(0.06px, -0.08px) rotate(-1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.16,
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

const legMVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.12px, -0.00px) rotate(2deg)',
      'translate(0.12px, -0.00px) rotate(-2deg)',
      'translate(-0.03px, -0.00px) rotate(0.5deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.16,
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

const heatVariants: Variants = {
  normal: { transform: 'translateY(0px) scaleY(1)' },
  animate: {
    transform: [
      'translateY(0px) scaleY(1)',
      'translateY(-1.6px) scaleY(1.14)',
      'translateY(0.4px) scaleY(0.9)',
      'translateY(0px) scaleY(1)',
    ],
    transition: {
      duration: 0.66,
      times: [0, 0.34, 0.7, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.46, delay: 0.08, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M9 15L6 22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="legLVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 18.5px' }" />
            <motion.path d="M15 15L18 22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="legRVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 18.5px' }" />
            <motion.path d="M12 15L12 22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="legMVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18.5px' }" />
            <motion.path d="M15.5556 6C16.1481 5.44772 16.1481 4.55228 15.5556 4C14.963 3.44772 14.963 2.55228 15.5556 2M12 6C12.5926 5.44772 12.5926 4.55228 12 4C11.4074 3.44772 11.4074 2.55228 12 2M8.44444 6C9.03704 5.44772 9.03704 4.55228 8.44444 4C7.85185 3.44772 7.85185 2.55228 8.44444 2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="heatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4px' }" />
            <path d="M7.5 19H16.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M12 15C15.5371 15 18.4632 12.3908 18.9485 8.99703C19.0107 8.56215 19.0418 8.3447 18.8918 8.17235C18.7419 8 18.5001 8 18.0164 8H5.98359C5.49992 8 5.25809 8 5.10816 8.17235C4.95823 8.3447 4.98933 8.56215 5.05151 8.99703C5.53679 12.3908 8.46285 15 12 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.5px' }" />
            <path d="M19 10H20M5 10H4" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
