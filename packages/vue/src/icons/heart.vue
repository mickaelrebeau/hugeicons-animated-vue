<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HeartIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the heart beats twice
// authored from scripts/authored
const heartVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.14)', 'scale(0.98)', 'scale(1.0839999999999999)', 'scale(1)'],
    transition: { duration: 0.72, times: [0, 0.18, 0.36, 0.54, 1], ease: 'easeInOut' },
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
            <motion.path d="M10.4107 19.9679C7.58942 17.8581 2 13.035 2 8.69463C2 5.82581 4.10526 3.50018 7 3.50018C8.5 3.50018 10 4.00018 12 6.00018C14 4.00018 15.5 3.50018 17 3.50018C19.8947 3.50018 22 5.82581 22 8.69463C22 13.035 16.4106 17.8581 13.5893 19.9679C12.6399 20.6778 11.3601 20.6778 10.4107 19.9679Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="heartVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.1px' }" />
          </svg>
        </div>
</template>
