<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Exchange03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two currencies trade places along the arrows
// authored from scripts/authored
const coinVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.4px, -1.4px)',
      'translate(0.21px, 0.21px)',
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

const arrowVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      delay: 0.1,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const coin2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.4px, 1.4px)',
      'translate(-0.21px, -0.21px)',
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
            <motion.path d="M16.125 20.5L16.125 14.5M18 14.5V13M18 22V20.5M16.125 17.5H19.875M19.875 17.5C20.4963 17.5 21 18.0037 21 18.625V19.375C21 19.9963 20.4963 20.5 19.875 20.5H15M19.875 17.5C20.4963 17.5 21 16.9963 21 16.375V15.625C21 15.0037 20.4963 14.5 19.875 14.5H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="coinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 17.5px' }" />
            <motion.path d="M11 5C13.8284 5 16.2426 5 17.1213 5.7988C18 6.5976 18 7.4287 18 10L16 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 20C9.17157 20 6.75736 20 5.87868 19.2012C5 18.4024 5 17.5713 5 15L7 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M5.5 3.25C4.11929 3.25 3 4.08947 3 5.125C3 6.16053 4.11929 7 5.5 7C6.88071 7 8 7.83947 8 8.875C8 9.91053 6.88071 10.75 5.5 10.75M5.5 3.25C6.58852 3.25 7.51455 3.77175 7.85775 4.5M5.5 3.25V2M5.5 10.75C4.41148 10.75 3.48545 10.2282 3.14225 9.5M5.5 10.75V12" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="coin2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 7px' }" />
          </svg>
        </div>
</template>
