<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Bedug02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the mallet winds up then slams the skin, barrel and stand holding
// authored from scripts/authored
const malletVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.47px, -0.88px) rotate(-28deg)',
      'translate(0.53px, 0.68px) rotate(14deg)',
      'translate(-0.18px, -0.17px) rotate(-4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.72,
      times: [0, 0.4, 0.52, 0.78, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const skinVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(1.52px, 0px) scaleX(0.62)',
      'translate(-0.56px, 0px) scaleX(1.14)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.28,
      times: [0, 0.28, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <path d="M22 10C22 6.13401 20.5 4 18 3C16.5342 2.37764 14.6088 2 12.5 2C10.3912 2 8.46579 2.37764 7 3" stroke="currentColor" stroke-width="1.5" />
            <path d="M7 3C8.46579 2.37764 10.3912 2 12.5 2C14.6088 2 16.5342 2.37764 18 3C20.5 4 22 6.13401 22 10C22 13.866 20.5 16 18 17C16.5342 17.6224 14.6088 18 12.5 18C10.3912 18 8.46579 17.6224 7 17" stroke="currentColor" stroke-width="1.5" />
            <path d="M9 22L18 13" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M2 15L7 10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="malletVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 12.5px' }" />
            <motion.path d="M3 10C3 6.13401 4.79086 3 7 3C9.20914 3 11 6.13401 11 10C11 13.866 9.20914 17 7 17C5.51321 17 4.21588 15.5804 3.52643 13.4736" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="skinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 10px' }" />
            <path d="M6.99981 10H7.00879" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
            <path d="M18 22L16 20" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
