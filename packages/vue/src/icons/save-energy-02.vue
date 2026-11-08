<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SaveEnergy02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bulb swings on its cord and the bolt flashes
// authored from scripts/authored
const bulbVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.70px, -0.05px) rotate(8deg)',
      'translate(0.49px, -0.02px) rotate(-5.6deg)',
      'translate(-0.21px, -0.00px) rotate(2.4deg)',
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

const boltVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(1.22)', 'scale(0.92)', 'scale(1)'],
    opacity: [1, 0.3, 1, 1],
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

const bulb2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.98px, -0.35px) rotate(8deg)',
      'translate(1.40px, 0.08px) rotate(-5.6deg)',
      'translate(-0.60px, -0.08px) rotate(2.4deg)',
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
            <path d="M12 3.5V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 3.5C11.0608 3.5 7.52791 7.29323 6.97182 12.2037M12 3.5C12.9392 3.5 16.4721 7.29322 17.0282 12.2037M12 3.5C16.9367 3.5 21.0545 6.93552 22 11.5C20.6123 12.7 18.1073 12.4691 17.0282 12.2037M12 3.5C7.06333 3.5 2.94545 6.93552 2 11.5C3.38792 12.7 5.89285 12.4691 6.97182 12.2037M6.97182 12.2037C8.4559 13.0288 10.1718 13.5 12 13.5C13.8282 13.5 15.5441 13.0288 17.0282 12.2037" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bulbVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.5px' }" />
            <motion.path d="M18.5 15L16 18.5H20L17.5 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="boltVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 18.5px' }" />
            <motion.path d="M12 13.5V20.5C12 21.3284 11.3284 22 10.5 22C9.67157 22 9 21.3284 9 20.5V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bulb2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 17.8px' }" />
          </svg>
        </div>
</template>
