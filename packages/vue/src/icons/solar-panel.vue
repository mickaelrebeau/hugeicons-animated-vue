<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SolarPanelIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the panel tilts toward the sun on its stand
// authored from scripts/authored
const panelVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.63px, 0.03px) rotate(6deg)',
      'translate(-0.44px, 0.02px) rotate(-4.199999999999999deg)',
      'translate(0.19px, 0.00px) rotate(1.7999999999999998deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
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

const panel2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.64px, -0.28px) rotate(6deg)',
      'translate(-0.43px, 0.24px) rotate(-4.199999999999999deg)',
      'translate(0.19px, -0.09px) rotate(1.7999999999999998deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
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

const panel3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.61px, 0.35px) rotate(6deg)',
      'translate(-0.45px, -0.20px) rotate(-4.199999999999999deg)',
      'translate(0.19px, 0.10px) rotate(1.7999999999999998deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
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
            <motion.path d="M15.6745 4H8.32553C6.86148 4 6.12945 4 5.56252 4.41264C4.99559 4.82528 4.72372 5.55596 4.17998 7.01733L3.287 9.41732C2.1773 12.3998 1.62245 13.891 2.28654 14.9455C2.95062 16 4.4446 16 7.43256 16H16.5674C19.5554 16 21.0494 16 21.7135 14.9455C22.3775 13.891 21.8227 12.3998 20.713 9.41732L19.82 7.01732C19.2763 5.55596 19.0044 4.82528 18.4375 4.41264C17.8706 4 17.1385 4 15.6745 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="panelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <path d="M12 16V20M12 20H15M12 20H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M10 4L8 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="panel2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 10px' }" />
            <motion.path d="M14 4L16 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="panel3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 10px' }" />
            <motion.path d="M20.5 10H3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="panelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
          </svg>
        </div>
</template>
