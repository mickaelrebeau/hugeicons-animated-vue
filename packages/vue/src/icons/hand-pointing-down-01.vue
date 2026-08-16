<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HandPointingDown01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after thumbs-up: the wrist leads one readable hand gesture
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.61px) rotate(-4.01deg)', 'translateY(0.3px) rotate(1deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M8.83403 2.00138V2.94868C8.83403 3.59418 8.62529 4.22251 8.23873 4.74055L4.5803 9.64341C4.15836 10.2089 3.82136 10.9104 4.09993 11.5581C4.55088 12.6065 5.82312 13.2876 7.38033 11.7157L8.97792 10.0063V20.4294C9.03415 22.4726 12.3229 22.5739 12.4636 20.4294V14.4894C13.9439 14.6805 20.9175 13.6371 19.9011 9.21686C19.8528 9.00686 19.8046 8.79374 19.7575 8.58346C19.5518 7.66469 18.9438 6.02726 18.2734 5.06998C17.5754 4.07344 17.8217 2.44361 17.8217 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.37px 22.57px' }" />
          </svg>
        </div>
</template>
