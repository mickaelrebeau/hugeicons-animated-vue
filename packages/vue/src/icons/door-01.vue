<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Door01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the door swings open on its hinge and shuts
// authored from scripts/authored
const doorVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(-2.47px, 0px) scaleX(0.55)',
      'translate(-2.47px, 0px) scaleX(0.55)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.76,
      times: [0, 0.3, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.77, 0, 0.175, 1],
      ],
    },
  },
};

const door2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(-3.37px, 0px) scaleX(0.55)',
      'translate(-3.37px, 0px) scaleX(0.55)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.76,
      times: [0, 0.3, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.77, 0, 0.175, 1],
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
            <path d="M18 20C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M4 6.84771V17.1523C4 18.7454 4 19.542 4.4645 20.0976C4.92899 20.6531 5.71415 20.7956 7.28446 21.0806L10.2845 21.6251C12.4701 22.0217 13.563 22.2201 14.2815 21.6215C15 21.023 15 19.9142 15 17.6968V6.30325C15 4.08578 15 2.97704 14.2815 2.37849C13.563 1.77994 12.4701 1.97827 10.2845 2.37495L7.28446 2.91941C5.71415 3.2044 4.92899 3.34689 4.4645 3.90244C4 4.45799 4 5.25457 4 6.84771Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="doorVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 12px' }" />
            <motion.path d="M11.625 12H11.5M11.75 12C11.75 12.1381 11.6381 12.25 11.5 12.25C11.3619 12.25 11.25 12.1381 11.25 12C11.25 11.8619 11.3619 11.75 11.5 11.75C11.6381 11.75 11.75 11.8619 11.75 12Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="door2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 12px' }" />
          </svg>
        </div>
</template>
