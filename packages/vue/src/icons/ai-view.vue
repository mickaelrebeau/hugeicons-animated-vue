<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiViewIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the three lashes flick up, the lid narrows and the pupil dilates
// authored from scripts/authored
const lashLeftVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.44)', 'scale(1.07)', 'scale(1)'],
    opacity: [1, 0.4, 1, 1],
    transition: { duration: 0.5, delay: 0.07, times: [0, 0.3, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const lashTopVariants: Variants = {
  normal: { transform: 'scaleY(1)', opacity: 1 },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.44)', 'scaleY(1.07)', 'scaleY(1)'],
    opacity: [1, 0.4, 1, 1],
    transition: { duration: 0.5, times: [0, 0.3, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const pupilVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.68)', 'scale(1.14)', 'scale(1)'],
    transition: { duration: 0.6, delay: 0.12, times: [0, 0.32, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const lidVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.84)', 'scaleY(1.03)', 'scaleY(1)'],
    transition: { duration: 0.6, delay: 0.1, times: [0, 0.32, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M4.75 2.75L7 5L7 8M4.75 3.5C5.16421 3.5 5.5 3.16421 5.5 2.75C5.5 2.33579 5.16421 2 4.75 2C4.33579 2 4 2.33579 4 2.75C4 3.16421 4.33579 3.5 4.75 3.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lashLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 8px' }" />
            <motion.path d="M19.25 2.75L17 5L17 8M19.25 3.5C18.8358 3.5 18.5 3.16421 18.5 2.75C18.5 2.33579 18.8358 2 19.25 2C19.6642 2 20 2.33579 20 2.75C20 3.16421 19.6642 3.5 19.25 3.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lashLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 8px' }" />
            <motion.path d="M12 2.75L12 7M12 3.5C12.4142 3.5 12.75 3.16421 12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75C11.25 3.16421 11.5858 3.5 12 3.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lashTopVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7px' }" />
            <motion.path d="M15 16C15 14.3431 13.6569 13 12 13C10.3431 13 9 14.3431 9 16C9 17.6569 10.3431 19 12 19C13.6569 19 15 17.6569 15 16Z" stroke="currentColor" stroke-width="1.5" :variants="pupilVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
            <motion.path d="M12 10C18 10 22 16 22 16C22 16 18 22 12 22C6 22 2 16 2 16C2 16 6 10 12 10Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="lidVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
          </svg>
        </div>
</template>
