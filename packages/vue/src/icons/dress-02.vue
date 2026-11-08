<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Dress02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the skirt flares out from the waist and settles
// authored from scripts/authored
const waistVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.2, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const skirtVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1.1)',
      'translate(0.00px, 0px) scaleX(0.96)',
      'translate(0.00px, 0px) scaleX(1.02)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.7,
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
            <path d="M9.5 9C8.0449 8.5 7.26946 7.98853 7.5 6C7.62989 4.87968 8 4 7 3L9.5 2C9.66667 3.16667 10.5 4.5 12 5C13.5 4.5 14.3333 3.16667 14.5 2L17 3C16 4 16.3701 4.87968 16.5 6C16.7305 7.98853 15.9551 8.5 14.5 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M8.5 12H15.5C15 11 15 10 15 9H9C9 10 9 11 8.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="waistVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.5px' }" />
            <motion.path d="M16.3124 21.4483C17.5989 22.1839 19.2888 22.1672 20.5946 21.4316C20.9541 21.2254 21.142 20.7479 20.8721 20.4605C18.9447 18.4075 17.4975 15.9016 16.4925 13.3545C16.2273 12.6825 16.0947 12.3465 15.8401 12.1732C15.5855 12 15.2432 12 14.5585 12H9.44152C8.75684 12 8.41451 12 8.1599 12.1732C7.90529 12.3465 7.77271 12.6825 7.50755 13.3545C6.50254 15.9016 5.05527 18.4075 3.12788 20.4605C2.85805 20.7479 3.04595 21.2254 3.40544 21.4316C4.71122 22.1672 6.40105 22.1839 7.68763 21.4483C8.49414 20.9969 9.51189 20.9969 10.2992 21.4483C10.8231 21.7434 11.4622 22 12 22C12.5378 22 13.1769 21.7434 13.7008 21.4483C14.4881 20.9969 15.5059 20.9969 16.3124 21.4483Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="skirtVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17.1px' }" />
          </svg>
        </div>
</template>
