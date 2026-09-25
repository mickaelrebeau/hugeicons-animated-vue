<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CalendarUserIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the person hops into the corner
// authored from scripts/authored
const personVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(1, 1)' },
  animate: {
    transform: [
      'translate(0px, 0px) scale(1, 1)',
      'translate(0px, -2.6px) scale(0.92, 1.12)',
      'translate(0px, 0.6px) scale(1.08, 0.9)',
      'translate(0px, 0px) scale(1, 1)',
    ],
    transition: {
      duration: 0.58,
      times: [0, 0.36, 0.64, 1],
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
            <path d="M16 2V6M8 2V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M21 13V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M3 10H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M17.5 18.5C16.3954 18.5 15.5 17.6046 15.5 16.5C15.5 15.3954 16.3954 14.5 17.5 14.5C18.6046 14.5 19.5 15.3954 19.5 16.5C19.5 17.6046 18.6046 18.5 17.5 18.5ZM17.5 18.5C19.433 18.5 21 20.067 21 22M17.5 18.5C15.567 18.5 14 20.067 14 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 22px' }" />
          </svg>
        </div>
</template>
