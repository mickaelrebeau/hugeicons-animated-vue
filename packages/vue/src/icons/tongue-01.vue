<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Tongue01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the tongue pokes out and wiggles
// authored from scripts/authored
const tongueVariants: Variants = {
  normal: { transform: 'translateY(0px) rotate(0deg)' },
  animate: {
    transform: [
      'translateY(0px) rotate(0deg)',
      'translateY(1px) rotate(-8deg)',
      'translateY(1px) rotate(8deg)',
      'translateY(0.5px) rotate(-4deg)',
      'translateY(0px) rotate(0deg)',
    ],
    transition: { duration: 0.8, times: [0, 0.2, 0.45, 0.7, 1], ease: 'easeInOut' },
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
            <path d="M15.5 15.8658L14.5 18C15.9945 17.4012 17 16.2819 17 15H7C7 16.2819 8.0055 17.4012 9.5 18L8.5 15.8658" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M9.5 15V19.5C9.5 20.8807 10.6193 22 12 22C13.3807 22 14.5 20.8807 14.5 19.5V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tongueVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18.5px' }" />
            <path d="M6.5 8.8C6.84205 8.31422 7.38662 8 8 8C8.61338 8 9.15795 8.31422 9.5 8.8M14.5 8.8C14.842 8.31422 15.3866 8 16 8C16.6134 8 17.158 8.31422 17.5 8.8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
