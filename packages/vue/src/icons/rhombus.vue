<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RhombusIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the rhombus flips over on its axis
// authored from scripts/authored
const shapeVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.06)', 'scaleX(1)'],
    transition: { duration: 0.56, times: [0, 0.5, 1], ease: [0.77, 0, 0.175, 1] },
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
            <motion.path d="M6.91412 5.99584C9.31163 3.33195 10.5104 2 12 2C13.4896 2 14.6884 3.33195 17.0859 5.99584L17.4037 6.34903C19.8012 9.01292 21 10.3449 21 12C21 13.6551 19.8012 14.9871 17.4037 17.651L17.0859 18.0042C14.6884 20.6681 13.4896 22 12 22C10.5104 22 9.31163 20.6681 6.91412 18.0042L6.59626 17.651C4.19875 14.9871 3 13.6551 3 12C3 10.3449 4.19875 9.01292 6.59626 6.34903L6.91412 5.99584Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="shapeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
