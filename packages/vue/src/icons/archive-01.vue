<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Archive01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two drawers pull open in opposite directions, then the handles wink
// authored from scripts/authored
const drawerLeftVariants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: {
    transform: ['translateX(0px)', 'translateX(-1.6px)', 'translateX(0.3px)', 'translateX(0px)'],
    transition: { duration: 0.66, times: [0, 0.4, 0.74, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const drawerRightVariants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: {
    transform: ['translateX(0px)', 'translateX(1.6px)', 'translateX(-0.3px)', 'translateX(0px)'],
    transition: { duration: 0.66, delay: 0.06, times: [0, 0.4, 0.74, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const railLeftVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.64,
      delay: 0.08,
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

const railRightVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.64,
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

const knobLeftVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', opacity: 1 },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-26deg) scale(0.5)',
      'rotate(9deg) scale(1.2)',
      'rotate(0deg) scale(1)',
    ],
    opacity: [1, 0.5, 1, 1],
    transition: { duration: 0.44, delay: 0.22, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const knobRightVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', opacity: 1 },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-26deg) scale(0.5)',
      'rotate(9deg) scale(1.2)',
      'rotate(0deg) scale(1)',
    ],
    opacity: [1, 0.5, 1, 1],
    transition: { duration: 0.44, delay: 0.28, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M10.0001 17V7C10.0001 5.11438 10.0001 4.17157 9.41427 3.58579C8.82849 3 7.88568 3 6.00005 3C4.11444 3 3.17163 3 2.58584 3.58578C2.00006 4.17157 2.00005 5.11437 2.00004 6.99998L2 17C1.99999 18.8856 1.99999 19.8284 2.58577 20.4142C3.17156 21 4.11438 21 6.00003 21C7.88567 21 8.82849 21 9.41427 20.4142C10.0001 19.8284 10.0001 18.8856 10.0001 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="drawerLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 12px' }" />
            <motion.path d="M21.4558 15.7091L19.0473 7.19224C18.572 5.51165 18.3343 4.67135 17.6838 4.2617C17.6312 4.22861 17.5772 4.19796 17.5218 4.16986C16.8358 3.82199 15.9877 4.04691 14.2916 4.49674C12.5529 4.95783 11.6836 5.18838 11.2632 5.84738C11.2293 5.90053 11.198 5.95524 11.1693 6.01134C10.8134 6.70684 11.057 7.5682 11.5442 9.2909L13.9527 17.8078C14.428 19.4884 14.6657 20.3287 15.3162 20.7383C15.3688 20.7714 15.4228 20.802 15.4782 20.8301C16.1642 21.178 17.0123 20.9531 18.7084 20.5033C20.4471 20.0422 21.3164 19.8116 21.7368 19.1526C21.7707 19.0995 21.802 19.0448 21.8307 18.9887C22.1866 18.2932 21.943 17.4318 21.4558 15.7091Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="drawerRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 12.5px' }" />
            <motion.path d="M2 7H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="railLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 9.00019L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="railRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6.125 17H6M6.25 17C6.25 17.1381 6.13807 17.25 6 17.25C5.86193 17.25 5.75 17.1381 5.75 17C5.75 16.8619 5.86193 16.75 6 16.75C6.13807 16.75 6.25 16.8619 6.25 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="knobLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 17px' }" />
            <motion.path d="M17.7307 16.75H17.6057M17.8557 16.75C17.8557 16.8881 17.7437 17 17.6057 17C17.4676 17 17.3557 16.8881 17.3557 16.75C17.3557 16.6119 17.4676 16.5 17.6057 16.5C17.7437 16.5 17.8557 16.6119 17.8557 16.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="knobRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.6px 16.8px' }" />
          </svg>
        </div>
</template>
