<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CakeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the drip line rewrites and the candle flame flares and settles
// authored from scripts/authored
const icingVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.62,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const flameVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -0.69px) scaleY(1.3)',
      'translate(0px, 0.32px) scaleY(0.86)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.6,
      delay: 0.16,
      times: [0, 0.3, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M4 14.3477C5.5 14.3477 6.5 15.3477 8 15.3477C9.5 15.3477 10.5 14.3477 12 14.3477C13.5 14.3477 14.5 15.3477 16 15.3477C17.5 15.3477 18.5 14.3477 20 14.3477" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="icingVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.8px' }" />
            <path d="M4 16.3477V21.3477H20V16.3477C20 13.5192 20 12.105 19.1213 11.2263C18.2426 10.3477 16.8284 10.3477 14 10.3477H10C7.17157 10.3477 5.75736 10.3477 4.87868 11.2263C4 12.105 4 13.5192 4 16.3477Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M2 21.3477H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M12 10.3477V7.34766" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 7.34746C13.1046 7.34746 14 6.45203 14 5.34746C14 4.63933 13.5543 3.93121 13.0837 3.3809C12.6683 2.8952 12.4606 2.65234 12 2.65234C11.5394 2.65234 11.3317 2.8952 10.9163 3.3809C10.4457 3.93121 10 4.63933 10 5.34746C10 6.45203 10.8954 7.34746 12 7.34746Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5px' }" />
          </svg>
        </div>
</template>
