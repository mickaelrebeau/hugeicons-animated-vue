<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Alien02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the antennae twitch, the single eye blinks, and the mouth-dot answers
// authored from scripts/authored
const eyeVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.16)', 'scaleY(1.1)', 'scaleY(1)'],
    transition: { duration: 0.56, delay: 0.16, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const antennaRightVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(12deg)', 'rotate(-4deg)', 'rotate(0deg)'],
    transition: { duration: 0.5, times: [0, 0.3, 0.64, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const antennaLeftVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-12deg)', 'rotate(4deg)', 'rotate(0deg)'],
    transition: { duration: 0.5, delay: 0.08, times: [0, 0.3, 0.64, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const headVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.978)', 'scale(1.02)', 'scale(1)'],
    transition: { duration: 0.6, delay: 0.1, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const mouthVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.4)', 'scale(1.4)', 'scale(1)'],
    transition: { duration: 0.5, delay: 0.28, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M15.0014 9.98878C15.0014 11.643 13.6596 12.984 12.0043 12.984C10.349 12.984 9.0072 11.643 9.0072 9.98878C9.0072 8.33459 10.349 6.99359 12.0043 6.99359C13.6596 6.99359 15.0014 8.33459 15.0014 9.98878Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="eyeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M20.4965 2.00159C20.3299 2.90014 19.4974 4.75717 17.4994 4.99678" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="antennaRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 2px' }" />
            <motion.path d="M3.51306 2.00159C3.67957 2.90014 4.51209 4.75717 6.51014 4.99678" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="antennaLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 2px' }" />
            <motion.path d="M8.84021 3.69365C5.58633 5.1421 4.44413 8.62417 4.52092 10.4659C3.3979 10.3892 2.0227 10.515 2.00157 11.9511C1.98043 13.3871 3.46509 13.641 4.52092 13.4683V19.8761C4.53861 20.4064 4.58624 21.1003 5.13522 21.3437C6.41182 21.9097 7.48685 20.1926 8.6549 20.2714C9.56297 20.3326 10.8774 22.0909 12.0332 21.9946C13.3719 21.8831 14.4022 20.2769 15.4258 20.2769C16.6397 20.2769 16.8523 21.2775 18.314 21.4369C19.4042 21.5557 19.515 20.5161 19.515 19.9566V13.4804C21.4043 13.7146 22.1531 12.8777 21.9725 11.6987C21.7595 10.3075 20.1259 10.4069 19.4757 10.4958C19.5768 9.46128 19.1104 8.15565 18.909 7.64389C18.6122 6.73282 17.3925 4.57922 14.7721 3.51138C12.1516 2.44353 9.71367 3.23322 8.84021 3.69365Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12.1244 17.0016H11.9994M12.2494 17.0016C12.2494 17.1397 12.1375 17.2516 11.9994 17.2516C11.8613 17.2516 11.7494 17.1397 11.7494 17.0016C11.7494 16.8635 11.8613 16.7516 11.9994 16.7516C12.1375 16.7516 12.2494 16.8635 12.2494 17.0016Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="mouthVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
          </svg>
        </div>
</template>
