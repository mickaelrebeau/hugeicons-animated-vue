<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ImageRotationClockwiseIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after image-01: the picture lifts as one card while its scene follows with depth
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.79px) rotate(-0.98deg)', 'translateY(0.44px) rotate(0.49deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M14 7H15.6C18.617 7 20.1255 7 21.0627 7.91122C22 8.82245 22 10.289 22 13.2222V14.7778C22 17.711 22 19.1776 21.0627 20.0888C20.1255 21 18.617 21 15.6 21H12.4C9.38301 21 7.87452 21 6.93726 20.0888C6 19.1776 6 17.711 6 14.7778V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 14px' }" />
            <motion.path d="M21.5 17.2857L17.4327 13.2712C17.2576 13.0984 17.0104 13 16.7513 13C16.5061 13 16.271 13.0881 16.0977 13.2449L12.4211 16.5714L10.7152 15.0281C10.5437 14.8729 10.3111 14.7857 10.0686 14.7857C9.80735 14.7857 9.5586 14.8868 9.38506 15.0634L6.5 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 15.5px' }" />
            <motion.path d="M11.0004 7C10.0882 5.78555 8.63582 5 7 5C4.23858 5 2 7.23858 2 10C2 11.1258 2.37209 12.1647 3 13.0005M11.0004 7L10 3M11.0004 7L7.5 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 8px' }" />
            <motion.path d="M11.625 11.5H11.5M11.75 11.5C11.75 11.6381 11.6381 11.75 11.5 11.75C11.3619 11.75 11.25 11.6381 11.25 11.5C11.25 11.3619 11.3619 11.25 11.5 11.25C11.6381 11.25 11.75 11.3619 11.75 11.5Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 11.5px' }" />
          </svg>
        </div>
</template>
