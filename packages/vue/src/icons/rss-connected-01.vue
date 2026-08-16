<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RssConnected01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after wifi-01: the feed expands from the source dot to the outer arc
// generated from @hugeicons/core-free-icons
const arcVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0.77px) scale(0.82)', 'translateY(0px) scale(1.06)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.91, ease: [0.23, 1, 0.32, 1], delay: i * 0.12 },
  }),
}

const sourceVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.86)', 'scale(1.18)', 'scale(1)'],
    transition: {
      duration: 0.93,
      ease: [0.23, 1, 0.32, 1],
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
            <motion.path d="M18.5 19.5C18.5 17.3667 18.0547 15.3374 17.2519 13.5M3.5 4.5C5.63331 4.5 7.66261 4.94534 9.5 5.74813" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 19px' }" />
            <motion.path d="M11.5 19.5C11.5 15.0817 7.91828 11.5 3.5 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 19px' }" />
            <motion.path d="M4.25 19H4M4.5 19C4.5 19.2761 4.27614 19.5 4 19.5C3.72386 19.5 3.5 19.2761 3.5 19C3.5 18.7239 3.72386 18.5 4 18.5C4.27614 18.5 4.5 18.7239 4.5 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sourceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 19px' }" />
            <motion.path d="M12.5 8.5C12.5 8.5 13.5 8.5 14.5 10.5C14.5 10.5 17.6765 5.5 20.5 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 19px' }" />
          </svg>
        </div>
</template>
