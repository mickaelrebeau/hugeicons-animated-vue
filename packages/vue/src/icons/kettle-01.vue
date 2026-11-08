<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Kettle01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the kettle boils: the lid rattles and the steam lifts
// authored from scripts/authored
const kettleVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-4deg) scale(0.97)',
      'rotate(3.2deg) scale(1.03)',
      'rotate(-1.2deg) scale(0.995)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.5, times: [0, 0.2, 0.46, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const lidVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.2, 0.4, 0.6, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const markVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      delay: 0.1,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const knobVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.12px)',
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
            <path d="M7 7L4.83809 7.49321C3.33351 7.83646 2.58121 8.00809 2.21219 8.64897C1.84317 9.28985 2.00392 10.1455 2.32541 11.8569L2.77129 14.2305C3.19487 16.4852 4.34422 17.2445 6 18" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M7.14058 7.78149L6.11202 18.5819C5.9597 20.1813 5.88354 20.9809 6.41933 21.4905C6.95512 22 7.87218 22 9.70631 22H16.2937C18.1278 22 19.0449 22 19.5807 21.4905C20.1165 20.9809 20.0403 20.1813 19.888 18.5819L18.8594 7.78149C18.5414 4.44177 16.0794 3 13 3C9.92061 3 7.45864 4.44177 7.14058 7.78149Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="kettleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 12.5px' }" />
            <motion.path d="M8 7H20.9781C21.8375 7 22.1357 7.22852 21.9445 8.24057C21.6209 9.95337 20.6421 11.351 19.3558 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lidVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.1px 9.5px' }" />
            <motion.path d="M12 17C12 14 14 15 14 12" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M13 3V2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="knobVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 2.5px' }" />
          </svg>
        </div>
</template>
