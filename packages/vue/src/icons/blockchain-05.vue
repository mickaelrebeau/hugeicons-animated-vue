<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Blockchain05Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the crystal sits onto the still dock
// authored from scripts/authored
const crystalVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.8px)',
      'translate(0px, -0.25200000000000006px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.12, 0.62, 1],
      ease: [
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
            <motion.path d="M12 17C12.2269 17 12.4378 16.894 12.8595 16.682L16.2497 14.978C17.7499 14.224 18.5 13.847 18.5 13.25V5.75M12 17C11.7731 17 11.5623 16.894 11.1405 16.682L7.75027 14.978C6.25009 14.224 5.5 13.847 5.5 13.25V5.75M12 17V9.5M5.5 5.75C5.5 6.34702 6.25009 6.72403 7.75027 7.47804L11.1405 9.18201C11.5623 9.394 11.7731 9.5 12 9.5C12.2269 9.5 12.4377 9.394 12.8595 9.18201L16.2497 7.47804C17.7499 6.72403 18.5 6.34702 18.5 5.75C18.5 5.15298 17.7499 4.77597 16.2497 4.02196L12.8595 2.31799C12.4377 2.106 12.2269 2 12 2C11.7731 2 11.5623 2.106 11.1405 2.31799L7.75027 4.02196C6.25009 4.77597 5.5 5.15298 5.5 5.75Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="crystalVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.5px' }" />
            <path d="M10 20.75C10 20.0596 10.5596 19.5 11.25 19.5H12.75C13.4404 19.5 14 20.0596 14 20.75M10 20.75C10 21.4404 10.5596 22 11.25 22H12.75C13.4404 22 14 21.4404 14 20.75M10 20.75H5M14 20.75H19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
