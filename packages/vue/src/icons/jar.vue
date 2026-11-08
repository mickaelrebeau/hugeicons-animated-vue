<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'JarIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the measuring marks fill up the jar
// authored from scripts/authored
const marksVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 4.00px) scaleY(0.2)',
      'translate(0px, -0.30px) scaleY(1.06)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
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
            <path d="M7.00474 2.07612V16C7.00474 18.8284 7.00474 20.2426 7.8848 21.1213C8.76487 22 10.1813 22 13.0142 22C15.8471 22 17.2635 22 18.1436 21.1213C19.0237 20.2426 19.0237 18.8284 19.0237 16V7.25C19.0237 6.29528 19.206 5.75727 19.7749 5C20.2183 4.40963 21.4177 3.25743 20.8507 2.43367C20.5523 2 19.7923 2 18.2725 2H10.0095C7.17658 2 5.76013 2 4.88007 2.87868C4 3.75736 4 5.17157 4 8V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M19 8H16M19 11.3333H16M19 14.6667H16M18.5 18H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="marksVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 13px' }" />
          </svg>
        </div>
</template>
