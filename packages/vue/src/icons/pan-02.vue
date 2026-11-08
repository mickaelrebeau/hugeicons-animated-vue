<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Pan02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pot lid lifts and the steam escapes
// authored from scripts/authored
const potVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.09px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.1,
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

const handleVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.16px, 0.19px) rotate(-10deg)',
      'translate(0.07px, -0.07px) rotate(4deg)',
      'translate(-0.02px, 0.02px) rotate(-1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.1,
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

const spoonVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.6px, -0.6px)',
      'translate(0.09px, 0.09px)',
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
            <motion.path d="M20.5556 13H9.44444C9.19898 13 9 13.2487 9 13.5556C9 16.0102 10.5919 18 12.5556 18H17.4444C19.4081 18 21 16.0102 21 13.5556C21 13.2487 20.801 13 20.5556 13Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="potVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 15.5px' }" />
            <motion.path d="M9 13L7 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 12px' }" />
            <motion.path d="M2.36797 6.36797C2.85859 5.87734 3.65404 5.87734 4.14466 6.36797L6.63203 8.85534C7.12266 9.34596 7.12266 10.1414 6.63203 10.632C6.14141 11.1227 5.34596 11.1227 4.85534 10.632L2.36797 8.14466C1.87734 7.65404 1.87734 6.85859 2.36797 6.36797Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="spoonVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 8.5px' }" />
          </svg>
        </div>
</template>
