<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BitcoinCloudIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after credit-card: the coin turns over on its own axis and lands flat
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotateY(0deg)',
  },
  animate: {
    transform: ['rotateY(0deg)', 'rotateY(90deg)', 'rotateY(180deg)', 'rotateY(270deg)', 'rotateY(360deg)'],
    transition: {
      duration: 0.72,
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
            <motion.path d="M17.5 17.5C19.9853 17.5 22 15.4853 22 13C22 10.5147 19.9853 8.5 17.5 8.5C17.4925 8.5 17.485 8.50002 17.4776 8.50005M17.4776 8.50005C17.4924 8.33536 17.5 8.16856 17.5 8C17.5 4.96243 15.0376 2.5 12 2.5C9.12324 2.5 6.76233 4.70862 6.52042 7.5227M17.4776 8.50005C17.3753 9.6345 16.9286 10.6696 16.2428 11.5M6.52042 7.5227C3.98398 7.76407 2 9.90034 2 12.5C2 15.0997 3.98398 17.2359 6.52042 17.4773M6.52042 7.5227C6.67826 7.50768 6.83823 7.5 7 7.5C8.12582 7.5 9.16474 7.87209 10.0005 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M10.125 20L10.125 14M12 14V12.5M12 21.5V20M10.125 17H13.875M13.875 17C14.4963 17 15 17.5037 15 18.125V18.875C15 19.4963 14.4963 20 13.875 20H9M13.875 17C14.4963 17 15 16.4963 15 15.875V15.125C15 14.5037 14.4963 14 13.875 14H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
