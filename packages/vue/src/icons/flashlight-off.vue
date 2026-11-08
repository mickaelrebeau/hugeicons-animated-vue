<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FlashlightOffIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the slash cuts across and the switch clicks off
// authored from scripts/authored
const bodyVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.2, 0.2, 1],
    transition: { duration: 0.8, delay: 0.1, times: [0, 0.24, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const slashVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const switchVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 0.8px)',
      'translate(0px, -0.12px)',
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
            <motion.path d="M6 6C6 7.04416 6.27249 8.07025 6.79054 8.97683L7.71665 10.526C7.85746 10.7616 7.92786 10.8793 7.96393 11.01C8 11.1406 8 11.2778 8 11.5522V18C8 19.4001 8 20.1002 8.27248 20.635C8.51217 21.1054 8.89462 21.4878 9.36502 21.7275C9.8998 22 10.5999 22 12 22C13.4001 22 14.1002 22 14.635 21.7275C15.1054 21.4878 15.4878 21.1054 15.7275 20.635C16 20.1002 16 19.4001 16 18V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7 2.29243C7.60164 2 8.50417 2 10 2H14C15.8856 2 16.8284 2 17.4142 2.58579C18 3.17157 18 4.11438 18 6C18 7.04416 17.7275 8.07025 17.2095 8.97683L16.2834 10.526C16.1425 10.7616 16.0721 10.8793 16.0361 11.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2 2L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M11 6L18 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 12V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="switchVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.5px' }" />
          </svg>
        </div>
</template>
