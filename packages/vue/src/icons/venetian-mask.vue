<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'VenetianMaskIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after eye: the eye openings narrow while the mask itself stays still
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scaleY(1)',
  },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.12)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: {
      duration: 0.43,
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
            <motion.path d="M18 11C17 11 15.5 11.5 15 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6 11C7 11 8.5 11.5 9 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17.7639 7C19.0061 7 20.1516 6.36389 20.8115 5.33205C20.9377 5.13484 21.1479 5 21.382 5C21.7233 5 22 5.2767 22 5.61803V11C22 14.3137 19.3137 17 16 17C14.8423 17 13.7346 17.4087 12.7938 18.5954C12.5997 18.8402 12.3124 19 12 19C11.6876 19 11.4003 18.8402 11.2062 18.5954C10.2654 17.4087 9.15771 17 8 17C4.68629 17 2 14.3137 2 11V5.61803C2 5.2767 2.2767 5 2.61803 5C2.85213 5 3.06235 5.13484 3.18848 5.33205C3.84841 6.36389 4.99393 7 6.23607 7H8.26393C9.46609 7 10.5777 7.59582 11.2463 8.56956C11.4197 8.82218 11.6936 9 12 9C12.3064 9 12.5803 8.82218 12.7537 8.56956C13.4223 7.59582 14.5339 7 15.7361 7H17.7639Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
