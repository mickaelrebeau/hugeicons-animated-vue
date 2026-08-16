<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AccountSetting01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cog notches forward one step and the portrait nods as the setting takes
// authored from scripts/authored
const portraitVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(0.5px)', 'translateY(0px)'],
    transition: { duration: 0.56, delay: 0.08, times: [0, 0.4, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const cogVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(20deg)', 'rotate(-4deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.66,
      times: [0, 0.4, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
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
            <motion.path d="M8.49994 16.5C9.19857 15.2923 10.5044 14.4797 11.9999 14.4797C13.4955 14.4797 14.8013 15.2923 15.4999 16.5M14 10C14 11.1046 13.1045 12 12 12C10.8954 12 9.99997 11.1046 9.99997 10C9.99997 8.89543 10.8954 8 12 8C13.1045 8 14 8.89543 14 10Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="portraitVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.5px' }" />
            <motion.path d="M22 13.9669V10.0332C19.1433 10.0332 17.2857 6.93041 18.732 4.46691L15.2679 2.5001C13.8038 4.99405 10.1978 4.99395 8.73363 2.5L5.26953 4.46681C6.71586 6.93035 4.85673 10.0332 2 10.0332V13.9669C4.85668 13.9669 6.71425 17.0697 5.26795 19.5332L8.73205 21.5C10.1969 19.0048 13.8046 19.0047 15.2695 21.4999L18.7336 19.5331C17.2874 17.0696 19.1434 13.9669 22 13.9669Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cogVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
