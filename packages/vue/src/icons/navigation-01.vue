<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Navigation01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the four arrows point out from the center in turn
// authored from scripts/authored
const centerVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(-1px, 0px)', 'translate(0.12px, 0px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.5,
      delay: 0.1,
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
    transform: ['translate(0px, 0px)', 'translate(0px, 1px)', 'translate(0px, -0.12px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.5,
      delay: 0.2,
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
    transform: ['translate(0px, 0px)', 'translate(1px, 0px)', 'translate(-0.12px, 0px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.5,
      delay: 0.3,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const arrow4Variants: Variants = {
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
            <motion.path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="currentColor" stroke-width="1.5" :variants="centerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2.00019 12.0504C1.96622 11.0147 6.45448 8.57937 6.87722 9.06275C7.3566 9.61089 6.21047 11.2397 5.95232 11.7584C5.79708 12.0703 5.80134 12.2056 5.97785 12.5172C6.77726 13.9283 7.17382 14.6313 6.92737 14.9352C6.53453 15.4197 2.03334 13.0611 2.00019 12.0504Z" stroke="currentColor" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.7px 12px' }" />
            <motion.path d="M11.9496 21.9997C12.9853 22.0337 15.4206 17.5454 14.9373 17.1227C14.3891 16.6433 12.7603 17.7894 12.2416 18.0476C11.9297 18.2028 11.7944 18.1985 11.4828 18.022C10.0717 17.2226 9.36869 16.8261 9.06478 17.0725C8.58035 17.4653 10.9389 21.9665 11.9496 21.9997Z" stroke="currentColor" stroke-width="1.5" :variants="arrow2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19.3px' }" />
            <motion.path d="M21.9998 12.0504C22.0338 11.0147 17.5455 8.57937 17.1228 9.06275C16.6434 9.61089 17.7895 11.2397 18.0477 11.7584C18.2029 12.0703 18.1987 12.2056 18.0221 12.5172C17.2227 13.9283 16.8262 14.6313 17.0726 14.9352C17.4655 15.4197 21.9667 13.0611 21.9998 12.0504Z" stroke="currentColor" stroke-width="1.5" :variants="arrow3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.3px 12px' }" />
            <motion.path d="M11.9496 2.00007C12.9853 1.9661 15.4206 6.45436 14.9373 6.8771C14.3891 7.35648 12.7603 6.21035 12.2416 5.9522C11.9297 5.79696 11.7944 5.80121 11.4828 5.97773C10.0717 6.77714 9.36869 7.1737 9.06478 6.92725C8.58035 6.53441 10.9389 2.03322 11.9496 2.00007Z" stroke="currentColor" stroke-width="1.5" :variants="arrow4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.7px' }" />
          </svg>
        </div>
</template>
