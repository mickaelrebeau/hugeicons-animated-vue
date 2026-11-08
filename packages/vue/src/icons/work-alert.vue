<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WorkAlertIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bang stretches and its dot drops in on the bag
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.2, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const dotVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.8)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.2,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const stemVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -0.28px) scaleY(1.4)',
      'translate(0px, 0.07px) scaleY(0.9)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.66,
      times: [0, 0.26, 0.72, 1],
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
            <motion.path d="M18 21.5C20.2091 21.5 22 19.7091 22 17.5C22 15.2909 20.2091 13.5 18 13.5C15.7909 13.5 14 15.2909 14 17.5C14 19.7091 15.7909 21.5 18 21.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 17.5px' }" />
            <motion.path d="M18.0504 19.3998H18.0004M18.1004 19.3998C18.1004 19.455 18.0556 19.4998 18.0004 19.4998C17.9452 19.4998 17.9004 19.455 17.9004 19.3998C17.9004 19.3446 17.9452 19.2998 18.0004 19.2998C18.0556 19.2998 18.1004 19.3446 18.1004 19.3998Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 19.4px' }" />
            <motion.path d="M18 17V15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stemVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 16.3px' }" />
            <path d="M11 20.5H8C5.17157 20.5 3.75736 20.5 2.87868 19.6213C2 18.7426 2 17.3284 2 14.5V12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6H15C17.8284 6 19.2426 6 20.1213 6.87868C20.8286 7.58599 20.9731 8.64032 21 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M8 6C8 4.59554 8 3.89331 8.33706 3.38886C8.48298 3.17048 8.67048 2.98298 8.88886 2.83706C9.39331 2.5 10.0955 2.5 11.5 2.5C12.9045 2.5 13.6067 2.5 14.1111 2.83706C14.3295 2.98298 14.517 3.17048 14.6629 3.38886C15 3.89331 15 4.59554 15 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
