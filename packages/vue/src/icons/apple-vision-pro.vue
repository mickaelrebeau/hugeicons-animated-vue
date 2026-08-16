<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AppleVisionProIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the visor dips onto the face, then the nose-bridge settles
// authored from scripts/authored
const visorVariants: Variants = {
  normal: { transform: 'translateY(0px) scaleY(1)' },
  animate: {
    transform: [
      'translateY(0px) scaleY(1)',
      'translateY(-1.4px) scaleY(0.92)',
      'translateY(0.3px) scaleY(1.04)',
      'translateY(0px) scaleY(1)',
    ],
    transition: { duration: 0.64, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M6.5 17.5C4 17.5 1.99974 16 2 12.5C2.00029 8.5 5.00001 6.5 12 6.5C19 6.5 21.9997 8.5 22 12.5C22.0003 16 20 17.5 17.5 17.5C15 17.5 13.5 15 12 15C10.5 15 9 17.5 6.5 17.5Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="visorVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
