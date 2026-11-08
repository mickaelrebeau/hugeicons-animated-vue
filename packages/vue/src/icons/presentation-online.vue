<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PresentationOnlineIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the presenter bobs on the screen and the indicator blinks
// authored from scripts/authored
const ledVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const presenterVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.9px)',
      'translate(0px, 0.12600000000000003px)',
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
            <path d="M5.40882 17.1182C5.05045 15.6022 4.87126 14.8442 5.1059 14.26C5.25187 13.8966 5.50214 13.5836 5.82571 13.3598C6.34581 13 7.13106 13 8.70154 13H15.2985C16.8689 13 17.6542 13 18.1743 13.3598C18.4979 13.5836 18.7481 13.8966 18.8941 14.26C19.1287 14.8442 18.9496 15.6022 18.5912 17.1182C18.2381 18.6117 18.0616 19.3584 17.6207 19.8949C17.3433 20.2325 16.9952 20.5061 16.6004 20.6968C15.9729 21 15.1993 21 13.6521 21H10.3479C8.8007 21 8.0271 21 7.39959 20.6968C7.00485 20.5061 6.6567 20.2325 6.37933 19.8949C5.9384 19.3584 5.76188 18.6117 5.40882 17.1182Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M3 21H21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M11 16H13" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="ledVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8 11C9.83846 8.40464 14.1188 8.26296 16 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="presenterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.6px' }" />
            <motion.path d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z" stroke="currentColor" stroke-width="1.5" :variants="presenterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5px' }" />
          </svg>
        </div>
</template>
