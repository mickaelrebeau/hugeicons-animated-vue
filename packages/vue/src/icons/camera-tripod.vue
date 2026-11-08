<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CameraTripodIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the camera pans on its tripod head while the legs stay planted
// authored from scripts/authored
const bodyVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.11px, 0.08px) rotate(-8deg)',
      'translate(0.84px, 0.04px) rotate(6deg)',
      'translate(-0.28px, 0.00px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.82,
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

const lensVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.18px, 0.08px) rotate(-8deg)',
      'translate(0.89px, 0.05px) rotate(6deg)',
      'translate(-0.30px, 0.01px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.82,
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
            <motion.path d="M2 10C2 6.49335 2 4.74003 2.90796 3.55992C3.07418 3.34388 3.25989 3.14579 3.46243 2.96849C4.56878 2 6.21252 2 9.5 2H14.5C17.7875 2 19.4312 2 20.5376 2.96849C20.7401 3.14579 20.9258 3.34388 21.092 3.55992C22 4.74003 22 6.49335 22 10C22 13.5066 22 15.26 21.092 16.4401C20.9258 16.6561 20.7401 16.8542 20.5376 17.0315C19.4312 18 17.7875 18 14.5 18H9.5C6.21252 18 4.56878 18 3.46243 17.0315C3.25989 16.8542 3.07418 16.6561 2.90796 16.4401C2 15.26 2 13.5066 2 10Z" stroke="currentColor" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <path d="M17 22L12.8333 18M7 22L11.1667 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M12 18L12 23" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.circle cx="12" cy="9.5" r="3" stroke="currentColor" stroke-width="1.5" :variants="lensVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.5px' }" />
          </svg>
        </div>
</template>
