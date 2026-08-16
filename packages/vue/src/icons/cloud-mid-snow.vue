<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CloudMidSnowIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after snow: the flake drifts sideways and turns as it falls
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px) rotate(0deg)',
  },
  animate: {
    transform: ['translate(0px, 0px) rotate(0deg)', 'translate(1.39px, 2.19px) rotate(17.91deg)', 'translate(-0.8px, 3.58px) rotate(-7.96deg)', 'translate(0px, 0px) rotate(0deg)'],
    transition: {
      duration: 0.93,
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M17.4776 8.81069C17.485 8.81066 17.4925 8.81064 17.5 8.81064C19.9853 8.81064 22 10.7618 22 13.1686C22 15.4118 20.25 17.2591 18 17.5M17.4776 8.81069C17.4924 8.65119 17.5 8.48966 17.5 8.32642C17.5 5.38472 15.0376 3 12 3C9.12324 3 6.76233 5.13891 6.52042 7.86418M17.4776 8.81069C17.3753 9.90933 16.9286 10.9118 16.2428 11.716M6.52042 7.86418C3.98398 8.09794 2 10.1668 2 12.6844C2 15.027 3.71776 17.0514 6 17.5M6.52042 7.86418C6.67826 7.84964 6.83823 7.8422 7 7.8422C8.12582 7.8422 9.16474 8.20254 10.0005 8.81064" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.25px' }" />
            <motion.path d="M12 15V21M14.5 16.5L9.50013 19.5M9.5 16.5L14.4999 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.25px' }" />
          </svg>
        </div>
</template>
