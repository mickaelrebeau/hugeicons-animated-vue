<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Flag03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the banner waves from the pole
// authored from scripts/authored
const flagVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1) skewY(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1) skewY(0deg)',
      'translate(-0.65px, 0px) scaleX(0.92) skewY(6deg)',
      'translate(0.24px, 0px) scaleX(1.03) skewY(-4deg)',
      'translate(-0.16px, 0px) scaleX(0.98) skewY(2deg)',
      'translate(0.00px, 0px) scaleX(1) skewY(0deg)',
    ],
    transition: { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
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
            <motion.path d="M15.8785 3L10.2827 3C7.32099 3 5.84015 3 4.92007 3.87868C4 4.75736 4 6.17157 4 9L4.10619 15L15.8785 15C18.1016 15 19.2131 15 19.6847 14.4255C19.8152 14.2666 19.9108 14.0841 19.9656 13.889C20.1639 13.184 19.497 12.3348 18.1631 10.6364L18.1631 10.6364C17.6083 9.92985 17.3309 9.57659 17.2814 9.1751C17.2671 9.05877 17.2671 8.94123 17.2814 8.8249C17.3309 8.42341 17.6083 8.07015 18.1631 7.36364L18.1631 7.36364C19.497 5.66521 20.1639 4.816 19.9656 4.11098C19.9108 3.91591 19.8152 3.73342 19.6847 3.57447C19.2131 3 18.1016 3 15.8785 3L15.8785 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flagVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.1px 9px' }" />
            <path d="M4 21L4 8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
