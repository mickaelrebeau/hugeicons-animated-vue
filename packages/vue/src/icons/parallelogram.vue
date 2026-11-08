<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ParallelogramIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the parallelogram leans back and forth
// authored from scripts/authored
const shapeVariants: Variants = {
  normal: { transform: 'skewX(0deg)' },
  animate: {
    transform: ['skewX(0deg)', 'skewX(10deg)', 'skewX(-6deg)', 'skewX(0deg)'],
    transition: { duration: 0.66, times: [0, 0.33, 0.66, 1], ease: 'easeInOut' },
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
            <motion.path d="M4.09102 8.54478C4.69578 6.36211 4.99816 5.27077 5.90007 4.63538C6.80198 4 8.04873 4 10.5422 4H14.5661C18.4865 4 20.4468 4 21.4452 5.15376C22.4435 6.30753 21.9681 8.02342 21.0173 11.4552L19.909 15.4552C19.3042 17.6379 19.0018 18.7292 18.0999 19.3646C17.198 20 15.9513 20 13.4578 20H9.43393C5.51345 20 3.55321 20 2.55483 18.8462C1.55645 17.6925 2.03188 15.9766 2.98273 12.5448L4.09102 8.54478Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="shapeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
