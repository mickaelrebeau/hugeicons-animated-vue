<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DatabaseExportIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after upload-01: the arrow launches off the top
// generated from @hugeicons/core-free-icons
const trayVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(0.96px)', 'translateY(0px)'],
    transition: {
      duration: 0.31,
      ease: 'easeOut',
      delay: 0.08,
    },
  },
}

const arrowVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
    visibility: 'visible',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(-5.46px)', 'translateY(5.46px)', 'translateY(0px)'],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.74,
      times: [0, 0.42, 0.5, 1],
      ease: ['easeIn', 'linear', 'easeOut'],
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
            <motion.ellipse cx="11" cy="5" rx="8" ry="3" stroke="currentColor" stroke-width="1.5" :variants="trayVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 5px' }" />
            <motion.path d="M6 10.8418C6.60158 11.0226 7.27434 11.1716 8 11.2817" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="trayVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 11.06px' }" />
            <motion.path d="M11 15C6.58172 15 3 13.6569 3 12" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="trayVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 13.5px' }" />
            <motion.path d="M6 17.8418C6.60158 18.0226 7.27434 18.1716 8 18.2817" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="trayVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 18.06px' }" />
            <motion.path d="M11 22C6.58172 22 3 20.6569 3 19V5M19 5V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="trayVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 13.5px' }" />
            <motion.path d="M19 16.6735L17.8258 15.1869C17.2008 14.3956 16.8883 14 16.5 14C16.1117 14 15.7992 14.3956 15.1742 15.1869L14 16.6735M16.5 14.0872V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 18px' }" />
          </svg>
        </div>
</template>
