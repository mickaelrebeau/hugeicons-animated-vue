<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BoxingGlove01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after scissor-01: it winds up and lands the blow, then recovers guard
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-20.81deg)', 'rotate(7.57deg)', 'rotate(-1.89deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.49,
      times: [0, 0.32, 0.55, 0.8, 1],
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
            <motion.path d="M5.98148 11.2453C5.89446 13.9678 9.10256 17.3235 12.1105 18.3784M5.98148 11.2453C5.67692 11.768 2.56612 14.2618 2.51173 15.3182C2.24816 17.416 5.81222 21.357 8.56025 21.4915C9.58647 21.6371 11.0099 19.9102 12.4528 18.6272C13.2475 17.9205 14.3928 17.7571 18.9772 16.6194C20.6408 16.3303 22.6394 13.4607 19.6766 11.0283M5.98148 11.2453C6.9097 9.04414 8.51438 4.78884 11.6614 3.10843C12.9394 2.3823 16.2588 1.71372 19.5114 4.80592C20.6304 5.74702 22.5701 7.80848 20.7647 10.1836C19.561 11.5864 17.741 11.1803 17.5642 13.6064" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.44px 21.64px' }" />
          </svg>
        </div>
</template>
