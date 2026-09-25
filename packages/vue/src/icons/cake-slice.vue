<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CakeSliceIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cherry pops and the frosting line rewrites
// authored from scripts/authored
const cherryVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.4)', 'scale(1.28)', 'scale(1)'],
    transition: { duration: 0.46, times: [0, 0.2, 0.55, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const icingVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.6,
      delay: 0.1,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.circle cx="8" cy="7" r="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cherryVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 7px' }" />
            <path d="M9 3C8.66667 3.33333 8 4.2 8 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M9.65116 5.64027C10.8211 4.76044 11.9459 3.95939 12.8779 3.37428C13.2809 3.12129 13.7503 3 14.2261 3C14.7321 3 15.2316 3.13556 15.6454 3.42683C17.8484 4.97772 21 8.09848 21 11V15C21 17.8284 21 19.2426 20.1213 20.1213C19.2426 21 17.8284 21 15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15V13.7596C3 12.394 3 11.7112 3.28716 11.103C3.57431 10.4948 4.08774 10.0722 5.11459 9.22717C5.50527 8.90565 5.91755 8.56939 6.34336 8.22585" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M3 17C3.54 17.25 4.08 17.5 5.25 17.5C7.5 17.5 7.5 16.5 9.75 16.5C12.09 16.5 11.91 17.5 14.25 17.5C16.5 17.5 16.5 16.5 18.75 16.5C19.92 16.5 20.46 16.75 21 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="icingVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <path d="M3 13H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
