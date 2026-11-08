<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Kaaba01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the gold band shimmers across the cube
// authored from scripts/authored
const bandVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const shimmerVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.2, 1, 0.2, 1, 1],
    transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <path d="M3 22V5.9907C3 5.25783 3 4.8914 3.20387 4.62261C3.40774 4.35383 3.76006 4.25575 4.46471 4.0596L11.4647 2.11106C11.7307 2.03702 11.8637 2 12 2C12.1363 2 12.2693 2.03702 12.5353 2.11106L19.5353 4.0596C20.2399 4.25575 20.5923 4.35383 20.7961 4.62261C21 4.8914 21 5.25783 21 5.9907V22" stroke="currentColor" stroke-width="1.5" />
            <path d="M2 22H22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M3 9L11.5661 7.04882C11.8519 6.98373 12.1481 6.98373 12.4339 7.04882L21 9" stroke="currentColor" stroke-width="1.5" :variants="bandVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19.65 12.7L21 13M15.6 11.8L16.5 12M12.9 11.2L12 11L11.1 11.2M4.35 12.7L3 13M8.4 11.8L7.5 12" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="shimmerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M12 7V22" stroke="currentColor" stroke-width="1.5" />
          </svg>
        </div>
</template>
