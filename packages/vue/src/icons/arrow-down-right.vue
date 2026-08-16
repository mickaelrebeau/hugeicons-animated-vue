<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowDownRightIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the fused arrow travels down-right and settles — same diagonal as arrow-down-right-01
// authored from scripts/authored
const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0px) scaleY(1)',
      'translate(2.1px, 2.1px) scaleY(0.94)',
      'translate(-0.252px, -0.252px) scaleY(1.02)',
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
            <motion.path d="M9 17.3497C9 17.3497 15.9383 17.8924 16.9154 16.9154C17.8924 15.9383 17.3496 9 17.3496 9M16.5 16.5L6.5 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.2px 12.2px' }" />
          </svg>
        </div>
</template>
