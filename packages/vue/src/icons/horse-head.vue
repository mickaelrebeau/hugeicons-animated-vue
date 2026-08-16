<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HorseHeadIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after thumbs-up: a short gallop — stretch, gather, settle
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) skewX(0deg)',
  },
  animate: {
    transform: ['translateX(0px) skewX(0deg)', 'translateX(1.68px) skewX(-8.4deg)', 'translateX(3.15px) skewX(4.2deg)', 'translateX(0px) skewX(0deg)'],
    transition: {
      duration: 0.53,
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
            <motion.path d="M14.0002 21C9.5 16 12.5 13 12.5 13C13.4238 15.4634 16.5 15 16.5 15L18.2742 16.3595C18.6707 16.6133 19.182 16.5153 19.4708 16.1301L20.7978 14.5278C21.0918 14.1358 21.0625 13.5705 20.7296 13.2155L19.4484 11.8489C18.8595 11.2207 18.4693 10.4119 18.3324 9.53566C18.1705 8.49976 17.5002 7.5 16.887 6.90803L16.0002 6L17.0002 3C17.0002 3 14.424 3.02925 13.5002 5C7.5 5.5 3 9.53566 3 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.05px 21px' }" />
          </svg>
        </div>
</template>
