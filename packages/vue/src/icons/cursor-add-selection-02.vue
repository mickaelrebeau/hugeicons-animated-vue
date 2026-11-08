<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CursorAddSelection02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pointer clicks and the plus stamps in
// authored from scripts/authored
const pointerVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(1)' },
  animate: {
    transform: [
      'translate(0px, 0px) scale(1)',
      'translate(-0.7px, -0.7px) scale(0.92)',
      'translate(0.1px, 0.1px) scale(1.02)',
      'translate(0px, 0px) scale(1)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.3, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const plusVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.5, delay: 0.12, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M9.0469 4.44865L14.4101 6.54728L14.4101 6.54728C17.5034 7.75771 19.05 8.36293 18.9988 9.32296C18.9475 10.283 17.3334 10.7232 14.1051 11.6036C13.1439 11.8658 12.6633 11.9969 12.3301 12.3301C11.9969 12.6633 11.8658 13.1439 11.6036 14.1051C10.7232 17.3334 10.283 18.9475 9.32296 18.9988C8.36293 19.05 7.75771 17.5034 6.54728 14.4101L6.54728 14.4101L4.44865 9.0469C3.18138 5.80831 2.54774 4.18901 3.36837 3.36837C4.18901 2.54774 5.80831 3.18138 9.0469 4.44865Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="pointerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.8px 10.8px' }" />
            <motion.path d="M17.5 14V21M21 17.5L14 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 17.5px' }" />
          </svg>
        </div>
</template>
