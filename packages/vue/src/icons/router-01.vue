<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Router01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the wifi arcs pulse above the router and the lights blink
// authored from scripts/authored
const signalVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const ledVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.1, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.1, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const led2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.1, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.2, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <path d="M18 20.5H6C4.11438 20.5 3.17157 20.5 2.58579 19.9142C2 19.3284 2 18.3856 2 16.5C2 14.6144 2 13.6716 2.58579 13.0858C3.17157 12.5 4.11438 12.5 6 12.5H18C19.8856 12.5 20.8284 12.5 21.4142 13.0858C22 13.6716 22 14.6144 22 16.5C22 18.3856 22 19.3284 21.4142 19.9142C20.8284 20.5 19.8856 20.5 18 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M12 12.5V10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M6 16.5H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M9.5 7.3647C10.2106 6.7981 11.0929 6.49038 12.0018 6.4922C12.9106 6.49401 13.7917 6.80527 14.5 7.3747M7 4.255C8.4189 3.11897 10.1824 2.5 12 2.5C13.8176 2.5 15.5811 3.11897 17 4.255" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="signalVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.9px' }" />
            <motion.path d="M18.125 16.5H18M18.25 16.5C18.25 16.6381 18.1381 16.75 18 16.75C17.8619 16.75 17.75 16.6381 17.75 16.5C17.75 16.3619 17.8619 16.25 18 16.25C18.1381 16.25 18.25 16.3619 18.25 16.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ledVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14.125 16.5H14M14.25 16.5C14.25 16.6381 14.1381 16.75 14 16.75C13.8619 16.75 13.75 16.6381 13.75 16.5C13.75 16.3619 13.8619 16.25 14 16.25C14.1381 16.25 14.25 16.3619 14.25 16.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="led2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
