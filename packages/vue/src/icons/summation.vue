<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SummationIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the sigma rewrites itself
// authored from scripts/authored
const sigmaVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.7,
      delay: 0,
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
            <motion.path d="M19 17.1429C19 18.6464 19 19.3982 18.6504 19.9471C18.468 20.2333 18.2227 20.4753 17.9325 20.6551C17.3761 21 16.6139 21 15.0895 21H9.19861C6.61368 21 5.32121 21 5.04567 20.2653C4.77014 19.5306 5.75145 18.701 7.71408 17.0417L11.6568 13.7083C12.5958 12.9144 13.0654 12.5174 13.0654 12C13.0654 11.4826 12.5958 11.0856 11.6568 10.2917L7.71408 6.95833C5.75145 5.29902 4.77014 4.46937 5.04567 3.73469C5.32121 3 6.61368 3 9.19861 3H15.0895C16.6139 3 17.3761 3 17.9325 3.34487C18.2227 3.52471 18.468 3.76672 18.6504 4.05293C19 4.60179 19 5.35357 19 6.85714" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sigmaVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
