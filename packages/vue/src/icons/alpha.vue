<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlphaIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the letter writes itself in one continuous stroke, tail last
// authored from scripts/authored
const letterVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.94,
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M17.3943 4C17.5941 5.85 17.3444 10 16.1706 13.275C14.7721 17.5 12.6743 19.35 11.0011 19.8C7.75452 20.6731 5.03241 18.45 3.88362 15.975C2.40994 12.8 2.80975 9.125 4.8576 6.475C6.90545 3.825 10.7763 2.675 13.6483 6.25C14.7471 7.925 15.2216 9.725 15.4464 11.175C15.8959 12.775 16.1206 16.775 17.2944 18.725C18.2184 20.175 19.6419 20.1 20.1664 19.875C20.516 19.7 21 19.32 21 18.22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="letterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
