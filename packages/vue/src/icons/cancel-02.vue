<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Cancel02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after circle-x: the two closing strokes strike in sequence and settle
// generated from @hugeicons/core-free-icons
const markVariants: Variants = {
  normal: {
    transform: 'scale(1) rotate(0deg)',
  },
  animate: {
    transform: ['scale(1) rotate(0deg)', 'scale(0.86) rotate(-2.12deg)', 'scale(1.08) rotate(0.85deg)', 'scale(1) rotate(0deg)'],
    transition: {
      duration: 0.53,
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
            <motion.path d="M5.43212 18.5679C6.00828 19.144 6.94243 19.144 7.51859 18.5679L12.0003 14.0863L16.4814 18.5672C17.0573 19.1431 17.9909 19.1434 18.5672 18.5679C19.144 17.9919 19.1443 17.0573 18.5679 16.4809L14.0868 12L18.5679 7.51913C19.1438 6.94326 19.1441 6.0097 18.5686 5.43346C17.9925 4.85669 17.0578 4.85638 16.4814 5.43278L12.0003 9.91365L7.51859 5.4321C6.94243 4.85597 6.00828 4.85597 5.43212 5.4321C4.85596 6.00823 4.85596 6.94232 5.43212 7.51845L9.91387 12L5.43212 16.4816C4.85596 17.0577 4.85596 17.9918 5.43212 18.5679Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
