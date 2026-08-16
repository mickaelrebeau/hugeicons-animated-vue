<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Sushi01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the piece lifts from the plate and lands without losing its stack
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.35px) scaleY(0.82)', 'translateY(-3.27px) scaleY(1.08)', 'translateY(0.48px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.65,
      times: [0, 0.18, 0.48, 0.78, 1],
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
            <motion.path d="M20 13C20 16.0024 20 17.5036 19.1213 18.4363C17.0344 20.6515 6.71606 20.3867 4.87868 18.4363C4 17.5036 4 16.0024 4 13" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.28px' }" />
            <motion.path d="M12.04 4C4.4529 4 2.47653 8.7964 2.03855 12.6325C1.851 14.2752 2.33921 14.2488 3.69248 13.5405C5.76039 12.458 8.50919 11.766 12.04 11.766C15.5657 11.766 18.2639 12.456 20.3076 13.5357C21.6586 14.2494 22.1436 14.2742 21.9641 12.6322C21.5448 8.7961 19.6269 4 12.04 4Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.28px' }" />
            <motion.path d="M6.99609 12C6.99609 9.47222 7.8828 4.56415 12.9961 4" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.28px' }" />
            <motion.path d="M15 12C15 10.0614 15.5118 6.73584 18 5" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.28px' }" />
          </svg>
        </div>
</template>
