<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SinkIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// water drips from the faucet into the basin
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.4, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const dropVariants: Variants = {
  normal: { transform: 'translateY(0px)', opacity: 0 },
  animate: {
    transform: [
      'translateY(0px)',
      'translateY(0px)',
      'translateY(2.5px)',
      'translateY(3.5px)',
      'translateY(3.5px)',
    ],
    opacity: [0, 1, 1, 0, 0],
    transition: { duration: 0.8, times: [0, 0.14, 0.4, 0.5, 1], ease: ['linear', 'easeIn', 'linear', 'linear'] },
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
            <motion.path d="M12 14C15.2069 14 17.9143 11.8786 18.7734 8.97359C19.0045 8.192 19.1201 7.80121 18.8177 7.4006C18.5152 7 18.0239 7 17.0413 7H6.9587C5.9761 7 5.4848 7 5.18234 7.4006C4.87988 7.80121 4.99545 8.192 5.22659 8.97359C6.08569 11.8786 8.79306 14 12 14Z" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.5px' }" />
            <path d="M13 7V3.5C13 2.67157 13.6716 2 14.5 2C15.3284 2 16 2.67157 16 3.5V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M10 7V6C10 5.05719 10 4.58579 9.70711 4.29289C9.41421 4 8.94281 4 8 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M14.5 14L14 22M9.5 14L10 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M8 22H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M16 7.5V8.5" stroke-width="1.4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
