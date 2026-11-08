<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SafeDelivery02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the parcel sways under its parachute
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
      duration: 0.9,
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
              <path d="M12 2C7.58172 2 4 5.13401 4 9H20C20 5.13401 16.4183 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M8 17.3333C8 15.4029 8.34533 15 10 15H14C15.6547 15 16 15.4029 16 17.3333V19.6667C16 21.5971 15.6547 22 14 22H10C8.34533 22 8 21.5971 8 19.6667V17.3333Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M12.008 17.5H11.999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M4 9L12 15L20 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            </motion.g>
          </svg>
        </div>
</template>
