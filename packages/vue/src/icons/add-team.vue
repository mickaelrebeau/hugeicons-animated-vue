<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AddTeamIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two heads bob in turn as the pair closes up and the add mark is stamped beside them
// authored from scripts/authored
const memberVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-0.7px)', 'translateY(0px)'],
    transition: { duration: 0.54, times: [0, 0.38, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const newcomerVariants: Variants = {
  normal: { transform: 'translateX(0px) translateY(0px)' },
  animate: {
    transform: [
      'translateX(0px) translateY(0px)',
      'translateX(-0.9px) translateY(-0.5px)',
      'translateX(0px) translateY(0px)',
    ],
    transition: { duration: 0.58, delay: 0.08, times: [0, 0.4, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const benchVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.95)', 'scaleX(1.015)', 'scaleX(1)'],
    transition: { duration: 0.56, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const plusVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.5, delay: 0.18, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M12 7.5C12 9.433 10.433 11 8.5 11C6.567 11 5 9.433 5 7.5C5 5.567 6.567 4 8.5 4C10.433 4 12 5.567 12 7.5Z" stroke="currentColor" stroke-width="1.5" :variants="memberVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 11px' }" />
            <motion.path d="M13.5 11C15.433 11 17 9.433 17 7.5C17 5.567 15.433 4 13.5 4" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="newcomerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.3px 11px' }" />
            <motion.path d="M13.1429 20H3.85714C2.83147 20 2 19.2325 2 18.2857C2 15.9188 4.07868 14 6.64286 14H10.3571C11.4023 14 12.3669 14.3188 13.1429 14.8568" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="benchVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 20px' }" />
            <motion.path d="M19 14V20M22 17L16 17" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 17px' }" />
          </svg>
        </div>
</template>
