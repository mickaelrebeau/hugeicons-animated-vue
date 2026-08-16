<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GloveIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the body of the glove lifts while its detail lines follow
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.8px) rotate(-1deg)', 'translateY(0.45px) rotate(0.5deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const lineVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1.1)', 'scaleX(1)'],
    transition: {
      duration: 0.46,
      delay: 0.12,
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
            <motion.path d="M13.2821 21H12.202C10.2655 21 9.29724 21 8.464 20.5777C7.63076 20.1554 7.04981 19.3703 5.88792 17.8L3.41438 14.4571C2.79576 13.621 2.87779 12.4511 3.60684 11.7121C4.49835 10.8085 5.97278 10.9147 6.72926 11.9371L8.25569 14V9.42066C8.25569 9.03006 8.25569 8.83476 8.26466 8.66978C8.43073 5.61591 10.8365 3.17742 13.8493 3.00909C14.0121 3 14.2048 3 14.5901 3C15.0368 3 15.2602 3 15.44 3.01111C18.8039 3.21885 21.3181 6.22724 20.9673 9.62464C20.9485 9.80626 20.9118 10.0296 20.8384 10.4762L20.0657 15.1752C19.6781 17.5327 19.4843 18.7114 18.8157 19.5373C18.5131 19.9111 18.1461 20.2262 17.7326 20.4673C16.819 21 15.64 21 13.2821 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.06px 12px' }" />
            <motion.path d="M19 17H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
          </svg>
        </div>
</template>
