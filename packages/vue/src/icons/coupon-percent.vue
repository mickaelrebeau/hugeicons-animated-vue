<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CouponPercentIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the percent sign turns a half and lands on itself
// authored from scripts/authored
const percentVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(36deg)',
      'translate(0.00px, 0.00px) rotate(126deg)',
      'translate(0.00px, 0.00px) rotate(185.4deg)',
      'translate(0.00px, 0.00px) rotate(180deg)',
    ],
    transition: {
      duration: 0.76,
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

const percent2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(2.10px, -1.07px) rotate(36deg)',
      'translate(6.47px, 2.10px) rotate(126deg)',
      'translate(5.13px, 5.64px) rotate(185.4deg)',
      'translate(5.40px, 5.40px) rotate(180deg)',
    ],
    transition: {
      duration: 0.76,
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

const percent3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.18px, 1.11px) rotate(36deg)',
      'translate(-6.71px, -2.18px) rotate(126deg)',
      'translate(-5.32px, -5.85px) rotate(185.4deg)',
      'translate(-5.60px, -5.60px) rotate(180deg)',
    ],
    transition: {
      duration: 0.76,
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
            <motion.path d="M15.0001 9L9.00006 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="percentVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9.37506 9.25H9.25006M9.50006 9.25C9.50006 9.38807 9.38813 9.5 9.25006 9.5C9.11199 9.5 9.00006 9.38807 9.00006 9.25C9.00006 9.11193 9.11199 9 9.25006 9C9.38813 9 9.50006 9.11193 9.50006 9.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="percent2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.3px 9.3px' }" />
            <motion.path d="M14.8751 14.75H14.7501M15.0001 14.75C15.0001 14.8881 14.8881 15 14.7501 15C14.612 15 14.5001 14.8881 14.5001 14.75C14.5001 14.6119 14.612 14.5 14.7501 14.5C14.8881 14.5 15.0001 14.6119 15.0001 14.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="percent3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.8px 14.8px' }" />
            <path d="M2.00012 14.5C3.38083 14.5 4.50012 13.3807 4.50012 12C4.50012 10.6193 3.38083 9.5 2.00012 9.5C2.00012 7.15442 2.00012 5.98164 2.62006 5.17372C2.77966 4.96572 2.96584 4.77954 3.17384 4.61994C3.98176 4 5.15455 4 7.50012 4H16.5001C18.8457 4 20.0185 4 20.8264 4.61994C21.0344 4.77954 21.2206 4.96572 21.3802 5.17372C22.0001 5.98164 22.0001 7.15442 22.0001 9.5C20.6194 9.5 19.5001 10.6193 19.5001 12C19.5001 13.3807 20.6194 14.5 22.0001 14.5C22.0001 16.8456 22.0001 18.0184 21.3802 18.8263C21.2206 19.0343 21.0344 19.2205 20.8264 19.3801C20.0185 20 18.8457 20 16.5001 20H7.50012C5.15455 20 3.98176 20 3.17384 19.3801C2.96584 19.2205 2.77966 19.0343 2.62006 18.8263C2.00012 18.0184 2.00012 16.8456 2.00012 14.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
