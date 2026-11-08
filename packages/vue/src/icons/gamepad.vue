<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GamepadIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cross turns and the two buttons are tapped
// authored from scripts/authored
const dpadVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(18deg)',
      'rotate(62.99999999999999deg)',
      'rotate(92.7deg)',
      'rotate(90deg)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const buttonVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.6)', 'scale(1.15)', 'scale(1)'],
    transition: {
      duration: 0.42,
      delay: 0.1,
      times: [0, 0.24, 0.56, 1],
      ease: ['easeIn', 'easeOut', 'easeOut'],
    },
  },
};

const button2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.6)', 'scale(1.15)', 'scale(1)'],
    transition: {
      duration: 0.42,
      delay: 0.22,
      times: [0, 0.24, 0.56, 1],
      ease: ['easeIn', 'easeOut', 'easeOut'],
    },
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
            <path d="M2 11C2 8.64298 2 7.46447 2.73223 6.73223C3.46447 6 4.64298 6 7 6H17C19.357 6 20.5355 6 21.2678 6.73223C22 7.46447 22 8.64298 22 11V13C22 15.357 22 16.5355 21.2678 17.2678C20.5355 18 19.357 18 17 18H7C4.64298 18 3.46447 18 2.73223 17.2678C2 16.5355 2 15.357 2 13V11Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M7.995 10V14M10 11.995L6 11.995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dpadVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 12px' }" />
            <motion.path d="M17.75 10.6172V10.7422M18 10.7422C18 10.8803 17.8881 10.9922 17.75 10.9922C17.6119 10.9922 17.5 10.8803 17.5 10.7422C17.5 10.6041 17.6119 10.4922 17.75 10.4922C17.8881 10.4922 18 10.6041 18 10.7422Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="buttonVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.8px 10.7px' }" />
            <motion.path d="M15.25 13.1172V13.2422M15.5 13.2422C15.5 13.3803 15.3881 13.4922 15.25 13.4922C15.1119 13.4922 15 13.3803 15 13.2422C15 13.1041 15.1119 12.9922 15.25 12.9922C15.3881 12.9922 15.5 13.1041 15.5 13.2422Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="button2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.3px 13.2px' }" />
          </svg>
        </div>
</template>
