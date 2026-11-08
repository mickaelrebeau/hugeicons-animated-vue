<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SushiIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the rice grains on top blink and the roll nods
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.3, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const grainVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 1, 1, 1],
    transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const grain2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 1, 1, 1],
    transition: { duration: 0.8, delay: 0.12, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <motion.path d="M20 13C20 16.0024 20 17.5036 19.1213 18.4363C17.0344 20.6515 6.71606 20.3867 4.87868 18.4363C4 17.5036 4 16.0024 4 13" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.8px' }" />
            <path d="M12.04 4C4.4529 4 2.47653 8.7964 2.03855 12.6325C1.851 14.2752 2.33921 14.2488 3.69248 13.5405C5.76039 12.458 8.50919 11.766 12.04 11.766C15.5657 11.766 18.2639 12.456 20.3076 13.5357C21.6586 14.2494 22.1436 14.2742 21.9641 12.6322C21.5448 8.7961 19.6269 4 12.04 4Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M6.99609 12C6.99609 9.47222 7.8828 4.56415 12.9961 4" stroke="currentColor" stroke-width="1.5" :variants="grainVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15 12C15 10.0614 15.5118 6.73584 18 5" stroke="currentColor" stroke-width="1.5" :variants="grain2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
