<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ScanEyeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the eye blinks inside the scan brackets and the pupil looks around
// authored from scripts/authored
const eyeVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.1)', 'scaleY(1)', 'scaleY(1)'],
    transition: { duration: 0.8, times: [0, 0.24, 0.48, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const pupilVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.9px, -0.7px)',
      'translate(0.7px, -0.9px)',
      'translate(0.4px, 0.5px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.8, times: [0, 0.18, 0.46, 0.74, 1], ease: [0.77, 0, 0.175, 1] },
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
            <motion.path d="M12 16.9995C16.2266 16.9995 18.3342 13.5086 18.913 12.3606C19.0289 12.1308 19.0289 11.8682 18.913 11.6384C18.3342 10.4904 16.2266 6.99951 12 6.99951C7.77333 6.99951 5.6657 10.4904 5.08686 11.6384C4.97099 11.8682 4.97099 12.1308 5.08686 12.3606C5.6657 13.5086 7.77333 16.9995 12 16.9995Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="eyeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.circle cx="12" cy="11.9995" r="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pupilVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M21.5 7.50034C21.4085 5.6542 21.1348 4.50316 20.316 3.68435C19.4972 2.86555 18.3462 2.59184 16.5 2.50034M2.50002 7.49951C2.59151 5.65337 2.86522 4.50233 3.68403 3.68352C4.50284 2.86472 5.65387 2.59101 7.50002 2.49951M21.5 16.4998C21.4085 18.3459 21.1348 19.497 20.316 20.3158C19.4972 21.1346 18.3462 21.4083 16.5 21.4998M2.50002 16.5006C2.59151 18.3468 2.86522 19.4978 3.68403 20.3166C4.50284 21.1354 5.65387 21.4091 7.50002 21.5006" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
