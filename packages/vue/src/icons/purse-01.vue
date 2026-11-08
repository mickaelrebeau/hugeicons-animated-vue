<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Purse01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bag swings from its handles
// authored from scripts/authored
const tiltVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(6deg)',
      'rotate(-3.5999999999999996deg)',
      'rotate(1.5deg)',
      'rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.22, 0.5, 0.76, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.77, 0, 0.175, 1],
        [0.77, 0, 0.175, 1],
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
            <motion.g :variants="tiltVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2px', transformBox: 'view-box' }">
              <path d="M15.9869 3.875C16.0545 3.125 15.8921 2 14.7565 2C13.3371 2 9.82353 7 7 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M8.01476 3.875C7.93872 3.125 8.12143 2 9.3989 2C10.9957 2 14.8235 7 18 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M4 10H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M21.863 15.0024C21.4147 12.9368 19.4727 10.4981 20.1725 8.38201C20.3978 7.70069 19.8861 7 19.1631 7H4.82864C4.10627 7 3.59628 7.70208 3.82496 8.38173C4.53702 10.4979 2.58784 12.9411 2.13769 15.0065C1.51926 17.8441 3.02182 20.7941 5.88585 21.3928C9.75734 22.2021 14.2396 22.2024 18.1116 21.3937C20.9776 20.7951 22.4795 17.8424 21.863 15.0024Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            </motion.g>
          </svg>
        </div>
</template>
