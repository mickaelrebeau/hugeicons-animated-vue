<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HelicopterIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the rotor blades spin and the helicopter lifts off its skids
// authored from scripts/authored
const bodyVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.15px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const rotorVariants: Variants = {
  normal: { transform: 'translateY(0px) scaleX(1)' },
  animate: {
    transform: [
      'translateY(0px) scaleX(1)',
      'translateY(-1px) scaleX(0.2)',
      'translateY(-1px) scaleX(1)',
      'translateY(0px) scaleX(0.2)',
      'translateY(0px) scaleX(1)',
    ],
    transition: { duration: 0.6, times: [0, 0.25, 0.5, 0.75, 1], ease: 'linear' },
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
            <motion.path d="M14 4L14 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 6px' }" />
            <motion.path d="M14.1838 7.82217L7.05164 8.04637C6.33648 8.06885 5.9789 8.08009 5.6717 7.94382C5.08379 7.68303 4.84517 7.06182 4.58224 6.51632C4.28874 5.9074 3.73021 6.00588 3.15095 6.00588C2.53725 6.00588 2.23041 6.00588 2.07897 6.21415C1.92753 6.42241 2.01183 6.72847 2.18043 7.34059L2.23713 7.54646C2.52367 8.58683 2.66695 9.10701 3.01257 9.48147C3.3582 9.85594 3.85296 10.027 4.84247 10.3692L9.16779 11.8648C10.0835 12.1814 10.5514 12.5853 11.0192 13.4588C11.7405 14.8054 12.1011 15.4788 12.6253 15.957C13.0094 16.3073 13.454 16.5787 13.9357 16.7568C14.5933 17 15.3359 17 16.8209 17H20.7356C21.6061 17 22 16.4839 22 15.6884C22 14.1725 22 13.4145 21.8765 12.7899C21.3762 10.2594 19.4337 8.30451 16.9803 7.86242C16.3748 7.7533 15.6444 7.77626 14.1838 7.82217Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.5px' }" />
            <motion.path d="M21.5 13.5H19C16.2386 13.5 14 11.2614 14 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.8px 11px' }" />
            <path d="M12 20H14M21 20H19M19 20L20 17M19 20H14M14 20L15 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M11 4H17" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="rotorVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 4px' }" />
          </svg>
        </div>
</template>
