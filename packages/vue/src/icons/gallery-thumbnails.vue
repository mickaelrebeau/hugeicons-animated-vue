<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GalleryThumbnailsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after image-01: the front image separates from the stack and returns
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.88px) rotate(-1.09deg)', 'translateY(0.49px) rotate(0.55deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.61,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.53px, -1.31px)', 'translate(0.22px, -0.22px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M3 8.5V10.5C3 12.857 3 14.0355 3.73223 14.7678C4.46447 15.5 5.64298 15.5 8 15.5H16C18.357 15.5 19.5355 15.5 20.2678 14.7678C21 14.0355 21 12.857 21 10.5V8.5C21 6.14298 21 4.96447 20.2678 4.23223C19.5355 3.5 18.357 3.5 16 3.5H8C5.64298 3.5 4.46447 3.5 3.73223 4.23223C3 4.96447 3 6.14298 3 8.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.5px' }" />
            <motion.path d="M4.5 19.75V20M5 20C5 20.2761 4.77614 20.5 4.5 20.5C4.22386 20.5 4 20.2761 4 20C4 19.7239 4.22386 19.5 4.5 19.5C4.77614 19.5 5 19.7239 5 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 20px' }" />
            <motion.path d="M9.5 19.75V20M10 20C10 20.2761 9.77614 20.5 9.5 20.5C9.22386 20.5 9 20.2761 9 20C9 19.7239 9.22386 19.5 9.5 19.5C9.77614 19.5 10 19.7239 10 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 20px' }" />
            <motion.path d="M14.5 19.75V20M15 20C15 20.2761 14.7761 20.5 14.5 20.5C14.2239 20.5 14 20.2761 14 20C14 19.7239 14.2239 19.5 14.5 19.5C14.7761 19.5 15 19.7239 15 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 20px' }" />
            <motion.path d="M19.5 19.75V20M20 20C20 20.2761 19.7761 20.5 19.5 20.5C19.2239 20.5 19 20.2761 19 20C19 19.7239 19.2239 19.5 19.5 19.5C19.7761 19.5 20 19.7239 20 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 20px' }" />
          </svg>
        </div>
</template>
