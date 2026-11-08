<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'IceCream03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the scoop plops onto the cone
// authored from scripts/authored
const scoopVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.6px)',
      'translate(0px, 0.24px)',
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

const coneVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.26, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M12 2C9.00353 2 6.31715 4.74891 7.15597 7.78336C7.38917 8.627 6 8.96316 6 9.873C6 12.5824 10.5 9.83716 10.5 12.7868C10.5 14.4044 13 14.4044 13 12.7868C13 9.62712 18 12.8244 18 9.873C18 8.96316 16.6108 8.627 16.844 7.78336C17.6828 4.74891 14.9965 2 12 2Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="scoopVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.2px' }" />
            <motion.path d="M7.5 11L8.32693 13.9652C9.82073 19.3217 10.5676 22 12 22C13.4324 22 14.1793 19.3217 15.6731 13.9652L16.5 11" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="coneVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.5px' }" />
          </svg>
        </div>
</template>
