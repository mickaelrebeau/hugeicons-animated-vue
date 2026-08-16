<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SpermIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the sperm move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.83px) rotate(-2.15deg)', 'translateY(0.43px) rotate(0.75deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M9.89092 14.1091C12.1252 16.3433 15.189 16.9019 17.9818 14.1091C20.7746 11.3163 22.0272 6.0182 20.0045 3.99548C17.9818 1.97276 12.6837 3.22541 9.89092 6.0182C7.09812 8.811 7.65668 11.8748 9.89092 14.1091Z" stroke="currentColor" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.56px 16.9px' }" />
            <motion.path d="M3 21C3.41339 20.4523 4.05487 19.8823 5.17764 19.6079C6.07232 19.3892 6.51967 19.2799 6.68616 19.1665C7.02076 18.9388 7.12514 18.7561 7.14451 18.3644C7.15414 18.1695 7.04904 17.8687 6.83883 17.267C6.62862 16.6654 6.52352 16.3646 6.53315 16.1697C6.55252 15.778 6.6569 15.5953 6.9915 15.3675C7.15799 15.2542 7.60534 15.1449 8.50002 14.9262C9.29868 14.731 9.7855 14.3789 10 14" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.56px 16.9px' }" />
          </svg>
        </div>
</template>
