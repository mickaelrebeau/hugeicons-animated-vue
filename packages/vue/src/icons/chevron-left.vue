<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChevronLeftIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

const chevronVariants: Variants = {
  normal: { transform: 'translateX(0px) scaleY(1)' },
  animate: {
    transform: ['translateX(0px) scaleY(1)', 'translateX(-2.4px) scaleY(0.9)', 'translateX(0.45px) scaleY(1.04)', 'translateX(-0.8px) scaleY(0.97)', 'translateX(0px) scaleY(1)'],
    transition: { duration: 0.56, ease: [0.23, 1, 0.32, 1] },
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
          <motion.path d="M15 18C15 18 9.00001 13.5811 9 12C8.99999 10.4188 15 6 15 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="chevronVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
