<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AirportTowerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: a small craft banks past the tower, then the building settles
// generated from @hugeicons/core-free-icons
const planeVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px) rotate(0deg)',
  },
  animate: {
    transform: ['translate(0px, 0px) rotate(0deg)', 'translate(1.73px, -1.51px) rotate(-7.57deg)', 'translate(3.46px, -0.54px) rotate(-2.16deg)', 'translate(0.43px, 0.38px) rotate(1.3deg)', 'translate(0px, 0px) rotate(0deg)'],
    transition: {
      duration: 0.96,
      times: [0, 0.28, 0.55, 0.8, 1],
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M20.1228 6H3.87715C3.39271 6 3 6.39271 3 6.87715C3 6.95865 3.01136 7.03976 3.03375 7.11812L4.17111 11.0989C4.57006 12.4952 4.76954 13.1934 5.30421 13.5967C5.83888 14 6.56499 14 8.01721 14H15.9828C17.435 14 18.1611 14 18.6958 13.5967C19.2305 13.1934 19.4299 12.4952 19.8289 11.0989L20.9663 7.11812C20.9886 7.03976 21 6.95865 21 6.87715C21 6.39271 20.6073 6 20.1228 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M16 6L15 14M9 14L8 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M15 14V22M9 14V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <path d="M10 2H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 2V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4px' }" />
          </svg>
        </div>
</template>
