<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Upload05Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the lid lifts and the arrow leaves through the top
// authored from scripts/authored
const lidVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0.18px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const fallVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(0px, -4px)', 'translate(0px, 4px)', 'translate(0px, 0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.7,
      delay: 0.1,
      times: [0, 0.4, 0.42, 1],
      ease: [
        'easeIn',
        'linear',
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
            <path d="M2.50006 13.5V6.5H21.5001V13.5C21.5001 17.2712 21.5001 19.1569 20.3285 20.3284C19.1569 21.5 17.2713 21.5 13.5001 21.5H10.5001C6.72883 21.5 4.84321 21.5 3.67163 20.3284C2.50006 19.1569 2.50006 17.2712 2.50006 13.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M2.50006 6.5L3.10006 5.7C4.27777 4.12972 4.86662 3.34458 5.71121 2.92229C6.55579 2.5 7.53721 2.5 9.50006 2.5H14.5001C16.4629 2.5 17.4443 2.5 18.2889 2.92229C19.1335 3.34458 19.7224 4.12972 20.9001 5.7L21.5001 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lidVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.5px' }" />
            <motion.path d="M15.0001 13.5C15.0001 13.5 12.7906 10.5 12 10.5C11.2095 10.5 9.00006 13.5 9.00006 13.5M12 11L12.0001 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fallVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
          </svg>
        </div>
</template>
