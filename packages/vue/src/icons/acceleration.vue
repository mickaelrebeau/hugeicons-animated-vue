<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AccelerationIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the mass picks up speed down the ramp on an ease-in, and the speed arrow snaps forward behind it
// authored from scripts/authored
const massVariants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: {
    transform: ['translateX(0px)', 'translateX(0.5px)', 'translateX(3.6px)', 'translateX(0px)'],
    transition: {
      duration: 0.78,
      times: [0, 0.34, 0.62, 1],
      ease: [
        'easeIn',
        'easeIn',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const speedMarkVariants: Variants = {
  normal: { transform: 'translateX(0px) scaleX(1)' },
  animate: {
    transform: ['translateX(0px) scaleX(1)', 'translateX(0.4px) scaleX(1.12)', 'translateX(0px) scaleX(1)'],
    transition: { duration: 0.6, delay: 0.1, times: [0, 0.46, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M2.49805 18.4138V11.1909C2.49805 9.86228 2.49805 9.19798 3.09674 9.03265C3.69542 8.86733 4.40002 9.33706 5.80922 10.2765L18.5832 18.7926C19.9924 19.732 20.697 20.2018 20.449 20.6009C20.201 21 19.2046 21 17.2117 21H6.37733C4.54862 21 3.63426 21 3.06616 20.6213C2.49805 20.2425 2.49805 19.633 2.49805 18.4138Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M8.49805 11C10.7072 11 12.498 9.20914 12.498 7C12.498 4.79086 10.7072 3 8.49805 3C6.28891 3 4.49805 4.79086 4.49805 7C4.49805 9.20914 6.28891 11 8.49805 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="massVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 7px' }" />
            <motion.path d="M15.502 9.996L21.4055 13.38M21.4055 13.38C21.7255 13.0406 21.1848 12.06 20.7283 10.728M21.4055 13.38C21.1848 13.62 20.4639 13.68 18.7639 13.998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="speedMarkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '21.7px 12px' }" />
          </svg>
        </div>
</template>
