<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CopyXIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the X rattles on the front sheet
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
            <path d="M13 2.00195C10.1716 2.00195 8.75736 2.00195 7.87868 2.88063C7 3.75931 7 5.17353 7 8.00195V12.002C7 14.8304 7 16.2446 7.87868 17.1233C8.75736 18.002 10.1716 18.002 13 18.002H15C17.8284 18.002 19.2426 18.002 20.1213 17.1233C21 16.2446 21 14.8304 21 12.002V8.00195C21 5.17353 21 3.75931 20.1213 2.88063C19.2426 2.00195 17.8284 2.00195 15 2.00195H13Z" stroke="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M11.5 7.50195L16.5 12.502M16.5 7.50195L11.5 12.502" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="xVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 10px' }" />
            <path d="M17 22.002H9C6.17157 22.002 4.75736 22.002 3.87868 21.1233C3 20.2446 3 18.8304 3 16.002V6.00195" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
