<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UnlinkIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two halves pull apart and the sparks pop
// authored from scripts/authored
const halfVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.9px, 0.9px)',
      'translate(0.135px, -0.135px)',
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

const half2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.9px, -0.9px)',
      'translate(-0.135px, 0.135px)',
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

const sparksVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.3)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.12,
      times: [0, 0.34, 0.66, 1],
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
            <motion.path d="M12.1434 10.691L12.3503 10.4841C14.329 8.50532 17.5372 8.50532 19.5159 10.4841C21.4947 12.4628 21.4947 15.671 19.5159 17.6497L16.6497 20.5159C14.671 22.4947 11.4628 22.4947 9.48405 20.5159C7.50532 18.5372 7.50532 15.329 9.48405 13.3503L9.9484 12.886" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="halfVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 15.5px' }" />
            <motion.path d="M20.0516 11.114L20.5159 10.6497C22.4947 8.67095 22.4947 5.46279 20.5159 3.48405C18.5372 1.50532 15.329 1.50532 13.3503 3.48405L10.4841 6.35031C8.50532 8.32904 8.50532 11.5372 10.4841 13.5159C12.4628 15.4947 15.671 15.4947 17.6497 13.5159L17.8566 13.309" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="half2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 8.5px' }" />
            <motion.path d="M4.5 4L6 6M2 8L5 9M3 13.5L5 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sparksVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 8.8px' }" />
          </svg>
        </div>
</template>
