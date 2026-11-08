<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TentTreeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the tree sways, the flag waves and the sun pops
// authored from scripts/authored
const sunVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.3)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const flagVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.16px, -0.01px) rotate(-6deg)',
      'translate(-0.11px, -0.00px) rotate(4.199999999999999deg)',
      'translate(0.05px, -0.00px) rotate(-1.7999999999999998deg)',
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

const flag2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.57px, -0.03px) rotate(-6deg)',
      'translate(-0.40px, -0.01px) rotate(4.199999999999999deg)',
      'translate(0.17px, -0.00px) rotate(-1.7999999999999998deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.06,
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
            <motion.circle cx="4.99998" cy="5" r="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sunVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 5px' }" />
            <path d="M3.11947 18.9046L7.27295 12.4381C7.41879 12.1679 7.6974 12 8.00002 12C8.30263 12 8.58124 12.1679 8.72708 12.4381L12.8806 18.9046C13.7569 20.269 14.195 20.9511 13.9168 21.4756C13.6386 22 12.8386 22 11.2386 22H4.76146C3.16142 22 2.3614 22 2.08321 21.4756C1.80501 20.9511 2.24316 20.269 3.11947 18.9046Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M7.99998 12V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M9.98276 22H19.2172C20.8283 22 21.6339 22 21.9153 21.477C22.1967 20.954 21.7577 20.2726 20.8796 18.91L17.0132 12.91C16.7263 12.4648 16.5828 12.2422 16.3616 12.1211C16.1404 12 15.8772 12 15.3508 12H7.99998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M21 5C20.3333 4.66667 18.8 3.6 18 2C17.2 3.6 15.6667 4.66667 15 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flagVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 3.5px' }" />
            <motion.path d="M21 9C20.3333 8.66667 18.8 7.6 18 6C17.2 7.6 15.6667 8.66667 15 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flag2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 7.5px' }" />
            <path d="M18 2V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
