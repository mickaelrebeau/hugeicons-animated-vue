<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ScanIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the scan line sweeps down and back up between the brackets
// authored from scripts/authored
const scanlineVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -6px)',
      'translate(0px, 6px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 1, times: [0, 0.25, 0.75, 1, 1], ease: [0.77, 0, 0.175, 1] },
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
            <path d="M16.0042 2.5C17.9974 2.61348 19.2576 2.93381 20.1619 3.83811C21.0662 4.74243 21.3865 6.00268 21.5 7.99598M7.99582 2.5C6.00261 2.61348 4.74241 2.93381 3.83812 3.83811C2.9338 4.74243 2.61347 6.00268 2.5 7.99598M21.5 16.004C21.3865 17.9973 21.0662 19.2576 20.1619 20.1619C19.2576 21.0662 17.9973 21.3865 16.004 21.5M2.5 16.004C2.61347 17.9973 2.9338 19.2576 3.83812 20.1619C4.74244 21.0662 6.00268 21.3865 7.99597 21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="scanlineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
