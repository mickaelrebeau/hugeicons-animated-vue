<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TennisRacketIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the racket swings and the ball pops off the strings
// authored from scripts/authored
const racketVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.11px, -1.52px) rotate(-12deg)',
      'translate(1.27px, 1.31px) rotate(8.399999999999999deg)',
      'translate(-0.60px, -0.50px) rotate(-3.5999999999999996deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const ballVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.4px, -1.4px)',
      'translate(-0.21px, 0.21px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.12,
      times: [0, 0.18, 0.46, 0.74, 1],
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
            <motion.path d="M15.5212 14.8395L7.56291 16.438L9.16124 8.4792M18.8695 12.9044C16.3327 15.4414 12.5361 15.7578 10.3896 13.6111C8.24309 11.4644 8.55947 7.6676 11.0963 5.13063C13.6331 2.59366 17.4296 2.27726 19.5762 4.42392C21.7227 6.57059 21.4063 10.3674 18.8695 12.9044ZM7.03298 15.9067L8.09296 16.9668C8.2881 17.1619 8.2881 17.4783 8.09296 17.6735L4.913 20.8536C4.71786 21.0488 4.40148 21.0488 4.20634 20.8536L3.14635 19.7936C2.95122 19.5984 2.95122 19.282 3.14635 19.0869L6.32632 15.9067C6.52146 15.7115 6.83784 15.7115 7.03298 15.9067Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="racketVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.3px 11.7px' }" />
            <motion.path d="M16.5071 7.48413L16.5 7.4912M13.5 10.5003L13.4929 10.5074M16.5 10.5003L16.4929 10.5074M13.5071 7.4924L13.5 7.49947" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ballVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 9px' }" />
          </svg>
        </div>
</template>
