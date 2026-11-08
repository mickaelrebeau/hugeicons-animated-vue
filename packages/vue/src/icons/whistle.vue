<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WhistleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the whistle blows: it rattles, the ball spins and the sound lines flash
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-4deg) scale(0.97)',
      'rotate(3.2deg) scale(1.03)',
      'rotate(-1.2deg) scale(0.995)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.56, times: [0, 0.2, 0.46, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const soundVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.6, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const ballVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(72deg)',
      'rotate(251.99999999999997deg)',
      'rotate(370.8deg)',
      'rotate(360deg)',
    ],
    transition: {
      duration: 0.86,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
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
            <motion.path d="M3.10372 11.5252C4.5522 9.4378 7.06815 8.86485 8.53763 9.00054H11.0609C11.5887 9.09126 11.734 9.30978 12.3879 10.3428C12.5068 10.6673 14.4421 10.4487 14.9506 10.5017C15.5091 9.96055 14.9506 8.85082 16.1911 9.00826C18.3195 9.00826 20.359 8.91699 21.2926 9.0542C21.678 9.11085 21.8634 9.45879 21.9189 9.84439C22.1422 11.3942 21.8764 12.5285 21.6192 12.7882C20.9324 14.004 18.9502 15.1828 17.9677 14.9959C15.133 14.9959 14.52 14.9221 14.2742 15.3924L13.4101 17.6267C12.833 18.8562 10.8098 21.283 7.41618 20.9705C4.02257 20.6581 2.54699 17.9449 2.24399 16.6574C1.94099 15.8329 1.65427 13.6141 3.10372 11.5252Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.9px 15.1px' }" />
            <motion.path d="M13.4893 5.00318V3.00195M10.9942 6.00379L9.99609 5.00318M15.9845 6.00379L16.9826 5.00318" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="soundVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8.08398 17C9.18855 17 10.084 16.1046 10.084 15C10.084 13.8954 9.18855 13 8.08398 13C6.97941 13 6.08398 13.8954 6.08398 15C6.08398 16.1046 6.97941 17 8.08398 17Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="ballVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.1px 15px' }" />
          </svg>
        </div>
</template>
