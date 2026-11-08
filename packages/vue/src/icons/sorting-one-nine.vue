<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SortingOneNineIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the arrow drops and the one and nine flip in turn
// authored from scripts/authored
const digitVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.06)', 'scaleX(1)'],
    transition: { duration: 0.56, times: [0, 0.5, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const digit2Variants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.06)', 'scaleX(1)'],
    transition: { duration: 0.56, delay: 0.12, times: [0, 0.5, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.2px)',
      'translate(0px, -0.144px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.06,
      times: [0, 0.44, 0.72, 1],
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
            <motion.path d="M7 9.99936V3.94812C7 3.3736 7 3.08634 6.76959 3.01485C6.26306 2.85769 5.5 3.99902 5.5 3.99902M7 9.99936H5.5M7 9.99936H8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="digitVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 6.4px' }" />
            <motion.path d="M9 17.4991V15.7491C9 14.9242 9 14.5117 8.70711 14.2554C8.41421 13.9991 7.94281 13.9991 7 13.9991C6.05719 13.9991 5.58579 13.9991 5.29289 14.2554C5 14.5117 5 14.9242 5 15.7491C5 16.5741 5 16.9866 5.29289 17.2429C5.58579 17.4991 6.05719 17.4991 7 17.4991H9ZM9 17.4991V18.3741C9 19.6116 9 20.2303 8.56066 20.6147C8.12132 20.9991 7.41421 20.9991 6 20.9991H5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="digit2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 17.5px' }" />
            <motion.path d="M16.5 19.9991V3.99915M16.5 19.9991C15.7998 19.9991 14.4915 18.0048 14 17.4991M16.5 19.9991C17.2002 19.9991 18.5085 18.0048 19 17.4991" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 12px' }" />
          </svg>
        </div>
</template>
