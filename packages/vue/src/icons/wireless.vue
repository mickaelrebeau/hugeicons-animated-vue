<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WirelessIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the router light blinks and the signal arc pulses
// authored from scripts/authored
const ledVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const waveVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.1, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M14.5 11H9.5C7.6341 11 6.70115 11 5.98141 11.3466C5.26703 11.6906 4.69063 12.267 4.34661 12.9814C4 13.7011 4 14.6341 4 16.5C4 18.3659 4 19.2989 4.34661 20.0186C4.69063 20.733 5.26703 21.3094 5.98141 21.6534C6.70115 22 7.6341 22 9.5 22H14.5C16.3659 22 17.2989 22 18.0186 21.6534C18.733 21.3094 19.3094 20.733 19.6534 20.0186C20 19.2989 20 18.3659 20 16.5C20 14.6341 20 13.7011 19.6534 12.9814C19.3094 12.267 18.733 11.6906 18.0186 11.3466C17.2989 11 16.3659 11 14.5 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M13 15H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ledVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9.5 6.99002C10.2106 6.42455 11.0929 6.11744 12.0018 6.11926C12.9106 6.12107 13.7917 6.4317 14.5 7M7 3.7515C8.4189 2.61774 10.1824 2 12 2C13.8176 2 15.5811 2.61774 17 3.7515" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="waveVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.5px' }" />
          </svg>
        </div>
</template>
