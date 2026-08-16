<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LabsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the body of the labs lifts while its detail lines follow
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.82px) rotate(-1.02deg)', 'translateY(0.46px) rotate(0.51deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const lineVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1.1)', 'scaleX(1)'],
    transition: {
      duration: 0.47,
      delay: 0.12,
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
            <motion.path d="M17.5 21C15.567 21 14 19.433 14 17.5L14 3L21 3L21 17.5C21 19.433 19.433 21 17.5 21Z" stroke="currentColor" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 12px' }" />
            <motion.path d="M22 3L13 3" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="lineVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 3px' }" />
            <motion.path d="M17 7H14" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 7px' }" />
            <motion.path d="M10 16.875C10 19.9126 8 21 6 21C4 21 2 19.9126 2 16.875C2 13.8374 6 10 6 10C6 10 10 13.8374 10 16.875Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 15.5px' }" />
            <motion.path d="M14 12C15.083 11.1336 16.2974 9.87843 17.771 10.7626C19.0014 11.5009 20.0342 10.7244 21 10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 10.94px' }" />
          </svg>
        </div>
</template>
