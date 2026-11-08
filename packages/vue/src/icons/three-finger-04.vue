<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ThreeFinger04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the three fingers swipe right and back
// authored from scripts/authored
const handVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.6px, 0px)',
      'translate(-0.192px, 0px)',
      'translate(0px, 0px)',
    ],
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
            <motion.path d="M7.76591 13.9903V5.98282C7.76412 5.15277 8.39407 4.48216 9.22412 4.48216C10.0529 4.48216 10.749 5.15727 10.749 5.98606M10.749 5.98606V10.4816M10.749 5.98606V3.99859C10.749 3.16979 11.4208 2.49792 12.2496 2.49792C13.0797 2.49792 13.7521 3.17177 13.7503 4.00183V10.475M16.7516 11.478V5.98606C16.7534 5.156 16.081 4.48216 15.251 4.48216C14.4222 4.48216 13.7503 5.15403 13.7503 5.98282M16.7516 9.62564C17.5582 9.50466 19.5438 9.62564 19.7467 11.4827V15.1446C19.7467 16.5054 19.8503 18.1424 18.6843 19.5346C17.9847 20.5756 16.4906 21.1453 16.4906 21.1453C14.9507 21.6538 13.5566 21.4484 12.6442 21.4816C11.6085 21.5194 10.9 21.5229 10.032 21.3303C10.032 21.3303 8.05237 20.9925 6.79365 18.8653C5.82699 17.2316 3.31365 14.9309 4.61865 12.8526C5.46058 11.5118 7.1236 10.0449 7.76591 9.48386" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.6px 12.1px' }" />
          </svg>
        </div>
</template>
