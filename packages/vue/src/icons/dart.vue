<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DartIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the dart lunges at the board and pulls back
// authored from scripts/authored
const dartVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.6px, 1.6px)',
      'translate(0.24px, -0.24px)',
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
            <motion.path d="M19.5 4.5L22 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dartVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20.8px 3.3px' }" />
            <motion.path d="M2.06697 19.4071C1.99688 18.9866 1.96184 18.7763 2.06329 18.6134C2.16473 18.4506 2.3689 18.3893 2.77723 18.2668L7 17L5.73317 21.2228C5.61067 21.6311 5.54942 21.8353 5.38656 21.9367C5.2237 22.0382 5.01345 22.0031 4.59294 21.933L3.14369 21.6915C2.79801 21.6339 2.62517 21.6051 2.51005 21.49C2.39493 21.3748 2.36612 21.202 2.30851 20.8563L2.06697 19.4071Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dartVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 19.5px' }" />
            <motion.path d="M15 6L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dartVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 7.5px' }" />
            <motion.path d="M8.82023 15.9304L18.6643 9.44706C20.2341 8.41317 20.4597 6.19872 19.1306 4.86948C17.8015 3.54024 15.5873 3.76583 14.5535 5.33581L8.07079 15.1809C7.79101 15.6058 8.40284 16.2053 8.82023 15.9304Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dartVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.1px 9.9px' }" />
            <motion.path d="M7 17L8 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dartVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 16.5px' }" />
          </svg>
        </div>
</template>
