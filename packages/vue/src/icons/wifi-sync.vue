<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WifiSyncIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the sync arrows turn once under the signal
// authored from scripts/authored
const syncVariants: Variants = {
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
            <path d="M2 7.81966C4.75011 5.35989 8.31034 4 12 4C15.6897 4 19.2499 5.35989 22 7.81966M5 11.8587C6.38599 10.5001 8.12597 9.58466 10 9.20209M8.5 15.4287C8.93844 14.9989 9.44772 14.6578 10 14.4168" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M21.4649 13.5C20.7733 12.3044 19.4806 11.5 18 11.5C16.4726 11.5 15.1451 12.3561 14.4713 13.6147M14.5351 17.5C15.2267 18.6956 16.5194 19.5 18 19.5C19.5227 19.5 20.8467 18.6492 21.5224 17.397M17 14H16C15.0572 14 14.5858 14 14.2929 13.7071C14 13.4142 14 12.9428 14 12V11M19 17H20C20.9428 17 21.4142 17 21.7071 17.2929C22 17.5858 22 18.0572 22 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="syncVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 15.5px' }" />
          </svg>
        </div>
</template>
