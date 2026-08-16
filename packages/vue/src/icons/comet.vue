<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CometIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the comet move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.78px) rotate(-2.1deg)', 'translateY(0.42px) rotate(0.73deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
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
            <motion.path d="M4.05025 10.0498C1.31658 12.7835 1.31658 17.2156 4.05025 19.9493C6.78392 22.683 11.2161 22.683 13.9497 19.9493L17.899 16M12.1001 2L6.5 7.60006M22 11.899L20 13.899" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.66px 22.68px' }" />
            <motion.path d="M11.1213 12.8787C12.2929 14.0503 12.2929 15.9497 11.1213 17.1213C9.94975 18.2929 8.05025 18.2929 6.87868 17.1213C5.70711 15.9497 5.70711 14.0503 6.87868 12.8787C8.05025 11.7071 9.94975 11.7071 11.1213 12.8787Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.66px 22.68px' }" />
            <motion.path d="M6.87869 12.8795L13.9998 5.75787M17.7574 2L15.9998 3.75772M21.9998 6.24338L15.3637 12.8795" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.66px 22.68px' }" />
          </svg>
        </div>
</template>
