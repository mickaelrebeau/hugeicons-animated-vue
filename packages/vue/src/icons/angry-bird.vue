<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AngryBirdIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the brows slam down, the beak snaps, and both pupils flare
// authored from scripts/authored
const bodyVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.96)', 'scale(1.03)', 'scale(1)'],
    transition: { duration: 0.56, delay: 0.08, times: [0, 0.28, 0.62, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const crestVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-10deg)', 'rotate(3deg)', 'rotate(0deg)'],
    transition: { duration: 0.52, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const beakVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(8deg) scale(0.9)',
      'rotate(-3deg) scale(1.08)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.5, delay: 0.1, times: [0, 0.28, 0.62, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const browTopVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(1.2px)', 'translateY(-0.2px)', 'translateY(0px)'],
    transition: { duration: 0.48, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const browLowVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(1.2px)', 'translateY(-0.2px)', 'translateY(0px)'],
    transition: { duration: 0.48, delay: 0.04, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const tailVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-12deg)', 'rotate(4deg)', 'rotate(0deg)'],
    transition: { duration: 0.56, delay: 0.06, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const eyeLeftVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.4)', 'scale(1.28)', 'scale(1)'],
    transition: { duration: 0.5, delay: 0.12, times: [0, 0.24, 0.58, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const eyeRightVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.4)', 'scale(1.28)', 'scale(1)'],
    transition: { duration: 0.5, delay: 0.16, times: [0, 0.24, 0.58, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M18.5 9.19028C16.9878 7.3721 14.7872 6 12.5 6C8.35786 6 4.5 10.5 4.5 14C4.5 18.1421 8.35786 21 12.5 21C13.0064 21 13.5086 20.9573 14 20.8747" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 13.5px' }" />
            <motion.path d="M13 8.5L17.7059 10L21 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="crestVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 9px' }" />
            <motion.path d="M20.6089 17.1305H22L20.1374 15.5872C18.8302 14.5041 18.1766 13.9625 17.4061 14.002C16.6357 14.0415 16.0515 14.6466 14.8831 15.8567L14.7463 15.9984C14.2628 16.4993 14.021 16.7497 14.0017 17.0446C13.9983 17.0956 14 17.1467 14.0066 17.1974C14.0447 17.4908 14.302 17.7278 14.8167 18.2016C16.1158 19.3976 16.7654 19.9957 17.527 20C17.6567 20.0007 17.7862 19.9889 17.9133 19.9648C18.6592 19.823 19.1688 19.1193 20.1879 17.7119L20.6089 17.1305ZM20.6089 17.1305H17.8266" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="beakVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 16px' }" />
            <motion.path d="M13 6C12.7333 5 11.56 3 9 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="browTopVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 4.5px' }" />
            <motion.path d="M11 6C10.5 5.47719 9 4.58841 7 5.21578" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="browLowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 5.3px' }" />
            <motion.path d="M2 11L4 14L2 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tailVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 13px' }" />
            <motion.path d="M13.125 12H13M13.25 12C13.25 12.1381 13.1381 12.25 13 12.25C12.8619 12.25 12.75 12.1381 12.75 12C12.75 11.8619 12.8619 11.75 13 11.75C13.1381 11.75 13.25 11.8619 13.25 12Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="eyeLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 12px' }" />
            <motion.path d="M20.125 12H20M20.25 12C20.25 12.1381 20.1381 12.25 20 12.25C19.8619 12.25 19.75 12.1381 19.75 12C19.75 11.8619 19.8619 11.75 20 11.75C20.1381 11.75 20.25 11.8619 20.25 12Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="eyeRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 12px' }" />
          </svg>
        </div>
</template>
