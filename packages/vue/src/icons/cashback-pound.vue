<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CashbackPoundIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the arrow winds back a notch and springs, and the pound drops in from above
// authored from scripts/authored
const returnVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-48deg)', 'rotate(8deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const coinVariants: Variants = {
  normal: { transform: 'translateY(0px)', opacity: 1 },
  animate: {
    transform: ['translateY(0px)', 'translateY(-2.4px)', 'translateY(0.4px)', 'translateY(0px)'],
    opacity: [1, 0, 1, 1],
    transition: {
      duration: 0.7,
      times: [0, 0.3, 0.68, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'easeIn',
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
            <motion.path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C7.89936 2 4.3752 4.46819 2.83209 8M2 4.5L2.5 8.5L6.5 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="returnVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12.5 12C11.1193 12 10 10.8807 10 9.5C10 8.11929 11.1193 7 12.5 7C13.8807 7 15 8.11929 15 9.5M12.5 12C11.5 14.5 9 16 9 16H13.5858C14.4913 16 15.3597 15.6403 16 15M12.5 12H9M12.5 12H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="coinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 11.5px' }" />
          </svg>
        </div>
</template>
