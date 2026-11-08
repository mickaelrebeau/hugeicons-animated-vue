<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Road02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the centre dashes stream left along the road
// authored from scripts/authored
const dashVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.4px, 0px)',
      'translate(0px, 0px)',
      'translate(-1.4px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.8, delay: 0.08, times: [0, 0.25, 0.5, 0.75, 1], ease: 'linear' },
  },
};

const dash2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.4px, 0px)',
      'translate(0px, 0px)',
      'translate(-1.4px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.8, delay: 0, times: [0, 0.25, 0.5, 0.75, 1], ease: 'linear' },
  },
};

const dash3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.4px, 0px)',
      'translate(0px, 0px)',
      'translate(-1.4px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.8, delay: 0.16, times: [0, 0.25, 0.5, 0.75, 1], ease: 'linear' },
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
            <path d="M20.8284 5.17157C19.6569 4 17.7712 4 14 4L10 4C6.22877 4 4.34315 4 3.17157 5.17157M20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284M20.8284 5.17157C20.8284 5.17157 20.8284 5.17157 20.8284 5.17157ZM3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284M3.17157 5.17157C3.17157 5.17157 3.17157 5.17157 3.17157 5.17157ZM3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284M3.17157 18.8284C3.17157 18.8284 3.17157 18.8284 3.17157 18.8284ZM20.8284 18.8284C20.8284 18.8284 20.8284 18.8284 20.8284 18.8284Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M13 12L11 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M18.5 12L16.5 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dash2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7.5 12L5.5 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dash3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
