<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DrumstickIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the drumstick waggles and steam rises off it
// authored from scripts/authored
const boneVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.70px, 0.25px) rotate(-10deg)',
      'translate(-0.40px, -0.21px) rotate(6deg)',
      'translate(0.14px, 0.06px) rotate(-2deg)',
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

const meatVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.07px, -1.22px) rotate(-10deg)',
      'translate(0.53px, 0.81px) rotate(6deg)',
      'translate(-0.20px, -0.26px) rotate(-2deg)',
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

const steamVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(0.4)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, 0px) scale(0.4)',
      'translate(0.2px, -0.9px) scale(1)',
      'translate(0.4px, -1.8px) scale(1.5)',
    ],
    opacity: [0, 0, 0.9, 0],
    transition: {
      duration: 0.8,
      delay: 0.1,
      times: [0, 0.16, 0.42, 1],
      ease: [
        'linear',
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
            <motion.path d="M8.34418 13.502L6.18467 15.6615C5.91706 15.9291 5.78326 16.0629 5.64866 16.0971C5.51405 16.1314 5.21268 16.0424 4.60995 15.8644C3.91887 15.6604 3.14068 15.831 2.59531 16.3764C1.80156 17.1701 1.80156 18.4571 2.59531 19.2508C2.73518 19.3907 2.89034 19.5056 3.05542 19.5959C3.59339 19.8899 3.86237 20.037 3.91368 20.0883C3.965 20.1396 4.11202 20.4086 4.40606 20.9465C4.4963 21.1116 4.61127 21.2668 4.75114 21.4066C5.54489 22.2004 6.83182 22.2004 7.62557 21.4066C8.17095 20.8613 8.3416 20.083 8.13753 19.392C7.95956 18.7893 7.87057 18.4879 7.90482 18.3533C7.93906 18.2187 8.07286 18.0849 8.34046 17.8173L10.5 15.6578" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="boneVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.2px 17.9px' }" />
            <motion.path d="M20.7098 11.8436C22.6777 9.87571 22.3586 6.36615 19.9972 4.00473C17.6358 1.64332 14.1262 1.32427 12.1584 3.29211C11.9516 3.49888 11.7701 3.72266 11.6136 3.96035C10.3404 5.89332 10.3567 8.47896 9.29448 10.5354L8.80766 11.478C8.25672 12.5446 8.45902 13.8451 9.30792 14.694C10.1568 15.5429 11.4573 15.7452 12.524 15.1943L13.4665 14.7075C15.523 13.6453 18.1086 13.6616 20.0416 12.3884C20.2793 12.2318 20.5031 12.0503 20.7098 11.8436Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="meatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 8.5px' }" />
            <motion.circle cx="18" cy="3" r="0.7" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="steamVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
