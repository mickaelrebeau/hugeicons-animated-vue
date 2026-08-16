<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HighHeels01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the high heels take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-4.81deg)', 'scale(1.1) rotate(1.92deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.44, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
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
            <motion.path d="M7 4C8.6875 5.19078 12.64 6.35832 16 5.89682" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 5.18px' }" />
            <motion.path d="M5 6C5.7541 8.5 8.94471 9.4448 7.72525 10.6777C7.28926 11.1184 6.5883 11.5592 5.43579 12" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '6.97px 9px' }" />
            <motion.path d="M18 18C17.0323 18.6667 15.6894 19.8667 16.0645 22" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '16.84px 20px' }" />
            <motion.path d="M13 21.9683C10 21.9683 9.69937 14.6936 4.63833 11.5941C3.83539 11.1024 2.8748 10.4546 3.01345 9.37349C3.22024 7.76102 4.68698 6.14069 6.15287 5.38185C7.25347 4.81211 7.71834 3.28124 7.89533 2.44206C7.94076 2.22661 7.91253 2.06997 7.99079 2.01837C7.99141 2.01797 7.98986 2.01898 8.03882 2.01405C8.08777 2.00911 8.10475 2.01593 8.1387 2.02957C13.0252 3.99222 15.5405 3.53236 15.5789 3.72981C15.7171 4.44081 15.928 6.21675 15.353 8.89112C14.3829 13.403 15.1463 16.8054 17.2898 17.915C18.2583 18.4163 22.1303 18.9176 20.6777 20.9229C19.6916 22.2842 13 21.9683 13 21.9683Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 12.15px' }" />
          </svg>
        </div>
</template>
