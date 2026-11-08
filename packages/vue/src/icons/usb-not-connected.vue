<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UsbNotConnectedIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cross spins a quarter turn
// authored from scripts/authored
const xVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-45deg) scale(0.7)',
      'rotate(-94deg) scale(1.08)',
      'rotate(-90deg) scale(1)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.34, 0.7, 1],
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
            <path d="M14 6V5.5C14 4.09554 14 3.39331 13.6629 2.88886C13.517 2.67048 13.3295 2.48298 13.1111 2.33706C12.6067 2 11.9045 2 10.5 2C9.09554 2 8.39331 2 7.88886 2.33706C7.67048 2.48298 7.48298 2.67048 7.33706 2.88886C7 3.39331 7 4.09554 7 5.5V6" stroke="currentColor" stroke-width="1.5" />
            <path d="M11 16.5H9.51625C8.49228 16.5 7.53617 15.9979 6.96881 15.1622L6.36803 14.2773C5.39885 12.8498 4.82041 11.2019 4.68827 9.49197L4.50446 7.11331C4.43719 6.24273 5.13957 5.5 6.03014 5.5H14.9699C15.8604 5.5 16.5628 6.24273 16.4955 7.11331L16.3884 8.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M10.5 17V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M9.5 8.5H11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M19.5 11L13.5 17M19.5 17L13.5 11" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="xVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 14px' }" />
          </svg>
        </div>
</template>
