<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'QuoraIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the quora move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.67px) rotate(-1.97deg)', 'translateY(0.39px) rotate(0.69deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M17.1481 22.0001C20.037 22.0001 21 19.6776 21 16.8126C20.037 17.8497 17.3671 20.0195 16.1852 15.775C14.7407 10.5876 10.5 11.5 8 14C11.8519 14 12.3827 14.8974 13.2963 17.8501C14.2593 20.9625 15.7037 22.0001 17.1481 22.0001Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 19px' }" />
            <motion.path d="M6.5154 11C6.5052 10.8351 6.5 10.6684 6.5 10.5C6.5 7.18629 8.51472 4.5 11 4.5C13.4853 4.5 15.5 7.18629 15.5 10.5C15.5 11.3922 15.262 12.2389 15 13" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 19px' }" />
            <motion.path d="M13.2413 18.6619C12.5301 18.882 11.778 19 11 19C6.58172 19 3 15.1944 3 10.5C3 5.80558 6.58172 2 11 2C15.4183 2 19 5.80558 19 10.5C19 11.7477 18.747 12.9326 18.2925 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 19px' }" />
          </svg>
        </div>
</template>
