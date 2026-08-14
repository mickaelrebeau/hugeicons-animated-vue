<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CompassIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// finding north: the needle whips a full turn, overshoots, and settles
// with a navigator's confidence
const needleVariants: Variants = {
  normal: { rotate: 0, transition: { duration: 0.4 } },
  animate: {
    rotate: [0, 150, 340, 375, 360],
    transition: {
      duration: 1.4,
      ease: 'easeInOut',
      times: [0, 0.3, 0.62, 0.82, 1],
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
            <circle cx="12" cy="13" r="9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M12 3.5V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M10 2H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M14.7728 10.2571C15.5061 10.9837 14.3328 16.8933 13.1289 16.9974C12.1189 17.0848 11.8041 15.0928 11.5914 14.4614C11.3815 13.8383 11.1478 13.6139 10.5298 13.4095C8.95989 12.8901 8.17492 12.6304 8.0195 12.2192C7.60796 11.1304 13.8362 9.32902 14.7728 10.2571Z" stroke="currentColor" stroke-width="1.5" :variants="needleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
          </svg>
        </div>
</template>
