<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DropperIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the dropper move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.74px) rotate(-2.04deg)', 'translateY(0.41px) rotate(0.71deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M11.2872 8.00018L4.68174 14.6057C4.05287 15.2345 3.72789 16.0522 3.70679 16.8762C3.67836 17.9861 3.66415 18.5411 3.57991 18.7373C3.49566 18.9336 3.30358 19.1257 2.91944 19.5098L2.32535 20.1039C1.89155 20.5377 1.89155 21.241 2.32535 21.6748C2.75915 22.1086 3.46247 22.1086 3.89627 21.6748L4.49036 21.0807C4.87451 20.6966 5.06658 20.5045 5.26283 20.4203C5.45909 20.336 6.01406 20.3218 7.12396 20.2934C7.94797 20.2723 8.76565 19.9473 9.39451 19.3184L11.3227 17.3903M14.4291 14.2839L16 12.713M14.4291 14.2839L12.8582 12.713M14.4291 14.2839L11.3227 17.3903M11.3227 17.3903L9.75177 15.8193" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.95px 22.11px' }" />
            <motion.path d="M21.068 7.43213L19.5002 8.99992C18.6718 9.82837 18.6718 11.1715 19.5002 12L12 4.49979C12.8285 5.32824 14.1716 5.32824 15.0001 4.49979L16.5679 2.93201C17.8105 1.68933 19.8253 1.68933 21.068 2.93201C22.3107 4.17468 22.3107 6.18946 21.068 7.43213Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.95px 22.11px' }" />
          </svg>
        </div>
</template>
