<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'StudyDeskIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the lamp nods over the desk and the books shuffle
// authored from scripts/authored
const drawerVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.8px, 0px)',
      'translate(-0.12px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.2,
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

const lampVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.66px, -0.25px) rotate(8deg)',
      'translate(-0.44px, 0.23px) rotate(-5.6deg)',
      'translate(0.19px, -0.08px) rotate(2.4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const bookVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.11200000000000002px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.1,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const book2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.11200000000000002px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.16,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
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
            <path d="M22 12H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M20 17H16C14.1144 17 13.1716 17 12.5858 16.4142C12 15.8284 12 14.8856 12 13V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="drawerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 14.5px' }" />
            <path d="M4 12V22M20 12V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M15.0401 2.59903C14.3088 1.90313 13.1232 1.90313 12.3919 2.59903C11.9784 2.99247 11.8198 3.4444 12.2767 3.87914L13.6927 5.22669C14.149 5.66087 14.6219 5.51714 15.0401 5.11912C15.7714 4.42322 15.7714 3.29494 15.0401 2.59903ZM15.0401 2.59903C15.5358 2.27324 16.0932 1.81764 16.7123 2.0763C17.0028 2.19766 17.2022 2.49474 17.6008 3.08889L19.0993 5.3223C19.6639 6.16376 19.9462 6.5845 19.9931 7.06138C20.0401 7.53825 19.8448 8.00129 19.4542 8.92735L18.1584 12" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="lampVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.9px 6.9px' }" />
            <motion.path d="M4 12V7.5C4 6.37313 4.4506 6 5.5 6C6.5494 6 7 6.37313 7 7.5V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bookVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 9px' }" />
            <motion.path d="M7 12V7.5C7 6.37313 7.4506 6 8.5 6C9.5494 6 10 6.37313 10 7.5V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="book2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 9px' }" />
          </svg>
        </div>
</template>
