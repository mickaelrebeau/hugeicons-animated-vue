<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Grid3X2Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cells inside the frame squeeze and spring
// authored from scripts/authored
const linesVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(0.8)',
      'translate(0.00px, 0px) scaleX(1.06)',
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1)',
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
            <motion.path d="M8.99609 3.5V20.5M14.9961 3.5V20.5M21.002 11.9941H3.00195" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="linesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M4.31411 19.682C5.63213 21 7.75345 21 11.9961 21C16.2387 21 18.3601 21 19.6781 19.682C20.9961 18.364 20.9961 16.2426 20.9961 12C20.9961 7.75736 20.9961 5.63604 19.6781 4.31802C18.3601 3 16.2387 3 11.9961 3C7.75345 3 5.63213 3 4.31411 4.31802C2.99609 5.63604 2.99609 7.75736 2.99609 12C2.99609 16.2426 2.99609 18.364 4.31411 19.682Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
