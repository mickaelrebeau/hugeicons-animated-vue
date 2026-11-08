<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RollerSkateIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the skate rolls forward trailing speed lines
// authored from scripts/authored
const skateVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.4px, 0px)',
      'translate(-0.21px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
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

const trailVariants: Variants = {
  normal: { transform: 'translateX(0px)', opacity: 0 },
  animate: {
    transform: [
      'translateX(0px)',
      'translateX(0px)',
      'translateX(-0.5599999999999999px)',
      'translateX(-1.4px)',
      'translateX(-1.4px)',
    ],
    opacity: [0, 0, 1, 0, 0],
    transition: {
      duration: 0.7,
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
            <motion.g :variants="skateVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px', transformBox: 'view-box' }">
              <path d="M3.19492 6.02368C5.31124 3.67541 9.43957 2.78906 10.9298 3.04156C11.0938 4.51869 11.9861 8.27344 13.9343 9.88314C15.8824 11.4928 21.5544 11.5 21.9593 13.6517C22.2035 14.9494 21.3319 16 19.7887 16H4.94536C3.80012 16 3.2275 16 2.65133 15.4575C2.07516 14.9149 2.05322 14.5614 2.00932 13.8543C1.92348 12.4718 2.44907 11.2679 2.82834 10.5934C3.56137 9.2898 3.49695 7.5 3.19492 6.02368Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M12.5 8.5L11.5 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M11.5 6L10 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <circle cx="4" cy="19" r="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <circle cx="12" cy="19" r="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <circle cx="20" cy="19" r="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M6 16C6 13.4362 4.7934 11.1977 3 10" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M6 19H10M14 19H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <motion.path d="M1.5 9H0M1.5 12.5H0.5" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="trailVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            </motion.g>
          </svg>
        </div>
</template>
