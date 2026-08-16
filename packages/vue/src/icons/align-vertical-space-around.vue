<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlignVerticalSpaceAroundIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the single block breathes between the two rails, equal air above and below
// authored from scripts/authored
const blockVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.72)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: { duration: 0.58, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const railBottomVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.86)', 'scaleX(1)'],
    transition: { duration: 0.56, delay: 0.1, times: [0, 0.4, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M14 9.5L10 9.5C8.89543 9.5 8 10.3954 8 11.5L8 12.5C8 13.6046 8.89543 14.5 10 14.5L14 14.5C15.1046 14.5 16 13.6046 16 12.5V11.5C16 10.3954 15.1046 9.5 14 9.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="blockVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M21 18.5L3 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="railBottomVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18.5px' }" />
            <motion.path d="M21 5.5L3 5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="railBottomVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5.5px' }" />
          </svg>
        </div>
</template>
