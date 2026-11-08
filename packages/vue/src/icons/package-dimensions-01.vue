<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PackageDimensions01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the measuring rulers stretch along the box
// authored from scripts/authored
const rulerVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(-4.20px, 0px) scaleX(0.4)',
      'translate(0.42px, 0px) scaleX(1.06)',
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1)',
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

const ruler2Variants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -4.20px) scaleY(0.4)',
      'translate(0px, 0.42px) scaleY(1.06)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.1,
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
            <path d="M15.5 7.5H13.5C10.6716 7.5 9.25736 7.5 8.37868 8.37868C7.5 9.25736 7.5 10.6716 7.5 13.5V15.5C7.5 18.3284 7.5 19.7426 8.37868 20.6213C9.25736 21.5 10.6716 21.5 13.5 21.5H15.5C18.3284 21.5 19.7426 21.5 20.6213 20.6213C21.5 19.7426 21.5 18.3284 21.5 15.5V13.5C21.5 10.6716 21.5 9.25736 20.6213 8.37868C19.7426 7.5 18.3284 7.5 15.5 7.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M16 7.5H13V10.5C13 10.9714 13 11.2071 13.1464 11.3536C13.2929 11.5 13.5286 11.5 14 11.5H15C15.4714 11.5 15.7071 11.5 15.8536 11.3536C16 11.2071 16 10.9714 16 10.5V7.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M10.5 18.5H13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M7.5 3.5H21.5M7.5 3.5V2.5M7.5 3.5V4.5M21.5 3.5V2.5M21.5 3.5V4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rulerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 3.5px' }" />
            <motion.path d="M3.5 7.5L3.5 21.5M3.5 7.5L4.5 7.5M3.5 7.5L2.5 7.5M3.5 21.5H4.5M3.5 21.5H2.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ruler2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 14.5px' }" />
          </svg>
        </div>
</template>
