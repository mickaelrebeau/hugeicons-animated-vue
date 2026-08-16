<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SmartphoneNfcIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the smartphone nfc take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-5.22deg)', 'scale(1.1) rotate(2.09deg)', 'scale(1) rotate(0deg)'],
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
            <motion.path d="M9 14.5V9.5C9 8.09554 9 7.39331 8.66294 6.88886C8.51702 6.67048 8.32952 6.48298 8.11114 6.33706C7.60669 6 6.90446 6 5.5 6C4.09554 6 3.39331 6 2.88886 6.33706C2.67048 6.48298 2.48298 6.67048 2.33706 6.88886C2 7.39331 2 8.09554 2 9.5V14.5C2 15.9045 2 16.6067 2.33706 17.1111C2.48298 17.3295 2.67048 17.517 2.88886 17.6629C3.39331 18 4.09554 18 5.5 18C6.90446 18 7.60669 18 8.11114 17.6629C8.32952 17.517 8.51702 17.3295 8.66294 17.1111C9 16.6067 9 15.9045 9 14.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 12px' }" />
            <motion.path d="M20 5C21.1956 6.39726 22 9.00885 22 12C22 14.9912 21.1956 17.6027 20 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '21px 12px' }" />
            <motion.path d="M16.5 7C17.3967 7.99804 18 9.86346 18 12C18 14.1365 17.3967 16.002 16.5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '17.25px 12px' }" />
            <motion.path d="M13 9C13.5978 9.59883 14 10.7181 14 12C14 13.2819 13.5978 14.4012 13 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 12px' }" />
          </svg>
        </div>
</template>
