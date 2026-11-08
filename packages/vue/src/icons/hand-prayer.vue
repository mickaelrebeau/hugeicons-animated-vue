<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HandPrayerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the palms press together in prayer
// authored from scripts/authored
const palmVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.5px, 0px)',
      'translate(0.075px, 0px)',
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

const palm2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.5px, 0px)',
      'translate(-0.075px, 0px)',
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

const armVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.6px, -0.4px)',
      'translate(0.09px, 0.06px)',
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

const arm2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.6px, -0.4px)',
      'translate(-0.09px, 0.06px)',
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
            <motion.path d="M15.5 15L14 10.5C12.3432 10.4999 12 11.843 12 13.4999V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="palmVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.8px 12.7px' }" />
            <motion.path d="M8.5 15L10 10.5C11.6568 10.4999 12 11.843 12 13.4999V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="palm2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.3px 12.7px' }" />
            <motion.path d="M21.9779 21.9999C20.8283 21.3294 18.8918 19.8143 16.2887 20.008C15.6292 20.057 15.2991 20.0816 14.9976 20.0584C14.696 20.0352 14.6875 20.0333 14.6706 20.0293C13.139 19.6745 12 18.3357 12 16.7382V3.19665C12 2.53578 12.5357 2.00003 13.1966 2C13.6825 1.99997 14.1202 2.29381 14.3042 2.74356L17.0224 9.38799C18.088 11.993 18.6209 13.2954 19.5497 13.9653C19.6069 14.0065 19.7128 14.0777 19.7726 14.1149C20.7443 14.721 21.1628 14.721 22 14.721" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="armVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 12px' }" />
            <motion.path d="M2.02208 22C3.17173 21.3295 5.1082 19.8144 7.71127 20.008C8.37081 20.057 8.70094 20.0816 9.00245 20.0584C9.304 20.0353 9.31246 20.0333 9.32938 20.0294C10.861 19.6746 12 18.3357 12 16.7382V3.19664C12 2.53575 11.4642 2 10.8034 2C10.3175 2 9.8798 2.29382 9.69582 2.74355L6.97762 9.38804C5.91195 11.993 5.37912 13.2955 4.45028 13.9654C4.39315 14.0066 4.28717 14.0777 4.22741 14.115C3.25573 14.721 2.83715 14.721 2 14.721" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arm2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 12px' }" />
          </svg>
        </div>
</template>
