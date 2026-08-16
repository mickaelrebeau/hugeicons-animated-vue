<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'OrientationLandscapeToPotraitIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the orientation landscape to potrait move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.77px) rotate(-2.08deg)', 'translateY(0.42px) rotate(0.73deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M12 9C12 6.64298 12 5.46447 11.2678 4.73223C10.5355 4 9.35702 4 7 4C4.64298 4 3.46447 4 2.73223 4.73223C2 5.46447 2 6.64298 2 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 22px' }" />
            <motion.path d="M7 22H15C17.357 22 18.5355 22 19.2678 21.2678C20 20.5355 20 19.357 20 17C20 14.643 20 13.4645 19.2678 12.7322C18.5355 12 17.357 12 15 12L7 12C4.64298 12 3.46446 12 2.73223 12.7322C2 13.4645 2 14.643 2 17C2 19.357 2 20.5355 2.73223 21.2678C3.46446 22 4.64298 22 7 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 22px' }" />
            <motion.path d="M18.5 2L16 4.5L18.5 7M17 4.5C19.357 4.5 20.5355 4.5 21.2678 5.23223C22 5.96447 22 7.14298 22 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 22px' }" />
          </svg>
        </div>
</template>
