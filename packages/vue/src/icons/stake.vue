<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'StakeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the body of the stake lifts while its detail lines follow
// generated from @hugeicons/core-free-icons
const lineVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1.1)', 'scaleX(1)'],
    transition: {
      duration: 0.46,
      delay: 0.12,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.79px) rotate(-0.99deg)', 'translateY(0.44px) rotate(0.49deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
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
            <motion.path d="M8 6C11.3137 6 14 5.10457 14 4C14 2.89543 11.3137 2 8 2C4.68629 2 2 2.89543 2 4C2 5.10457 4.68629 6 8 6Z" stroke="currentColor" stroke-width="1.5" :variants="lineVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 4px' }" />
            <motion.path d="M15.5 9C11.9102 9 9 11.9101 9 15.5C9 19.0898 11.9102 22 15.5 22C19.0898 22 22 19.0899 22 15.5C22 11.9101 19.0898 9 15.5 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 15.5px' }" />
            <motion.path d="M15.5 19C15.6047 19 15.702 18.9505 15.8967 18.8516L17.4614 18.0564C18.1538 17.7045 18.5 17.5286 18.5 17.25V13.75M15.5 19C15.3953 19 15.298 18.9505 15.1033 18.8516L13.5386 18.0564C12.8462 17.7045 12.5 17.5286 12.5 17.25V13.75M15.5 19V15.5M18.5 13.75C18.5 13.4714 18.1538 13.2955 17.4614 12.9436L15.8967 12.1484C15.702 12.0495 15.6047 12 15.5 12C15.3953 12 15.298 12.0495 15.1033 12.1484L13.5386 12.9436C12.8462 13.2955 12.5 13.4714 12.5 13.75M18.5 13.75C18.5 14.0286 18.1538 14.2045 17.4614 14.5564L15.8967 15.3516C15.702 15.4505 15.6047 15.5 15.5 15.5M12.5 13.75C12.5 14.0286 12.8462 14.2045 13.5386 14.5564L15.1033 15.3516C15.298 15.4505 15.3953 15.5 15.5 15.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 15.5px' }" />
            <motion.path d="M2 4V8.02171V12.0434C2 12.7473 3.17834 13.6328 6.12981 14M2.10726 8.54768C3.31161 9.60965 5.45881 10.0602 7.75359 10.0602M13.9884 4.12134V6.13597" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.99px 9px' }" />
          </svg>
        </div>
</template>
