<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Infinity01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the infinity loop traces itself
// authored from scripts/authored
const loopVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.25, 1],
    pathOffset: [0, 1, 2],
    transition: { duration: 1.1, times: [0, 0.5, 1], ease: 'easeInOut' },
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
            <motion.path d="M12 12C12 12 9.26142 17 6.5 17C3.73858 17 2 14.7614 2 12C2 9.23858 3.73858 7 6.5 7C9.26142 7 12 12 12 12ZM12 12C12 12 14.7386 17 17.5 17C20.2614 17 22 14.7614 22 12C22 9.23858 20.2614 7 17.5 7C14.7386 7 12 12 12 12Z" stroke="currentColor" stroke-width="1.5" :variants="loopVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
