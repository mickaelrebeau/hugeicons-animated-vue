<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DoNotTouchIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the hand reaches and the slash blocks it
// authored from scripts/authored
const handVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.6px, -0.8px)',
      'translate(-0.072px, 0.096px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const slashVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-4deg) scale(0.97)',
      'rotate(3.2deg) scale(1.03)',
      'rotate(-1.2deg) scale(0.995)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.56, delay: 0.16, times: [0, 0.2, 0.46, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M17.5 22.0003V20.8357C17.5 19.913 17.9987 19.1864 18.5 18.5M8 22.0003C8 20.883 7.62579 19.527 6.93707 18.6472L3.33738 14.049C2.8758 13.4316 2.88907 12.5792 3.36965 11.9766C3.99772 11.189 5.16877 11.124 5.8797 11.8371L7.5 13.4625V7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.7px 14.8px' }" />
            <motion.path d="M13.5018 5.5C13.5018 4.67157 14.1733 4 15.0018 4C15.8302 4 16.5018 4.67157 16.5018 5.5V7.5M10.502 6.50045V5L10.5018 3.5C10.5018 2.67157 11.1733 2 12.0018 2C12.8302 2 13.5018 2.67157 13.5018 3.5V5.5M13.5018 5.5V9.50024M10.502 5C10.5016 4.17187 9.83019 3.50117 9.00197 3.50064C8.17376 3.50011 8 4 8 4M16.5018 12V7.5M16.5018 7.5C16.5018 6.67157 17.1733 6 18.0018 6C18.8302 6 19.5018 6.67157 19.5018 7.5V13.6668C19.5018 14.3812 19.5018 14.9897 19.49 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.8px 8.8px' }" />
            <motion.path d="M2 2L22 22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="slashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
