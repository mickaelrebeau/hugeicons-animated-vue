<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WebProtectionIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after wifi-01: the connection propagates outward through the web
// generated from @hugeicons/core-free-icons
const arcVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0.84px) scale(0.82)', 'translateY(0px) scale(1.06)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.97, ease: [0.23, 1, 0.32, 1], delay: i * 0.12 },
  }),
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
            <motion.path d="M3.5 7.50006H20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M11 20.5001C7.22876 20.5001 5.34315 20.5001 4.17157 19.3285C3 18.1569 3 16.2713 3 12.5001V10.5001C3 6.72882 3 4.84321 4.17157 3.67163C5.34315 2.50006 7.22876 2.50006 11 2.50006H13C16.7712 2.50006 18.6569 2.50006 19.8284 3.67163C21 4.84321 21 6.72883 21 10.5001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M21 17.1205V15.1494C21 14.8394 20.7723 14.5821 20.477 14.5293C19.2869 14.3165 18.299 13.8431 17.817 13.5807C17.6197 13.4732 17.3803 13.4732 17.183 13.5807C16.701 13.8431 15.7131 14.3165 14.523 14.5293C14.2277 14.5821 14 14.8394 14 15.1494V17.1205C14 19.6919 16.5424 21.0944 17.2935 21.4527C17.426 21.5159 17.574 21.5159 17.7065 21.4527C18.4576 21.0944 21 19.6919 21 17.1205Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
          </svg>
        </div>
</template>
