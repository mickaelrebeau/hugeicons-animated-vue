<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FilmRollIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after video-01: the film advances by one frame and clicks into registration
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(3.09px) rotate(3.86deg)', 'translateX(-0.39px) rotate(-0.97deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
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
            <motion.path d="M4 4.5H13V22H4V4.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 22px' }" />
            <motion.path d="M6 4L6.32918 3.34164C6.44315 3.1137 6.50014 2.99973 6.56517 2.90086C6.88933 2.40808 7.41449 2.08351 8.00021 2.01396C8.11773 2 8.24515 2 8.5 2C8.75485 2 8.88227 2 8.99979 2.01396C9.58551 2.08351 10.1107 2.40808 10.4348 2.90086C10.4999 2.99973 10.5568 3.1137 10.6708 3.34164L11 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 22px' }" />
            <motion.path d="M3 4.5H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 22px' }" />
            <motion.path d="M3 22H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 22px' }" />
            <motion.path d="M13 7.5H18C19.4142 7.5 20.1213 7.5 20.5607 7.96131C21 8.42261 21 9.16764 21 10.6577C21 11.6731 21 12.1808 20.7504 12.5763C20.5008 12.9719 20.057 13.1691 19.1694 13.5636L18.2829 13.9576C17.6912 14.2206 17.3953 14.3521 17.2289 14.6158C17.0625 14.8794 17.0625 15.2179 17.0625 15.8949C17.0625 16.8882 17.0625 17.3849 16.7696 17.6925C16.4767 18 16.0053 18 15.0625 18H13V7.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 22px' }" />
          </svg>
        </div>
</template>
