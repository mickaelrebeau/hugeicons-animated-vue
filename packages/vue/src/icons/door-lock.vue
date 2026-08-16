<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DoorLockIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-open: it swings open from the hinge, then closes on the same arc
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotateX(0deg) scaleY(1)',
  },
  animate: {
    transform: ['rotateX(0deg) scaleY(1)', 'rotateX(-55deg) scaleY(0.72)', 'rotateX(8.32deg) scaleY(1.04)', 'rotateX(0deg) scaleY(1)'],
    transition: {
      duration: 0.65,
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
            <motion.path d="M3 22H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2px' }" />
            <motion.path d="M4 22V6C4 2.69067 4.78933 2 8.57143 2H15.4286C19.2107 2 20 2.69067 20 6V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2px' }" />
            <motion.path d="M13.92 11.7592V9.85424C13.92 8.8324 13.0604 8.00403 12 8.00403C10.9396 8.00403 10.08 8.8324 10.08 9.85424V11.7592M15 14.0843C15 15.6952 13.6462 17.004 12 17.004C10.3538 17.004 9 15.6952 9 14.0843C9 12.374 10.3538 11.0739 12 11.0739C13.6462 11.0739 15 12.374 15 14.0843Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2px' }" />
          </svg>
        </div>
</template>
