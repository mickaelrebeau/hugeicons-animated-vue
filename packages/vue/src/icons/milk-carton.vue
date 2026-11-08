<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MilkCartonIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the carton spout opens and the milk sloshes
// authored from scripts/authored
const spoutVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.15px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const milkVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-6deg)', 'rotate(5deg)', 'rotate(-2deg)', 'rotate(0deg)'],
    transition: { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
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
            <path d="M5.17157 6.82843L7 5L8.82843 6.82843C9.40649 7.40649 9.69552 7.69552 9.84776 8.06306C10 8.4306 10 8.83935 10 9.65685V22H8C6.11438 22 5.17157 22 4.58579 21.4142C4 20.8284 4 19.8856 4 18V9.65685C4 8.83935 4 8.4306 4.15224 8.06306C4.30448 7.69552 4.59351 7.40649 5.17157 6.82843Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M7 5.00379V4.60429C7 3.38019 7 2.76814 7.38076 2.38786C7.76152 2.00758 8.37435 2.00758 9.6 2.00758H15.1535C15.8599 2.00758 16.7765 1.89489 17.2487 2.53866C17.7502 3.22243 17.3216 4.1621 17.5388 4.91785C17.6049 5.14763 17.7681 5.32509 17.9184 5.50519L20 8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="spoutVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 4.9px' }" />
            <path d="M10 8H20V18C20 19.8856 20 20.8284 19.4142 21.4142C18.8284 22 17.8856 22 16 22H10" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M10 13C10.4762 13.5 11.7434 13.4761 12.4869 13.2789C13.0054 13.1415 13.564 13.3027 13.9154 13.7639L14.6025 14.6658C14.9978 15.1846 15.5969 15.4309 16.1871 15.3173L17.0567 15.1499C17.5352 15.0578 18.011 15.2904 18.3367 15.7055C19.3522 17 20 17 20 17" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="milkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 15px' }" />
          </svg>
        </div>
</template>
