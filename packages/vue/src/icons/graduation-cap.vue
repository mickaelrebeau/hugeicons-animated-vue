<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GraduationCapIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the tassel swings beside the cap
// authored from scripts/authored
const tasselVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.93px, -0.15px) rotate(-18deg)',
      'translate(-0.62px, -0.07px) rotate(12deg)',
      'translate(0.21px, -0.01px) rotate(-4deg)',
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

const capVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.11200000000000002px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.06,
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
            <motion.path d="M22 9V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tasselVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '22px 12px' }" />
            <path d="M18 12V15.0669C18 16.1333 18 16.6665 17.737 17.1071L17.7316 17.1159C17.4661 17.5551 16.9843 17.8238 16.0206 18.3611C14.0645 19.4518 13.0864 19.9972 12.0109 20H11.9891C10.9136 19.9972 9.93551 19.4518 7.97941 18.3611C7.01574 17.8238 6.53391 17.5551 6.2684 17.1159L6.26305 17.1071C6 16.6665 6 16.1333 6 15.0669V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M8.52143 5.22252L4.40645 7.2074C2.80215 7.98124 2 8.36816 2 8.99125C2 9.61434 2.80215 10.0013 4.40645 10.7751L8.598 12.7969C10.2608 13.599 11.0922 14 11.9816 14C12.8711 14 13.7025 13.599 15.3653 12.7969L19.6386 10.7356C21.2141 9.97571 22.0018 9.59575 22 8.97064C21.9982 8.34553 21.2146 7.97321 19.6473 7.22857C18.2179 6.5494 16.8685 5.92516 15.433 5.24184C13.6907 4.41243 12.8195 3.99772 11.9353 4.00001C11.0512 4.00229 10.2079 4.40904 8.52143 5.22252Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="capVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
          </svg>
        </div>
</template>
