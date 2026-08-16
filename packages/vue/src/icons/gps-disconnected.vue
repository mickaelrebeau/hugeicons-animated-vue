<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GpsDisconnectedIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after compass: the needle overshoots the bearing and settles on it
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(202deg)', 'rotate(177.5deg)', 'rotate(180deg)'],
    transition: {
      duration: 0.88,
      times: [0, 0.72, 0.9, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
}

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
            <motion.path d="M21.9999 7.99997L18.9999 4.99997M18.9999 4.99997L15.9999 1.99997M18.9999 4.99997L15.9999 7.99997M18.9999 4.99997L21.9999 1.99997" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8.99988 10.0294C10.3725 8.65685 12.5979 8.65685 13.9704 10.0294C15.343 11.402 15.343 13.6274 13.9704 15" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M4.85277 19.1471C8.04856 22.3429 12.9126 22.8538 16.6417 20.6797C17.5284 20.1627 17.9717 19.9043 17.9988 19.3782C18.0259 18.8522 17.5276 18.4882 16.5308 17.7603C14.6828 16.4107 12.8635 14.7603 11.0515 12.9484C9.23955 11.1364 7.58915 9.31705 6.23957 7.46904C5.51167 6.47231 5.14772 5.97395 4.62166 6.00105C4.0956 6.02815 3.83713 6.47149 3.32019 7.35818C1.14611 11.0873 1.65697 15.9513 4.85277 19.1471Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
