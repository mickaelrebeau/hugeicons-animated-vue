<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowDownLeft02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after arrow-down-left-01: the mark commits down-left along its diagonal
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px) rotate(0deg)',
  },
  animate: {
    transform: ['translate(0px, 0px) rotate(0deg)', 'translate(-2.16px, 2.16px) rotate(-1.54deg)', 'translate(0.26px, -0.26px) rotate(0.51deg)', 'translate(-0.36px, 0.36px) rotate(-0.21deg)', 'translate(0px, 0px) rotate(0deg)'],
    transition: {
      duration: 0.52,
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
            <motion.path d="M10.9999 13L17.9999 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8.45901 17.9172L9.70078 17.8043C11.7127 17.6214 12.7186 17.53 12.9553 16.8761C13.1921 16.2223 12.4778 15.508 11.0493 14.0795L9.92046 12.9507C8.49198 11.5222 7.77774 10.8079 7.12388 11.0447C6.47002 11.2814 6.37857 12.2873 6.19567 14.2992L6.08278 15.541C5.97266 16.7523 5.9176 17.358 6.27979 17.7202C6.64198 18.0824 7.24766 18.0273 8.45901 17.9172Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
