<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowBigDownDashIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after arrow-down-02: the mark commits downward along its own axis
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleX(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleX(1)', 'translateY(2.73px) scaleX(0.94)', 'translateY(-0.31px) scaleX(1.02)', 'translateY(0.47px) scaleX(0.99)', 'translateY(0px) scaleX(1)'],
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
            <motion.path d="M14.9351 18.7236L17.3928 16.0046C19.335 13.8559 20.3061 12.7816 19.9143 11.8908C19.5225 11 18.0788 11 15.1915 11H15V10C15 8.58579 15 7.87868 14.5607 7.43934C14.1213 7 13.4142 7 12 7C10.5858 7 9.87868 7 9.43934 7.43934C9 7.87868 9 8.58579 9 10V11H8.80852C5.92117 11 4.47749 11 4.08568 11.8908C3.69387 12.7816 4.66499 13.8559 6.60724 16.0046L9.06495 18.7236C10.4367 20.2412 11.1226 21 12 21C12.8774 21 13.5633 20.2412 14.9351 18.7236Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9 3H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
