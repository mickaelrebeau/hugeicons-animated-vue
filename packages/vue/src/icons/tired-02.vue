<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Tired02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the heavy eyelids blink slowly and the mouth yawns
// authored from scripts/authored
const lidsVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.3, 1, 1],
    transition: { duration: 0.9, times: [0, 0.4, 0.8, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const mouthVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.14,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M8 8C8.42317 8.31737 9.19208 8.70974 9.28942 9.34118C9.29507 9.37783 9.2989 9.41481 9.30089 9.45195C9.32383 9.88051 9.01424 10.2537 8.39506 11M16 8C15.5768 8.31738 14.8079 8.70974 14.7106 9.34118C14.7049 9.37783 14.7011 9.41481 14.6991 9.45195C14.6762 9.88051 14.9858 10.2537 15.6049 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lidsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.5px' }" />
            <motion.path d="M12 13.5C13.6732 13.5 15.1098 14.4559 15.7297 15.8205C15.9802 16.3718 16.1055 16.6475 15.8889 16.8748C15.6723 17.1022 15.2907 16.9913 14.5274 16.7696C13.8039 16.5595 12.9019 16.3703 12 16.3703C11.0981 16.3703 10.1961 16.5595 9.47257 16.7696C8.70933 16.9913 8.32771 17.1022 8.11112 16.8748C7.89454 16.6475 8.01978 16.3718 8.27026 15.8205C8.89021 14.4559 10.3268 13.5 12 13.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="mouthVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.3px' }" />
          </svg>
        </div>
</template>
