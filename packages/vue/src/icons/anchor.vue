<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AnchorIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the ring holds the chain, the shank drops, and the flukes spread to catch
// authored from scripts/authored
const ringVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.16, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const shankVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.78)', 'scaleY(1.08)', 'scaleY(1)'],
    transition: { duration: 0.58, times: [0, 0.28, 0.64, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const flukesVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.82)', 'scaleX(1.06)', 'scaleX(1)'],
    transition: { duration: 0.6, delay: 0.08, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M14.5 5.5C14.5 6.88071 13.3807 8 12 8C10.6193 8 9.5 6.88071 9.5 5.5C9.5 4.11929 10.6193 3 12 3C13.3807 3 14.5 4.11929 14.5 5.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ringVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5.5px' }" />
            <motion.path d="M12 8V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shankVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
            <motion.path d="M5 13L3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12L19 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flukesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
          </svg>
        </div>
</template>
