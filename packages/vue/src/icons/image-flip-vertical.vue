<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ImageFlipVerticalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two halves swap across the horizontal axis
// authored from scripts/authored
const halfVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.6px)',
      'translate(0px, -0.24px)',
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
      'translate(0px, -1.6px)',
      'translate(0px, 0.24px)',
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
            <motion.path d="M13.4572 5.40692L9.5343 3.33293C7.52036 2.26817 6.51339 1.73579 5.75669 2.12971C5 2.52362 5 3.58019 5 5.69334V7.76734C5 9.05553 5 9.69962 5.44155 10.0998C5.8831 10.5 6.59376 10.5 8.01508 10.5H11.9379C16.4249 10.5 18.6683 10.5 18.9695 9.49025C19.2707 8.48051 17.3329 7.45598 13.4572 5.40692Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="halfVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.1px 6.1px' }" />
            <motion.path d="M13.4572 18.5931L9.5343 20.6671C7.52036 21.7318 6.51339 22.2642 5.75669 21.8703C5 21.4764 5 20.4198 5 18.3067V16.2327C5 14.9445 5 14.3004 5.44155 13.9002C5.8831 13.5 6.59376 13.5 8.01508 13.5H11.9379C16.4249 13.5 18.6683 13.5 18.9695 14.5097C19.2707 15.5195 17.3329 16.544 13.4572 18.5931Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="half2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.1px 17.9px' }" />
          </svg>
        </div>
</template>
