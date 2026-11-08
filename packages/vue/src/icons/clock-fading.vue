<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ClockFadingIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the fading ring spins while the hands sweep around
// authored from scripts/authored
const ringVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(72deg)',
      'rotate(251.99999999999997deg)',
      'rotate(370.8deg)',
      'rotate(360deg)',
    ],
    transition: {
      duration: 1,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const handsVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.52px, 3.28px) rotate(72deg)',
      'translate(-4.52px, 0.72px) rotate(252deg)',
      'translate(0.34px, 0.41px) rotate(370.8deg)',
      'translate(-0.00px, -0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
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
            <motion.path d="M5.43823 19.5496C6.54888 20.5162 7.89133 21.2512 9.40963 21.6576C10.2751 21.8893 11.1446 22 12 22M16.5374 20.906C17.6966 20.3145 18.7389 19.4992 19.5953 18.5M21.6561 14.5847C21.9352 13.5441 22.0395 12.4978 21.9868 11.4771M20.9103 7.46053C20.699 7.04586 20.4591 6.64615 20.1924 6.26456M16.4698 3.05251C15.8798 2.7588 15.2517 2.51942 14.5904 2.34238C9.25745 0.914877 3.77452 4.08152 2.3439 9.41528C1.78336 11.5051 1.92809 13.6176 2.63227 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ringVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.9px 11.5px' }" />
            <motion.path d="M12 6V12L16 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 10px' }" />
          </svg>
        </div>
</template>
