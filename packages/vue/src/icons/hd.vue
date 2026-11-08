<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HdIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the HD letters flip in the screen
// authored from scripts/authored
const letterVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.06)', 'scaleX(1)'],
    transition: { duration: 0.56, times: [0, 0.5, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const letter2Variants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.06)', 'scaleX(1)'],
    transition: { duration: 0.56, delay: 0.1, times: [0, 0.5, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

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
            <path d="M1.99963 11C1.99963 8.17157 1.99963 6.75736 2.87831 5.87868C3.75699 5 5.17121 5 7.99963 5H15.9996C18.8281 5 20.2423 5 21.121 5.87868C21.9996 6.75736 21.9996 8.17157 21.9996 11V13C21.9996 15.8284 21.9996 17.2426 21.121 18.1213C20.2423 19 18.8281 19 15.9996 19H7.99963C5.17121 19 3.75699 19 2.87831 18.1213C1.99963 17.2426 1.99963 15.8284 1.99963 13V11Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M9.99963 9V15M5.99963 9V15M5.99963 12H9.99963" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="letterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 12px' }" />
            <motion.path d="M13.9996 15V9H14.9996C15.9315 9 16.3975 9 16.765 9.15224C17.2551 9.35523 17.6444 9.74458 17.8474 10.2346C17.9996 10.6022 17.9996 11.0681 17.9996 12C17.9996 12.9319 17.9996 13.3978 17.8474 13.7654C17.6444 14.2554 17.2551 14.6448 16.765 14.8478C16.3975 15 15.9315 15 14.9996 15H13.9996Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="letter2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 12px' }" />
          </svg>
        </div>
</template>
