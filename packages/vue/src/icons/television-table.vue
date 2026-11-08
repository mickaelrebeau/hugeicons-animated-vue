<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TelevisionTableIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the TV picture flickers and the drawer knobs blink
// authored from scripts/authored
const knobVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.1, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const knob2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.1, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.26, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const screenVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.4, 1, 0.5, 1, 1],
    transition: { duration: 0.8, times: [0, 0.15, 0.3, 0.45, 0.6, 1], ease: 'linear' },
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
            <path d="M18 14H6C3.518 14 3 14.518 3 17V19C3 21.482 3.518 22 6 22H18C20.482 22 21 21.482 21 19V17C21 14.518 20.482 14 18 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M7 18H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="knobVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16 18H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="knob2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6 7V6C6 4.11438 6 3.17157 6.58579 2.58579C7.17157 2 8.11438 2 10 2H14C15.8856 2 16.8284 2 17.4142 2.58579C18 3.17157 18 4.11438 18 6V7C18 8.88562 18 9.82843 17.4142 10.4142C16.8284 11 15.8856 11 14 11H10C8.11438 11 7.17157 11 6.58579 10.4142C6 9.82843 6 8.88562 6 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="screenVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6.5px' }" />
            <path d="M10.5 11L10 14M13.5 11L14 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M12 14V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
