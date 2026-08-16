<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DeliveryReturnIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after shopping-cart-01: the load moves along the route and eases to its stop
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(3.1px) rotate(3.87deg)', 'translateX(-0.39px) rotate(-0.97deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
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
            <motion.path d="M2.49933 7.50009V13.5001C2.49933 17.2713 2.49933 19.1569 3.6709 20.3285C4.84247 21.5001 6.72809 21.5001 10.4993 21.5001H13.9993M21.4993 14.0001V7.50009" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21.5px' }" />
            <motion.path d="M3.86842 5.3147L2.49933 7.50009H21.4993L20.2471 5.41312C19.3935 3.9903 18.9666 3.27889 18.2789 2.88949C17.5911 2.50009 16.7615 2.50009 15.1022 2.50009H8.95304C7.32931 2.50009 6.51744 2.50009 5.83946 2.87539C5.16148 3.25069 4.73046 3.9387 3.86842 5.3147Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21.5px' }" />
            <motion.path d="M11.9993 7.50009V2.50009" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21.5px' }" />
            <motion.path d="M15.9993 14.5001C15.9993 14.5001 13.4993 16.3413 13.4993 17.0001C13.4993 17.6589 15.9993 19.5001 15.9993 19.5001M13.9993 17.0001H19.2493C20.492 17.0001 21.4993 18.0075 21.4993 19.2501C21.4993 20.4927 20.492 21.5001 19.2493 21.5001H18.4993" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21.5px' }" />
            <motion.path d="M9.99933 10.5001H13.9993" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21.5px' }" />
          </svg>
        </div>
</template>
