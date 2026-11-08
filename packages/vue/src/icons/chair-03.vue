<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Chair03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the stool seat rises on its gas lift and sinks back
// authored from scripts/authored
const legsVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -0.80px) scaleY(1.1)',
      'translate(0px, -0.80px) scaleY(1.1)',
      'translate(0px, 0.16px) scaleY(0.98)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.8,
      times: [0, 0.3, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const seatVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.6px)',
      'translate(0px, -1.6px)',
      'translate(0px, 0.15px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.8,
      times: [0, 0.3, 0.6, 0.86, 1],
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
            <path d="M7 12H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M7 15H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M7.5 6L6 22M16.5 6L18 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="legsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M12 2C10.4783 2 8.86931 2.29246 7.60803 2.68377C6.6583 2.97841 5.89434 4.32201 6.01199 5.41276C6.05558 5.81688 6.36877 6 6.69807 6H17.3019C17.6312 6 17.9444 5.81688 17.988 5.41276C18.1057 4.32202 17.3417 2.97841 16.392 2.68377C15.1307 2.29246 13.5217 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="seatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4px' }" />
          </svg>
        </div>
</template>
