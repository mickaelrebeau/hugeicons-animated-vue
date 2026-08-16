<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RiceBowl01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the rice bowl take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-4.75deg)', 'scale(1.1) rotate(1.9deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.44, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.67px) rotate(-1.96deg)', 'translateY(0.39px) rotate(0.69deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.54,
      ease: [0.23, 1, 0.32, 1],
    },
  },
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
            <motion.path d="M3.91145 12H18.0886C19.6914 12 20.2786 12.3707 19.8787 13.9821C19.1733 16.8246 17.1759 17.5306 15.3304 19.3859C14.8819 19.8369 15.5798 20.5032 15.5802 20.9992C15.5809 21.933 14.6928 22 13.9854 22H8.0146C7.30717 22 6.41908 21.933 6.41982 20.9992C6.4202 20.5137 7.0972 19.8159 6.66957 19.3859C4.82407 17.5306 2.82674 16.8246 2.12128 13.9821C1.72136 12.3707 2.30857 12 3.91145 12Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 17px' }" />
            <motion.path d="M18.5 12C18.5 10.2089 16.6001 8.98823 15 9.69218M10 6.96519C9.64708 6.49221 9.13252 6.14848 8.53891 6.01716C6.62631 5.59405 4.90104 7.65834 5.7151 9.49889C4.46855 9.64127 3.5 10.7067 3.5 12M16.292 9.48272C17.0733 7.68217 15.4185 5.58415 13.4611 6.01716C12.9848 3.32761 9.01516 3.32761 8.53891 6.01716" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 7.66px' }" />
            <motion.path d="M17 9L22 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16 6L18 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
