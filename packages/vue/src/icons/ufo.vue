<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UfoIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the beam flashes and the speck is pulled up into the saucer
// authored from scripts/authored
const beamVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.25, 1, 0.25, 1, 1],
    transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const speckVariants: Variants = {
  normal: { transform: 'translateY(0px)', opacity: 1 },
  animate: {
    transform: ['translateY(0px)', 'translateY(-5px)', 'translateY(0px)', 'translateY(0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.8,
      times: [0, 0.5, 0.52, 1],
      ease: [
        'easeIn',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
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
            <path d="M7 8C4.01099 8.5559 2 9.59492 2 10.7849C2 12.5606 6.47715 14 12 14C17.5228 14 22 12.5606 22 10.7849C22 9.59492 19.989 8.5559 17 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M7.32229 8.84003C6.87335 8.21459 6.96834 7.81402 7.15831 7.01288C7.68534 4.79037 9.6202 3 12 3C14.3798 3 16.3147 4.79037 16.8417 7.01288C17.0317 7.81402 17.1267 8.21459 16.6777 8.84003C15.4532 10.546 8.31188 10.2187 7.32229 8.84003Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M7 14L5 21M17 14L19 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="beamVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12.125 19H12M12.25 19C12.25 19.1381 12.1381 19.25 12 19.25C11.8619 19.25 11.75 19.1381 11.75 19C11.75 18.8619 11.8619 18.75 12 18.75C12.1381 18.75 12.25 18.8619 12.25 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="speckVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
          </svg>
        </div>
</template>
