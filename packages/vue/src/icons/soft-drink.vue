<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SoftDrinkIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the straw bobs as someone sips
// authored from scripts/authored
const strawVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.2px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.62, times: [0, 0.18, 0.46, 0.74, 1], ease: 'easeInOut' },
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
            <motion.path d="M12 7V4.34832C12 2.1606 12.3737 1.6318 14.4968 2.22769L18 3.21095" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="strawVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 4.3px' }" />
            <path d="M6 7L7.1398 18.1606C7.31099 19.8368 7.39658 20.6749 7.96796 21.1813C9.1458 22.225 14.7472 22.3198 16.032 21.1813C16.6034 20.6749 16.689 19.8368 16.8602 18.1606L18 7" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M5 7H19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M7 12H17" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M7 16H17" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
