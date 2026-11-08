<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Lamp03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pull chain is tugged and the shade lights
// authored from scripts/authored
const shadeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.05)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.2,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const chainVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.60px) scaleY(1.4)',
      'translate(0px, -0.15px) scaleY(0.9)',
      'translate(0px, 0.06px) scaleY(1.04)',
      'translate(0px, 0.00px) scaleY(1)',
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

const burstVariants: Variants = {
  normal: { transform: 'scale(0.4)', opacity: 0 },
  animate: {
    transform: ['scale(0.4)', 'scale(0.4)', 'scale(1)', 'scale(1.22)'],
    opacity: [0, 0, 1, 0],
    transition: {
      duration: 0.7,
      delay: 0.24,
      times: [0, 0.3, 0.46, 1],
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
            <motion.path d="M14.5936 10H9.40637C7.51043 10 6.56247 10 6.16052 9.45157C5.75858 8.90313 6.14759 8.14046 6.92562 6.61512L8.31723 3.88683C8.78446 2.97081 9.01808 2.5128 9.46755 2.2564C9.91703 2 10.4863 2 11.6249 2H12.3751C13.5137 2 14.083 2 14.5324 2.2564C14.9819 2.5128 15.2155 2.97081 15.6828 3.88683L17.0744 6.61512C17.8524 8.14046 18.2414 8.90313 17.8395 9.45157C17.4375 10 16.4896 10 14.5936 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shadeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6px' }" />
            <path d="M12 10V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M8 22H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M9 22L9.36754 20.8974C9.64721 20.0584 9.78704 19.6389 10.094 19.3706C10.1647 19.3088 10.2409 19.2539 10.3218 19.2064C10.6734 19 11.1156 19 12 19C12.8844 19 13.3266 19 13.6782 19.2064C13.7591 19.2539 13.8353 19.3088 13.906 19.3706C14.213 19.6389 14.3528 20.0584 14.6325 20.8974L15 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M15.5 10V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="chainVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 11.5px' }" />
            <motion.path d="M18.06 9.5L19.36 10.25M12 13L12 14.5M5.94 9.5L4.64 10.25M5.94 2.5L4.64 1.75M12 -1L12 -2.5M18.06 2.5L19.36 1.75" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="burstVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
