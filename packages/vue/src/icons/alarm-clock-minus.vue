<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlarmClockMinusIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bar pinches shut across the dial and the bells give only a muted knock
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.14, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const bellLeftVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-4.5deg)', 'rotate(1.5deg)', 'rotate(0deg)'],
    transition: { duration: 0.46, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const bellRightVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(4.5deg)', 'rotate(-1.5deg)', 'rotate(0deg)'],
    transition: { duration: 0.46, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const barVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.28)', 'scaleX(1.08)', 'scaleX(1)'],
    transition: { duration: 0.56, delay: 0.08, times: [0, 0.32, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M12 20.9984C16.6944 20.9984 20.5 17.1928 20.5 12.4984C20.5 7.80399 16.6944 3.99841 12 3.99841C7.30558 3.99841 3.5 7.80399 3.5 12.4984C3.5 17.1928 7.30558 20.9984 12 20.9984Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
            <path d="M5.88 18.7015L3.5 21.0015" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M18.1406 18.6664L20.5006 20.9964" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M5 2.99841L2 5.99841" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bellLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 6px' }" />
            <motion.path d="M22 5.99841L19 2.99841" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bellRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 6px' }" />
            <motion.path d="M15.5078 12.4934H8.50781" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
          </svg>
        </div>
</template>
