<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TrendingUpDownIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after arrow-up-02: the trending up down follows the up direction already encoded by its geometry
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleX(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleX(1)', 'translateY(-2.48px) scaleX(0.94)', 'translateY(0.29px) scaleX(1.02)', 'translateY(-0.43px) scaleX(0.99)', 'translateY(0px) scaleX(1)'],
    transition: {
      duration: 0.48,
      ease: [0.23, 1, 0.32, 1],
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
            <motion.path d="M3 14.001L7 10.001C7.88256 9.11841 8.32385 8.67713 8.86543 8.62835C8.95496 8.62028 9.04504 8.62028 9.13457 8.62835C9.67615 8.67713 10.1174 9.11841 11 10.001C11.8826 10.8835 12.3238 11.3248 12.8654 11.3736C12.955 11.3817 13.045 11.3817 13.1346 11.3736C13.6762 11.3248 14.1174 10.8835 15 10.001L20 5.00098M16 15.001L20 19.001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16 19.7244C16 19.7244 20.101 20.3467 20.7234 19.7244C21.3458 19.102 20.7234 15.001 20.7234 15.001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16 4.27682C16 4.27682 20.101 3.6545 20.7234 4.27685C21.3458 4.8992 20.7234 9.00024 20.7234 9.00024" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
