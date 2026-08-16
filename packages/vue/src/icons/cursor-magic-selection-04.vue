<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CursorMagicSelection04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cursor-pointer-01: the pointer leans into its tip and clicks
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.77px) scaleX(0.9) scaleY(1.04)', 'translateX(1.92px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
    transition: {
      duration: 0.5,
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
            <motion.path d="M12.669 8.35811L17.6969 10.3256C20.5969 11.4604 22.0469 12.0277 21.9988 12.9278C21.9508 13.8278 20.4375 14.2405 17.4111 15.0659C16.5099 15.3117 16.0593 15.4346 15.7469 15.7469C15.4346 16.0593 15.3117 16.5099 15.0659 17.4111C14.2405 20.4375 13.8278 21.9508 12.9278 21.9988C12.0277 22.0469 11.4604 20.5969 10.3256 17.6969L8.35811 12.669C7.17004 9.63279 6.57601 8.1147 7.34535 7.34535C8.1147 6.57601 9.63279 7.17004 12.669 8.35811Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.58px 14.31px' }" />
            <motion.path d="M9 4V2M5 5L3.5 3.5M4 9H2M5 13L3.5 14.5M14.5 3.5L13 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.58px 14.31px' }" />
          </svg>
        </div>
</template>
