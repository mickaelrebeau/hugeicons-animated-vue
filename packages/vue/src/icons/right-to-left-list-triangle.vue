<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RightToLeftListTriangleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the triangle markers nudge left into the lines
// authored from scripts/authored
const markerVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(-1px, 0px)', 'translate(0.12px, 0px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.5,
      delay: 0.12,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const marker2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(-1px, 0px)', 'translate(0.12px, 0px)', 'translate(0px, 0px)'],
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
            <path d="M3 5.5L13 5.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M18.6 16.8926C17.5333 17.607 17 17.9642 17 18.5C17 19.0358 17.5333 19.393 18.6 20.1074C19.6667 20.8218 20.2 21.1789 20.6 20.9111C21 20.6432 21 19.9288 21 18.5C21 17.0712 21 16.3568 20.6 16.0889C20.2 15.8211 19.6667 16.1782 18.6 16.8926Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="markerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 18.5px' }" />
            <motion.path d="M18.6 3.89263C17.5333 4.60702 17 4.96421 17 5.5C17 6.03579 17.5333 6.39298 18.6 7.10737C19.6667 7.82176 20.2 8.17895 20.6 7.91105C21 7.64316 21 6.92877 21 5.5C21 4.07123 21 3.35684 20.6 3.08895C20.2 2.82105 19.6667 3.17824 18.6 3.89263Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="marker2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 5.5px' }" />
            <path d="M3 12L13 12" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M3 18.5L13 18.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
