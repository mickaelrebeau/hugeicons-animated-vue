<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PaellaIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pan sizzles: the ingredients hop in turn
// authored from scripts/authored
const foodVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.084px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const peaVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(3)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.06,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const pea2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(3)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.12,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const pea3Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(3)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.18,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const pea4Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(3)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.24,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const pea5Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(3)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.3,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const shrimpVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.084px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.1,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const shrimp2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.084px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.16,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const shrimp3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.084px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.22,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const shrimp4Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.084px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.28,
      times: [0, 0.32, 0.62, 0.86, 1],
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
            <path d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M12 9C10.4 9 9 10 9 10C9.16667 10.5 10 11.5 12 11.5M11 14.5C11.7651 14.347 12.4366 14.1471 13 13.9004C14.2776 13.3411 15 12.5409 15 11.5C15 10 14 9 12 9M12 9C12.8 10.2 12.3333 11.1667 12 11.5M12 11.5C12.8333 11.6003 14.2 12.2208 13 13.9004" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="foodVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.8px' }" />
            <motion.path d="M14 6V6.01" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="peaVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 6px' }" />
            <motion.path d="M18 13.4898V13.4998" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pea2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 13.5px' }" />
            <motion.path d="M16.5 16.4895V16.4995" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pea3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 16.5px' }" />
            <motion.path d="M8 17V17.01" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pea4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 17px' }" />
            <motion.path d="M6 9V9.01" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="pea5Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 9px' }" />
            <motion.path d="M13.9903 18C13.9903 18 13.311 18.5581 12.5368 18.6224C11.7626 18.6867 11.0005 18.2482 11.0005 18.2482" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="shrimpVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 18.3px' }" />
            <motion.path d="M8.3418 7.33915C8.3418 7.33915 8.71806 6.54456 9.39084 6.15614C10.0636 5.76771 10.9399 5.83915 10.9399 5.83915" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="shrimp2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.6px 6.6px' }" />
            <motion.path d="M16.5177 8.24963C16.5177 8.24963 17.3709 8.4617 17.8845 9.04459C18.398 9.62748 18.5009 10.5006 18.5009 10.5006" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="shrimp3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 9.4px' }" />
            <motion.path d="M8.44209 14.4442C8.44209 14.4442 7.58608 14.2437 7.06469 13.6678C6.54329 13.0919 6.42859 12.2203 6.42859 12.2203" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="shrimp4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.4px 13.3px' }" />
            <path d="M7 3.1327L6.43365 2.56635C5.67851 1.81122 4.45419 1.81122 3.69906 2.56635L2.56635 3.69906C1.81122 4.45419 1.81122 5.67851 2.56635 6.43365L3.1327 7" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M17 20.8673L17.5664 21.4336C18.3215 22.1888 19.5458 22.1888 20.3009 21.4336L21.4336 20.3009C22.1888 19.5458 22.1888 18.3215 21.4336 17.5664L20.8673 17" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
