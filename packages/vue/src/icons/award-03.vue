<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Award03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// medal, stand and base line lift and wobble as one trophy, then plant back on the floor
// authored from scripts/authored
const medalVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0px, -1.2px) translate(1.27px, 0.12px) rotate(6deg)',
      'translate(0px, -2.2px) translate(-1.70px, 0.05px) rotate(-8deg)',
      'translate(0px, 0.2px) translate(0.53px, 0.03px) rotate(2.5deg)',
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.84,
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

const standVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0px, -1.2px) translate(0.21px, 0.01px) rotate(6deg)',
      'translate(0px, -2.2px) translate(-0.28px, 0.02px) rotate(-8deg)',
      'translate(0px, 0.2px) translate(0.09px, 0.00px) rotate(2.5deg)',
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.84,
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

const baseVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0px, -1.2px) translate(0.00px, 0.00px) rotate(6deg)',
      'translate(0px, -2.2px) translate(0.00px, 0.00px) rotate(-8deg)',
      'translate(0px, 0.2px) translate(0.00px, 0.00px) rotate(2.5deg)',
      'translate(0px, 0px) translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.84,
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
            <motion.path d="M7.6801 12.9866C7.01748 9.62725 6.68617 7.9476 7.40306 6.58098C8.11994 5.21437 9.66067 4.58848 12.7421 3.3367L13.37 3.08163C15.698 2.13592 16.862 1.66307 17.5646 2.27374C18.2671 2.88442 18.0196 4.15398 17.5247 6.69309L15.3206 18H8.66899L7.6801 12.9866Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="medalVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 9.8px' }" />
            <motion.path d="M6 21C6 19.5858 6 18.8787 6.43934 18.4393C6.87868 18 7.58579 18 9 18H15C16.4142 18 17.1213 18 17.5607 18.4393C18 18.8787 18 19.5858 18 21V22H6V21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="standVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20px' }" />
            <motion.path d="M4 22L20 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="baseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
