<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PeerToPeer02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the top arrow carries across, the right person bobs, then the bottom arrow returns
// authored from scripts/authored
const headVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.1px)',
      'translate(0px, 0.15400000000000003px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.5,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bodyVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.1px)',
      'translate(0px, 0.15400000000000003px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.22,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const arrowVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.56,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const arrow2Variants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.56,
      delay: 0.28,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M5.52001 3.00001C4.69617 3.00001 4.02832 3.6718 4.02832 4.50049C4.02832 5.32918 4.69617 6.00097 5.52001 6.00097C6.34385 6.00097 7.0117 5.32918 7.0117 4.50049C7.0117 3.6718 6.34385 3.00001 5.52001 3.00001Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 4.5px' }" />
            <motion.path d="M18.4821 21.0002H16.7038C16.4972 21.0002 16.2898 20.97 16.1001 20.8852C15.4826 20.6091 15.1693 20.2446 15.0233 20.0165C14.9402 19.8867 14.9521 19.7215 15.0422 19.5969C15.7576 18.6081 17.4164 18.0108 18.4821 18.0108M18.4852 21.0002H20.2635C20.4701 21.0002 20.6775 20.97 20.8672 20.8852C21.4847 20.6091 21.798 20.2446 21.944 20.0165C22.0271 19.8867 22.0153 19.7215 21.9251 19.5969C21.2097 18.6081 19.5509 18.0108 18.4852 18.0108" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 19.5px' }" />
            <motion.path d="M5.51485 11.4924H3.73649C3.52995 11.4924 3.32254 11.4622 3.13284 11.3774C2.51533 11.1013 2.20203 10.7367 2.05602 10.5087C1.97294 10.3789 1.98477 10.2136 2.07491 10.0891C2.79035 9.10026 4.44914 8.50299 5.51485 8.50294M5.51789 11.4924H7.29625C7.50279 11.4924 7.7102 11.4622 7.8999 11.3774C8.51741 11.1013 8.83071 10.7367 8.97672 10.5087C9.0598 10.3789 9.04797 10.2136 8.95783 10.0891C8.24239 9.10026 6.5836 8.50299 5.51789 8.50294" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 10px' }" />
            <motion.path d="M11.4868 4.00001C14.2995 4.00001 16.7004 4.00001 17.5742 4.87897C18.448 5.75793 18.448 6.67243 18.448 9.50177L16.4591 8.50145" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M11.9842 20.0057C9.1714 20.0057 6.77057 20.0057 5.89676 19.1267C5.02295 18.2477 5.02295 17.3332 5.02295 14.5039L7.01187 15.5042" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrow2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M18.4477 12.5029C17.6239 12.5029 16.9561 13.1748 16.9561 14.0034C16.9561 14.8321 17.6239 15.5039 18.4477 15.5039C19.2716 15.5039 19.9394 14.8321 19.9394 14.0034C19.9394 13.1748 19.2716 12.5029 18.4477 12.5029Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.4px 14px' }" />
          </svg>
        </div>
</template>
