<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowDown02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

const arrowVariants: Variants = {
  normal: { transform: 'translateY(0px) scaleX(1)' },
  animate: {
    transform: [
      'translateY(0px) scaleX(1)',
      'translateY(2.6px) scaleX(0.94)',
      'translateY(-0.3px) scaleX(1.02)',
      'translateY(0.45px) scaleX(0.99)',
      'translateY(0px) scaleX(1)',
    ],
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
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
            <motion.g :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }">
              <path d="M12 18.502V5.00195" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M18 13.002C18 13.002 13.5811 19.0019 12 19.002C10.4188 19.002 6 13.002 6 13.002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            </motion.g>
          </svg>
        </div>
</template>
