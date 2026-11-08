<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TableRoundIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the round top spins on its pedestal
// authored from scripts/authored
const topVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(-1)', 'scaleX(1)'],
    transition: { duration: 0.9, times: [0, 0.5, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.4, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.ellipse cx="12" cy="6.5" rx="10" ry="3" stroke="currentColor" stroke-width="1.5" :variants="topVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6.5px' }" />
            <motion.path d="M12 20.5C12.8284 20.5 13.5898 20.2551 14.1904 19.8455C14.4774 19.6498 14.5909 19.242 14.4189 18.9153C14.0734 18.2595 13.3308 17.5 12 17.5C10.6692 17.5 9.92656 18.2595 9.58115 18.9153C9.40905 19.242 9.52257 19.6498 9.8096 19.8455C10.4102 20.2551 11.1716 20.5 12 20.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <path d="M12 17.5V9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
