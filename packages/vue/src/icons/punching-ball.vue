<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PunchingBallIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bag swings from its hook after a hit
// authored from scripts/authored
const bagVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.08px, -0.18px) rotate(10deg)',
      'translate(1.46px, -0.09px) rotate(-7deg)',
      'translate(-0.63px, -0.02px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.86,
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

const bag2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.78px, -0.24px) rotate(10deg)',
      'translate(1.95px, -0.12px) rotate(-7deg)',
      'translate(-0.84px, -0.02px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.86,
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

const bag3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.22px, -0.11px) rotate(10deg)',
      'translate(0.85px, -0.05px) rotate(-7deg)',
      'translate(-0.37px, -0.01px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.86,
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
            <motion.path d="M12.002 22C8.4121 22 5.50195 19.8177 5.50195 16.5095C5.50195 13.6609 7.9118 11.6468 9.27297 7.95509C9.4458 7.48634 9.53222 7.25196 9.59859 7.1298C9.95355 6.47644 10.4553 6.14521 11.2407 6.04564C11.7205 5.98482 12.2832 5.98478 12.7629 6.04554C13.5485 6.14503 14.0503 6.47626 14.4054 7.12968C14.4717 7.25185 14.5582 7.48626 14.731 7.95508C16.0922 11.6466 18.502 13.6606 18.502 16.5092C18.502 19.8174 15.5918 22 12.002 22Z" stroke="currentColor" stroke-width="1.5" :variants="bagVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M9.95495 14C8.93192 15.7778 9.65332 22 12.0009 22C14.3463 22 15.0741 15.7778 14.0487 14" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bag2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <path d="M12 6V3.5M12 3.5L12.9153 3.27116C13.6038 3.09905 14.1826 2.63471 14.5 2M12 3.5L11.0847 3.27116C10.3962 3.09905 9.81735 2.63471 9.5 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M15.002 9H9.00195" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bag3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
          </svg>
        </div>
</template>
