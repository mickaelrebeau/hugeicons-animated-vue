<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ScanImageIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the scan brackets close in on the photo and the sun pops
// authored from scripts/authored
const bracketsVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) scale(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) scale(1)',
      'translate(0.00px, 0.00px) scale(0.92)',
      'translate(0.00px, 0.00px) scale(1.03)',
      'translate(0.00px, 0.00px) scale(1)',
      'translate(0.00px, 0.00px) scale(1)',
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

const sunVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.2,
      times: [0, 0.34, 0.66, 1],
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
            <motion.path d="M6.5 21.5C6.03563 21.5 5.80344 21.5 5.60812 21.478C3.98545 21.2952 2.70484 20.0145 2.52201 18.3919C2.5 18.1966 2.5 17.9644 2.5 17.5M17.5 21.5C17.9644 21.5 18.1966 21.5 18.3919 21.478C20.0145 21.2952 21.2952 20.0145 21.478 18.3919C21.5 18.1966 21.5 17.9644 21.5 17.5M6.5 2.5C6.03563 2.5 5.80344 2.5 5.60812 2.52201C3.98545 2.70484 2.70484 3.98545 2.52201 5.60812C2.5 5.80344 2.5 6.03563 2.5 6.5M17.5 2.5C17.9644 2.5 18.1966 2.5 18.3919 2.52201C20.0145 2.70484 21.2952 3.98545 21.478 5.60812C21.5 5.80344 21.5 6.03563 21.5 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bracketsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M6.87868 6.87868C7.75736 6 9.17157 6 12 6C14.8284 6 16.2426 6 17.1213 6.87868C18 7.75736 18 9.17157 18 12C18 14.8284 18 16.2426 17.1213 17.1213C16.2426 18 14.8284 18 12 18C9.17157 18 7.75736 18 6.87868 17.1213C6 16.2426 6 14.8284 6 12C6 9.17157 6 7.75736 6.87868 6.87868Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M6.5 15.5L8.0333 13.8522C8.56719 13.2785 9.43281 13.2785 9.9667 13.8522C10.5259 14.4532 11.4415 14.4204 11.9623 13.7808L13.3711 12.0505C13.9688 11.3165 15.0312 11.3165 15.6289 12.0505L17.7603 14.6678" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M10.375 9.75H10.25M10.5 9.75C10.5 9.88807 10.3881 10 10.25 10C10.1119 10 10 9.88807 10 9.75C10 9.61193 10.1119 9.5 10.25 9.5C10.3881 9.5 10.5 9.61193 10.5 9.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sunVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.3px 9.8px' }" />
          </svg>
        </div>
</template>
