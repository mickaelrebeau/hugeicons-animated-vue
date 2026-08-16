<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Files02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the files take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-4.89deg)', 'scale(1.1) rotate(1.96deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.72px) rotate(-2.02deg)', 'translateY(0.4px) rotate(0.71deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M14.5 5L12.5 5C9.67157 5 8.25736 5 7.37868 5.87868C6.5 6.75736 6.5 8.17157 6.5 11L6.5 16C6.5 18.8284 6.5 20.2426 7.37868 21.1213C8.25736 22 9.67157 22 12.5 22H13.8431C14.6606 22 15.0694 22 15.4369 21.8478C15.8045 21.6955 16.0935 21.4065 16.6716 20.8284L19.3284 18.1716C19.9065 17.5935 20.1955 17.3045 20.3478 16.9369C20.5 16.5694 20.5 16.1606 20.5 15.3431V11C20.5 8.17157 20.5 6.75736 19.6213 5.87868C18.7426 5 17.3284 5 14.5 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 13.5px' }" />
            <motion.path d="M15 21.5L15 20.5C15 18.6144 15 17.6716 15.5858 17.0858C16.1716 16.5 17.1144 16.5 19 16.5L20 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6.5 19C4.84315 19 3.5 17.6569 3.5 16L3.5 8C3.5 5.17157 3.5 3.75736 4.37868 2.87868C5.25736 2 6.67157 2 9.5 2L14.5004 2C16.1572 2.00001 17.5004 3.34319 17.5004 5.00003" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 10.5px' }" />
            <motion.path d="M10.001 13L14.001 13M10.001 9L17.001 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
