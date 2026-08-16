<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RiceBowl02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the rice bowl take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.71px) rotate(-2.01deg)', 'translateY(0.4px) rotate(0.7deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.55,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-4.73deg)', 'scale(1.1) rotate(1.89deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.43, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
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
            <motion.path d="M6 9L6.73072 7.88715C8.5751 5.07821 9.4973 3.67374 10.684 3.23546C11.5341 2.92151 12.4659 2.92151 13.316 3.23546C14.5027 3.67374 15.4249 5.07821 17.2693 7.88714L18 8.99999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M18.7256 20.3049C17.6228 21 15.7485 21 12 21C8.25145 21 6.37718 21 5.27439 20.3049C3.79479 19.3723 2.92362 17.6532 3.00958 15.8357C3.00958 15.8357 2.80609 13.3536 4.2748 11C5.11593 12.6336 7.91891 15.1596 10.5006 17.1682M18.7256 20.3049C20.2052 19.3723 21.0764 17.6532 20.9904 15.8357C20.9904 15.8357 21.1939 13.3536 19.7252 11C18.3163 13.0751 13.6993 17.214 10.5006 17.1682M18.7256 20.3049C15.4906 20.2278 12.7105 18.8875 10.5006 17.1682" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M11.5 7C11.6667 7.33333 12.3 8 13.5 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M10 11L9.5 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '9.75px 11.25px' }" />
            <motion.path d="M14.625 11.5H14.5M14.75 11.5C14.75 11.6381 14.6381 11.75 14.5 11.75C14.3619 11.75 14.25 11.6381 14.25 11.5C14.25 11.3619 14.3619 11.25 14.5 11.25C14.6381 11.25 14.75 11.3619 14.75 11.5Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 11.5px' }" />
          </svg>
        </div>
</template>
