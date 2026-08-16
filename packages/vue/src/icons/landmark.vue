<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LandmarkIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the body of the landmark lifts while its detail lines follow
// generated from @hugeicons/core-free-icons
const lineVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1.1)', 'scaleX(1)'],
    transition: {
      duration: 0.46,
      delay: 0.12,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.79px) rotate(-0.99deg)', 'translateY(0.44px) rotate(0.49deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
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
            <motion.path d="M19.5 19H4.5C4.22121 19 4.08181 19 3.96589 19.0231C3.48986 19.1177 3.11775 19.4899 3.02306 19.9659C3 20.0818 3 20.2212 3 20.5C3 20.7788 3 20.9182 3.02306 21.0341C3.11775 21.5101 3.48986 21.8823 3.96589 21.9769C4.08181 22 4.22121 22 4.5 22H19.5C19.7788 22 19.9182 22 20.0341 21.9769C20.5101 21.8823 20.8823 21.5101 20.9769 21.0341C21 20.9182 21 20.7788 21 20.5C21 20.2212 21 20.0818 20.9769 19.9659C20.8823 19.4899 20.5101 19.1177 20.0341 19.0231C19.9182 19 19.7788 19 19.5 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 20.5px' }" />
            <motion.path d="M20.6864 6.81552L12.931 2.25351C12.6488 2.08753 12.3274 2 12 2C11.6726 2 11.3512 2.08753 11.069 2.25351L3.31361 6.81552C3.11931 6.92982 3 7.13842 3 7.36385C3 7.71518 3.28482 8 3.63615 8H20.3638C20.7152 8 21 7.71518 21 7.36385C21 7.13842 20.8807 6.92982 20.6864 6.81552Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5px' }" />
            <motion.path d="M18 11V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 15px' }" />
            <motion.path d="M14 11V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 15px' }" />
            <motion.path d="M10 11V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 15px' }" />
            <motion.path d="M6 11V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 15px' }" />
          </svg>
        </div>
</template>
