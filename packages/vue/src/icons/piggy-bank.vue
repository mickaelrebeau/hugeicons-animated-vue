<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PiggyBankIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// a coin drops into the slot and the pig jiggles, tail flicking
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.42, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const tailVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.67px, -0.21px) rotate(18deg)',
      'translate(-0.27px, 0.16px) rotate(-8deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.1,
      times: [0, 0.4, 0.6, 0.8, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const coinVariants: Variants = {
  normal: { transform: 'translateY(0px)', opacity: 0 },
  animate: {
    transform: [
      'translateY(0px)',
      'translateY(0px)',
      'translateY(3.4px)',
      'translateY(4px)',
      'translateY(4px)',
    ],
    opacity: [0, 1, 1, 0, 0],
    transition: {
      duration: 0.8,
      times: [0, 0.14, 0.46, 0.56, 1],
      ease: ['linear', 'easeIn', 'linear', 'linear'],
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
            <motion.path d="M14.5 5.5H10.5C6.91015 5.5 4 8.41015 4 12C4 14.3012 5.19584 16.3231 7 17.4782L7.28751 19.2158C7.35758 19.6393 7.39262 19.851 7.4905 20.0143C7.6037 20.2031 7.77604 20.3492 7.98078 20.4301C8.1578 20.5 8.37243 20.5 8.80169 20.5C9.19947 20.5 9.39836 20.5 9.56635 20.4378C9.76071 20.3659 9.92792 20.2353 10.0449 20.0642C10.1459 19.9163 10.1942 19.7234 10.2906 19.3375L10.5 18.5H13.5L13.7094 19.3375C13.8058 19.7234 13.8541 19.9163 13.9551 20.0642C14.0721 20.2353 14.2393 20.3659 14.4337 20.4378C14.6016 20.5 14.8005 20.5 15.1983 20.5C15.6276 20.5 15.8422 20.5 16.0192 20.4301C16.224 20.3492 16.3963 20.2031 16.5095 20.0143C16.6074 19.851 16.6424 19.6393 16.7125 19.2158L17 17.4782C18.1096 16.7678 18.9891 15.7295 19.5018 14.5L20.3925 14.3217C21.162 14.1677 21.5468 14.0907 21.7734 13.8142C22 13.5378 22 13.1454 22 12.3606V12.0616C22 11.3116 22 10.9366 21.7882 10.6654C21.5764 10.3941 21.2126 10.3032 20.4851 10.1213L20 10C20 8.5 18.8333 7.16667 18 6.5V3.5H17.7361C16.3657 3.5 15.1129 4.27427 14.5 5.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 12px' }" />
            <path d="M15.875 9.75H15.75M16 9.75C16 9.88807 15.8881 10 15.75 10C15.6119 10 15.5 9.88807 15.5 9.75C15.5 9.61193 15.6119 9.5 15.75 9.5C15.8881 9.5 16 9.61193 16 9.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M2 8V10C2 11.1046 2.89543 12 4 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tailVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 10px' }" />
            <motion.circle cx="12.5" cy="1.5" r="1.3" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="coinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
