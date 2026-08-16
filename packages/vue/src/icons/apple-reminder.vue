<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AppleReminderIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the three list rows write themselves top to bottom, bullets first
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.22, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const bulletsVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1.08)', 'scaleY(1)'],
    transition: { duration: 0.54, times: [0, 0.28, 0.64, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const rowsVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.18)', 'scaleX(1.04)', 'scaleX(1)'],
    transition: { duration: 0.58, delay: 0.1, times: [0, 0.16, 0.6, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.364 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7.37545 7.99976H7.25045M7.37482 11.9999H7.24982M7.37498 15.9999H7.24998M7.50045 7.99976C7.50045 8.13783 7.38852 8.24976 7.25045 8.24976C7.11238 8.24976 7.00045 8.13783 7.00045 7.99976C7.00045 7.86169 7.11238 7.74976 7.25045 7.74976C7.38852 7.74976 7.50045 7.86169 7.50045 7.99976ZM7.49982 11.9999C7.49982 12.138 7.38789 12.2499 7.24982 12.2499C7.11175 12.2499 6.99982 12.138 6.99982 11.9999C6.99982 11.8618 7.11175 11.7499 7.24982 11.7499C7.38789 11.7499 7.49982 11.8618 7.49982 11.9999ZM7.49998 15.9999C7.49998 16.138 7.38805 16.2499 7.24998 16.2499C7.11191 16.2499 6.99998 16.138 6.99998 15.9999C6.99998 15.8618 7.11191 15.7499 7.24998 15.7499C7.38805 15.7499 7.49998 15.8618 7.49998 15.9999Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bulletsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.3px 12px' }" />
            <motion.path d="M11 8H17M11 12H17M11 16H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 12px' }" />
          </svg>
        </div>
</template>
