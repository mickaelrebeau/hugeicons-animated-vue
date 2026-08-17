<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BitcoinSendIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the outgoing arrow commits off the still B
// authored from scripts/authored
const outVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(2.4px, 0px)',
      'translate(-0.288px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.52,
      times: [0, 0.44, 0.72, 1],
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
            <path d="M2 4.8H9C10.6569 4.8 12 6.41177 12 8.4C12 10.3882 10.6569 12 9 12M9 12C10.6569 12 12 13.6118 12 15.6C12 17.5882 10.6569 19.2 9 19.2H2M9 12H3M2.83333 4.8V19.2M4.5 3V4.8M8.66667 3V4.8M4.5 19.2V21M8.66667 19.2V21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M22 12H14.5M22 12C22 12.7002 20.0057 14.0085 19.5 14.5M22 12C22 11.2998 20.0057 9.99153 19.5 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="outVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.3px 12px' }" />
          </svg>
        </div>
</template>
