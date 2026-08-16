<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AndroidIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the antennae twitch, then the arms and legs settle into a standing pose
// authored from scripts/authored
const bodyVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.96)', 'scaleY(1.02)', 'scaleY(1)'],
    transition: { duration: 0.56, delay: 0.12, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const armRightVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(12deg)', 'rotate(-3deg)', 'rotate(0deg)'],
    transition: { duration: 0.58, delay: 0.08, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const legRightVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(0.8px)', 'translateY(0px)'],
    transition: { duration: 0.5, delay: 0.16, times: [0, 0.4, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const legLeftVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(0.8px)', 'translateY(0px)'],
    transition: { duration: 0.5, delay: 0.2, times: [0, 0.4, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const armLeftVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-12deg)', 'rotate(3deg)', 'rotate(0deg)'],
    transition: { duration: 0.58, delay: 0.08, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const antennaeVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-6deg)', 'rotate(4deg)', 'rotate(0deg)'],
    transition: { duration: 0.54, times: [0, 0.28, 0.62, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const visorVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.2)', 'scaleX(1)'],
    transition: { duration: 0.5, delay: 0.1, times: [0, 0.34, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M6.5 9.5C6.5 6.46243 8.96243 4 12 4C15.0376 4 17.5 6.46243 17.5 9.5V16C17.5 17.4142 17.5 18.1213 17.0607 18.5607C16.6213 19 15.9142 19 14.5 19H9.5C8.08579 19 7.37868 19 6.93934 18.5607C6.5 18.1213 6.5 17.4142 6.5 16V9.5Z" stroke="currentColor" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.5px' }" />
            <motion.path d="M20 11V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="armRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 11px' }" />
            <motion.path d="M15 19V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="legRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 19px' }" />
            <motion.path d="M9 19V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="legLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 19px' }" />
            <motion.path d="M4 11V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="armLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 11px' }" />
            <motion.path d="M10 4L8.5 2M14 4L15.5 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="antennaeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4px' }" />
            <motion.path d="M6.5 10H17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="visorVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
          </svg>
        </div>
</template>
