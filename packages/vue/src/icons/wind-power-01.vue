<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WindPower01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the blades spin around the hub as the wind arcs flash
// authored from scripts/authored
const rotorVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(7.05px, 4.93px) rotate(70deg)',
      'translate(-7.05px, 10.07px) rotate(250deg)',
      'translate(1.04px, 0.07px) rotate(368deg)',
      'translate(-0.00px, 0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
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

const rotor2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-7.72px, 3.42px) rotate(70deg)',
      'translate(-4.88px, -11.02px) rotate(250deg)',
      'translate(-0.59px, 0.84px) rotate(368deg)',
      'translate(0.00px, -0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
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

const rotor3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.51px, -8.33px) rotate(70deg)',
      'translate(11.89px, 0.73px) rotate(250deg)',
      'translate(-0.47px, -0.90px) rotate(368deg)',
      'translate(0.00px, 0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
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

const rotor4Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(2.82px, 1.97px) rotate(70deg)',
      'translate(-2.82px, 4.03px) rotate(250deg)',
      'translate(0.42px, 0.03px) rotate(368deg)',
      'translate(-0.00px, 0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
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

const rotor5Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-3.05px, 1.36px) rotate(70deg)',
      'translate(-1.95px, -4.36px) rotate(250deg)',
      'translate(-0.23px, 0.33px) rotate(368deg)',
      'translate(0.00px, -0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
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

const rotor6Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.24px, -3.34px) rotate(70deg)',
      'translate(4.76px, 0.34px) rotate(250deg)',
      'translate(-0.18px, -0.36px) rotate(368deg)',
      'translate(0.00px, 0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
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

const waveVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.1, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M12 14L12 22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M18 22H6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <circle cx="12" cy="12.5" r="1.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.ellipse cx="12" cy="5" rx="2" ry="3" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="rotorVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5px' }" />
            <motion.path d="M17.2624 17.9508C15.8454 17.1373 15.1388 15.7164 15.6842 14.7771C16.2297 13.8377 17.8205 13.7357 19.2376 14.5492C20.6546 15.3627 21.3612 16.7836 20.8158 17.7229C20.2703 18.6623 18.6795 18.7643 17.2624 17.9508Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="rotor2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.3px 16.3px' }" />
            <motion.path d="M6.73756 17.9508C8.1546 17.1373 8.86118 15.7164 8.31576 14.7771C7.77035 13.8377 6.17947 13.7357 4.76244 14.5492C3.3454 15.3627 2.63882 16.7836 3.18424 17.7229C3.72965 18.6623 5.32053 18.7643 6.73756 17.9508Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="rotor3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.8px 16.3px' }" />
            <motion.path d="M12 8V11" stroke="currentColor" stroke-width="1.5" :variants="rotor4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.5px' }" />
            <motion.path d="M13 13L16 15" stroke="currentColor" stroke-width="1.5" :variants="rotor5Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 14px' }" />
            <motion.path d="M11 13L8 15" stroke="currentColor" stroke-width="1.5" :variants="rotor6Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 14px' }" />
            <motion.path d="M7.5 3C4.80989 4.5066 3 7.32255 3 10.5478C3 11.0426 3.0426 11.5277 3.12444 12M16.5 3C19.1901 4.5066 21 7.32255 21 10.5478C21 11.0426 20.9574 11.5277 20.8756 12" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="waveVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7.5px' }" />
          </svg>
        </div>
</template>
