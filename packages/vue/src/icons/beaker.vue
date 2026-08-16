<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BeakerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after coffee-02: the vessel tips, decants, and rights itself
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(16.74deg)', 'rotate(20.46deg)', 'rotate(-1.86deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.83,
      times: [0, 0.28, 0.55, 0.82, 1],
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
            <motion.path d="M4.49994 15V7C4.49994 5.11438 4.49994 4.17157 5.08573 3.58579C5.67151 3 6.61432 3 8.49994 3H17.2142C18.2542 3 18.7742 3 19.01 3.13989C19.4376 3.39347 19.614 3.92262 19.4241 4.38203C19.3193 4.63546 18.9033 4.94745 18.0714 5.57143C17.9039 5.69702 17.8202 5.75981 17.7538 5.83418C17.6355 5.96674 17.5547 6.12843 17.5196 6.3026C17.4999 6.40032 17.4999 6.50497 17.4999 6.71429V15C17.4999 17.8284 17.4999 19.2426 16.6213 20.1213C15.7426 21 14.3284 21 11.4999 21H10.4999C7.67151 21 6.2573 21 5.37862 20.1213C4.49994 19.2426 4.49994 17.8284 4.49994 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.06px 21px' }" />
            <motion.path d="M4.49994 14H17.4999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.06px 21px' }" />
          </svg>
        </div>
</template>
