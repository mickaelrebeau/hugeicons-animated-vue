<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Chemistry02Icon' })

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
    transform: ['rotate(0deg)', 'rotate(19.56deg)', 'rotate(23.91deg)', 'rotate(-2.17deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.82,
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
            <motion.path d="M5 3V13C5 16.7712 5 18.6569 6.17157 19.8284C7.34315 21 9.22876 21 13 21H21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 21px' }" />
            <motion.path d="M3 9L11 9M20 9H16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 21px' }" />
            <motion.path d="M15.2466 4V6.55767C15.2466 7.69966 15.2466 8.27065 15.3937 8.8188C15.5408 9.36696 15.8292 9.87028 16.4059 10.8769L17.1873 12.241C18.6568 14.8062 19.3916 16.0888 18.7888 17.0396L18.7795 17.0541C18.1679 18 16.6119 18 13.5 18C10.3881 18 8.83212 18 8.22055 17.0541L8.21123 17.0396C7.60843 16.0888 8.34319 14.8062 9.8127 12.241L10.5941 10.8769C11.1708 9.87028 11.4592 9.36696 11.6063 8.8188C11.7534 8.27065 11.7534 7.69966 11.7534 6.55767V4" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 21px' }" />
            <motion.path d="M10.5 4L16.5 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 21px' }" />
          </svg>
        </div>
</template>
