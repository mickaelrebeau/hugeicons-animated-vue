<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GameControllerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after command: the control gives one playful input response and recenters
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-7.55deg)', 'rotate(6.6deg)', 'rotate(-3.77deg)', 'rotate(1.89deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.49,
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
            <motion.path d="M11 13H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.92px' }" />
            <motion.path d="M12 9V3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.92px' }" />
            <motion.path d="M20.1526 20.9174C22.0143 20.3289 22.5597 16.7547 21.3708 12.9344C20.1819 9.11398 17.709 6.49405 15.8474 7.08259C14.6972 7.44619 14.6438 8.86174 13.6968 9.378C13.473 9.5 13.1595 9.5 12.5324 9.5H11.4676C10.8405 9.5 10.527 9.5 10.3032 9.378C9.35625 8.86174 9.30278 7.44619 8.15264 7.08259C6.29102 6.49405 3.8181 9.11398 2.62922 12.9344C1.44035 16.7547 1.98573 20.3289 3.84736 20.9174C5.20631 21.347 6.891 20.067 8.16417 17.8583C9.01333 16.3851 9.39787 16 11.1039 16H12.8961C14.6021 16 14.9867 16.3851 15.8358 17.8583C17.109 20.067 18.7937 21.347 20.1526 20.9174Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.92px' }" />
          </svg>
        </div>
</template>
