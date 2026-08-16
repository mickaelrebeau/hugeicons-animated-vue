<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AdvertisimentIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the panel gives an announcing beat and the two letters are called out in turn
// authored from scripts/authored
const letterVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.1)', 'scale(1)'],
    transition: { duration: 0.52, delay: 0.08, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const panelVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.965)', 'scale(1.03)', 'scale(1)'],
    transition: { duration: 0.5, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const letter2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.1)', 'scale(1)'],
    transition: { duration: 0.52, delay: 0.16, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M5.50586 16.9916L8.03146 10.0288C8.49073 9.06222 9.19305 8.26286 9.99777 10.18C10.7406 11.9497 11.8489 15.1903 12.5031 16.9954M6.65339 14.002H11.3215" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="letterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 17px' }" />
            <motion.path d="M3.46447 5.31802C2 6.63604 2 8.75736 2 13C2 17.2426 2 19.364 3.46447 20.682C4.92893 22 7.28596 22 12 22C16.714 22 19.0711 22 20.5355 20.682C22 19.364 22 17.2426 22 13C22 8.75736 22 6.63604 20.5355 5.31802C19.0711 4 16.714 4 12 4C7.28596 4 4.92893 4 3.46447 5.31802Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="panelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
            <motion.path d="M18.4843 9.98682V12.9815M18.4843 12.9815V16.9252M18.4843 12.9815H16.466C16.2263 12.9815 15.9885 13.0261 15.7645 13.113C14.0707 13.7702 14.0707 16.2124 15.7645 16.8696C15.9885 16.9565 16.2263 17.0011 16.466 17.0011H18.4843" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="letter2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.3px 17px' }" />
          </svg>
        </div>
</template>
