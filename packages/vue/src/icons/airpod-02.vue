<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Airpod02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the lid swings up on its hinge and the charge light blinks once inside
// authored from scripts/authored
const caseVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.985)', 'scale(1.008)', 'scale(1)'],
    transition: { duration: 0.56, delay: 0.1, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const lidVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-6.5deg)', 'rotate(1.6deg)', 'rotate(0deg)'],
    transition: { duration: 0.7, times: [0, 0.36, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const chargeLightVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(2.2)', 'scale(1)'],
    opacity: [1, 0.4, 1],
    transition: { duration: 0.46, delay: 0.28, times: [0, 0.42, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.364 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="caseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
            <path d="M3.5 7H20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M7 7H17C17 8.88562 17 9.82843 16.4142 10.4142C15.8284 11 14.8856 11 13 11H11C9.11438 11 8.17157 11 7.58579 10.4142C7 9.82843 7 8.88562 7 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lidVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 7px' }" />
            <motion.path d="M12.125 14H12M12.25 14C12.25 14.1381 12.1381 14.25 12 14.25C11.8619 14.25 11.75 14.1381 11.75 14C11.75 13.8619 11.8619 13.75 12 13.75C12.1381 13.75 12.25 13.8619 12.25 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="chargeLightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
          </svg>
        </div>
</template>
