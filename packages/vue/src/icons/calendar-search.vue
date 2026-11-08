<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CalendarSearchIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the loupe hunts across the corner, then settles
// authored from scripts/authored
const loupeVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0px) rotate(0deg)',
      'translate(-1.6px, -1.2px) rotate(-12deg)',
      'translate(1.5px, 0.4px) rotate(10deg)',
      'translate(-0.4px, 1.3px) rotate(-4deg)',
      'translate(0px, 0px) rotate(0deg)',
    ],
    transition: { duration: 0.78, times: [0, 0.24, 0.48, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M20 20.5L21.5 22M20.5 18C20.5 19.6569 19.1569 21 17.5 21C15.8431 21 14.5 19.6569 14.5 18C14.5 16.3431 15.8431 15 17.5 15C19.1569 15 20.5 16.3431 20.5 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="loupeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 18.5px' }" />
            <path d="M15.5 2V6M7.5 2V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M2.5 10H20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M20.5 12C20.5 8.22876 20.5 6.34315 19.3284 5.17157C18.1569 4 16.2712 4 12.5 4H10.5C6.72876 4 4.84315 4 3.67157 5.17157C2.5 6.34315 2.5 8.22876 2.5 12V14C2.5 17.7712 2.5 19.6569 3.67157 20.8284C4.84315 22 6.72876 22 10.5 22H11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
