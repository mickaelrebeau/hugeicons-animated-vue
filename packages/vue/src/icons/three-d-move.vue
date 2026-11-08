<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ThreeDMoveIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the axis arrows push out from the cube centre
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.2, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(0px, -1px)', 'translate(0px, 0.12px)', 'translate(0px, 0px)'],
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

const arrow2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.9px, 0.6px)',
      'translate(-0.108px, -0.072px)',
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

const arrow3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.9px, 0.6px)',
      'translate(0.108px, -0.072px)',
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
            <motion.path d="M12 14L17.5 18.5M12 14L6.5 18.5M12 14V7" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.8px' }" />
            <motion.path d="M10.3914 3.69046C11.1054 2.56349 11.4624 2 12 2C12.5376 2 12.8946 2.56349 13.6086 3.69046L14.1215 4.49995C14.8259 5.6118 15.1781 6.16772 14.9104 6.58386C14.6426 7 13.9327 7 12.5129 7H11.4871C10.0673 7 9.35739 7 9.08963 6.58386C8.82188 6.16772 9.17409 5.6118 9.87852 4.49995L10.3914 3.69046Z" stroke="currentColor" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.5px' }" />
            <motion.path d="M21.2324 19.1408C21.8559 20.3502 22.1676 20.9548 21.9085 21.4249C21.6494 21.8949 20.9936 21.9144 19.6819 21.9536L18.7398 21.9817C17.4457 22.0203 16.7987 22.0396 16.5705 21.5895C16.3422 21.1393 16.6843 20.5186 17.3686 19.2773L17.8629 18.3805C18.5471 17.1391 18.8893 16.5184 19.3756 16.5004C19.8619 16.4824 20.1694 17.0789 20.7846 18.2721L21.2324 19.1408Z" stroke="currentColor" stroke-width="1.5" :variants="arrow2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.3px 19.3px' }" />
            <motion.path d="M2.76761 19.1408C2.14414 20.3502 1.8324 20.9548 2.09148 21.4249C2.35055 21.8949 3.00639 21.9144 4.31805 21.9536L5.26021 21.9817C6.55427 22.0203 7.20131 22.0396 7.42955 21.5895C7.65779 21.1393 7.31567 20.5186 6.63143 19.2773L6.13711 18.3805C5.45286 17.1391 5.11074 16.5184 4.62443 16.5004C4.13811 16.4824 3.83055 17.0789 3.21545 18.2721L2.76761 19.1408Z" stroke="currentColor" stroke-width="1.5" :variants="arrow3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.7px 19.3px' }" />
          </svg>
        </div>
</template>
