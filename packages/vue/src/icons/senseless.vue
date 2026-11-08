<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SenselessIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the spiral eyes spin and the wavy mouth wobbles
// authored from scripts/authored
const eyeVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(72deg)',
      'rotate(251.99999999999997deg)',
      'rotate(370.8deg)',
      'rotate(360deg)',
    ],
    transition: {
      duration: 0.86,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const eye2Variants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(-72deg)',
      'rotate(-251.99999999999997deg)',
      'rotate(-370.8deg)',
      'rotate(-360deg)',
    ],
    transition: {
      duration: 0.86,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const mouthVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(6deg)',
      'translate(0.00px, 0.00px) rotate(-4.199999999999999deg)',
      'translate(0.00px, 0.00px) rotate(1.7999999999999998deg)',
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
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M8.00265 9.01879C8.00265 9.01879 8.25256 8.39617 7.62377 8.09123C6.5035 7.54795 5.03652 9.56203 6.86627 10.6732C8.75834 11.8222 10 9.69656 10 8.09123" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="eyeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 9.7px' }" />
            <motion.path d="M15.9974 9.98121C15.9974 9.98121 15.7474 10.6038 16.3762 10.9088C17.4965 11.452 18.9635 9.43797 17.1337 8.32683C15.2417 7.17784 14 9.30344 14 10.9088" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="eye2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 9.3px' }" />
            <motion.path d="M16 16.6L15.7307 16.4C15.0125 15.8667 14.1672 15.8667 13.4491 16.4L13.1798 16.6C12.4616 17.1333 11.6163 17.1333 10.8982 16.6L10.6288 16.4C9.91069 15.8667 9.06539 15.8667 8.34723 16.4L8 16.6579" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="mouthVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.5px' }" />
          </svg>
        </div>
</template>
