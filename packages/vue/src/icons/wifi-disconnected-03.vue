<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WifiDisconnected03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cross rattles beside the signal
// authored from scripts/authored
const xVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-4deg) scale(0.97)',
      'rotate(3.2deg) scale(1.03)',
      'rotate(-1.2deg) scale(0.995)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.56, times: [0, 0.2, 0.46, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M2 7.81966C4.75011 5.35989 8.31034 4 12 4M5 11.8587C6.86929 10.0264 9.38247 9.00009 12 9.00009M8.5 15.4287C9.43464 14.5125 10.6912 13.9994 12 13.9994C13.3088 13.9994 14.5654 14.5125 15.5 15.4287M12.1256 18.75H12.0006M12.2506 18.75C12.2506 18.8881 12.1387 19 12.0006 19C11.8625 19 11.7506 18.8881 11.7506 18.75C11.7506 18.6119 11.8625 18.5 12.0006 18.5C12.1387 18.5 12.2506 18.6119 12.2506 18.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M16 4L22 10M22 4L16 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="xVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 7px' }" />
          </svg>
        </div>
</template>
