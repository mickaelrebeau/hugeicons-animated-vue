<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CapIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after bookmark-01: the brim catches a short gust and settles back on its crown
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translateX(0px)',
  },
  animate: {
    transform: ['rotate(0deg) translateX(0px)', 'rotate(-12.05deg) translateX(1.61px)', 'rotate(5.02deg) translateX(-0.4px)', 'rotate(-2.01deg) translateX(0.2px)', 'rotate(0deg) translateX(0px)'],
    transition: {
      duration: 0.69,
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
            <motion.path d="M2.5 16.9999L2.05801 14.5261C1.4248 8.63642 6.05622 3.49994 12 3.49994C17.9438 3.49994 22.5752 8.63642 21.942 14.5261L21.5 16.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <motion.path d="M8.0157 10.4999C7.81291 7.295 9.59813 3.49994 12 3.49994" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <motion.path d="M16 10.4999C16.2028 7.295 14.4176 3.49994 12.0157 3.49994" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <motion.path d="M12 2.99994V1.99994" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <motion.path d="M2.5 17.0093C10.5 14.1427 13.5 14.5243 21.5 17.0093C21.2236 18.1308 21.0732 21.2995 19.851 21.8966C19.265 22.1829 18.4247 21.7988 17.821 21.6546C14.9252 20.9629 13.4773 20.617 12 20.617C10.5227 20.617 9.07482 20.9629 6.17904 21.6546C5.57535 21.7988 4.73502 22.1829 4.14904 21.8966C2.92684 21.2995 2.77642 18.1308 2.5 17.0093Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
          </svg>
        </div>
</template>
