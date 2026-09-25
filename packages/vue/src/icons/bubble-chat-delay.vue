<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BubbleChatDelayIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the clock hands sweep one full turn inside the still bubble
// authored from scripts/authored
const handsVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.01px, 0.01px) rotate(0.35deg)',
      'translate(0.07px, 0.08px) rotate(2.81deg)',
      'translate(0.23px, 0.27px) rotate(9.49deg)',
      'translate(0.46px, 0.69px) rotate(22.5deg)',
      'translate(0.62px, 1.46px) rotate(43.95deg)',
      'translate(0.32px, 2.59px) rotate(75.94deg)',
      'translate(-0.97px, 3.55px) rotate(120.59deg)',
      'translate(-3.00px, 3.00px) rotate(180deg)',
      'translate(-3.55px, 0.97px) rotate(239.41deg)',
      'translate(-2.59px, -0.32px) rotate(284.06deg)',
      'translate(-1.46px, -0.62px) rotate(316.05deg)',
      'translate(-0.69px, -0.46px) rotate(337.5deg)',
      'translate(-0.27px, -0.23px) rotate(350.51deg)',
      'translate(-0.08px, -0.07px) rotate(357.19deg)',
      'translate(-0.01px, -0.01px) rotate(359.65deg)',
      'translate(-0.00px, -0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 1,
      times: [
        0,
        0.0625,
        0.125,
        0.1875,
        0.25,
        0.3125,
        0.375,
        0.4375,
        0.5,
        0.5625,
        0.625,
        0.6875,
        0.75,
        0.8125,
        0.875,
        0.9375,
        1,
      ],
      ease: [
        'linear',
        'linear',
        'linear',
        'linear',
        'linear',
        'linear',
        'linear',
        'linear',
        'linear',
        'linear',
        'linear',
        'linear',
        'linear',
        'linear',
        'linear',
        'linear',
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
            <path d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C10.3719 21.5 8.8394 21.0904 7.5 20.3687C5.63177 19.362 4.37462 20.2979 3.26592 20.4658C3.09774 20.4913 2.93024 20.4302 2.80997 20.31C2.62741 20.1274 2.59266 19.8451 2.6935 19.6074C3.12865 18.5818 3.5282 16.6382 2.98341 15C2.6698 14.057 2.5 13.0483 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 7V12L15 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 10.5px' }" />
          </svg>
        </div>
</template>
