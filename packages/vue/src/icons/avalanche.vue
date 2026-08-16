<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AvalancheIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the avalanche take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-5.27deg)', 'scale(1.1) rotate(2.11deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.47, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
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
            <motion.path d="M2 21H11.6547C14.1755 21 15.4359 21 15.8711 20.1706C16.3063 19.3412 15.6107 18.2648 14.2196 16.112L6.93559 4.83965C6.13925 3.60728 5.74108 2.9911 5.17984 3.0001C3.95309 3.01976 2.5 6 2 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '9.15px 12px' }" />
            <motion.path d="M10 5C10.6024 6.2142 11.1505 7.01476 12 8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 6.5px' }" />
            <motion.path d="M2 7C2.19944 7.58943 2.32706 8.50266 2.75554 8.96655C3.00648 9.23823 3.39002 9.34981 3.75053 9.25601C4.29307 9.11485 4.61512 8.53558 5.1267 8.33278C5.36623 8.23783 5.63377 8.23783 5.8733 8.33278C6.51536 8.5873 6.92764 9.39686 7.63967 9.49121C8.32392 9.58188 8.66629 8.9708 9 8.47768" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 8.29px' }" />
            <motion.path d="M18.7267 15.0452C18.6898 15.426 18.5912 15.7902 18.4401 16.1291M18.7267 15.0452C18.936 12.8817 17.0417 11 14.762 11C14.0531 11 12.8052 11.1754 12 11.763M18.7267 15.0452C20.5289 15.0371 22 16.3985 22 18.0791C22 19.4694 20.9961 20.6412 19.6267 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 16px' }" />
          </svg>
        </div>
</template>
