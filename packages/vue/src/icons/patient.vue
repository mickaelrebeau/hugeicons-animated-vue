<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PatientIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the patient nods and the sling settles
// authored from scripts/authored
const slingVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.09px)',
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

const headVariants: Variants = {
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
            <path d="M20 21.9999V18.9999C20 16.1715 20 14.7572 19.1213 13.8786C18.2426 12.9999 16.8284 12.9999 14 12.9999H10C7.17157 12.9999 5.75736 12.9999 4.87868 13.8786C4 14.7572 4 16.1715 4 18.9999C4 19.9318 4 20.3977 4.15224 20.7652C4.35523 21.2553 4.74458 21.6446 5.23463 21.8476C5.60218 21.9999 6.06812 21.9999 7 21.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M9.5 12.9999L12.5 21.9999M7 13.4999V21.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 18.9999H14.5C15.3284 18.9999 16 19.6715 16 20.4999C16 21.3283 15.3284 21.9999 14.5 21.9999H12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slingVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 20.5px' }" />
            <motion.path d="M15.5 6.49997V5.49997C15.5 3.56697 13.933 1.99997 12 1.99997C10.067 1.99997 8.5 3.56697 8.5 5.49997V6.49997C8.5 8.43297 10.067 9.99997 12 9.99997C13.933 9.99997 15.5 8.43297 15.5 6.49997Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6px' }" />
          </svg>
        </div>
</template>
