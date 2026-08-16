<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ParkingMeterIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after shopping-cart-01: it rolls into place and stops
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(0px)', 'translateX(2.3px)', 'translateX(2.87px)', 'translateX(2.49px)', 'translateX(0px)'],
    transition: {
      duration: 0.67,
      times: [0, 0.4, 0.58, 0.72, 1],
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M12 2C8.13398 2 4.99997 5.13401 4.99997 9C4.99997 10.5151 5.48133 11.9178 6.29947 13.0635C6.55866 13.4264 6.68827 13.608 6.73978 13.6988C6.90985 13.9988 6.95318 14.134 6.98909 14.4769C6.99997 14.5808 6.99997 14.7173 6.99997 14.9904C6.99997 15.9293 6.99997 16.3988 7.10416 16.7838C7.38276 17.8131 8.18685 18.6172 9.21621 18.8958C9.60116 19 10.0706 19 11.0096 19H12.9903C13.9293 19 14.3988 19 14.7837 18.8958C15.8131 18.6172 16.6172 17.8131 16.8958 16.7838C17 16.3988 17 15.9293 17 14.9904C17 14.7173 17 14.5808 17.0108 14.4769C17.0468 14.134 17.0901 13.9988 17.2602 13.6988C17.3117 13.6079 17.4413 13.4265 17.7005 13.0635C18.5186 11.9178 19 10.5151 19 9C19 5.13401 15.866 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <motion.path d="M11 15H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <motion.path d="M12 15V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <motion.path d="M12 19V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <motion.path d="M15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
          </svg>
        </div>
</template>
