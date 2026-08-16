<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Agreement03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the hand lifts and presses the seal down onto the page, which takes the weight
// authored from scripts/authored
const sealVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1.5px)', 'translateY(0.5px)', 'translateY(0px)'],
    transition: {
      duration: 0.74,
      times: [0, 0.32, 0.62, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        'easeIn',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const pageVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1)', 'scale(0.978)', 'scale(1)'],
    transition: {
      duration: 0.76,
      times: [0, 0.56, 0.7, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const foldVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1)', 'scale(0.96)', 'scale(1)'],
    transition: {
      duration: 0.76,
      times: [0, 0.56, 0.7, 1],
      ease: [
        'linear',
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
            <motion.path d="M9 22C9.35984 22 10.6908 21.3926 12.0494 20.1778M12.0494 20.1778C13.2078 19.1419 14.3863 17.6643 15 15.7452C16.3333 11.5753 8.33333 15.7452 11 19.2201C11.3281 19.6476 11.6815 19.9601 12.0494 20.1778ZM12.0494 20.1778C13.6521 21.1259 15.5311 20.274 16.8041 19.2944C17.1932 18.995 17.3877 18.8453 17.5038 18.8919C17.62 18.9385 17.6878 19.2064 17.8236 19.7422C18.2581 21.4569 19.5415 22.841 21 20.6105" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sealVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.7px 22.8px' }" />
            <motion.path d="M20 13L20 7.89072C20 6.17637 20 5.31919 19.732 4.63459C19.3013 3.53399 18.3902 2.66585 17.2352 2.25535C16.5168 2 15.6173 2 13.8182 2C10.6698 2 9.09563 2 7.83836 2.44686C5.81714 3.16523 4.22281 4.68448 3.46894 6.61052C3 7.80859 3 9.30864 3 12.3088L3 14.8859C3 17.9936 3 19.5474 3.8477 20.6265C4.09058 20.9356 4.37862 21.2101 4.70307 21.4416C5.07016 21.7034 5.48961 21.8804 6 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pageVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 22px' }" />
            <motion.path d="M3 12C3 10.159 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="foldVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 2px' }" />
          </svg>
        </div>
</template>
