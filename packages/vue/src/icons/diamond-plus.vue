<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DiamondPlusIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after add-circle: the existing shape makes room and the new mark stamps into place
// generated from @hugeicons/core-free-icons
const frameVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.96)', 'scale(1.025)', 'scale(1)'],
    transition: {
      duration: 0.48,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const plusVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-9.81deg) scale(0.82)', 'rotate(2.94deg) scale(1.08)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.41,
      delay: 0.04,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

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
            <motion.path d="M2.00406 12.1864C2.07656 13.8499 3.42215 15.1955 6.11333 17.8867C8.80451 20.5778 10.1501 21.9234 11.8136 21.9959C11.9378 22.0014 12.0622 22.0014 12.1864 21.9959C13.8499 21.9234 15.1955 20.5778 17.8867 17.8867C20.5778 15.1955 21.9234 13.8499 21.9959 12.1864C22.0014 12.0622 22.0014 11.9378 21.9959 11.8136C21.9234 10.1501 20.5778 8.80451 17.8867 6.11333C15.1955 3.42215 13.8499 2.07656 12.1864 2.00406C12.0622 1.99865 11.9378 1.99865 11.8136 2.00406C10.1501 2.07656 8.80451 3.42215 6.11333 6.11333C3.42215 8.80451 2.07656 10.1501 2.00406 11.8136C1.99865 11.9378 1.99865 12.0622 2.00406 12.1864Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8 12.0007H16M11.995 16.0059L11.995 8.00586" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.01px' }" />
          </svg>
        </div>
</template>
