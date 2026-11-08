<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HandPointingLeft01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the hand nudges to the left
// authored from scripts/authored
const handVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(-2px, 0px)', 'translate(0.24px, 0px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
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
            <motion.path d="M21.9986 8.83415H21.0513C20.4058 8.83415 19.7775 8.62541 19.2595 8.23886L14.3566 4.58042C13.7911 4.15849 13.0896 3.82148 12.4419 4.10005C11.3935 4.551 10.7124 5.82324 12.2843 7.38045L13.9937 8.97804L3.57057 8.97804C1.52742 9.03427 1.42614 12.3231 3.57057 12.4637H9.5106C9.31946 13.9441 10.3629 20.9177 14.7831 19.9012C14.9931 19.8529 15.2063 19.8047 15.4165 19.7576C16.3353 19.5519 17.9727 18.9439 18.93 18.2735C19.9266 17.5755 21.5155 17.8218 22 17.8218" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.7px 12.4px' }" />
          </svg>
        </div>
</template>
