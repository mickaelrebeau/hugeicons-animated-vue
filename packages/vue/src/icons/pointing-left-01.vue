<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PointingLeft01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cursor-pointer-01: the fingertip commits toward the direction it already points
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.79px) scaleX(0.9) scaleY(1.04)', 'translateX(1.98px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
    transition: {
      duration: 0.51,
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
            <motion.path d="M2.01758 4.49869H8.00963M2.01758 4.49869C2.01758 3.79883 4.00924 2.49127 4.51427 2M2.01758 4.49869C2.01758 5.19855 4.00924 6.50611 4.51427 6.99738" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '1.43px 14.36px' }" />
            <motion.path d="M21.9999 10.8261L21.0513 10.8261C20.4058 10.8261 19.7774 10.6173 19.2594 10.2306L14.3566 6.57049C13.7911 6.14837 13.0895 5.81121 12.4419 6.0899C11.3935 6.54106 10.7124 7.81387 12.2842 9.37179L13.9936 10.9701L3.57057 10.9701C1.52742 11.0263 1.42614 14.3166 3.57057 14.4573L9.51058 14.4573C9.31944 15.9384 10.3629 22.9151 14.7831 21.8982C14.9931 21.8498 15.2062 21.8016 15.4165 21.7545C16.3353 21.5487 17.9727 20.9405 18.93 20.2697C19.9265 19.5714 20.9191 19.8178 21.9999 19.8178" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '1.43px 14.36px' }" />
          </svg>
        </div>
</template>
