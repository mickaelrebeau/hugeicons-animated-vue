<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Car04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the car brakes hard: the nose dips over the front wheel and rocks back
// authored from scripts/authored
const bodyVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.58px, 0.44px) rotate(-4deg)',
      'translate(0.18px, -0.12px) rotate(1.2deg)',
      'translate(-0.06px, 0.04px) rotate(-0.4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.66,
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

const body2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.84px, 0.43px) rotate(-4deg)',
      'translate(0.26px, -0.12px) rotate(1.2deg)',
      'translate(-0.09px, 0.04px) rotate(-0.4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.66,
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

const body3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.57px, 0.68px) rotate(-4deg)',
      'translate(0.18px, -0.20px) rotate(1.2deg)',
      'translate(-0.06px, 0.07px) rotate(-0.4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.66,
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

const skidVariants: Variants = {
  normal: { transform: 'translateX(0px)', opacity: 0 },
  animate: {
    transform: [
      'translateX(0px)',
      'translateX(0px)',
      'translateX(-0.32000000000000006px)',
      'translateX(-0.8px)',
      'translateX(-0.8px)',
    ],
    opacity: [0, 0, 1, 0, 0],
    transition: {
      duration: 0.6,
      times: [0, 0.2, 0.46, 0.86, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
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
            <motion.path d="M4.5 11.7073C3.83222 12.0634 3.34135 12.6373 2.98052 13.2888C2.25918 14.591 2.05755 16.2028 2.00119 17.0021C1.98176 17.2775 2.20345 17.5 2.47992 17.5H3.98173M2.98052 13.2888C2.98052 10.144 3.89594 6.34904 5.72678 4.71122C5.88815 4.56686 6.10124 4.5 6.31787 4.5H11.1118C11.6911 4.5 12.2694 4.6171 12.7553 4.93222C13.9539 5.70953 15.7652 7.27971 17.3038 9.68934C17.4311 9.88859 17.6211 10.0398 17.8435 10.1204C18.7292 10.4415 19.7153 10.887 20.3463 11.1839C20.7723 11.3844 21.1116 11.7341 21.273 12.176C21.7174 13.393 21.9682 14.7508 22 16.9994C22.0038 17.2755 21.7793 17.5 21.5028 17.5H20.001M15.9962 17.5H7.98654" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
            <path d="M8 17.5C8 18.6046 7.10457 19.5 6 19.5C4.89543 19.5 4 18.6046 4 17.5C4 16.3954 4.89543 15.5 6 15.5C7.10457 15.5 8 16.3954 8 17.5Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M20 17.5C20 18.6046 19.1046 19.5 18 19.5C16.8954 19.5 16 18.6046 16 17.5C16 16.3954 16.8954 15.5 18 15.5C19.1046 15.5 20 16.3954 20 17.5Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M17.5 10C14.5 9 11 8.5 7 9C7 7 8 5 8.5 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="body2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.3px 7.3px' }" />
            <motion.path d="M8 11H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="body3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 11px' }" />
            <motion.path d="M0.8 19.5H2.6M1.6 17.5H3" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="skidVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
