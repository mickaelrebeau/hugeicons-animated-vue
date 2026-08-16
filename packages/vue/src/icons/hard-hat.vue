<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HardHatIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the hard hat move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.84px) rotate(-2.16deg)', 'translateY(0.43px) rotate(0.76deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
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
            <motion.path d="M19.3333 16H4.66667C4.51191 16 4.43454 16 4.36916 16.0034C3.09137 16.0704 2.07039 17.0914 2.00343 18.3692C2 18.4345 2 18.5119 2 18.6667C2 18.744 2 18.7827 2.00171 18.8154C2.0352 19.4543 2.54568 19.9648 3.18458 19.9983C3.21727 20 3.25596 20 3.33333 20H20.6667C20.744 20 20.7827 20 20.8154 19.9983C21.4543 19.9648 21.9648 19.4543 21.9983 18.8154C22 18.7827 22 18.744 22 18.6667C22 18.5119 22 18.4345 21.9966 18.3692C21.9296 17.0914 20.9086 16.0704 19.6308 16.0034C19.5655 16 19.4881 16 19.3333 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
            <motion.path d="M14 12V6C14 5.53501 14 5.30252 13.9489 5.11177C13.8102 4.59413 13.4059 4.18981 12.8882 4.05111C12.6975 4 12.465 4 12 4C11.535 4 11.3025 4 11.1118 4.05111C10.5941 4.18981 10.1898 4.59413 10.0511 5.11177C10 5.30252 10 5.53501 10 6V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
            <motion.path d="M21 16V14C21 9.58172 17.5 6 14 6M10 6C6.5 6 3 9.58172 3 14V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
          </svg>
        </div>
</template>
