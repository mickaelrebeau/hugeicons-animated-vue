<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TestTube01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after circle-check: the result resolves into a check and lands
// generated from @hugeicons/core-free-icons
const markVariants: Variants = {
  normal: {
    pathLength: 1,
    pathOffset: 0,
    visibility: 'visible',
  },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.82,
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
      ],
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
    },
  },
}

const frameVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg) scale(1)', 'translateY(0px) rotate(0deg) scale(1)', 'translateY(-0.38px) rotate(0.87deg) scale(1.08)', 'translateY(0px) rotate(0deg) scale(1)'],
    transition: {
      duration: 0.86,
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
      times: [0, 0.78, 0.9, 1],
    },
  },
}

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
            <motion.path d="M8 2H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2px' }" />
            <motion.path d="M16.2187 13.0044L15.9921 13.6151C15.5219 14.65 14.1115 15.7439 11.7609 14.3182C10.2471 13.4001 8.93663 12.6631 7.9997 13.16L7.21891 13.5412" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.72px 14.2px' }" />
            <motion.path d="M14.5323 2V8.56602C14.5323 9.27829 14.5323 9.63442 14.6304 9.97222C14.7285 10.31 14.9197 10.612 15.3021 11.216L17.2861 14.35C19.4275 17.7326 20.4982 19.4238 19.7751 20.7119C19.0519 22 17.0317 22 12.9914 22H11.0086C6.96825 22 4.94807 22 4.22495 20.7119C3.50182 19.4238 4.57251 17.7326 6.71389 14.35L8.69792 11.216C9.08029 10.612 9.27148 10.31 9.36961 9.97222C9.46773 9.63442 9.46773 9.27829 9.46773 8.56602V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15.125 19H15M15.25 19C15.25 19.1381 15.1381 19.25 15 19.25C14.8619 19.25 14.75 19.1381 14.75 19C14.75 18.8619 14.8619 18.75 15 18.75C15.1381 18.75 15.25 18.8619 15.25 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 19px' }" />
            <motion.path d="M10.125 17H10M10.25 17C10.25 17.1381 10.1381 17.25 10 17.25C9.86193 17.25 9.75 17.1381 9.75 17C9.75 16.8619 9.86193 16.75 10 16.75C10.1381 16.75 10.25 16.8619 10.25 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 17px' }" />
          </svg>
        </div>
</template>
