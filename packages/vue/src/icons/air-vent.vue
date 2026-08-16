<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AirVentIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// air keeps pushing out of the louvres, the middle jet leading the two side curls
// authored from scripts/authored
const louvreVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.96)', 'scaleX(1)'],
    transition: {
      duration: 1,
      times: [0, 0.4, 1],
      ease: [0.77, 0, 0.175, 1],
      repeat: Infinity,
      repeatDelay: 0.1,
    },
  },
};

const jetRightVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(0.9px, 1.2px)', 'translate(0px, 0px)'],
    opacity: [1, 0.28, 1],
    transition: {
      duration: 0.86,
      delay: 0.2,
      times: [0, 0.42, 1],
      ease: [0.23, 1, 0.32, 1],
      repeat: Infinity,
      repeatDelay: 0.12,
    },
  },
};

const jetLeftVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(-0.9px, 1.2px)', 'translate(0px, 0px)'],
    opacity: [1, 0.28, 1],
    transition: {
      duration: 0.86,
      delay: 0.2,
      times: [0, 0.42, 1],
      ease: [0.23, 1, 0.32, 1],
      repeat: Infinity,
      repeatDelay: 0.12,
    },
  },
};

const jetMiddleVariants: Variants = {
  normal: { transform: 'translateY(0px)', opacity: 1 },
  animate: {
    transform: ['translateY(0px)', 'translateY(1.8px)', 'translateY(0px)'],
    opacity: [1, 0.28, 1],
    transition: {
      duration: 0.86,
      times: [0, 0.42, 1],
      ease: [0.23, 1, 0.32, 1],
      repeat: Infinity,
      repeatDelay: 0.12,
    },
  },
};

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <path d="M4.00183 15C2.89726 15 2.00183 14.1046 2.00183 13V8C2.00183 6.11438 2.00183 5.17157 2.58762 4.58579C3.1734 4 4.11621 4 6.00183 4H18.0018C19.8874 4 20.8303 4 21.416 4.58579C22.0018 5.17157 22.0018 6.11438 22.0018 8V13C22.0018 14.1046 21.1064 15 20.0018 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M6.00183 10H18.0018" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="louvreVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M16.0018 15V16C16.0018 18.2091 17.7927 20 20.0018 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="jetRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 15px' }" />
            <motion.path d="M8.00183 15V16C8.00183 18.2091 6.21097 20 4.00183 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="jetLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 15px' }" />
            <motion.path d="M12.0018 20V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="jetMiddleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15px' }" />
          </svg>
        </div>
</template>
