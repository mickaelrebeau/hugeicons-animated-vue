<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'InsertColumnIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after login-01: the object lines up, enters its slot, and seats
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(-3.1px)', 'translateX(1.03px)', 'translateX(-0.31px)', 'translateX(0px)'],
    transition: {
      duration: 0.56,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frameVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1)', 'translateX(0.7px) scaleX(0.96)', 'translateX(-0.2px) scaleX(1.01)', 'translateX(0px) scaleX(1)'],
    transition: {
      duration: 0.55,
      delay: 0.08,
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
            <motion.path d="M21.187 5.99805C20.9854 5.10929 20.6539 4.43424 20.1089 3.88929C18.7177 2.49805 16.4785 2.49805 12.0002 2.49805C7.52184 2.49805 5.28267 2.49805 3.89143 3.88929C2.50018 5.28053 2.50018 7.5197 2.50018 11.998C2.50018 16.4764 2.50018 18.7156 3.89143 20.1068C5.28267 21.498 7.52184 21.498 12.0002 21.498C16.4785 21.498 18.7177 21.498 20.1089 20.1068C20.6539 19.5619 20.9854 18.8868 21.187 17.998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.84px 12px' }" />
            <motion.path d="M21.5 12L17.5 12M17.5 12H13.5M17.5 12V16M17.5 12L17.5 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 12px' }" />
            <motion.path d="M9 21.5L9 2.5" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 12px' }" />
            <motion.path d="M2.5 15.5L9 15.5M2.5 8.5L9 8.5" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2.5px 12px' }" />
          </svg>
        </div>
</template>
