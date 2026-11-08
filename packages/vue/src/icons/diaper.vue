<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DiaperIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the side tabs fasten in, hold, and release
// authored from scripts/authored
const tabVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(-1px, 0px)', 'translate(-1px, 0px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.7,
      times: [0, 0.26, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const tab2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1px, 0px)', 'translate(1px, 0px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.7,
      times: [0, 0.26, 0.72, 1],
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
            <path d="M2 7.69231C2 7.04903 2 6.72738 2.04914 6.45923C2.27382 5.2332 3.2332 4.27382 4.45923 4.04914C4.72738 4 5.04903 4 5.69231 4H18.3077C18.951 4 19.2726 4 19.5408 4.04914C20.7668 4.27382 21.7262 5.2332 21.9509 6.45923C22 6.72738 22 7.04903 22 7.69231V10C22 15.5228 17.5228 20 12 20C6.47715 20 2 15.5228 2 10V7.69231Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M18 8H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tabVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 8px' }" />
            <motion.path d="M2 8H6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tab2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 8px' }" />
            <path d="M14.5 19.5V18.5C14.5 14.634 17.634 11.5 21.5 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M9.5 19.5V18.5C9.5 14.634 6.36599 11.5 2.5 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
