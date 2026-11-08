<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CircleLockMinusIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the minus squeezes short and springs back to length
// authored from scripts/authored
const minusVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(0.3)',
      'translate(0.00px, 0px) scaleX(1.12)',
      'translate(0.00px, 0px) scaleX(0.98)',
      'translate(0.00px, 0px) scaleX(1)',
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
            <path d="M11 22C7.06358 22.0975 4 18.8075 4 15C4 11.134 7.11877 8 10.966 8C13.5444 8 15.7956 9.4077 17 11.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M15.5 9.5V6.5C15.5 4.01472 13.4853 2 11 2C8.51472 2 6.5 4.01472 6.5 6.5V9.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M12 17H20" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="minusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 17px' }" />
          </svg>
        </div>
</template>
