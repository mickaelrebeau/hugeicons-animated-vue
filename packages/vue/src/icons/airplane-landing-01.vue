<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AirplaneLanding01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after airplane-take-off-01: the plane flares, drops onto the runway, and settles on its wheels
// generated from @hugeicons/core-free-icons
const trayVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(1.2px)', 'translateY(0px)'],
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      delay: 0.32,
    },
  },
}

const planeVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px) rotate(0deg)',
    visibility: 'visible',
  },
  animate: {
    transform: ['translate(-19.91px, -13.93px) rotate(9.95deg)', 'translate(-19.91px, -13.93px) rotate(9.95deg)', 'translate(-9.95px, -6.97px) rotate(5.97deg)', 'translate(-2.99px, -1.49px) rotate(1.99deg)', 'translate(0.6px, 1.09px) rotate(-0.4deg)', 'translate(0px, 0px) rotate(0deg)'],
    visibility: 'visible',
    transition: {
      duration: 1.13,
      times: [0, 0.12, 0.38, 0.62, 0.82, 1],
      ease: [
        'linear',
        'easeIn',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
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
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="hidden">
            <motion.path d="M6.00146 19.9982H22.0015" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="trayVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 20px' }" />
            <motion.path d="M3.69749 4.0419C3.07958 4.21042 3.00748 4.9179 2.82748 5.5179C2.67702 6.08216 2.3591 7.33035 2.14285 8.1831C1.98148 8.9379 1.95988 9.2379 2.05588 9.7179C2.28148 10.6179 3.06148 10.9719 4.74148 11.4399C5.58616 11.6559 6.18148 11.8371 7.08148 12.0771C7.23596 12.1265 7.71601 12.2476 8.10148 12.3519C8.46148 12.4779 8.76148 12.4419 8.69428 12.7179C8.64746 12.8276 8.10388 13.4379 7.59988 13.9779C7.26148 14.3979 7.03348 14.4998 7.03348 14.8179C7.03348 14.8179 7.02148 15.2979 7.69425 15.3579C7.80148 15.4179 9.24148 15.7779 9.78148 15.9339C10.5015 16.1139 11.0415 15.8979 11.4855 15.5979L13.6815 14.1579C14.1615 13.9419 14.2815 14.0331 14.8215 14.1771L19.6215 15.4779C20.4615 15.7779 21.1815 15.0579 20.9703 14.2179C20.7015 12.7179 20.2215 11.8179 19.4415 10.8579C18.1815 9.3579 16.6453 8.7727 15.5415 8.5779C15.0378 8.48901 13.144 8.33923 11.3415 8.2059C9.49393 8.06924 7.74222 7.94901 7.68148 7.8579C6.36148 7.5579 6.76948 5.6199 6.20548 4.7739C5.98148 4.4379 5.58148 4.3779 4.98148 4.1979C4.47299 4.06773 4.09616 3.93317 3.69749 4.0419Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.57px 10.02px' }" />
          </svg>
        </div>
</template>
