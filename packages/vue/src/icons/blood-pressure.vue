<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BloodPressureIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pulse waveform redraws across the still cuff
// authored from scripts/authored
const pulseVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.7,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M9 13H9.80031C10.4304 13 10.7454 13 10.9985 13.1493C11.2517 13.2987 11.3926 13.5677 11.6743 14.1056L13.1905 17L15.2857 11L16.8018 13.8944C17.0836 14.4323 17.2245 14.7013 17.4777 14.8507C17.7308 15 18.0458 15 18.6759 15H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pulseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 14px' }" />
            <path d="M20.5 12C19.732 8.4154 16.7237 5.03871 14.5241 2.97222C13.1443 1.67593 11.04 1.67593 9.66019 2.97222C7.11961 5.35907 3.5 9.49387 3.5 13.678C3.5 17.7804 6.75366 22 12.0921 22C15.4851 22 18.0359 20.2955 19.4444 18" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
