<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ShoppingBagRemoveIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after minus-sign-circle: the remove mark pinches short while the host shape recoils
// generated from @hugeicons/core-free-icons
const minusVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.35)', 'scaleX(1.08)', 'scaleX(1)'],
    transition: {
      duration: 0.43,
      ease: 'easeOut',
    },
  },
}

const frameVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.96)', 'scale(1.025)', 'scale(1)'],
    transition: {
      duration: 0.47,
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
            <motion.path d="M8 6.5C8 8.15685 9.34315 9.5 11 9.5C12.6569 9.5 14 8.15685 14 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="minusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 8px' }" />
            <motion.path d="M16 16.5L21 21.5M16 21.5L21 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 19px' }" />
            <motion.path d="M13.1084 20.5H9.89162C6.02422 20.5 4.09052 20.5 2.89731 19.1594C1.70411 17.8189 1.91058 16.0497 2.32352 12.5113C2.6739 9.50898 3.18586 7.25784 3.66063 5.65851C4.04994 4.34711 4.24459 3.69141 5.04283 3.0957C5.84107 2.5 6.65697 2.5 8.28876 2.5H13.7113C15.3431 2.5 16.159 2.5 16.9572 3.0957C17.7554 3.69141 17.9501 4.34711 18.3394 5.65851C18.8142 7.25784 19.3261 9.50898 19.6765 12.5113C19.7169 12.8574 19.7553 13.1865 19.7906 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.75px 11.5px' }" />
          </svg>
        </div>
</template>
