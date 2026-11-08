<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Sword01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the sword thrusts forward and the blade glints
// authored from scripts/authored
const swordVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.2px, -1.2px)',
      'translate(-0.18px, 0.18px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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

const bladeVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.2px, -1.2px)',
      'translate(-0.18px, 0.18px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0.5, 1, 1, 1],
    transition: {
      duration: 0.62,
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
            <motion.path d="M2.5 19.5C2.98686 19.5717 3.45571 19.7949 3.83041 20.1696C4.20512 20.5443 4.42832 21.0131 4.5 21.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="swordVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 20.5px' }" />
            <motion.path d="M8 16L4 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="swordVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 18px' }" />
            <motion.path d="M9 16.5L19.8538 7.92675C20.1737 7.64942 20.3975 7.27769 20.4927 6.86509L21.5 2.5L17.1349 3.50733C16.7223 3.60254 16.3506 3.82626 16.0732 4.14625L7.5 15" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="bladeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 9.5px' }" />
            <motion.path d="M4 13H4.57157C5.10201 13 5.61071 13.2107 5.98579 13.5858L10.4142 18.0142C10.7893 18.3893 11 18.898 11 19.4284V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="swordVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 16.5px' }" />
          </svg>
        </div>
</template>
