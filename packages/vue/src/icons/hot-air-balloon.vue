<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HotAirBalloonIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the balloon rises and sways with its basket
// authored from scripts/authored
const liftVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1.4px)', 'translateY(-1.4px)', 'translateY(0px)'],
    transition: { duration: 0.9, times: [0, 0.4, 0.6, 1], ease: 'easeInOut' },
  },
};

const balloonVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.77px, 0.03px) rotate(-4deg)',
      'translate(0.58px, 0.02px) rotate(3deg)',
      'translate(-0.19px, 0.00px) rotate(-1deg)',
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

const basketVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.07px, 0.00px) rotate(-4deg)',
      'translate(0.05px, 0.00px) rotate(3deg)',
      'translate(-0.02px, 0.00px) rotate(-1deg)',
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
            <motion.g :variants="liftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px', transformBox: 'view-box' }">
              <motion.path d="M20 8.93333C20 14 14.4615 18 12 18C9.53846 18 4 14 4 8.93333C4 5.10416 7.58172 2 12 2C16.4183 2 20 5.10416 20 8.93333Z" stroke="currentColor" stroke-width="1.5" :variants="balloonVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
              <motion.path d="M15 8.93333C15 14 12.9231 18 12 18C11.0769 18 9 14 9 8.93333C9 5.10416 10.3431 2 12 2C13.6569 2 15 5.10416 15 8.93333Z" stroke="currentColor" stroke-width="1.5" :variants="balloonVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
              <motion.path d="M9 20C9 19.535 9 19.3025 9.05111 19.1118C9.18981 18.5941 9.59413 18.1898 10.1118 18.0511C10.3025 18 10.535 18 11 18H13C13.465 18 13.6975 18 13.8882 18.0511C14.4059 18.1898 14.8102 18.5941 14.9489 19.1118C15 19.3025 15 19.535 15 20C15 20.465 15 20.6975 14.9489 20.8882C14.8102 21.4059 14.4059 21.8102 13.8882 21.9489C13.6975 22 13.465 22 13 22H11C10.535 22 10.3025 22 10.1118 21.9489C9.59413 21.8102 9.18981 21.4059 9.05111 20.8882C9 20.6975 9 20.465 9 20Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="basketVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20px' }" />
            </motion.g>
          </svg>
        </div>
</template>
