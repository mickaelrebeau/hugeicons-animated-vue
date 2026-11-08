<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PackageDimensions02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the rulers measure the box edges in turn
// authored from scripts/authored
const rulerVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(-4.20px, 0px) scaleX(0.4)',
      'translate(0.42px, 0px) scaleX(1.06)',
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.7,
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

const ruler2Variants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -4.20px) scaleY(0.4)',
      'translate(0px, 0.42px) scaleY(1.06)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.1,
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
            <path d="M19.4483 8.04705L14.7814 6.22588C14.3956 6.07529 14.2026 6 14 6C13.7974 6 13.6045 6.07529 13.2186 6.22588L8.55166 8.04705C7.51722 8.45073 7 8.65256 7 9C7 9.34744 7.51722 9.54927 8.55166 9.95295L13.2186 11.7741C13.6045 11.9247 13.7974 12 14 12C14.2026 12 14.3956 11.9247 14.7814 11.7741L19.4483 9.95295C20.4828 9.54927 21 9.34744 21 9C21 8.65256 20.4828 8.45073 19.4483 8.04705Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M14 22C14.2026 22 14.3956 21.9247 14.7814 21.7741L19.4483 19.9529C20.4828 19.5493 21 19.3474 21 19V9M14 22C13.7974 22 13.6045 21.9247 13.2186 21.7741L8.55166 19.9529C7.51722 19.5493 7 19.3474 7 19V9M14 22V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M17.5 7.5L10.5 10.5V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M7 3H21M7 3V2M7 3V4M21 3V2M21 3V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rulerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 3px' }" />
            <motion.path d="M4 7L4 21M4 7L5 7M4 7L3 7M4 21H5M4 21H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ruler2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 14px' }" />
          </svg>
        </div>
</template>
