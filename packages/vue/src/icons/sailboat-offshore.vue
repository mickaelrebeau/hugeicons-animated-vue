<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SailboatOffshoreIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the sail fills and the waves roll
// authored from scripts/authored
const sailVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(1.12)', 'scaleX(0.97)', 'scaleX(1)'],
    transition: {
      duration: 0.7,
      times: [0, 0.3, 0.64, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const waterVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1px, 0px)',
      'translate(-1px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.9, times: [0, 0.18, 0.46, 0.74, 1], ease: [0.77, 0, 0.175, 1] },
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
            <path d="M6 19C4.59373 18.0625 3.80546 16.9647 3.39377 15.9482C3.10599 15.2376 2.96211 14.8823 3.2594 14.4411C3.55669 14 4.0378 14 5 14L19 14C19.9622 14 20.4433 14 20.7406 14.4411C21.0379 14.8823 20.894 15.2376 20.6062 15.9482C20.1945 16.9647 19.4063 18.0625 18 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M15.1049 3.67393L17.0016 6.92522C17.7979 8.29018 18.1961 8.97266 17.9047 9.48633C17.6133 10 16.8281 10 15.2575 10L10.326 10C8.32157 10 7.31937 10 7.05561 9.38447C6.79185 8.76895 7.47873 8.03307 8.85247 6.56134L11.8873 3.31006C12.7349 2.40195 13.1587 1.9479 13.6615 2.00476C14.1643 2.06161 14.4778 2.59905 15.1049 3.67393Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="sailVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 6px' }" />
            <path d="M14 14L14 3" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M2 21.6083C2.79944 22.106 3.83288 22.106 4.65182 21.6083C5.95823 20.7972 7.6546 20.7972 8.9805 21.6083C8.9805 21.6267 9.00001 21.6267 9.00001 21.6267C9.79945 22.1244 10.8524 22.1244 11.6518 21.6267C12.9777 20.8157 14.6741 20.8157 16 21.6267C16.7994 22.1244 17.8329 22.106 18.6518 21.6083C19.6529 20.9868 20.8831 20.8415 22 21.1726" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="waterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21.5px' }" />
          </svg>
        </div>
</template>
