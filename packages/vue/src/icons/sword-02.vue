<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Sword02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after scissor-01: the blade winds up, slices through, and follows through
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-20.47deg)', 'rotate(7.44deg)', 'rotate(-1.86deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M5.06066 21.0607C4.47487 21.6464 3.52513 21.6464 2.93934 21.0607C2.35355 20.4749 2.35355 19.5251 2.93934 18.9393C3.52513 18.3536 4.47487 18.3536 5.06066 18.9393C5.64645 19.5251 5.64645 20.4749 5.06066 21.0607Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 16.5px' }" />
            <motion.path d="M8 16L5.5 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 16.5px' }" />
            <motion.path d="M9.5 16.5L20.0733 7.20318C20.3506 6.96283 20.5445 6.64067 20.627 6.28308L21.5 2.5L17.7169 3.37302C17.3593 3.45554 17.0372 3.64942 16.7968 3.92675L7.5 14.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 16.5px' }" />
            <motion.path d="M4 13H4.57157C5.10201 13 5.61071 13.2107 5.98579 13.5858L10.4142 18.0142C10.7893 18.3893 11 18.898 11 19.4284V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 16.5px' }" />
          </svg>
        </div>
</template>
