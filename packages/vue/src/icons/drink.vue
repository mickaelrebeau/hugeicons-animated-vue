<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DrinkIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after coffee-02: it tips, pours, and rights itself
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(16.77deg)', 'rotate(20.5deg)', 'rotate(-1.86deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.83,
      times: [0, 0.28, 0.55, 0.82, 1],
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M8.20538 15.3582L4.51713 11.0812C2.62475 8.88671 1.67856 7.78948 2.09833 6.89474C2.5181 6 3.97907 6 6.90099 6H11.099C14.0209 6 15.4819 6 15.9017 6.89474C16.3214 7.78948 15.3753 8.88671 13.4829 11.0812L9.79462 15.3582C9.42563 15.7861 9.24114 16 9 16C8.75886 16 8.57437 15.7861 8.20538 15.3582Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 16px' }" />
            <motion.path d="M8.5 6L8.09898 3.59389C8.03809 3.22852 7.78022 2.92674 7.42882 2.80961L5 2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 16px' }" />
            <motion.path d="M9 16V22M7.5 22H10.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 16px' }" />
            <motion.path d="M15.8601 8.83333C16.5043 9.54937 17.4403 10 18.4822 10C20.425 10 22 8.433 22 6.5C22 4.567 20.425 3 18.4822 3C16.71 3 15.2438 4.30385 15 6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 16px' }" />
          </svg>
        </div>
</template>
