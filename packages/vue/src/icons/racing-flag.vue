<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RacingFlagIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the checkered flag ripples on its pole
// authored from scripts/authored
const flagVariants: Variants = {
  normal: { transform: 'skewY(0deg)' },
  animate: {
    transform: ['skewY(0deg)', 'skewY(-5deg)', 'skewY(4deg)', 'skewY(-1.5deg)', 'skewY(0deg)'],
    transition: { duration: 0.8, times: [0, 0.24, 0.5, 0.76, 1], ease: [0.77, 0, 0.175, 1] },
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
            <motion.g :variants="flagVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 22px', transformBox: 'view-box' }">
              <path d="M5.67181 13.9095C10 15.9322 14 7.84169 21 11.8869L18 2.78502C13.4239 -0.299918 8.56286 6.85641 3 4.62523L8.00007 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M19 7.00073C13.5 3.00076 9 12.0007 4.5 9.00064" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M8 4.90476L10.8235 13M13.1765 3L16 10.619" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            </motion.g>
          </svg>
        </div>
</template>
