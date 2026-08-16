<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CallRinging01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after notification-03: it rings — a decaying arc from the hanging point
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-14.69deg)', 'rotate(11.54deg)', 'rotate(-8.39deg)', 'rotate(5.25deg)', 'rotate(-2.1deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.92,
      ease: 'easeInOut',
      times: [0, 0.18, 0.38, 0.56, 0.72, 0.87, 1],
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
            <motion.path d="M17.0539 14.0292V16.7928C17.0539 17.3565 17.4143 17.8705 17.9747 18.1385C18.413 18.3481 18.9322 18.6067 19.3546 18.847C19.7452 19.0692 20.293 19.0557 20.6214 18.765L21.5133 17.9757C22.17 17.3945 22.1749 16.4442 21.4501 15.9302C15.9402 12.0233 8.05983 12.0233 2.54993 15.9302C1.82509 16.4442 1.82997 17.3945 2.48673 17.9757L3.3786 18.765C3.70697 19.0557 4.24369 19.0574 4.62554 18.8235C5.0468 18.5655 5.53006 18.3258 5.94613 18.1356C6.54384 17.8623 6.94607 17.3266 6.94607 16.7312V14.0292" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.02px' }" />
            <motion.path d="M12 5V8M18 8L16 10M6 8L8 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.02px' }" />
          </svg>
        </div>
</template>
