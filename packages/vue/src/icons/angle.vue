<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AngleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two inner arcs tick open from the vertex while the rays hold
// authored from scripts/authored
const raysVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-2deg)', 'rotate(0.6deg)', 'rotate(0deg)'],
    transition: { duration: 0.56, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const arcInnerVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.7)', 'scale(1.08)', 'scale(1)'],
    transition: { duration: 0.54, times: [0, 0.32, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const arcOuterVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.7)', 'scale(1.08)', 'scale(1)'],
    transition: { duration: 0.54, delay: 0.1, times: [0, 0.32, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M12 22V2M12 2L22 17M12 2L2 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="raysVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2px' }" />
            <motion.path d="M16 8C14.8554 9.2634 13.4798 10 12 10C10.5202 10 9.14458 9.2634 8 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcInnerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
            <motion.path d="M12 14C9.78035 14 7.71687 13.2634 6 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcOuterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
          </svg>
        </div>
</template>
