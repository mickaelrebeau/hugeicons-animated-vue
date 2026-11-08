<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MapsCircle01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pin drops onto the round map
// authored from scripts/authored
const pinVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -2px)',
      'translate(0px, 0.4px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.32, 0.56, 0.8, 1],
      ease: ['easeOut', 'easeIn', 'easeOut', 'easeInOut'],
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
            <motion.path d="M14.1287 13.7468C13.9601 13.9092 13.7347 14 13.5001 14C13.2655 14 13.0401 13.9092 12.8715 13.7468C11.3272 12.2504 9.25759 10.5788 10.2669 8.15187C10.8126 6.83966 12.1225 6 13.5001 6C14.8777 6 16.1876 6.83966 16.7333 8.15187C17.7413 10.5757 15.6768 12.2555 14.1287 13.7468Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 10px' }" />
            <motion.path d="M13.625 9.5H13.5M13.75 9.5C13.75 9.63807 13.6381 9.75 13.5 9.75C13.3619 9.75 13.25 9.63807 13.25 9.5C13.25 9.36193 13.3619 9.25 13.5 9.25C13.6381 9.25 13.75 9.36193 13.75 9.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 9.5px' }" />
            <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M9 15L5 19M15 21L3 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
