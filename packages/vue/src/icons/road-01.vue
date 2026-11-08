<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Road01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the centre dashes stream down the road
// authored from scripts/authored
const dashVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.4px)',
      'translate(0px, 0px)',
      'translate(0px, 1.4px)',
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
      'translate(0px, 1.4px)',
      'translate(0px, 0px)',
      'translate(0px, 1.4px)',
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
      'translate(0px, 1.4px)',
      'translate(0px, 0px)',
      'translate(0px, 1.4px)',
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
            <path d="M5.17157 3.17148C4 4.34305 4 6.22867 4 9.99991L4 13.9999C4 17.7711 4 19.6568 5.17157 20.8283M5.17157 3.17148C6.34315 1.99991 8.22876 1.99991 12 1.99991C15.7712 1.99991 17.6569 1.99991 18.8284 3.17148M5.17157 3.17148C5.17157 3.17148 5.17157 3.17148 5.17157 3.17148ZM5.17157 20.8283C6.34315 21.9999 8.22876 21.9999 12 21.9999C15.7712 21.9999 17.6569 21.9999 18.8284 20.8283M5.17157 20.8283C5.17157 20.8283 5.17157 20.8283 5.17157 20.8283ZM18.8284 20.8283C20 19.6568 20 17.7711 20 13.9999L20 9.99991C20 6.22867 20 4.34305 18.8284 3.17148M18.8284 20.8283C18.8284 20.8283 18.8284 20.8283 18.8284 20.8283ZM18.8284 3.17148C18.8284 3.17148 18.8284 3.17148 18.8284 3.17148Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 10.9999L12 12.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 5.49991L12 7.49991" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dash2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 16.4999L12 18.4999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dash3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
