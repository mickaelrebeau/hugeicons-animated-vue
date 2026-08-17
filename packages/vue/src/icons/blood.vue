<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BloodIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the small drop joins the large one, highlight riding the body
// authored from scripts/authored
const smallVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(2.2px, 1.6px)',
      'translate(-0.30800000000000005px, -0.22400000000000003px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.58,
      times: [0, 0.12, 0.62, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const largeVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.75px, 0.03px) rotate(5deg)',
      'translate(-0.60px, 0.02px) rotate(-4deg)',
      'translate(0.23px, 0.00px) rotate(1.5deg)',
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

const shineVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.43px, 0.19px) rotate(5deg)',
      'translate(-0.35px, -0.13px) rotate(-4deg)',
      'translate(0.13px, 0.05px) rotate(1.5deg)',
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
            <motion.path d="M5.5 15.5C3.28795 14.6166 2 12.4328 2 10.1746C2 7.24571 4.31698 4.35135 5.94326 2.68056C6.82649 1.77315 8.17351 1.77315 9.05674 2.68056C9.54874 3.18602 9.96485 3.80348 10.5 4.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="smallVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.3px 8.6px' }" />
            <motion.path d="M8 14.9263C8 11.3698 10.9489 7.85521 13.0187 5.82639C14.1428 4.72454 15.8572 4.72454 16.9813 5.82639C19.0511 7.85521 22 11.3698 22 14.9263C22 18.4134 19.3492 22 15 22C10.6508 22 8 18.4134 8 14.9263Z" stroke="currentColor" stroke-width="1.5" :variants="largeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 13.4px' }" />
            <motion.path d="M18.5 15.5C18.5 17.7091 17 18.5 15.5 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 17px' }" />
          </svg>
        </div>
</template>
