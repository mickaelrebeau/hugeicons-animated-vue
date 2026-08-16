<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WifiPenIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after wifi-01: the signal expands physically from its source to its outer arc
// generated from @hugeicons/core-free-icons
const arcVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0.75px) scale(0.82)', 'translateY(0px) scale(1.06)', 'translateY(0px) scale(1)'],
    transition: { duration: 1.01, ease: [0.23, 1, 0.32, 1], delay: i * 0.12 },
  }),
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M2 7.81966C4.75011 5.35989 8.31034 4 12 4C15.6897 4 19.2499 5.35989 22 7.81966M5 11.8587C6.86929 10.0264 9.38247 9.00009 12 9.00009C13.432 9.00009 14.8327 9.30725 16.1139 9.88549M8.5 15.4287C9.43464 14.5125 10.6912 13.9994 12 13.9994" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M13 20V18.6611C13 18.0548 13.2408 17.4735 13.6695 17.0448L18.3102 12.4041C18.5689 12.1453 18.9198 12 19.2857 12C19.6516 12 20.0025 12.1453 20.2612 12.4041L20.5959 12.7388C20.8547 12.9975 21 13.3484 21 13.7143C21 14.0802 20.8547 14.4311 20.5959 14.6898L15.9552 19.3305C15.5265 19.7592 14.9452 20 14.3389 20H13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
          </svg>
        </div>
</template>
