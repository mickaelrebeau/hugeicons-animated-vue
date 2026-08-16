<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Knife01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after scissor-01: the blade draws through the cut and returns to guard
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-23.41deg)', 'rotate(8.51deg)', 'rotate(-2.13deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.54,
      times: [0, 0.32, 0.55, 0.8, 1],
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
            <motion.path d="M15.1024 16.7446C17.8895 13.7178 19.8287 11.3284 21.04 9.70091C21.703 8.81007 22.0345 8.36466 21.9972 7.75756C21.9193 6.48963 18.7253 3 17.3204 3C16.6774 3 16.16 3.53734 15.1252 4.61201L2.54984 17.6718C1.81672 18.4331 1.81672 19.6675 2.54984 20.4289C3.381 21.2921 4.76287 21.1587 5.42662 20.1512L7.71648 16.6756C8.63465 15.282 9.29389 15.2741 10.3945 16.4171C11.0597 17.108 11.9005 18.395 12.9477 18.3828C13.6008 18.3753 14.1013 17.8317 15.1024 16.7446Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.93px 21.29px' }" />
            <motion.path d="M18.125 8H18M18.25 8C18.25 8.13807 18.1381 8.25 18 8.25C17.8619 8.25 17.75 8.13807 17.75 8C17.75 7.86193 17.8619 7.75 18 7.75C18.1381 7.75 18.25 7.86193 18.25 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.93px 21.29px' }" />
          </svg>
        </div>
</template>
