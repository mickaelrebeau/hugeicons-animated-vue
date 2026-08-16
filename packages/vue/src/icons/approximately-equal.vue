<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ApproximatelyEqualIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the top wave slides right while the bottom wave slides left
// authored from scripts/authored
const topVariants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: {
    transform: ['translateX(0px)', 'translateX(1.8px)', 'translateX(-0.3px)', 'translateX(0px)'],
    transition: { duration: 0.56, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const bottomVariants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: {
    transform: ['translateX(0px)', 'translateX(-1.8px)', 'translateX(0.3px)', 'translateX(0px)'],
    transition: { duration: 0.56, delay: 0.06, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M4 7.927C6.66667 4.9281 9.33333 5.80578 12 8C14.6667 10.1942 17.3333 11.0719 20 8.073" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="topVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
            <motion.path d="M4 15.927C6.66667 12.9281 9.33333 13.8058 12 16C14.6667 18.1942 17.3333 19.0719 20 16.073" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bottomVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
          </svg>
        </div>
</template>
