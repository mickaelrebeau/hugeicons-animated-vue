<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CloudAngledRainZapIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cloud-rain: drops fall through the glyph while the cloud holds
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1.22px)', 'translateY(0.31px)', 'translateY(0px)'],
    transition: {
      duration: 0.7,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

const dropVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
    opacity: 1,
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(3.44px)', 'translateY(-2.46px)', 'translateY(0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.68,
      times: [0, 0.42, 0.5, 1],
      ease: ['easeIn', 'linear', 'easeOut'],
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M17.4776 8.69731C17.485 8.69727 17.4925 8.69726 17.5 8.69726C19.9853 8.69726 22 10.6103 22 12.9702C22 14.8307 20.7478 16.4134 19 17M17.4776 8.69731C17.4924 8.54092 17.5 8.38254 17.5 8.22248C17.5 5.33819 15.0376 3 12 3C9.12324 3 6.76233 5.09718 6.52042 7.76927M17.4776 8.69731C17.3753 9.77451 16.9286 10.7574 16.2428 11.5459M6.52042 7.76927C3.98398 7.99846 2 10.0269 2 12.4954C2 14.0487 2.78555 15.4278 4 16.2939M6.52042 7.76927C6.67826 7.75501 6.83823 7.74771 7 7.74771C8.12582 7.74771 9.16474 8.10103 10.0005 8.69726" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M9.0784 13.5L7.30434 16.1838C7.06684 16.5431 6.94808 16.7227 7.02165 16.8614C7.09522 17 7.30931 17 7.73747 17H9.26253C9.69069 17 9.90478 17 9.97835 17.1386C10.0519 17.2773 9.93316 17.4569 9.69566 17.8162L7.9216 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 17px' }" />
            <motion.path d="M16 18.5L15 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 19.5px' }" />
            <motion.path d="M13 18.5L12 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 19.5px' }" />
          </svg>
        </div>
</template>
