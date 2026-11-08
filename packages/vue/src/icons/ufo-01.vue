<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Ufo01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the saucer bobs and its lights blink in turn
// authored from scripts/authored
const saucerVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.9px)',
      'translate(0px, 0.5px)',
      'translate(0px, -0.2px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.8,
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

const ledVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.8, delay: 0.1, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const led2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.8, delay: 0.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const led3Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.8, delay: 0, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <motion.path d="M18 9.5C18 6.18629 15.3137 3.5 12 3.5C8.68629 3.5 6 6.18629 6 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="saucerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6.5px' }" />
            <motion.path d="M18 16C16.8023 18.0923 14.5638 19.5 12 19.5C9.43616 19.5 7.19765 18.0923 6 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="saucerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17.8px' }" />
            <motion.path d="M18 9.5C19.5 10 21.5 11 22.6186 12.1997C22.8611 12.3876 23 12.6786 23 12.9853C23 13.3087 22.8471 13.6147 22.5768 13.792C20.0546 15.4466 16.2528 16.5 12 16.5C7.74722 16.5 3.94539 15.4466 1.42321 13.792C1.15286 13.6147 1 13.3087 1 12.9853C1 12.6786 1.13886 12.3876 1.38138 12.1997C2.5 11 4.5 10 6 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="saucerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
            <motion.path d="M18 9.5C16.6317 10.1072 14.4534 10.5 12 10.5C9.5466 10.5 7.36834 10.1072 6 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="saucerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M12.0504 13.4991H12.0004M12.1004 13.4991C12.1004 13.5543 12.0556 13.5991 12.0004 13.5991C11.9452 13.5991 11.9004 13.5543 11.9004 13.4991C11.9004 13.4439 11.9452 13.3991 12.0004 13.3991C12.0556 13.3991 12.1004 13.4439 12.1004 13.4991Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ledVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17.0504 12.9993H17.0004M17.1004 12.9993C17.1004 13.0545 17.0556 13.0993 17.0004 13.0993C16.9452 13.0993 16.9004 13.0545 16.9004 12.9993C16.9004 12.9441 16.9452 12.8993 17.0004 12.8993C17.0556 12.8993 17.1004 12.9441 17.1004 12.9993Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="led2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7.05039 12.9984H7.00039M7.10039 12.9984C7.10039 13.0537 7.05562 13.0984 7.00039 13.0984C6.94516 13.0984 6.90039 13.0537 6.90039 12.9984C6.90039 12.9432 6.94516 12.8984 7.00039 12.8984C7.05562 12.8984 7.10039 12.9432 7.10039 12.9984Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="led3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
