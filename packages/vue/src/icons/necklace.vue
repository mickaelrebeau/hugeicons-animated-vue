<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'NecklaceIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pendant swings on the chain
// authored from scripts/authored
const pendantVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.62px, -0.07px) rotate(12deg)',
      'translate(0.42px, -0.03px) rotate(-8deg)',
      'translate(-0.16px, -0.00px) rotate(3deg)',
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

const pendant2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.95px, -0.21px) rotate(12deg)',
      'translate(1.31px, -0.09px) rotate(-8deg)',
      'translate(-0.49px, -0.01px) rotate(3deg)',
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
            <motion.path d="M10.542 12.0002L10.9325 8.87621C11.0235 8.14822 11.3545 8.00024 12.042 8.00024C12.7295 8.00024 13.0605 8.14822 13.1515 8.87621L13.542 12.0002" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pendantVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M8.2844 12.6118C9.6196 11.8003 10.785 12.1273 11.485 12.6482C11.7721 12.8618 11.9156 12.9685 12 12.9685C12.0845 12.9685 12.228 12.8618 12.5151 12.6482C13.2151 12.1273 14.3805 11.8003 15.7157 12.6118C17.468 13.6767 17.8645 17.1898 13.8226 20.1538C13.0527 20.7183 12.6678 21.0005 12 21.0005C11.3323 21.0005 10.9474 20.7183 10.1775 20.1538C6.13558 17.1898 6.53208 13.6767 8.2844 12.6118Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pendant2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.4px' }" />
            <path d="M2.0059 3.00024C1.90863 4.57792 2.97686 8.0433 8.05347 9.66205M21.9941 3.00024C22.0914 4.57792 21.0231 8.0433 15.9465 9.66205" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
