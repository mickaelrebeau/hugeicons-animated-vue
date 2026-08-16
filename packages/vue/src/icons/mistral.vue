<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MistralIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the silhouette of the mistral loads onto its base and settles with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.33px) scaleY(0.82)', 'translateY(-3.22px) scaleY(1.08)', 'translateY(0.47px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.64,
      times: [0, 0.18, 0.48, 0.78, 1],
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
            <motion.path d="M10.5 16.5V18.5C10.5 19.0523 10.0523 19.5 9.5 19.5H2.5C1.94772 19.5 1.5 19.0523 1.5 18.5V17.5C1.5 16.9477 1.94772 16.5 2.5 16.5H3.5C4.05228 16.5 4.5 16.0523 4.5 15.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H6.5C7.05228 4.5 7.5 4.94772 7.5 5.5V6.5C7.5 7.05228 7.94772 7.5 8.5 7.5H9.5C10.0523 7.5 10.5 7.94772 10.5 8.5V9.5C10.5 10.0523 10.9477 10.5 11.5 10.5H12.5C13.0523 10.5 13.5 10.0523 13.5 9.5V8.5C13.5 7.94772 13.9477 7.5 14.5 7.5H15.5C16.0523 7.5 16.5 7.05228 16.5 6.5V5.5C16.5 4.94772 16.9477 4.5 17.5 4.5H18.5C19.0523 4.5 19.5 4.94772 19.5 5.5V15.5C19.5 16.0523 19.9477 16.5 20.5 16.5H21.5C22.0523 16.5 22.5 16.9477 22.5 17.5V18.5C22.5 19.0523 22.0523 19.5 21.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5V16.5M10.5 16.5H13.5M10.5 16.5H8.5C7.94772 16.5 7.5 16.0523 7.5 15.5V14.5C7.5 13.9477 7.94772 13.5 8.5 13.5H9.5C10.0523 13.5 10.5 13.9477 10.5 14.5V16.5ZM13.5 16.5H15.5C16.0523 16.5 16.5 16.0523 16.5 15.5V14.5C16.5 13.9477 16.0523 13.5 15.5 13.5H14.5C13.9477 13.5 13.5 13.9477 13.5 14.5V16.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19.5px' }" />
          </svg>
        </div>
</template>
