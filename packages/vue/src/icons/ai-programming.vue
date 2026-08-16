<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiProgrammingIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two brackets spread apart and the slash leans through the gap
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.26, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const sparkVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', opacity: 1 },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-26deg) scale(0.5)',
      'rotate(9deg) scale(1.2)',
      'rotate(0deg) scale(1)',
    ],
    opacity: [1, 0.5, 1, 1],
    transition: { duration: 0.62, delay: 0.34, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const bracketRightVariants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: {
    transform: ['translateX(0px)', 'translateX(1.3px)', 'translateX(-0.2px)', 'translateX(0px)'],
    transition: { duration: 0.6, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const bracketLeftVariants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: {
    transform: ['translateX(0px)', 'translateX(-1.3px)', 'translateX(0.2px)', 'translateX(0px)'],
    transition: { duration: 0.6, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const slashVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-11deg)', 'rotate(3deg)', 'rotate(0deg)'],
    transition: { duration: 0.62, delay: 0.06, times: [0, 0.36, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M11.5 6C7.02166 6 4.78249 6 3.39124 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.39124 20.8284C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.8284C21 19.6569 21 17.7712 21 14C21 12.8302 21 11.8419 20.9585 11" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 14px' }" />
            <motion.path d="M18.5 2L18.7579 2.69703C19.0961 3.61102 19.2652 4.06802 19.5986 4.40139C19.932 4.73477 20.389 4.90387 21.303 5.24208L22 5.5L21.303 5.75792C20.389 6.09613 19.932 6.26524 19.5986 6.59861C19.2652 6.93198 19.0961 7.38898 18.7579 8.30297L18.5 9L18.2421 8.30297C17.9039 7.38898 17.7348 6.93198 17.4014 6.59861C17.068 6.26524 16.611 6.09613 15.697 5.75792L15 5.5L15.697 5.24208C16.611 4.90387 17.068 4.73477 17.4014 4.40139C17.7348 4.06802 17.9039 3.61102 18.2421 2.69703L18.5 2Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="sparkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 5.5px' }" />
            <motion.path d="M15.5 12L16.7265 13.0572C17.2422 13.5016 17.5 13.7239 17.5 14C17.5 14.2761 17.2422 14.4984 16.7265 14.9428L15.5 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bracketRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 14px' }" />
            <motion.path d="M7.5 12L6.27346 13.0572C5.75782 13.5016 5.5 13.7239 5.5 14C5.5 14.2761 5.75782 14.4984 6.27346 14.9428L7.5 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bracketLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 14px' }" />
            <motion.path d="M12.5 11L10.5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 14px' }" />
          </svg>
        </div>
</template>
