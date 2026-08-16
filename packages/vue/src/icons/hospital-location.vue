<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HospitalLocationIcon' })

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
      duration: 0.59,
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
            <path d="M12.5 2C7.80558 2 4 5.61783 4 10.0807C4 12.6325 5.0625 14.6167 7.1875 16.389C8.68532 17.6382 10.4999 19.7131 11.5893 21.3951C12.1118 22.2016 12.8507 22.2016 13.4107 21.3951C14.5553 19.7466 16.3147 17.6382 17.8125 16.389C19.9375 14.6167 21 12.6325 21 10.0807C21 5.61783 17.1944 2 12.5 2Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M10.5 7V10M10.5 13V10M14.5 7V10M14.5 13V10M14.5 10H10.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="beaconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 10px' }" />
          </svg>
        </div>
</template>
