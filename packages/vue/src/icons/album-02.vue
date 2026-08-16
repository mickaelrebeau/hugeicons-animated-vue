<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Album02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the back print leads the shuffle, the hill redraws and the sun drops back in
// authored from scripts/authored
const printBackVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.1px, -0.7px)', 'translate(0px, 0px)'],
    transition: { duration: 0.6, times: [0, 0.38, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const printFrontVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(-0.7px, 1.1px)', 'translate(0px, 0px)'],
    transition: { duration: 0.6, delay: 0.08, times: [0, 0.38, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const hillVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.86,
      delay: 0.14,
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
      ],
    },
  },
};

const sunVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0)', 'scale(1.3)', 'scale(1)'],
    transition: { duration: 0.58, delay: 0.3, times: [0, 0.22, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M6 17.9745C6.1287 19.2829 6.41956 20.1636 7.07691 20.8209C8.25596 22 10.1536 22 13.9489 22C17.7442 22 19.6419 22 20.8209 20.8209C22 19.6419 22 17.7442 22 13.9489C22 10.1536 22 8.25596 20.8209 7.07691C20.1636 6.41956 19.2829 6.1287 17.9745 6" stroke="currentColor" stroke-width="1.5" :variants="printBackVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 14px' }" />
            <motion.path d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2C13.7712 2 15.6569 2 16.8284 3.17157C18 4.34315 18 6.22876 18 10C18 13.7712 18 15.6569 16.8284 16.8284C15.6569 18 13.7712 18 10 18C6.22876 18 4.34315 18 3.17157 16.8284C2 15.6569 2 13.7712 2 10Z" stroke="currentColor" stroke-width="1.5" :variants="printFrontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 10px' }" />
            <motion.path d="M2 11.1185C2.61902 11.0398 3.24484 11.001 3.87171 11.0023C6.52365 10.9533 9.11064 11.6763 11.1711 13.0424C13.082 14.3094 14.4247 16.053 15 18" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="hillVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M13.125 7H13M13.25 7C13.25 7.13807 13.1381 7.25 13 7.25C12.8619 7.25 12.75 7.13807 12.75 7C12.75 6.86193 12.8619 6.75 13 6.75C13.1381 6.75 13.25 6.86193 13.25 7Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="sunVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 7px' }" />
          </svg>
        </div>
</template>
