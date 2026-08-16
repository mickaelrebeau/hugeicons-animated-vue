<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BrochureIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the brochure take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.72px) rotate(-2.03deg)', 'translateY(0.41px) rotate(0.71deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.56,
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
    transform: ['scale(0.72) rotate(-5.07deg)', 'scale(1.1) rotate(2.03deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.46, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
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
            <motion.path d="M18.5 17V7C18.5 5.11438 18.5 4.17157 17.9142 3.58579C17.3284 3 16.3856 3 14.5 3H9.5C7.61438 3 6.67157 3 6.08579 3.58579C5.5 4.17157 5.5 5.11438 5.5 7V17C5.5 18.8856 5.5 19.8284 6.08579 20.4142C6.67157 21 7.61438 21 9.5 21H14.5C16.3856 21 17.3284 21 17.9142 20.4142C18.5 19.8284 18.5 18.8856 18.5 17Z" stroke="currentColor" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M18.5 6H19C20.4142 6 21.1213 6 21.5607 6.43934C22 6.87868 22 7.58579 22 9V16C22 17.4142 22 18.1213 21.5607 18.5607C21.1213 19 20.4142 19 19 19H18.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="cellVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '20.25px 12.5px' }" />
            <motion.path d="M5.5 6H5C3.58579 6 2.87868 6 2.43934 6.43934C2 6.87868 2 7.58579 2 9V16C2 17.4142 2 18.1213 2.43934 18.5607C2.87868 19 3.58579 19 5 19H5.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '3.75px 12.5px' }" />
            <motion.path d="M14.5 8L9.5 8M14.5 12L9.5 12M14.5 16H9.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
