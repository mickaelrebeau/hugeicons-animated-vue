<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RubberDuckIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the duck bobs on the water, its wing flapping and eye blinking
// authored from scripts/authored
const tiltVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(-6deg)',
      'rotate(3.5999999999999996deg)',
      'rotate(-1.5deg)',
      'rotate(0deg)',
    ],
    transition: {
      duration: 0.8,
      times: [0, 0.22, 0.5, 0.76, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.77, 0, 0.175, 1],
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const wingVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.55px, -0.56px) rotate(-14deg)',
      'translate(-0.45px, 0.30px) rotate(9.799999999999999deg)',
      'translate(0.18px, -0.15px) rotate(-4.2deg)',
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

const eyeVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <motion.g :variants="tiltVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px', transformBox: 'view-box' }">
              <path d="M4.62724 6C5.07128 4.27477 6.63738 3 8.50122 3C10.7104 3 12.5012 4.79086 12.5012 7C12.5012 8.19469 11.9775 9.26706 11.147 10H16.9785C18.3568 10 19.0012 8.88071 19.0012 7.5C22.5012 11 21.97 15 21.97 15C21.97 18.5 18.5012 21 13.0012 21H8.99195C5.9595 21 3.50122 18.5376 3.50122 15.5C3.50122 13.3105 4.77843 11.4198 6.62726 10.5348C5.96398 10.1824 5.41166 9.6488 5.03635 9M4.62724 6L2.00122 7C2.19131 8 3.06445 9 5.03635 9M4.62724 6L5.21437 6.85464C5.67231 7.52122 5.59789 8.41801 5.03635 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <motion.path d="M11.0012 18H12.5012C14.7104 18 17.5012 15.2091 17.5012 13H11.0012C9.62051 13 8.50122 14.1193 8.50122 15.5C8.50122 16.8807 9.62051 18 11.0012 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wingVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 15.5px' }" />
              <motion.path d="M8.24927 6.25H8.37427M8.49927 6.25C8.49927 6.11193 8.38734 6 8.24927 6C8.1112 6 7.99927 6.11193 7.99927 6.25C7.99927 6.38807 8.1112 6.5 8.24927 6.5C8.38734 6.5 8.49927 6.38807 8.49927 6.25Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="eyeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            </motion.g>
          </svg>
        </div>
</template>
