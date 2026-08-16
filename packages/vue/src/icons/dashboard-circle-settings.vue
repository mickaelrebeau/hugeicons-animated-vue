<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DashboardCircleSettingsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after dashboard-square-01: the dashboard modules assemble in a diagonal reading ripple
// generated from @hugeicons/core-free-icons
const tileVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['translateY(1.49px) scale(0.74)', 'translateY(-0.43px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
  }),
}

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
            <motion.path d="M10.5 6.75C10.5 4.67893 8.82107 3 6.75 3C4.67893 3 3 4.67893 3 6.75C3 8.82107 4.67893 10.5 6.75 10.5C8.82107 10.5 10.5 8.82107 10.5 6.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '6.75px 6.75px' }" />
            <motion.path d="M21 17.25C21 15.1789 19.3211 13.5 17.25 13.5C15.1789 13.5 13.5 15.1789 13.5 17.25C13.5 19.3211 15.1789 21 17.25 21C19.3211 21 21 19.3211 21 17.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '17.25px 17.25px' }" />
            <motion.path d="M10.5 17.25C10.5 15.1789 8.82107 13.5 6.75 13.5C4.67893 13.5 3 15.1789 3 17.25C3 19.3211 4.67893 21 6.75 21C8.82107 21 10.5 19.3211 10.5 17.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '6.75px 17.25px' }" />
            <motion.path d="M17.25 3V4.33957M17.25 4.33957C17.9156 4.33957 18.5182 4.60934 18.9545 5.04551M14.8393 6.75028C14.8393 6.08451 15.1092 5.48177 15.5455 5.04551C15.9818 4.60934 16.5844 4.33957 17.25 4.33957M17.25 9.161V10.5M17.25 9.161C17.9158 9.161 18.5185 8.89111 18.9548 8.45477M14.8393 6.75028C14.8393 7.41591 15.1091 8.01853 15.5452 8.45477C15.9815 8.89111 16.5842 9.161 17.25 9.161M21 6.75L19.6607 6.75028M19.6607 6.75028C19.6607 7.41591 19.3909 8.01853 18.9548 8.45477M19.6607 6.75028C19.6607 6.08451 19.3908 5.48177 18.9545 5.04551M14.8393 6.75028L13.5 6.75M19.9017 4.09835L18.9545 5.04551M14.5984 9.40165L15.5452 8.45477M19.9017 9.40165L18.9548 8.45477M14.5984 4.09835L15.5455 5.04551" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '17.25px 6.75px' }" />
          </svg>
        </div>
</template>
