<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SunCloudAngledRainZap02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cloud drifts, then the bolt flashes and the rain falls
// authored from scripts/authored
const boltVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    opacity: [1, 0.2, 1, 1],
    transition: {
      duration: 0.5,
      delay: 0.26,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const rainVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(-1px, 3px)', 'translate(1px, -3px)', 'translate(0px, 0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.34,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const rain2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(-1px, 3px)', 'translate(1px, -3px)', 'translate(0px, 0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.42000000000000004,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const cloudVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1px, 0px)',
      'translate(0.6px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.9, times: [0, 0.18, 0.46, 0.74, 1], ease: [0.77, 0, 0.175, 1] },
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
            <motion.path d="M9.0784 14.9999L7.30434 17.6837C7.06684 18.043 6.94808 18.2226 7.02165 18.3612C7.09522 18.4999 7.30931 18.4999 7.73747 18.4999H9.26253C9.69069 18.4999 9.90478 18.4999 9.97835 18.6385C10.0519 18.7772 9.93316 18.9568 9.69566 19.3161L7.9216 21.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="boltVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 18.5px' }" />
            <motion.path d="M16 19.9999L15 21.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rainVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 21px' }" />
            <motion.path d="M13 19.9999L12 21.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rain2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 21px' }" />
            <path d="M2.95939 9.19373C2.21865 6.47179 3.85922 3.67397 6.6237 2.94463M2.95939 9.19373L2 9.44684M2.95939 9.19373C3.14359 9.87059 3.4577 10.479 3.86823 11M6.6237 2.94463L6.36663 2M6.6237 2.94463C8.66673 2.40563 10.7518 3.14719 12 4.66961M3.4765 5.32297L2.4644 4.74628M11.1407 2.45725L10.557 3.45494" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M17.4776 10.9008C17.485 10.9007 17.4925 10.9007 17.5 10.9007C19.9853 10.9007 22 12.8821 22 15.3263C22 17.2532 20.7478 18.8925 19 19.5M17.4776 10.9008C17.4924 10.7388 17.5 10.5748 17.5 10.409C17.5 7.42169 15.0376 5 12 5C9.12324 5 6.76233 7.17208 6.52042 9.9396M17.4776 10.9008C17.3753 12.0165 16.9286 13.0344 16.2428 13.8511M6.52042 9.9396C3.98398 10.177 2 12.2779 2 14.8345C2 16.4433 2.78555 17.8716 4 18.7687M6.52042 9.9396C6.67826 9.92483 6.83823 9.91727 7 9.91727C8.12582 9.91727 9.16474 10.2832 10.0005 10.9007" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cloudVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.3px' }" />
          </svg>
        </div>
</template>
