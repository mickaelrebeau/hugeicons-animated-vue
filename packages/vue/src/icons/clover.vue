<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CloverIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the four-leaf clover twirls a quarter turn and its stem flicks
// authored from scripts/authored
const leavesVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(18deg)',
      'rotate(62.99999999999999deg)',
      'rotate(92.7deg)',
      'rotate(90deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const stemVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.58px, -0.40px) rotate(10deg)',
      'translate(0.38px, 0.19px) rotate(-6deg)',
      'translate(-0.12px, -0.07px) rotate(2deg)',
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
            <motion.path d="M12 10.5L7.89963 6.39963M7.89963 6.39963C6.89316 5.39316 6.89315 3.76133 7.89963 2.75486C8.90611 1.74838 10.5379 1.74838 11.5444 2.75486L12 3.21045L12.4556 2.75486C13.4621 1.74838 15.0939 1.74838 16.1004 2.75486C17.1068 3.76133 17.1068 5.39315 16.1004 6.39963L12 10.5M12 10.5L7.89963 14.6004M12 10.5L16.1004 14.6004M7.89963 6.39963C6.89316 5.39316 5.26133 5.39315 4.25486 6.39963C3.24838 7.40611 3.24838 9.03793 4.25486 10.0444L4.71045 10.5L4.25486 10.9556C3.24838 11.9621 3.24838 13.5939 4.25486 14.6004C5.26133 15.6068 6.89316 15.6068 7.89963 14.6004M16.1004 6.39963C17.1068 5.39315 18.7387 5.39315 19.7451 6.39963C20.7516 7.40611 20.7516 9.03793 19.7451 10.0444L19.2895 10.5L19.7451 10.9556C20.7516 11.9621 20.7516 13.5939 19.7451 14.6004C18.7387 15.6068 17.1068 15.6068 16.1004 14.6004M7.89963 14.6004C6.89316 15.6068 6.89315 17.2387 7.89963 18.2451C8.90611 19.2516 10.5379 19.2516 11.5444 18.2451L12 17.7895L12.4556 18.2451C13.4621 19.2516 15.0939 19.2516 16.1004 18.2451C17.1068 17.2387 17.1068 15.6068 16.1004 14.6004" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leavesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.5px' }" />
            <motion.path d="M7.5 15L5.62132 16.8787C4.26306 18.2369 3.5 20.0791 3.5 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stemVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 18.5px' }" />
          </svg>
        </div>
</template>
