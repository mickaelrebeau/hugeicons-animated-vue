<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Pot02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the ajar lid drops shut, then pops back ajar
// authored from scripts/authored
const lidVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.37px, 1.72px) rotate(12deg)',
      'translate(-0.10px, -0.28px) rotate(-2deg)',
      'translate(0.03px, 0.08px) rotate(0.6deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.3, 0.6, 0.82, 1],
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
            <path d="M2 10H22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M4 10L4.50393 15.5432C4.73952 18.1348 4.85732 19.4305 5.71663 20.2153C6.57594 21 7.87705 21 10.4793 21H13.5207C16.1229 21 17.4241 21 18.2834 20.2153C19.1427 19.4305 19.2605 18.1348 19.4961 15.5432L20 10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M4 8L9 6.64955M9 6.64955L15 5.02901M9 6.64955L9.20561 4.9118C9.28082 4.27624 9.73232 3.75086 10.3457 3.5852L12.3146 3.05342C12.9279 2.88776 13.5796 3.11519 13.9599 3.62771L15 5.02901M15 5.02901L20 3.67856" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="lidVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5.4px' }" />
          </svg>
        </div>
</template>
