<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'OrientationImagePotraitToLandscapeIcon' })

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
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.86px) rotate(-1.07deg)', 'translateY(0.48px) rotate(0.54deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
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
            <motion.path d="M21.7882 19.7882L19.6768 17.6768C19.5636 17.5636 19.4101 17.5 19.25 17.5C19.0899 17.5 18.9364 17.5636 18.8232 17.6768L17.25 19.25L15 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.39px 18.39px' }" />
            <motion.path d="M2 8V12C2 14.357 2 15.5355 2.73223 16.2678C3.46447 17 4.64298 17 7 17C9.35702 17 10.5355 17 11.2678 16.2678C12 15.5355 12 14.357 12 12V8C12 5.64298 12 4.46447 11.2678 3.73223C10.5355 3 9.35702 3 7 3C4.64298 3 3.46447 3 2.73223 3.73223C2 4.46447 2 5.64298 2 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 10px' }" />
            <motion.path d="M2 12L4.64645 9.35355C4.87282 9.12718 5.17986 9 5.5 9C5.82014 9 6.12718 9.12718 6.35355 9.35355L8.25 11.25L9.32322 10.1768C9.43641 10.0636 9.58993 10 9.75 10C9.91007 10 10.0636 10.0636 10.1768 10.1768L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 10.5px' }" />
            <motion.path d="M8.5 6.48951V6.49951" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 6.49px' }" />
            <motion.path d="M18 14.9902V15.0002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 15px' }" />
            <motion.path d="M15 12L17 12C19.357 12 20.5355 12 21.2678 12.7322C22 13.4645 22 14.643 22 17C22 19.357 22 20.5355 21.2678 21.2678C20.5355 22 19.357 22 17 22H10C8.89543 22 8 21.1046 8 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 17px' }" />
            <motion.path d="M19.5 8V7.5C19.5 5.62513 19.5 4.6877 19.0225 4.03054C18.8683 3.8183 18.6817 3.63166 18.4695 3.47746C17.8123 3 16.8749 3 15 3M22 6.5L19.5 9L17 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 6px' }" />
          </svg>
        </div>
</template>
