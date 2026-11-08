<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Mouse22Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the wheel scrolls up and the cable lifts
// authored from scripts/authored
const wheelVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.7, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
  },
};

const cableVariants: Variants = {
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
      delay: 0.06,
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
            <path d="M12 22C18 22 19.5 17.49 19.5 12C19.5 6.50998 18 2 12 2C5.99993 2 4.5 6.50996 4.5 12C4.5 17.49 5.99993 22 12 22Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M10.5 7.5C10.5 7.03406 10.5 6.80109 10.5761 6.61732C10.6776 6.37229 10.8723 6.17761 11.1173 6.07612C11.3011 6 11.5341 6 12 6C12.4659 6 12.6989 6 12.8827 6.07612C13.1277 6.17761 13.3224 6.37229 13.4239 6.61732C13.5 6.80109 13.5 7.03406 13.5 7.5V9.5C13.5 9.96594 13.5 10.1989 13.4239 10.3827C13.3224 10.6277 13.1277 10.8224 12.8827 10.9239C12.6989 11 12.4659 11 12 11C11.5341 11 11.3011 11 11.1173 10.9239C10.8723 10.8224 10.6776 10.6277 10.5761 10.3827C10.5 10.1989 10.5 9.96594 10.5 9.5V7.5Z" stroke="currentColor" stroke-width="1.5" :variants="wheelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.5px' }" />
            <motion.path d="M12 6V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cableVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4px' }" />
          </svg>
        </div>
</template>
