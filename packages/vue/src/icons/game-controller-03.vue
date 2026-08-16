<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GameController03Icon' })

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
    transform: ['rotate(0deg)', 'rotate(-8.12deg)', 'rotate(7.11deg)', 'rotate(-4.06deg)', 'rotate(2.03deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.52,
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
            <motion.path d="M2.00825 15.8092C2.23114 12.3161 2.88737 9.7599 3.44345 8.27511C3.72419 7.5255 4.32818 6.96728 5.10145 6.78021C9.40147 5.73993 14.5986 5.73993 18.8986 6.78021C19.6719 6.96728 20.2759 7.5255 20.5566 8.27511C21.1127 9.7599 21.7689 12.3161 21.9918 15.8092C22.1251 17.8989 20.6148 19.0503 18.9429 19.8925C17.878 20.4289 17.0591 18.8457 16.5155 17.6203C16.2185 16.9508 15.5667 16.5356 14.8281 16.5356H9.17196C8.43331 16.5356 7.78158 16.9508 7.48456 17.6203C6.94089 18.8457 6.122 20.4289 5.05711 19.8925C3.40215 19.0588 1.87384 17.9157 2.00825 15.8092Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.08px' }" />
            <motion.path d="M5 4.5L6.96285 4M19 4.5L17 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.08px' }" />
            <motion.path d="M9 13L7.5 11.5M7.5 11.5L6 10M7.5 11.5L6 13M7.5 11.5L9 10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.08px' }" />
            <motion.path d="M15.9881 10H15.9971" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.08px' }" />
            <motion.path d="M17.9881 13H17.9971" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.08px' }" />
          </svg>
        </div>
</template>
