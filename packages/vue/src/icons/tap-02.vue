<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Tap02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the finger nudges up into the ripple
// authored from scripts/authored
const handVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(0px, -2px)', 'translate(0px, 0.24px)', 'translate(0px, 0px)'],
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

const rippleVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.2, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M16.2494 22.0012C16.2798 20.1362 16.2126 20.5213 16.3651 20.0469C16.5177 19.5724 17.1082 18.7482 17.4736 17.6984C18.4962 14.7597 17.9519 13.5537 16.4377 12.6174C14.8423 11.6308 13.2317 11.2482 11.8206 11.3704V6.73351C11.8206 5.7716 11.275 5.02918 10.3117 5.02918C9.34833 5.02918 8.86228 5.86682 8.86228 6.82872L8.91294 11.6642M8.89472 22.0012V21.3328C8.89472 20.5476 8.63697 20.2124 7.54691 18.6357C6.34528 16.8976 6.35032 16.8151 6.07506 16.0583C6.02633 15.705 5.72775 14.8804 6.83195 13.7301L8.91294 11.6642M8.91294 15.1907V11.6642" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.1px 13.5px' }" />
            <motion.path d="M6.49727 6.0232C6.4315 5.10323 6.99749 3.28328 8.55063 2.52231C9.19108 2.13281 10.949 1.52974 12.6304 2.60432C14.2874 3.66333 14.3992 5.22472 14.5035 6.01284" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rippleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 3.8px' }" />
          </svg>
        </div>
</template>
