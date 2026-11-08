<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FlagTriangleLeftIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pennant waves from the pole
// authored from scripts/authored
const flagVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1) skewY(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1) skewY(0deg)',
      'translate(0.50px, 0px) scaleX(0.92) skewY(6deg)',
      'translate(-0.19px, 0px) scaleX(1.03) skewY(-4deg)',
      'translate(0.13px, 0px) scaleX(0.98) skewY(2deg)',
      'translate(0.00px, 0px) scaleX(1) skewY(0deg)',
    ],
    transition: { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
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
            <path d="M18.25 9V17.4118V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M9.25927 5.43925L13.9953 3.12627C15.9058 2.19322 16.861 1.72669 17.5555 2.16767C18.25 2.60865 18.25 3.68174 18.25 5.82793V15.5484L9.18611 10.8056C6.88701 9.60252 5.73746 9.001 5.7501 8.07394C5.76274 7.14688 6.92825 6.57767 9.25927 5.43925Z" stroke="currentColor" stroke-width="1.5" :variants="flagVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.6px' }" />
          </svg>
        </div>
</template>
