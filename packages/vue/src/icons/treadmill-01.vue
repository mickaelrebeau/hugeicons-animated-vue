<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Treadmill01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the console tilts and the rail flexes
// authored from scripts/authored
const consoleVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.21px, -0.04px) rotate(-6deg)',
      'translate(0.84px, 0.10px) rotate(4.199999999999999deg)',
      'translate(-0.36px, -0.03px) rotate(-1.7999999999999998deg)',
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

const console2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.54px, 0.03px) rotate(-6deg)',
      'translate(0.38px, 0.01px) rotate(4.199999999999999deg)',
      'translate(-0.16px, 0.00px) rotate(-1.7999999999999998deg)',
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
            <path d="M20.1913 21H2.93168C2.35308 21 2.03614 20.5214 2.00291 20.0152C1.97055 19.5222 2.20738 19.003 2.7338 18.8747L17.9482 15.106C22.205 14.0681 23.3638 21 20.1913 21Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M19 18H19.009" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M22 2C21.6994 2.90192 21.5175 4.14866 20.8331 4.83307C20.4992 5.16693 20.0337 5.3221 19.1026 5.63246L15 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="consoleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 4.5px' }" />
            <motion.path d="M15 16L20 5.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="console2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 10.8px' }" />
            <path d="M6 21L5 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M18 21V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
