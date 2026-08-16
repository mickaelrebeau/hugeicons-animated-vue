<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ImageUpload01Icon' })

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
    transform: ['translateY(0px)', 'translateY(0.83px)', 'translateY(0px)'],
    transition: {
      duration: 0.32,
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
    transform: ['translateY(0px)', 'translateY(-4.79px)', 'translateY(4.79px)', 'translateY(0px)'],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.67,
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
            <motion.path d="M5 21C9.20998 16.2487 13.9412 9.9475 21 14.6734" stroke="currentColor" stroke-width="1.5" :variants="trayVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 15.47px' }" />
            <motion.path d="M17 4.50012C17.4915 3.99442 18.7998 2.00012 19.5 2.00012M22 4.50012C21.5085 3.99442 20.2002 2.00012 19.5 2.00012M19.5 2.00012V10.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="trayVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 6px' }" />
            <motion.path d="M20.9999 13C20.998 17.147 20.9472 19.2703 19.6088 20.6088C18.2175 22 15.9783 22 11.5 22C7.02166 22 4.78249 22 3.39124 20.6088C2 19.2175 2 16.9783 2 12.5C2 8.02166 2 5.78249 3.39124 4.39124C4.78249 3 7.02166 3 11.5 3C11.6699 3 14 3.00008 14 3.00008" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 12.5px' }" />
          </svg>
        </div>
</template>
