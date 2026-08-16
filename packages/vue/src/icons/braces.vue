<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BracesIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the braces move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.86px) rotate(-2.19deg)', 'translateY(0.44px) rotate(0.77deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
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
            <motion.path d="M8 3C7.5355 3 7.30325 3 7.10891 3.03078C6.03918 3.20021 5.20021 4.03918 5.03078 5.10891C5 5.30325 5 5.5355 5 6L5 10C5 11.1046 4.10457 12 3 12C4.10406 11.9982 5 12.8928 5 13.9968V18C5 18.4645 5 18.6968 5.03078 18.8911C5.20021 19.9608 6.03918 20.7998 7.10891 20.9692C7.30325 21 7.5355 21 8 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 21px' }" />
            <motion.path d="M16 3C16.4645 3 16.6968 3 16.8911 3.03078C17.9608 3.20021 18.7998 4.03918 18.9692 5.10891C19 5.30325 19 5.5355 19 6L19 10C19 11.1046 19.8954 12 21 12C19.8959 11.9982 19 12.8928 19 13.9968V18C19 18.4645 19 18.6968 18.9692 18.8911C18.7998 19.9608 17.9608 20.7998 16.8911 20.9692C16.6968 21 16.4645 21 16 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 21px' }" />
          </svg>
        </div>
</template>
