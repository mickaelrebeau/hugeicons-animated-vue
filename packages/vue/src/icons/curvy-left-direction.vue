<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CurvyLeftDirectionIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after arrow-left-02: the mark commits left along its own axis
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleY(1)', 'translateX(-2.76px) scaleY(0.94)', 'translateX(0.32px) scaleY(1.02)', 'translateX(-0.48px) scaleY(0.99)', 'translateX(0px) scaleY(1)'],
    transition: {
      duration: 0.51,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

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
            <motion.path d="M3.99709 15.0001C3.99709 15.0001 1.99805 13.5271 1.99805 13.0001C1.99805 12.473 3.99711 11.0001 3.99711 11.0001M2.2229 12.8675C3.63456 13.1574 6.28054 13.27 7.59106 10.8163C8.13439 9.95268 8.03253 8.50668 8.03253 6.86106C8.06633 6.19025 8.63778 4.96995 10.0699 5.00057C11.5021 5.03118 11.9723 6.20733 12.0284 6.79158V16.9022C12.0138 17.7539 12.5076 18.9993 14.0239 18.9993C15.5044 18.9993 16.0839 17.6872 15.9562 16.7036C15.6104 14.0396 16.4187 11.2472 19.9189 11.003H22.0029" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
