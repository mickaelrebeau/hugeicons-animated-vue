<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AppWindowMacIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the traffic-light dots blink red then yellow, and the window settles
// authored from scripts/authored
const dotCloseVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.35)', 'scale(1.25)', 'scale(1)'],
    transition: { duration: 0.48, times: [0, 0.28, 0.62, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const dotMinVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.35)', 'scale(1.25)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.1, times: [0, 0.28, 0.62, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.16, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M5.5 7.3125V7.5M5.75 7.5C5.75 7.63807 5.63807 7.75 5.5 7.75C5.36193 7.75 5.25 7.63807 5.25 7.5C5.25 7.36193 5.36193 7.25 5.5 7.25C5.63807 7.25 5.75 7.36193 5.75 7.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotCloseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 7.5px' }" />
            <motion.path d="M9.5 7.3125V7.5M9.75 7.5C9.75 7.63807 9.63807 7.75 9.5 7.75C9.36193 7.75 9.25 7.63807 9.25 7.5C9.25 7.36193 9.36193 7.25 9.5 7.25C9.63807 7.25 9.75 7.36193 9.75 7.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotMinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 7.5px' }" />
            <motion.path d="M15 4H9C5.70017 4 4.05025 4 3.02513 5.02513C2 6.05025 2 7.70017 2 11V13C2 16.2998 2 17.9497 3.02513 18.9749C4.05025 20 5.70017 20 9 20H15C18.2998 20 19.9497 20 20.9749 18.9749C22 17.9497 22 16.2998 22 13V11C22 7.70017 22 6.05025 20.9749 5.02513C19.9497 4 18.2998 4 15 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
