<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PisaTowerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the tower leans further over, then rights itself back to its tilt
// authored from scripts/authored
const towerVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.67px, 0.09px) rotate(4deg)',
      'translate(-0.25px, -0.02px) rotate(-1.5deg)',
      'translate(0.08px, 0.01px) rotate(0.5deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.9,
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

const tower2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.43px, 0.04px) rotate(4deg)',
      'translate(-0.16px, -0.01px) rotate(-1.5deg)',
      'translate(0.05px, 0.00px) rotate(0.5deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.9,
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
            <path d="M2 21H22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M16.4591 16.4179L17.7484 11.3959M16.4591 16.4179L17.4214 16.6871M16.4591 16.4179L15.2828 21M16.4591 16.4179L7.79815 13.9957M17.7484 11.3959L19.0377 6.3738M17.7484 11.3959L18.7107 11.665M17.7484 11.3959L9.08743 8.97368M19.0377 6.3738L17.113 5.83554M19.0377 6.3738L20 6.64294M7.79815 13.9957L9.08743 8.97368M7.79815 13.9957L6.83582 13.7266M7.79815 13.9957L6 21M9.08743 8.97368L10.3767 3.95162M9.08743 8.97368L8.1251 8.70455M10.3767 3.95162L9.41437 3.68249M10.3767 3.95162L12.3014 4.48988M12.3014 4.48988L17.113 5.83554M12.3014 4.48988L12.7458 2.75811C12.8862 2.21105 13.4418 1.88632 13.9799 2.03682L16.8635 2.84327C17.3901 2.99054 17.7025 3.53846 17.5651 4.07382L17.113 5.83554" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="towerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 11.4px' }" />
            <motion.path d="M10.5 21L11.06 19M14 8.5L13.5218 10.208M12.1121 15.2424L12.5655 13.6232" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tower2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.3px 14.8px' }" />
          </svg>
        </div>
</template>
