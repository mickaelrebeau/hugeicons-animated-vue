<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CloudSunRainIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the sun’s rays flare behind the cloud while two drops fall
// authored from scripts/authored
const raysVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) scale(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) scale(1)',
      'translate(-0.24px, 0.96px) scale(0.8)',
      'translate(0.17px, -0.67px) scale(1.14)',
      'translate(-0.02px, 0.10px) scale(0.98)',
      'translate(0.00px, 0.00px) scale(1)',
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

const dropVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.4px)',
      'translate(0px, -1.4px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.16,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const drop2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.4px)',
      'translate(0px, -1.4px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
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
            <path d="M14 20.7938C15.1709 20.3563 16 19.2703 16 18C16 16.3431 14.5897 15 12.85 15C12.8448 15 12.8395 15 12.8343 15C12.8447 14.8902 12.85 14.779 12.85 14.6667C12.85 12.6416 11.1263 11 9 11C6.98627 11 5.33363 12.4724 5.1643 14.3485C3.38879 14.5094 2 15.9336 2 17.6667C2 18.9964 2.81753 20.1442 4 20.6792" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M17.3686 13C17.4509 12.6804 17.4946 12.3453 17.4946 12C17.4946 9.79086 15.7038 8 13.4946 8C12.7915 8 12.1308 8.18142 11.5566 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M13.494 3V4M21.999 11.495H20.999M19.5059 5.48617L18.7988 6.19328M8.19929 6.19343L7.49218 5.48633" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="raysVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.7px 7.2px' }" />
            <motion.path d="M11 19V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 20px' }" />
            <motion.path d="M7 18V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="drop2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 19px' }" />
          </svg>
        </div>
</template>
