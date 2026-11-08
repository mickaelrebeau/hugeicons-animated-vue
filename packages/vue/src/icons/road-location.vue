<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RoadLocationIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pin hops above the road
// authored from scripts/authored
const pinVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.6px)',
      'translate(0px, 0.22400000000000003px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <path d="M19 16L17 16M13 16L11 16M7 16L5 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M16 5.85058C16 8.525 13.0435 10.466 12.214 10.9424C12.0802 11.0192 11.9198 11.0192 11.786 10.9424C10.9565 10.466 8 8.525 8 5.85058C8 3.8 9.79086 2 12 2C14.2091 2 16 3.8 16 5.85058Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6.5px' }" />
            <path d="M18 10C19.5534 10.0469 20.48 10.2204 21.1213 10.8626C22 11.7426 22 13.1588 22 15.9913C22 18.8238 22 20.2401 21.1213 21.1201C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1201C2 20.2401 2 18.8238 2 15.9913C2 13.1588 2 11.7426 2.87868 10.8626C3.51998 10.2204 4.44655 10.0469 6 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12.1348 6H12.0098M12.2598 6C12.2598 6.13807 12.1478 6.25 12.0098 6.25C11.8717 6.25 11.7598 6.13807 11.7598 6C11.7598 5.86193 11.8717 5.75 12.0098 5.75C12.1478 5.75 12.2598 5.86193 12.2598 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6px' }" />
          </svg>
        </div>
</template>
