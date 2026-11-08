<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RecoveryMailIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the recovery arrow loops back around and the flap rewrites
// authored from scripts/authored
const flapVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.5,
      delay: 0.14,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const arrowVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(-72deg)',
      'rotate(-251.99999999999997deg)',
      'rotate(-370.8deg)',
      'rotate(-360deg)',
    ],
    transition: {
      duration: 0.86,
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
            <motion.path d="M7 8L9.94202 9.73943C11.6572 10.7535 12.3428 10.7535 14.058 9.73943L17 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flapVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M22 10.0262C21.9346 6.95987 21.9019 5.42671 20.7698 4.29099C19.6378 3.15527 18.0623 3.11571 14.9114 3.03658C12.9693 2.98781 11.0464 2.98781 9.10442 3.03657C5.95344 3.11569 4.37796 3.15525 3.24593 4.29098C2.11391 5.4267 2.0812 6.95986 2.01578 10.0262C1.99474 11.0121 1.99474 11.9922 2.01578 12.9782C2.0812 16.0445 2.11392 17.5777 3.24594 18.7134C4.37796 19.8491 5.95345 19.8887 9.10443 19.9678C9.74025 19.9837 10.374 19.9945 11.0071 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M21.6632 15.9994C21.1015 14.8169 19.8962 13.9994 18.5 13.9994C16.567 13.9994 15 15.5664 15 17.4994C15 19.4323 16.567 20.9994 18.5 20.9994C20.0853 20.9994 21.5695 19.9454 22 18.5M21.6632 15.9994V13.5M21.6632 15.9994L19.4277 16.1574" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 17.2px' }" />
          </svg>
        </div>
</template>
