<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Logout04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the arrow pulls out between the two panels
// authored from scripts/authored
const doorVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.22, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const door2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.26, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.6px, 0px)',
      'translate(-0.192px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
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
            <motion.path d="M15 17.499C15 18.429 15 18.894 14.8978 19.2755C14.6204 20.3108 13.8117 21.1194 12.7765 21.3968C12.395 21.499 11.93 21.499 11 21.499H9C6.17157 21.499 4.75736 21.499 3.87868 20.6204C3 19.7417 3 18.3275 3 15.499V8.50113C3 5.67292 3 4.25882 3.87859 3.38015C4.75718 2.50149 6.17129 2.50137 8.9995 2.50113L11.0016 2.50097C11.9298 2.50089 12.394 2.50085 12.7748 2.60266C13.8113 2.87976 14.621 3.68933 14.8982 4.72584C15 5.10667 15 5.5708 15 6.49904" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="doorVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 12px' }" />
            <motion.path d="M15 19.501C17.8284 19.501 19.2426 19.501 20.1213 18.6223C21 17.7436 21 16.3294 21 13.501V10.501C21 7.67253 21 6.25832 20.1213 5.37964C19.2426 4.50096 17.8284 4.50096 15 4.50096" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="door2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 12px' }" />
            <motion.path d="M16 12.001H9M14.5001 9.50096C14.5001 9.50096 17 11.3422 17 12.001C17 12.6598 14.5 14.501 14.5 14.501" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 12px' }" />
          </svg>
        </div>
</template>
