<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ZeppelinIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the airship drifts forward and its fins flutter
// authored from scripts/authored
const shipVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1px, 0px)',
      'translate(-0.15px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.8,
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

const finVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.05px, -0.38px) rotate(10deg)',
      'translate(0.00px, 0.27px) rotate(-7deg)',
      'translate(0.01px, -0.12px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.1,
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

const fin2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.05px, 0.38px) rotate(-10deg)',
      'translate(0.00px, -0.27px) rotate(7deg)',
      'translate(0.01px, 0.12px) rotate(-3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.1,
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
            <motion.path d="M19 15.9971L18.6938 17.3197C18.3654 18.7379 18.2012 19.4471 17.6938 19.7938C17.1864 20.1406 16.5226 19.9972 15.195 19.7105L14.4288 19.545C13.7218 19.3924 13.3683 19.316 13.0668 19.1179C12.7654 18.9198 12.5402 18.6158 12.0898 18.0079L11 16.537" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="shipVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 18.1px' }" />
            <motion.path d="M2 10.9971C2 13.9971 10 16.9971 15 16.9971C19 16.9971 22 14.3108 22 10.9971C22 7.68336 19 4.99707 15 4.99707C10 4.99707 2 7.99707 2 10.9971Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shipVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
            <motion.path d="M2 10.9971H5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="shipVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 11px' }" />
            <motion.path d="M7.5 5.99713C6.74487 5.15021 5.54147 3.85496 4.36683 4.01304C4.02163 4.05949 3.68109 4.25046 3 4.6324L4 7.99706" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="finVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.3px 5.9px' }" />
            <motion.path d="M7.5 15.997C6.74487 16.8439 5.54147 18.1392 4.36683 17.9811C4.02163 17.9347 3.68109 17.7437 3 17.3617L4 13.9971" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fin2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.3px 16.1px' }" />
          </svg>
        </div>
</template>
