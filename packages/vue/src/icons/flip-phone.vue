<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FlipPhoneIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the flip phone folds open on its hinge
// authored from scripts/authored
const screenVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 1.50px) scaleY(0.4)',
      'translate(0px, -0.20px) scaleY(1.08)',
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

const antennaVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.12px)',
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
            <path d="M14.5 4H5.5V15.5C5.5 19.0899 8.41015 22 12 22C15.5899 22 18.5 19.0899 18.5 15.5V8C18.5 6.11438 18.5 5.17157 17.9142 4.58579C17.3284 4 16.3856 4 14.5 4Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M11 18H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M8.5 8.42857C8.5 8.02959 8.5 7.83009 8.55612 7.66972C8.65663 7.38247 8.88247 7.15663 9.16972 7.05612C9.33009 7 9.52959 7 9.92857 7H14.0714C14.4704 7 14.6699 7 14.8303 7.05612C15.1175 7.15663 15.3434 7.38247 15.4439 7.66972C15.5 7.83009 15.5 8.02959 15.5 8.42857V9C15.5 9.4645 15.5 9.69675 15.4692 9.89109C15.2998 10.9608 14.4608 11.7998 13.3911 11.9692C13.1968 12 12.4645 12 12 12C11.5355 12 10.8032 12 10.6089 11.9692C9.53918 11.7998 8.70021 10.9608 8.53078 9.89109C8.5 9.69675 8.5 9.4645 8.5 9V8.42857Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="screenVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.5px' }" />
            <motion.path d="M5.5 4L5.5 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="antennaVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 3px' }" />
          </svg>
        </div>
</template>
