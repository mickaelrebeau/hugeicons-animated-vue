<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UpworkIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the logo squashes and bounces back
// authored from scripts/authored
const logoVariants: Variants = {
  normal: { transform: 'scale(1, 1)' },
  animate: {
    transform: ['scale(1, 1)', 'scale(1.08, 0.9)', 'scale(0.95, 1.07)', 'scale(1.01, 0.99)', 'scale(1, 1)'],
    transition: { duration: 0.62, times: [0, 0.22, 0.5, 0.76, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M2 4.5V10.75C2 12.7925 3.7075 14.5 5.75 14.5C7.7925 14.5 9.5 12.7925 9.5 10.75V4.5C10.75 7.625 13.0965 14.5 17.625 14.5C20.0079 14.5 22 12.5079 22 10.125C22 7.74208 20.0079 5.75 17.625 5.75C15.0913 5.75 13.5912 7.625 13.25 9.5C12.9475 11.1625 11.375 19.5 11.375 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="logoVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
