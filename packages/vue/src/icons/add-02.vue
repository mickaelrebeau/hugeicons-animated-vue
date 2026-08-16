<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Add02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the solid mark twists down and springs back to true
// authored from scripts/authored
const markVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-16deg) scale(0.78)',
      'rotate(5deg) scale(1.1)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.52, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M12.001 20.0088C12.8289 20.0088 13.5 19.3377 13.5 18.5098V13.5068H18.502C19.3295 13.5068 20.0004 12.8363 20.001 12.0088C20.0015 11.1805 19.3302 10.5088 18.502 10.5088H13.5V5.50684C13.5 4.67933 12.8295 4.00835 12.002 4.00781C11.1737 4.00727 10.502 4.67857 10.502 5.50684V10.5088H5.49902C4.67114 10.5088 4 11.1799 4 12.0078C4 12.8357 4.67114 13.5068 5.49902 13.5068H10.502V18.5098C10.502 19.3377 11.1731 20.0088 12.001 20.0088Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
