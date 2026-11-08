<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CreditCardChangeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the exchange arrows chase each other a full turn
// authored from scripts/authored
const arrowsVariants: Variants = {
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
      duration: 0.9,
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
            <path d="M22 9.5C21.9635 7.24771 21.7892 5.94656 20.9564 5.0129C20.7879 4.82403 20.6022 4.64935 20.4014 4.49087C19.1461 3.5 17.2659 3.5 13.5056 3.5H10.5041C6.74371 3.5 4.86352 3.5 3.60823 4.49087C3.40746 4.64935 3.22178 4.82403 3.05331 5.0129C2 6.19377 2 7.96252 2 11.5C2 15.0375 2 16.8062 3.05331 17.9871C3.22178 18.176 3.40746 18.3506 3.60823 18.5091C4.86352 19.5 6.74371 19.5 10.5041 19.5H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M2 8.5H22" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M19.3333 12.5L20.1565 13.2579C20.3357 13.434 20.4253 13.5221 20.3938 13.5969C20.3622 13.6717 20.2355 13.6717 19.9821 13.6717H16.8777C15.2884 13.6717 14 14.938 14 16.5C14 16.8521 14.0655 17.1891 14.185 17.5M16.6667 20.5L15.8435 19.7421C15.6643 19.566 15.5747 19.4779 15.6062 19.4031C15.6378 19.3283 15.7645 19.3283 16.0179 19.3283H19.1223C20.7116 19.3283 22 18.062 22 16.5C22 16.1479 21.9345 15.8109 21.815 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 16.5px' }" />
          </svg>
        </div>
</template>
