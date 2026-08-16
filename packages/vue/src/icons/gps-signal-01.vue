<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GpsSignal01Icon' })

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
      duration: 0.89,
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
            <motion.path d="M9 10.0294C10.3726 8.65685 12.598 8.65685 13.9706 10.0294C15.3431 11.402 15.3431 13.6274 13.9706 15" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M4.85289 19.1471C8.04869 22.3429 12.9127 22.8538 16.6418 20.6797C17.5285 20.1627 17.9719 19.9043 17.999 19.3782C18.0261 18.8522 17.5277 18.4882 16.531 17.7603C14.683 16.4107 12.8636 14.7603 11.0516 12.9484C9.23967 11.1364 7.58927 9.31705 6.23969 7.46904C5.51179 6.47231 5.14784 5.97395 4.62178 6.00105C4.09572 6.02815 3.83725 6.47149 3.32031 7.35818C1.14624 11.0873 1.6571 15.9513 4.85289 19.1471Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15.5574 2C17.2371 2.17243 18.7811 2.83962 19.9693 4.02583C21.1611 5.21579 21.8299 6.76334 22 8.4465M18.5017 9C18.3026 8.14257 17.8914 7.36144 17.2598 6.73091C16.6314 6.10356 15.8537 5.69396 15 5.49405" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
