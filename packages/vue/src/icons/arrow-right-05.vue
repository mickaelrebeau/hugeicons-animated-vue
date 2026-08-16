<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowRight05Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the filled body slides onto the end-line, which takes the weight
// authored from scripts/authored
const lineVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.72)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: { duration: 0.48, delay: 0.14, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const bodyVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(2.4px, 0px)',
      'translate(-0.288px, 0px)',
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
            <motion.path d="M19.9999 6L19.9998 18.0007" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 12px' }" />
            <motion.path d="M11.5028 12.0113V12.3819C11.4622 15.353 11.5972 16.3852 12.8477 15.906L13.1558 15.7241L13.4044 15.5513L13.9396 15.1383L14.94 14.269L15.9629 13.4052L16.4629 12.9521L16.6855 12.7255L16.9477 12.3465L17.0015 12.0102L16.9477 11.6762L16.6855 11.2971L16.4629 11.0706L15.9629 10.6175L14.94 9.75372L13.9396 8.88439L13.4044 8.4714L13.1558 8.29862L12.8477 8.1167C11.5972 7.63748 11.4622 8.66971 11.5028 11.6408V12.0113ZM11.5028 12.0113H3.99983" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 12px' }" />
          </svg>
        </div>
</template>
