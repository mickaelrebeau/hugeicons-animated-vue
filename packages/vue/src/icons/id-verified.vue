<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'IdVerifiedIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after circle-check: the confirmation stroke writes from tail to tip and lands once
// generated from @hugeicons/core-free-icons
const frameVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg) scale(1)', 'translateY(0px) rotate(0deg) scale(1)', 'translateY(-0.36px) rotate(0.83deg) scale(1.08)', 'translateY(0px) rotate(0deg) scale(1)'],
    transition: {
      duration: 0.83,
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
      times: [0, 0.78, 0.9, 1],
    },
  },
}

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
      duration: 0.79,
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
            <motion.path d="M16.177 18.4559C16.4776 18.6002 16.8504 18.973 17.0308 19.2737C17.0909 19.6945 17.3916 18.0711 18.8586 17.1091M21.5 18.001C21.5 20.2101 19.7091 22.001 17.5 22.001C15.2909 22.001 13.5 20.2101 13.5 18.001C13.5 15.7918 15.2909 14.001 17.5 14.001C19.7091 14.001 21.5 15.7918 21.5 18.001Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 18px' }" />
            <motion.circle cx="11.0078" cy="12.001" r="2" stroke="currentColor" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.01px 12px' }" />
            <motion.path d="M7.50765 18.001C8.45765 17.101 9.25765 16.601 11.0327 16.501M19.5077 11.501C19.5077 10.701 19.5327 8.25098 19.4077 7.25098C19.3327 6.42598 19.1077 5.30098 18.0827 4.65098C17.4577 4.32598 16.8577 4.02598 13.9827 4.00098M7.95765 4.00098C5.80765 4.00098 4.13265 4.17598 3.30766 5.20098C2.60766 6.15764 2.64932 7.25098 2.58265 7.60098C2.43265 9.47598 2.53265 16.026 2.53265 17.126C2.53265 18.276 2.45765 20.6135 4.03265 21.401C5.38265 22.076 6.78265 21.976 11.5327 22.001" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.98px 13.04px' }" />
            <motion.path d="M10.8577 2.00105C10.2577 2.00105 9.75765 2.00105 9.25765 2.52605C8.83265 2.92605 8.89859 3.27928 8.73265 3.90105C8.49913 4.77605 8.38241 5.23753 8.70766 5.60105C9.00582 5.99135 9.50697 5.99262 9.9495 5.99373L9.95766 5.99376C10.3827 6.02385 11.8112 6.01007 12.2327 5.99376C12.6855 5.97622 13.05 5.95105 13.3577 5.55105C13.6327 5.19355 13.4696 4.59861 13.3077 3.97605C13.1479 3.36181 13.2077 3.05105 12.7827 2.52605C12.1827 1.92605 11.4577 2.00105 10.8577 2.00105Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.01px 3.97px' }" />
          </svg>
        </div>
</template>
