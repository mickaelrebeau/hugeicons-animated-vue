<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CustomerService02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the mic redraws while the earcups bob
// authored from scripts/authored
const cupVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.11200000000000002px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.1,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const micVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const cup2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.11200000000000002px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.32, 0.62, 0.86, 1],
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
            <motion.path d="M17 13.8045C17 13.4588 17 13.286 17.052 13.132C17.2032 12.6844 17.6018 12.5108 18.0011 12.3289C18.45 12.1244 18.6744 12.0222 18.8968 12.0042C19.1493 11.9838 19.4022 12.0382 19.618 12.1593C19.9041 12.3198 20.1036 12.6249 20.3079 12.873C21.2512 14.0188 21.7229 14.5918 21.8955 15.2236C22.0348 15.7334 22.0348 16.2666 21.8955 16.7764C21.6438 17.6979 20.8485 18.4704 20.2598 19.1854C19.9587 19.5511 19.8081 19.734 19.618 19.8407C19.4022 19.9618 19.1493 20.0162 18.8968 19.9958C18.6744 19.9778 18.45 19.8756 18.0011 19.6711C17.6018 19.4892 17.2032 19.3156 17.052 18.868C17 18.714 17 18.5412 17 18.1955V13.8045Z" stroke="currentColor" stroke-width="1.5" :variants="cupVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 16px' }" />
            <motion.path d="M9.5 21C10.8807 22.3333 13.1193 22.3333 14.5 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="micVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7 13.8045C7 13.3693 6.98778 12.9782 6.63591 12.6722C6.50793 12.5609 6.33825 12.4836 5.99891 12.329C5.55001 12.1246 5.32556 12.0224 5.10316 12.0044C4.43591 11.9504 4.07692 12.4058 3.69213 12.8731C2.74875 14.0189 2.27706 14.5918 2.10446 15.2236C1.96518 15.7334 1.96518 16.2666 2.10446 16.7764C2.3562 17.6979 3.15152 18.4702 3.74021 19.1852C4.11129 19.6359 4.46577 20.0472 5.10316 19.9956C5.32556 19.9776 5.55001 19.8754 5.99891 19.6709C6.33825 19.5164 6.50793 19.4391 6.63591 19.3278C6.98778 19.0218 7 18.6307 7 18.1954V13.8045Z" stroke="currentColor" stroke-width="1.5" :variants="cup2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 16px' }" />
            <path d="M2 16V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12L22.0001 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
