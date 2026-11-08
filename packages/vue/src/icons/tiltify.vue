<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TiltifyIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the dot hops off the tilted mark
// authored from scripts/authored
const dotVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.4px)',
      'translate(0px, 0.196px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const markVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.79px, 0.03px) rotate(-5deg)',
      'translate(0.56px, 0.02px) rotate(3.5deg)',
      'translate(-0.24px, 0.00px) rotate(-1.5deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

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
            <motion.path d="M19.75 5.5C19.75 6.32843 19.0784 7 18.25 7C17.4216 7 16.75 6.32843 16.75 5.5C16.75 4.67157 17.4216 4 18.25 4C19.0784 4 19.75 4.67157 19.75 5.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.3px 5.5px' }" />
            <motion.path d="M17.1565 9.2571L7.15453 3.27281C6.23278 2.72131 5.03652 3.03305 4.5032 3.96374C3.9399 4.94674 4.35175 6.19982 5.38926 6.65964L9.55034 8.5L8.21738 19.608C8.12853 20.3484 8.70663 21 9.45232 21C10.0796 21 10.6087 20.5329 10.6865 19.9105L11.9779 9.57967L16.0806 11.398C16.6592 11.6544 17.3377 11.4117 17.6208 10.847C17.9064 10.2775 17.7041 9.58471 17.1565 9.2571Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.9px 11.9px' }" />
          </svg>
        </div>
</template>
