<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ShapeCollectionIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the shape collection separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.82px) rotate(-1.03deg)', 'translateY(0.46px) rotate(0.51deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.44px, -1.23px)', 'translate(0.21px, -0.21px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.52,
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
            <motion.path d="M3.88886 9.66294C4.39331 10 5.09554 10 6.5 10C7.90446 10 8.60669 10 9.11114 9.66294C9.32952 9.51702 9.51702 9.32952 9.66294 9.11114C10 8.60669 10 7.90446 10 6.5C10 5.09554 10 4.39331 9.66294 3.88886C9.51702 3.67048 9.32952 3.48298 9.11114 3.33706C8.60669 3 7.90446 3 6.5 3C5.09554 3 4.39331 3 3.88886 3.33706C3.67048 3.48298 3.48298 3.67048 3.33706 3.88886C3 4.39331 3 5.09554 3 6.5C3 7.90446 3 8.60669 3.33706 9.11114C3.48298 9.32952 3.67048 9.51702 3.88886 9.66294Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 6.5px' }" />
            <motion.path d="M14.809 10H20.191C20.6378 10 21 9.63779 21 9.19098C21 9.06539 20.9708 8.94152 20.9146 8.82918L18.2236 3.44721C18.0866 3.17313 17.8064 3 17.5 3C17.1936 3 16.9134 3.17313 16.7764 3.44721L14.0854 8.82918C14.0292 8.94152 14 9.06539 14 9.19098C14 9.63779 14.3622 10 14.809 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 6.5px' }" />
            <motion.circle cx="6.5" cy="17.5" r="3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 17.5px' }" />
            <motion.path d="M20.5 15V17.5C20.5 18.9142 20.5 19.6213 20.0607 20.0607C19.6213 20.5 18.9142 20.5 17.5 20.5H15M14.5 14.5L19.5 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 17.5px' }" />
          </svg>
        </div>
</template>
