<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BloodBottleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the blood line sloshes in the still bottle, pipette and stand holding
// authored from scripts/authored
const meniscusVariants: Variants = {
  normal: { d: 'M8 10.3722C14.8571 6.24278 13.5714 13.0046 20 10.3723' },
  animate: {
    d: [
      'M8 10.3722C14.8571 6.24278 13.5714 13.0046 20 10.3723',
      'M8 8.9C14.8571 4.9 13.5714 12.2 20 11.5',
      'M8 11.5C14.8571 7.6 13.5714 14.3 20 8.9',
      'M8 10.3722C14.8571 6.24278 13.5714 13.0046 20 10.3723',
    ],
    transition: {
      duration: 0.74,
      times: [0, 0.32, 0.64, 1],
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
            <path d="M14 5V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M17 2H9C6.64298 2 5.46447 2 4.73223 2.73223C4 3.46447 4 4.64298 4 7V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M8 11.125C8 8.66719 8 7.43829 8.57782 6.5555C8.82796 6.17334 9.14939 5.84521 9.52376 5.58986C10.3885 5 11.5924 5 14 5C16.4076 5 17.6115 5 18.4762 5.58986C18.8506 5.84521 19.172 6.17334 19.4222 6.5555C20 7.43829 20 8.66719 20 11.125V12.875C20 15.3328 20 16.5617 19.4222 17.4445C19.172 17.8267 18.8506 18.1548 18.4762 18.4101C17.6115 19 16.4076 19 14 19C11.5924 19 10.3885 19 9.52376 18.4101C9.14939 18.1548 8.82796 17.8267 8.57782 17.4445C8 16.5617 8 15.3328 8 12.875V11.125Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M8 10.3722C14.8571 6.24278 13.5714 13.0046 20 10.3723" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="meniscusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 9.6px' }" />
            <path d="M11 22C12.6569 22 14 20.6569 14 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
