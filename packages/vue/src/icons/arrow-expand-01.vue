<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowExpand01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two corners fly apart on the diagonal, top-right first
// authored from scripts/authored
const cornerTRVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(2.2px, -2.2px)',
      'translate(-0.264px, 0.264px)',
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

const cornerBLVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-2.2px, 2.2px)',
      'translate(0.264px, -0.264px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.08,
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
            <motion.path d="M16.4999 3.26621C17.3443 3.25421 20.1408 2.67328 20.7337 3.26621C21.3266 3.85913 20.7457 6.65559 20.7337 7.5M20.5059 3.49097L13.5021 10.4961" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cornerTRVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.4px 6.6px' }" />
            <motion.path d="M3.26636 16.5001C3.25436 17.3445 2.67343 20.141 3.26636 20.7339C3.85928 21.3268 6.65574 20.7459 7.50015 20.7339M10.502 13.4976L3.49824 20.5027" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cornerBLVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.6px 17.4px' }" />
          </svg>
        </div>
</template>
