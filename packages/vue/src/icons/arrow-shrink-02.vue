<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowShrink02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two corners pull in along the up-right diagonal — the other shrink
// authored from scripts/authored
const cornersVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.86) rotate(2deg)', 'scale(1.04) rotate(-0.6deg)', 'scale(1) rotate(0deg)'],
    transition: { duration: 0.58, times: [0, 0.42, 0.74, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M6.50232 13.2635C7.34673 13.2515 10.1432 12.6706 10.7361 13.2635C11.329 13.8564 10.7481 16.6529 10.7361 17.4973M13.2685 6.49733C13.2565 7.34173 12.6756 10.1382 13.2685 10.7311C13.8614 11.324 16.6579 10.7431 17.5023 10.7311M20.9991 2.99902L13.6103 10.3812M10.3691 13.6237L3 21.001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cornersVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
