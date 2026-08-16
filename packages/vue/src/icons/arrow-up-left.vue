<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowUpLeftIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the fused arrow travels up-left and settles — same diagonal as arrow-up-left-01
// authored from scripts/authored
const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0px) scaleY(1)',
      'translate(-2.1px, -2.1px) scaleY(0.94)',
      'translate(0.252px, 0.252px) scaleY(1.02)',
      'translate(0px, 0px) scaleY(1)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M15 6.65032C15 6.65032 8.06166 6.10759 7.08461 7.08463C6.10755 8.06167 6.65037 15 6.65037 15M7.5 7.5L17.5 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.8px 11.8px' }" />
          </svg>
        </div>
</template>
