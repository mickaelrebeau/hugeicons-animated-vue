<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ShoppingBasketAddIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the plus spins in at the basket corner
// authored from scripts/authored
const plusVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(46deg) scale(0.66)',
      'rotate(90deg) scale(1.12)',
      'rotate(90deg) scale(1)',
    ],
    transition: { duration: 0.78, times: [0, 0.36, 0.76, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M13.25 22H10.25C6.95017 22 5.30025 22 4.27513 20.9749C3.25 19.9497 3.25 18.2998 3.25 15V11C3.25 9.11438 3.25 8.17157 3.83579 7.58579C4.42157 7 5.36438 7 7.25 7H15.25C17.1356 7 18.0784 7 18.6642 7.58579C19.25 8.17157 19.25 9.11438 19.25 11V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M15.25 9.5C15.25 5.63401 13.4591 2 11.25 2C9.04086 2 7.25 5.63401 7.25 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M15.25 19H21.25M18.25 22V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.3px 19px' }" />
          </svg>
        </div>
</template>
