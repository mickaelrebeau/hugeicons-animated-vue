<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CoinbaseIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the silhouette of the coinbase loads onto its base and settles with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.36px) scaleY(0.82)', 'translateY(-3.31px) scaleY(1.08)', 'translateY(0.49px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.66,
      times: [0, 0.18, 0.48, 0.78, 1],
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
            <motion.path d="M21 11C20.501 6.50005 16.6743 3 12.0275 3C7.04177 3 3 7.02944 3 12C3 16.9706 7.04177 21 12.0275 21C16.6743 21 20.501 17.5 21 13H16.4295C15.9734 15.004 14.1757 16.5 12.0275 16.5C9.53466 16.5 7.51377 14.4853 7.51377 12C7.51377 9.51472 9.53466 7.5 12.0275 7.5C14.1757 7.5 15.9734 8.99601 16.4295 11H21Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
          </svg>
        </div>
</template>
