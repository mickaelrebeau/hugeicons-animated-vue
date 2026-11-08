<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LaurelWreathLeftIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the branch sways from its base
// authored from scripts/authored
const branchVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.09px, 0.47px) rotate(-8deg)',
      'translate(1.60px, -0.16px) rotate(6deg)',
      'translate(-0.53px, 0.09px) rotate(-2deg)',
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

const branch2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.42px, 0.66px) rotate(-8deg)',
      'translate(1.12px, -0.36px) rotate(6deg)',
      'translate(-0.36px, 0.15px) rotate(-2deg)',
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

const branch3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.77px, 0.56px) rotate(-8deg)',
      'translate(0.63px, -0.34px) rotate(6deg)',
      'translate(-0.20px, 0.13px) rotate(-2deg)',
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

const branch4Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.22px, 0.06px) rotate(-8deg)',
      'translate(0.17px, -0.02px) rotate(6deg)',
      'translate(-0.06px, 0.01px) rotate(-2deg)',
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

const branch5Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.51px, -0.08px) rotate(-8deg)',
      'translate(1.86px, 0.29px) rotate(6deg)',
      'translate(-0.63px, -0.05px) rotate(-2deg)',
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
            <motion.path d="M9.24601 6.61105C9.03276 8.25332 10.35 9.77729 10.35 9.77729C10.35 9.77729 12.013 8.6386 12.2262 6.99633C12.4395 5.35405 11.1223 3.83008 11.1223 3.83008C11.1223 3.83008 9.45927 4.96877 9.24601 6.61105Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="branchVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.7px 6.8px' }" />
            <motion.path d="M7.68301 12.1301C8.37906 13.6334 10.3074 14.2234 10.3074 14.2234C10.3074 14.2234 11.1071 12.3759 10.4111 10.8726C9.71504 9.36923 7.78674 8.7793 7.78674 8.7793C7.78674 8.7793 6.98696 10.6267 7.68301 12.1301Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="branch2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 11.5px' }" />
            <motion.path d="M8.50364 17.4151C9.83175 18.4083 11.8095 18.0136 11.8095 18.0136C11.8095 18.0136 11.634 16.0089 10.3059 15.0157C8.97775 14.0226 7 14.4172 7 14.4172C7 14.4172 7.17554 16.422 8.50364 17.4151Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="branch3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.4px 16.2px' }" />
            <motion.path d="M12.1131 21.7134C13.6181 22.4115 15.4716 21.6181 15.4716 21.6181C15.4716 21.6181 14.8851 19.6926 13.3801 18.9944C11.8751 18.2962 10.0216 19.0897 10.0216 19.0897C10.0216 19.0897 10.6081 21.0152 12.1131 21.7134Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="branch4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.7px 20.4px' }" />
            <motion.path d="M13.7813 2.96764C12.5708 4.10058 12.6174 6.11247 12.6174 6.11247C12.6174 6.11247 14.6267 6.28752 15.8372 5.15458C17.0477 4.02165 17.001 2.00975 17.001 2.00975C17.001 2.00975 14.9918 1.83471 13.7813 2.96764Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="branch5Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.8px 4.1px' }" />
          </svg>
        </div>
</template>
