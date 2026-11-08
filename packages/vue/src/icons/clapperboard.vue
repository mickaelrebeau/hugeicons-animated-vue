<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ClapperboardIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the clapper arm snaps shut on the board and springs back open
// authored from scripts/authored
const armVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.94px, 2.59px) rotate(13deg)',
      'translate(-0.20px, -0.38px) rotate(-2deg)',
      'translate(0.06px, 0.11px) rotate(0.6deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.5,
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

const arm2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.63px, 1.30px) rotate(13deg)',
      'translate(-0.12px, -0.19px) rotate(-2deg)',
      'translate(0.04px, 0.06px) rotate(0.6deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.5,
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

const arm3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.71px, 1.95px) rotate(13deg)',
      'translate(-0.15px, -0.28px) rotate(-2deg)',
      'translate(0.04px, 0.09px) rotate(0.6deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.5,
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

const boardVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.14, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M14.1914 2.87109L13.6914 7.37109" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="armVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.9px 5.1px' }" />
            <motion.path d="M8.69141 4.87109L8.19141 9.37109" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arm2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.4px 7.1px' }" />
            <motion.path d="M19.8538 4.75511C19.8996 4.90807 19.9225 4.98456 19.933 5.05129C20.003 5.4967 19.7663 5.93391 19.3551 6.11874C19.2934 6.14644 19.2169 6.16907 19.0638 6.21435L4.24949 10.5948C4.10345 10.638 4.03043 10.6596 3.96632 10.6698C3.52814 10.7395 3.09639 10.5122 2.90594 10.1114C2.87807 10.0528 2.85456 9.98038 2.80752 9.83553C2.65883 9.37768 2.58449 9.14875 2.54841 8.94988C2.30118 7.58702 3.0191 6.23208 4.2856 5.67128C4.47041 5.58945 4.70157 5.52239 5.16391 5.38829L15.5083 2.38788C15.9635 2.25586 16.1911 2.18985 16.3899 2.16011C17.7168 1.96169 19.0142 2.66842 19.5671 3.89086C19.6499 4.0741 19.7179 4.3011 19.8538 4.75511Z" stroke="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arm3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.2px 6.4px' }" />
            <motion.path d="M19.5 10.8711H3.5V15.8711C3.5 18.6995 3.5 20.1137 4.37868 20.9924C5.25736 21.8711 6.67157 21.8711 9.5 21.8711H15.5C18.3284 21.8711 19.7426 21.8711 20.6213 20.9924C21.5 20.1137 21.5 18.6995 21.5 15.8711V12.8711C21.5 11.9283 21.5 11.4569 21.2071 11.164C20.9142 10.8711 20.4428 10.8711 19.5 10.8711Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="boardVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 16.4px' }" />
            <path d="M15.5 17.8711H17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
