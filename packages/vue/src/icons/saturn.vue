<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SaturnIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the ringed planet rocks on its axis
// authored from scripts/authored
const tiltVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(10deg)', 'rotate(-6deg)', 'rotate(2.5deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.86,
      times: [0, 0.22, 0.5, 0.76, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.77, 0, 0.175, 1],
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
            <motion.g :variants="tiltVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px', transformBox: 'view-box' }">
              <path d="M5.37555 14.8255C3.38071 17.6258 2.49436 19.9127 3.29084 20.7092C4.08733 21.5056 6.37425 20.6193 9.17452 18.6244C10.7641 17.4921 12.5191 16.0025 14.2608 14.2608C16.0025 12.5191 17.4921 10.7641 18.6244 9.17452C20.6193 6.37425 21.5056 4.08733 20.7092 3.29084C19.9127 2.49436 17.6258 3.38071 14.8255 5.37555M18.6244 9.17452C18.9949 10.042 19.2 10.9971 19.2 12C19.2 15.9765 15.9765 19.2 12 19.2C10.9971 19.2 10.042 18.9949 9.17452 18.6244M17.0912 6.90883C15.7882 5.60589 13.9882 4.8 12 4.8C8.02355 4.8 4.8 8.02355 4.8 12C4.8 13.9882 5.60589 15.7882 6.90883 17.0912" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            </motion.g>
          </svg>
        </div>
</template>
