<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CircleArrowMoveRightDownIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the arrow follows its curve up and around to the right
// authored from scripts/authored
const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.6px, -0.6px)',
      'translate(1.6px, -0.6px)',
      'translate(-0.16000000000000003px, 0.06px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.26, 0.56, 0.8, 1],
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
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M14.4921 11.6432C15.0223 11.0313 16.0939 10.1644 15.9847 9.80468M15.9847 9.80468C15.9847 9.38566 14.9336 8.5866 14.4921 8.00073M15.9847 9.80468C14.0658 9.92668 11.5926 9.5516 10.5852 10.351C9.52468 11.2381 9.91163 13.7606 9.80534 15.9933M9.80534 15.9933C10.3405 16.0402 11.0315 15.0081 11.6398 14.4738M9.80534 15.9933C9.44987 16.0909 8.54077 14.9856 8.00781 14.4762" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
