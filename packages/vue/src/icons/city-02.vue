<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'City02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the antenna beacon blinks and the windows light up below it
// authored from scripts/authored
const towerVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.34, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const beaconVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.6, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const windowsVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.12, 1, 0.12, 1, 1],
    transition: { duration: 0.6, delay: 0.16, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <path d="M2 22H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M14 4H10C8.34533 4 8 4.34533 8 6V22H16V6C16 4.34533 15.6547 4 14 4Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="towerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
            <path d="M8 13H6C4.34533 13 4 13.3453 4 15V22H8V13Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M18 13H16V22H20V15C20 13.3453 19.6547 13 18 13Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 4L12 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="beaconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M12 22L12 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M11 15H13M11 11.5H13M11 8L13 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="windowsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
