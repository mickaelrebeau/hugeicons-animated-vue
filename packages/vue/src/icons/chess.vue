<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChessIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after puzzle: the piece lifts, advances one square, and seats on the board
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: {
    transform: ['translateY(0px) scale(1)', 'translateY(-2.25px) scale(0.96)', 'translateY(0.41px) scale(1.04)', 'translateY(0px) scale(1)'],
    transition: {
      duration: 0.56,
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
            <motion.path d="M16.9909 22H7.00911C5.74413 22 5.84958 20.2425 6.34622 19.4962C7.19456 18.2213 8.83234 16.6274 9.07261 15.0628L10.0036 9H13.9964L14.9274 15.0628C15.1677 16.6274 16.8054 18.2213 17.6538 19.4962C18.1504 20.2425 18.2559 22 16.9909 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M7.5 5.1513V2.20709C7.5 2.03185 7.69777 1.93612 7.82804 2.0483L10.2219 4.1099C10.4016 4.26468 10.6281 4.34944 10.8621 4.34944H13.1379C13.3719 4.34944 13.5984 4.26468 13.7781 4.1099L16.172 2.0483C16.3022 1.93612 16.5 2.03185 16.5 2.20709V5.1513C16.5 5.63483 16.336 6.10305 16.0364 6.4745L14.2998 8.62815C14.1099 8.86377 13.8284 9 13.5316 9H10.4684C10.1716 9 9.89015 8.86377 9.70015 8.62815L7.96356 6.47451C7.66403 6.10305 7.5 5.63483 7.5 5.1513Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M6 18H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
