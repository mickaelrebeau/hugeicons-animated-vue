<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Tree06Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the wide crown sways gently and its base settles
// authored from scripts/authored
const crownVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.64px, 0.02px) rotate(3deg)',
      'translate(-0.45px, 0.01px) rotate(-2.0999999999999996deg)',
      'translate(0.19px, 0.00px) rotate(0.8999999999999999deg)',
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

const branchVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.26px, 0.04px) rotate(1.7999999999999998deg)',
      'translate(-0.18px, -0.03px) rotate(-1.2599999999999998deg)',
      'translate(0.08px, 0.01px) rotate(0.5399999999999999deg)',
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

const branch2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.32px, -0.03px) rotate(1.7999999999999998deg)',
      'translate(-0.22px, 0.03px) rotate(-1.2599999999999998deg)',
      'translate(0.10px, -0.01px) rotate(0.5399999999999999deg)',
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

const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.3, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M12 22V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M9.00195 18.002C7.3451 18.002 6.00195 16.6234 6.00195 14.9665C4.30581 14.7239 3.00195 13.2652 3.00195 11.502C3.00195 10.0052 3.94147 8.7279 5.26293 8.22759C5.09522 7.85339 5.00195 7.43856 5.00195 7.00195C5.00195 5.3451 6.3451 4.00195 8.00195 4.00195C8.3922 4.00195 8.76505 4.07647 9.10703 4.21204C9.45374 2.93842 10.6185 2.00195 12.002 2.00195C13.3854 2.00195 14.5502 2.93842 14.8969 4.21204C15.2389 4.07647 15.6117 4.00195 16.002 4.00195C17.6588 4.00195 19.002 5.3451 19.002 7.00195C19.002 7.43856 18.9087 7.85339 18.741 8.22759C20.0624 8.7279 21.002 10.0052 21.002 11.502C21.002 13.2653 19.698 14.724 18.0017 14.9665C18.0017 16.6234 16.6588 18.002 15.002 18.002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="crownVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.7px' }" />
            <motion.path d="M12 15L14.5 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="branchVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.3px 13.8px' }" />
            <motion.path d="M12 13L9.5 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="branch2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.8px 11.8px' }" />
            <motion.path d="M10 22H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
