<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'OrientationImageLandscapeToPotraitIcon' })

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
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.8px) rotate(-1deg)', 'translateY(0.45px) rotate(0.5deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M12 9V8C12 5.64298 12 4.46447 11.2678 3.73223C10.5355 3 9.35702 3 7 3C4.64298 3 3.46447 3 2.73223 3.73223C2 4.46447 2 5.64298 2 8V14C2 14.4645 2 14.6968 2.03078 14.8911C2.20021 15.9608 3.03918 16.7998 4.10891 16.9692C4.30325 17 4.5355 17 5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 10px' }" />
            <motion.path d="M2 12L5.14645 8.85355C5.37282 8.62718 5.67986 8.5 6 8.5C6.32014 8.5 6.62718 8.62718 6.85355 8.85355L7.5 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.75px 10.25px' }" />
            <motion.path d="M8.5 6.48951V6.49951" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 6.49px' }" />
            <motion.path d="M18 14.9902V15.0002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 15px' }" />
            <motion.path d="M13 22H17C19.357 22 20.5355 22 21.2678 21.2678C22 20.5355 22 19.357 22 17C22 14.643 22 13.4645 21.2678 12.7322C20.5355 12 19.357 12 17 12L13 12C10.643 12 9.46447 12 8.73223 12.7322C8 13.4645 8 14.643 8 17C8 19.357 8 20.5355 8.73223 21.2678C9.46447 22 10.643 22 13 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 17px' }" />
            <motion.path d="M8.5 19.5L12.1464 15.8536C12.3728 15.6272 12.6799 15.5 13 15.5C13.3201 15.5 13.6272 15.6272 13.8536 15.8536L17.25 19.25L18.8232 17.6768C18.9364 17.5636 19.0899 17.5 19.25 17.5C19.4101 17.5 19.5636 17.5636 19.6768 17.6768L21.5 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 17.5px' }" />
            <motion.path d="M16 4.5H16.5C18.3749 4.5 19.3123 4.5 19.9695 4.97746C20.1817 5.13166 20.3683 5.3183 20.5225 5.53054C21 6.1877 21 7.12513 21 9M17.5 2L15 4.5L17.5 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 5.5px' }" />
          </svg>
        </div>
</template>
