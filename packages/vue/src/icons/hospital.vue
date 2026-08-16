<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HospitalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the building holds while the cross on the facade pulses like an on-call sign
// generated from @hugeicons/core-free-icons
const beaconVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    opacity: 1,
  },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.9)', 'scale(1.2)', 'scale(1)'],
    opacity: [1, 0.45, 1, 0.5, 1],
    transition: {
      duration: 0.61,
      ease: 'easeInOut',
    },
  },
}

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
            <path d="M14 2V4M14 4V6M14 4H10M10 2V4M10 4V6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M3 22V11.3808C3 7.8766 3 6.12452 4.15327 5.03591C4.88623 4.34404 5.90312 4.09189 7.5 4M21 22V11.3808C21 7.8766 21 6.12452 19.8467 5.03591C19.1138 4.34404 18.0969 4.09189 16.5 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M14 10H16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M14 14H16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M7 14H9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M7 10H9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M2 22H9.5M22 22H14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="beaconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <path d="M9.5 22V19.5C9.5 18.5654 9.5 18.0981 9.70096 17.75C9.83261 17.522 10.022 17.3326 10.25 17.201C10.5981 17 11.0654 17 12 17C12.9346 17 13.4019 17 13.75 17.201C13.978 17.3326 14.1674 17.522 14.299 17.75C14.5 18.0981 14.5 18.5654 14.5 19.5V22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
