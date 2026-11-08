<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SquareLockAddIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the plus spins in beside the lock
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
            <path d="M11.0658 22C9.43835 22 8.11054 21.966 6.6557 21.9009C4.92675 21.8235 3.50598 20.515 3.27504 18.8447C3.12431 17.7547 3 16.6376 3 15.5C3 14.3624 3.12431 13.2453 3.27504 12.1553C3.50598 10.485 4.92675 9.17649 6.6557 9.09909C8.11054 9.03397 9.5884 9 11.2159 9C12.8433 9 14.3212 9.03397 15.776 9.09909C17.2713 9.16603 18.536 10.1538 19 11.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M6.5 9V6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M17 22L17 14M13 18H21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 18px' }" />
          </svg>
        </div>
</template>
