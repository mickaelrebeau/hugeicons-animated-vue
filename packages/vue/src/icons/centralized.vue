<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CentralizedIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the centralized take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.85px) rotate(-2.18deg)', 'translateY(0.44px) rotate(0.76deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-5.3deg)', 'scale(1.1) rotate(2.12deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.47, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
  }),
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
            <motion.path d="M11.9998 7C9.23833 7 6.99976 9.23857 6.99976 12C6.99976 14.7614 9.23833 17 11.9998 17C14.7612 17 16.9998 14.7614 16.9998 12C16.9998 9.23858 14.7612 7 11.9998 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17.7364 6.26337L21.4998 2.5M17.7364 6.26337C17.2968 5.82377 17.5831 4.02148 17.6964 3M17.7364 6.26337C18.176 6.70297 19.9783 6.41666 20.9998 6.30336" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '19.4px 4.6px' }" />
            <motion.path d="M6.26313 17.7366L2.49976 21.5M6.26313 17.7366C5.82352 17.297 4.02124 17.5833 2.99976 17.6966M6.26313 17.7366C6.70273 18.1762 6.41641 19.9785 6.30312 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '4.6px 19.4px' }" />
            <motion.path d="M17.7364 17.7366L21.4998 21.5M17.7364 17.7366C18.176 17.297 19.9783 17.5833 20.9998 17.6966M17.7364 17.7366C17.2968 18.1762 17.5831 19.9785 17.6964 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '19.4px 19.4px' }" />
            <motion.path d="M6.26313 6.26337L2.49976 2.5M6.26313 6.26337C6.70273 5.82377 6.41641 4.02148 6.30312 3M6.26313 6.26337C5.82352 6.70297 4.02124 6.41666 2.99976 6.30336" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '4.6px 4.6px' }" />
          </svg>
        </div>
</template>
