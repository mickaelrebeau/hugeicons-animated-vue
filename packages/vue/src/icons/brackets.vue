<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BracketsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the brackets move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.82px) rotate(-2.14deg)', 'translateY(0.43px) rotate(0.75deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M16 21C16.93 21 17.395 21 17.7765 20.8978C18.8117 20.6204 19.6204 19.8117 19.8978 18.7765C20 18.395 20 17.93 20 17V7C20 6.07003 20 5.60504 19.8978 5.22354C19.6204 4.18827 18.8117 3.37962 17.7765 3.10222C17.395 3 16.93 3 16 3" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 21px' }" />
            <motion.path d="M8 21C7.07003 21 6.60504 21 6.22354 20.8978C5.18827 20.6204 4.37962 19.8117 4.10222 18.7765C4 18.395 4 17.93 4 17V7C4 6.07003 4 5.60504 4.10222 5.22354C4.37962 4.18827 5.18827 3.37962 6.22354 3.10222C6.60504 3 7.07003 3 8 3" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 21px' }" />
          </svg>
        </div>
</template>
