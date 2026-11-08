<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Sink01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the faucet handle twists and the spout bobs
// authored from scripts/authored
const spoutVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.41px, 0.30px) rotate(10deg)',
      'translate(-0.32px, -0.16px) rotate(-7deg)',
      'translate(0.13px, 0.08px) rotate(3deg)',
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

const handleVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.46px, 0.07px) rotate(-18deg)',
      'translate(0.33px, 0.04px) rotate(12.6deg)',
      'translate(-0.14px, 0.01px) rotate(-5.3999999999999995deg)',
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
            <path d="M12 14C15.2069 14 17.9143 11.8786 18.7734 8.97359C19.0045 8.192 19.1201 7.80121 18.8177 7.4006C18.5152 7 18.0239 7 17.0413 7H6.9587C5.9761 7 5.4848 7 5.18234 7.4006C4.87988 7.80121 4.99545 8.192 5.22659 8.97359C6.08569 11.8786 8.79306 14 12 14Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M13 7V3.5C13 2.67157 13.6716 2 14.5 2C15.3284 2 16 2.67157 16 3.5V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="spoutVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 4.5px' }" />
            <motion.path d="M10 7V6C10 5.05719 10 4.58579 9.70711 4.29289C9.41421 4 8.94281 4 8 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 5.5px' }" />
            <path d="M14.5 14L14 22M9.5 14L10 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M8 22H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
