<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MilkBottleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after coffee-02: the carton tips, pours, and returns upright
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(18.56deg)', 'rotate(22.68deg)', 'rotate(-2.06deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.79,
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
            <motion.path d="M14.7273 5C15.631 5 16.3636 4.32843 16.3636 3.5C16.3636 2.67157 15.631 2 14.7273 2H9.27273C8.36899 2 7.63636 2.67157 7.63636 3.5C7.63636 4.32843 8.36899 5 9.27273 5M15.2459 4.92311C16.8664 7.89408 18 10.3773 18 13.7771V18C18 21.3093 17.2465 22 13.6364 22H10.3636C6.75345 22 6 21.3093 6 18V13.7771C6 10.3773 7.10674 7.88562 8.72727 4.91465" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M6 12C6.57143 12.5 8.09206 12.4761 8.98433 12.2789C9.60646 12.1415 10.2768 12.3027 10.6984 12.7639L11.523 13.6658C11.9973 14.1846 12.7163 14.4309 13.4245 14.3173L14.4681 14.1499C15.0422 14.0578 15.6132 14.2904 16.004 14.7055C17.2226 16 18 16 18 16" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
