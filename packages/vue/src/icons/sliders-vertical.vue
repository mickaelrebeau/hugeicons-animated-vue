<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SlidersVerticalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the three slider knobs slide up and down their tracks
// authored from scripts/authored
const knobVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 3px)',
      'translate(0px, -1px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.9, times: [0, 0.18, 0.46, 0.74, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const knob2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -3px)',
      'translate(0px, 1px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.9, times: [0, 0.18, 0.46, 0.74, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const knob3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 2.5px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.9, delay: 0.06, times: [0, 0.18, 0.46, 0.74, 1], ease: [0.77, 0, 0.175, 1] },
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
            <path d="M5.00018 20.0001L4.99994 14.0001" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M4.99994 11.0001V4.00006" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M8.99994 8.00006H14.9999" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="knobVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
            <motion.path d="M1.99994 14.0001H7.99994" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="knob2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 14px' }" />
            <motion.path d="M15.9999 12.0001H21.9999" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="knob3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 12px' }" />
            <path d="M11.9997 8.00006L11.9999 4.00006" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M12.0002 20.0001L11.9999 11.0001" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M18.9999 12.0001L18.9999 4.00006" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M19.0002 20.0001L18.9999 15.0001" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
