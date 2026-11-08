<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HorseIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the horse trots: it bobs and swishes its tail
// authored from scripts/authored
const horseVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.25, 0.5, 0.75, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const tailVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.64px, -0.36px) rotate(20deg)',
      'translate(0.50px, 0.11px) rotate(-14deg)',
      'translate(-0.21px, -0.08px) rotate(6deg)',
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

const legVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.1,
      times: [0, 0.25, 0.5, 0.75, 1],
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
            <motion.path d="M19.5 4.5L22 8.5C21.7259 9.04816 21.1129 9.5 20.5 9.5L19 8C18.1042 8 17.2833 7.34982 17 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="horseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 7px' }" />
            <motion.path d="M18.5 2L17.5 3C15.5 3.5 14.1879 4.93621 13.666 6.50196L13 8.5C10.8481 10.0371 9.31821 9.68408 7.68856 9.18411C6.65537 8.86714 5.47314 9.02686 4.70896 9.79104C4.25502 10.245 4 10.8607 4 11.5026V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="horseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.3px 11.5px' }" />
            <motion.path d="M4.5 9.5L3.75623 9.12812C3.58773 9.04386 3.40192 9 3.21353 9C2.54331 9 2 9.54331 2 10.2135V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tailVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.3px 11.5px' }" />
            <motion.path d="M17.5 7.5L17.4027 7.64596C16.8376 8.49359 16.726 9.56509 17.1044 10.511C17.3625 11.1564 17.4274 11.8629 17.2911 12.5445C17.1047 13.4765 16.2908 14.4728 15.5 15V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="horseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 14.3px' }" />
            <path d="M13 21V14.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M8 16C8 16 10.3077 17.125 13 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="horseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 16.6px' }" />
            <motion.path d="M8.5 14.5C8 16.5 6.5 17 6.5 17V21.0005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="legVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 17.8px' }" />
          </svg>
        </div>
</template>
