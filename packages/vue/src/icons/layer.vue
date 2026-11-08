<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LayerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the top sheet lifts off the lower one and settles
// authored from scripts/authored
const sheetVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.6px)',
      'translate(0px, 0.24px)',
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

const sheet2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.24, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M9.60573 4.81298C10.7856 4.27099 11.3755 4 12 4C12.6245 4 13.2144 4.27099 14.3943 4.81298L19.2873 7.06064C21.0958 7.89137 22 8.30674 22 9C22 9.69326 21.0958 10.1086 19.2873 10.9394L14.3943 13.187C13.2144 13.729 12.6245 14 12 14C11.3755 14 10.7856 13.729 9.60573 13.187L4.7127 10.9394C2.90423 10.1086 2 9.69326 2 9C2 8.30674 2.90423 7.89137 4.7127 7.06064L9.60573 4.81298Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sheetVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
            <motion.path d="M20.2327 13.5C21.4109 14.062 22 14.4405 22 15.0001C22 15.6934 21.0958 16.1087 19.2873 16.9395L14.3943 19.1871C13.2144 19.7291 12.6245 20.0001 12 20.0001C11.3755 20.0001 10.7856 19.7291 9.60573 19.1871L4.7127 16.9395C2.90423 16.1087 2 15.6934 2 15.0001C2 14.4405 2.58909 14.062 3.76727 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sheet2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.8px' }" />
          </svg>
        </div>
</template>
