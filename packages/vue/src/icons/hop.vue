<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HopIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the hop cone swings on its stem
// authored from scripts/authored
const coneVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.86px, 0.35px) rotate(-8deg)',
      'translate(-1.35px, -0.43px) rotate(6deg)',
      'translate(0.46px, 0.11px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const cone2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.89px, 0.51px) rotate(-8deg)',
      'translate(-0.62px, -0.46px) rotate(6deg)',
      'translate(0.22px, 0.14px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const cone3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.81px, -0.63px) rotate(-8deg)',
      'translate(-0.66px, 0.40px) rotate(6deg)',
      'translate(0.21px, -0.15px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const cone4Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.79px, -0.60px) rotate(-8deg)',
      'translate(-1.39px, 0.28px) rotate(6deg)',
      'translate(0.46px, -0.13px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const cone5Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.50px, -0.11px) rotate(-8deg)',
      'translate(-1.13px, -0.06px) rotate(6deg)',
      'translate(0.38px, -0.01px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const cone6Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(2.52px, -0.18px) rotate(-8deg)',
      'translate(-1.89px, -0.10px) rotate(6deg)',
      'translate(0.63px, -0.01px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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
            <motion.path d="M12.0001 15.0896C11.4414 15.8159 10.0555 17.2304 8.44234 17.8979C7.88978 18.1266 7.26284 17.9643 6.89836 17.4793C6.11291 16.4341 5.25782 14.5445 5.56364 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="coneVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.6px 15.1px' }" />
            <motion.path d="M6.30227 11.7295C5.3401 12.0268 4.85902 12.1755 4.34178 11.6582C3.82454 11.141 3.97319 10.6599 4.27048 9.69773C5.29014 6.39767 8.36507 4 12 4C12 7.63494 9.60233 10.7099 6.30227 11.7295Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cone2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.9px 8.1px' }" />
            <motion.path d="M17.6977 11.7295C18.6599 12.0268 19.141 12.1755 19.6582 11.6582C20.1755 11.141 20.0268 10.6599 19.7295 9.69773C18.7099 6.39767 15.6349 4 12 4C12 7.63494 14.3977 10.7099 17.6977 11.7295Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cone3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.1px 8.1px' }" />
            <path d="M12 4V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M11.9999 15.0896C12.5585 15.8159 13.9444 17.2304 15.5576 17.8979C16.1102 18.1266 16.7371 17.9643 17.1016 17.4793C17.887 16.4341 18.7421 14.5445 18.4363 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cone4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.4px 15.1px' }" />
            <motion.path d="M14.9999 10.5C14.5999 12.5 12.8332 14.3333 11.9999 15C11.1665 14.3333 9.39988 12.5 8.99988 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cone5Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.8px' }" />
            <motion.path d="M15.5001 18C15.2254 18.7508 14.3847 20.343 12.978 21.6142C12.4087 22.1286 11.5914 22.1286 11.0221 21.6142C9.61545 20.343 8.77477 18.7508 8.50006 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cone6Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.1px' }" />
          </svg>
        </div>
</template>
