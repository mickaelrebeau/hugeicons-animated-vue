<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PotIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the lid rattles as the pot boils, steam escaping
// authored from scripts/authored
const lidVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0px)',
      'translate(0px, -0.7px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.7, times: [0, 0.18, 0.36, 0.54, 0.72, 1], ease: 'easeInOut' },
  },
};

const puffVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(0.4)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, 0px) scale(0.4)',
      'translate(-0.3px, -0.9px) scale(1)',
      'translate(-0.6px, -1.8px) scale(1.5)',
    ],
    opacity: [0, 0, 0.9, 0],
    transition: {
      duration: 0.8,
      delay: 0.1,
      times: [0, 0.16, 0.42, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const puff2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(0.4)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, 0px) scale(0.4)',
      'translate(0.3px, -0.9px) scale(1)',
      'translate(0.6px, -1.8px) scale(1.5)',
    ],
    opacity: [0, 0, 0.9, 0],
    transition: {
      duration: 0.8,
      delay: 0.22,
      times: [0, 0.16, 0.42, 1],
      ease: [
        'linear',
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
            <path d="M2 9H22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M4 9L4.50393 14.5432C4.73952 17.1348 4.85732 18.4305 5.71663 19.2153C6.57594 20 7.87705 20 10.4793 20H13.5207C16.1229 20 17.4241 20 18.2834 19.2153C19.1427 18.4305 19.2605 17.1348 19.4961 14.5432L20 9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M4 6H20M9 6L9.62283 3.94291C9.85063 3.37343 10.4022 3 11.0155 3H12.9845C13.5978 3 14.1494 3.37343 14.3772 3.94291L15 6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="lidVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.5px' }" />
            <motion.circle cx="8" cy="2.5" r="0.6" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="puffVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.circle cx="16" cy="2.5" r="0.6" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="puff2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
