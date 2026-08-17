<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AttachmentCircleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the clip inside the circle winds, the ring holding still around it
// authored from scripts/authored
const clipVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(7deg) scale(0.97)',
      'rotate(-11deg) scale(0.88)',
      'rotate(3deg) scale(1.06)',
      'rotate(0deg) scale(1)',
    ],
    pathLength: [1, 0.9, 0.58, 0.94, 1],
    transition: {
      duration: 0.74,
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
            <motion.path d="M8.56854 12L7.71068 11.1421C6.76311 10.1946 6.76311 8.65825 7.71068 7.71068C8.65825 6.76311 10.1946 6.76311 11.1421 7.71068L16.2893 12.8579C17.2369 13.8054 17.2369 15.3418 16.2893 16.2893C15.3418 17.2369 13.8054 17.2369 12.8579 16.2893L10.9277 14.3591C9.51688 12.9483 11.5463 11.0463 13 12.5L14 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="clipVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
          </svg>
        </div>
</template>
