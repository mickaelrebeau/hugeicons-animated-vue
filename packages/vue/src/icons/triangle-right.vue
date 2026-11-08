<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TriangleRightIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the right triangle flips over its long edge
// authored from scripts/authored
const triangleVariants: Variants = {
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
            <motion.path d="M17.9923 20H9.97692C5.00637 20 2.52109 20 2.06437 18.6269C1.60764 17.2538 3.59586 15.7594 7.5723 12.7707L15.5877 6.74622C18.3856 4.64326 19.7846 3.59178 20.8923 4.14682C22 4.70186 22 6.45432 22 9.95926V15.9837C22 17.877 22 18.8237 21.4131 19.4118C20.8262 20 19.8816 20 17.9923 20Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="triangleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.8px 11.8px' }" />
          </svg>
        </div>
</template>
