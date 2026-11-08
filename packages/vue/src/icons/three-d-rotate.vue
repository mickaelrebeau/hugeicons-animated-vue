<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ThreeDRotateIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the globe rings rotate around the sphere
// authored from scripts/authored
const ringVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(-1)', 'scaleY(1)'],
    transition: { duration: 0.9, times: [0, 0.5, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const ring2Variants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(-1)', 'scaleX(1)'],
    transition: { duration: 0.9, delay: 0.1, times: [0, 0.5, 1], ease: [0.77, 0, 0.175, 1] },
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
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M2 12C7.18491 16.8269 16.4642 16.3877 22 12.3556" stroke="currentColor" stroke-width="1.5" :variants="ringVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.4px' }" />
            <motion.path d="M11.5368 2C6.98939 6.5 6.48408 17 11.9941 22" stroke="currentColor" stroke-width="1.5" :variants="ring2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.2px 12px' }" />
          </svg>
        </div>
</template>
