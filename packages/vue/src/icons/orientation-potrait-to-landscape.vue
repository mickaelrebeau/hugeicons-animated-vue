<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'OrientationPotraitToLandscapeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the orientation potrait to landscape move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.67px) rotate(-1.96deg)', 'translateY(0.39px) rotate(0.69deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.54,
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
            <motion.path d="M12 17V9C12 6.64298 12 5.46447 11.2678 4.73223C10.5355 4 9.35702 4 7 4C4.64298 4 3.46447 4 2.73223 4.73223C2 5.46447 2 6.64298 2 9V17C2 19.357 2 20.5355 2.73223 21.2678C3.46447 22 4.64298 22 7 22C9.35702 22 10.5355 22 11.2678 21.2678C12 20.5355 12 19.357 12 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 22px' }" />
            <motion.path d="M15 22C17.357 22 18.5355 22 19.2678 21.2678C20 20.5355 20 19.357 20 17C20 14.643 20 13.4645 19.2678 12.7322C18.5355 12 17.357 12 15 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 22px' }" />
            <motion.path d="M22 5.5L19.5 8L17 5.5M19.5 7C19.5 4.64298 19.5 3.46447 18.7678 2.73223C18.0355 2 16.857 2 14.5 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 22px' }" />
          </svg>
        </div>
</template>
