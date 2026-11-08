<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChartRadarIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// a radar beam sweeps round while the data shape swells and the spokes pulse
// authored from scripts/authored
const shapeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.7)', 'scale(1.14)', 'scale(1)'],
    transition: {
      duration: 0.7,
      times: [0, 0.3, 0.64, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const beamVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)', opacity: 0 },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(4.50px, 4.50px) rotate(90deg)',
      'translate(-1.54px, 8.73px) rotate(200deg)',
      'translate(-3.90px, 2.25px) rotate(300deg)',
      'translate(-0.00px, 0.00px) rotate(360deg)',
    ],
    opacity: [0, 1, 1, 1, 0],
    transition: { duration: 0.9, times: [0, 0.25, 0.5, 0.75, 1], ease: 'linear' },
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
            <path d="M7.47817 4.45277C9.65285 2.81759 10.7402 2 12 2C13.2598 2 14.3471 2.81759 16.5218 4.45277L18.5122 5.94933C20.5086 7.45049 21.5068 8.20106 21.8632 9.29857C22.2196 10.3961 21.8488 11.5774 21.107 13.94L20.1987 16.833C19.4169 19.3234 19.0259 20.5685 18.0401 21.2843C17.0543 22 15.7302 22 13.082 22H10.918C8.2698 22 6.94571 22 5.95989 21.2843C4.97406 20.5685 4.58314 19.3234 3.80129 16.833L2.89299 13.94C2.15124 11.5774 1.78037 10.3961 2.13677 9.29857C2.49317 8.20106 3.49139 7.45049 5.48783 5.94933L7.47817 4.45277Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M10.1165 9.82727C11.0309 9.26108 11.4882 8.97799 11.9906 9.00134C12.4929 9.02468 12.9214 9.34894 13.7783 9.99745L14.4662 10.518C15.3519 11.1883 15.7948 11.5235 15.946 12.0138C16.0972 12.5041 15.9189 13.0272 15.5625 14.0734L15.3544 14.6843C15.0321 15.6303 14.8709 16.1034 14.5002 16.3959C14.1295 16.6885 13.6281 16.7385 12.6253 16.8384L12.0522 16.8955C10.7626 17.024 10.1178 17.0882 9.63256 16.7595C9.14736 16.4308 8.9739 15.8122 8.62699 14.5751L8.35683 13.6117C8.04673 12.5058 7.89168 11.9529 8.08546 11.4588C8.27924 10.9648 8.77048 10.6607 9.75295 10.0524L10.1165 9.82727Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shapeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
            <path d="M2.5 9.5L8 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M14.5 16.5L18 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M16 12L21.5 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M6.5 21L9 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M12 9V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 12V3" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="beamVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7.5px' }" />
          </svg>
        </div>
</template>
