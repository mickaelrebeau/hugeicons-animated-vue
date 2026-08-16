<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Rotate360Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after refresh: the glyph winds back and completes the named turn
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-26.37deg)', 'rotate(360deg)'],
    transition: {
      duration: 0.92,
      times: [0, 0.2, 1],
      ease: ['easeIn', 'easeOut'],
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
            <motion.path d="M20.4371 12.5061C23.4219 7.00258 22.0614 3.26685 16.9548 3C13.2433 3.07086 9.41471 5.07063 6.35871 8.16433C3.79408 10.7606 1.26891 14.479 2.1959 18.018C2.40059 18.7994 2.79969 19.3318 3.43015 19.8328C5.12441 21.1791 6.7874 21.2976 9.99031 20.5113C13.2339 19.5257 15.2448 18.0408 16.9404 16.5217M16.9404 16.5217C16.9421 16.5201 16.9439 16.5185 16.9457 16.5169C16.9489 16.5141 16.9468 16.5087 16.9425 16.5087C16.9393 16.5087 16.937 16.512 16.9381 16.515C16.9389 16.5173 16.9396 16.5195 16.9404 16.5217ZM16.9404 16.5217C17.3108 17.6169 17.0762 18.5944 16.4385 20.5113" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
