<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArcBrowserIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the three colour arcs chase each other around the mark, then the stem plants
// authored from scripts/authored
const arcLeftVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(2deg)', 'rotate(0deg)'],
    transition: { duration: 0.6, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const arcRightVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(10deg)', 'rotate(-2deg)', 'rotate(0deg)'],
    transition: { duration: 0.6, delay: 0.06, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const bladeVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-6deg) scale(0.94)',
      'rotate(2deg) scale(1.03)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.62, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const stemVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.48, delay: 0.18, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M13.5061 13.6018C12.905 13.788 12.2654 13.8885 11.602 13.8885C9.12036 13.8885 6.96846 12.4842 5.93046 10.431C5.48592 9.55161 4.39999 9.19282 3.50496 9.62957C2.60993 10.0663 2.24474 11.1332 2.68928 12.0126C4.3146 15.2277 7.69305 17.444 11.602 17.444C12.8475 17.444 14.0394 17.2191 15.138 16.8084" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.7px 13.3px' }" />
            <motion.path d="M18.2384 14.9501C20.013 13.3865 21.2128 11.2053 21.4889 8.75026C21.5987 7.77436 20.8824 6.89583 19.8891 6.78801C18.8958 6.68019 18.0016 7.38391 17.8919 8.35981C17.7555 9.57212 17.2644 10.6794 16.5229 11.5793" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.1px 10.8px' }" />
            <motion.path d="M11.5473 3.99976C12.2327 3.99976 12.8592 4.38021 13.1658 4.98249L19.4989 17.427C19.9458 18.3052 19.5835 19.373 18.6897 19.8121C17.7958 20.2512 16.7089 19.8953 16.262 19.0171L11.5473 9.75278L9.6037 13.5719C8.41018 13.1819 7.37371 12.4516 6.61386 11.4964L9.92887 4.98249C10.2354 4.38021 10.8619 3.99976 11.5473 3.99976Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bladeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.3px 12.1px' }" />
            <motion.path d="M6.8326 19.0171C6.38568 19.8953 5.29878 20.2512 4.40494 19.8121C3.5111 19.373 3.1488 18.3052 3.59572 17.427L4.89047 14.8828C5.78379 15.686 6.82705 16.3313 7.97447 16.7733L6.8326 19.0171Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stemVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.6px 17.6px' }" />
          </svg>
        </div>
</template>
