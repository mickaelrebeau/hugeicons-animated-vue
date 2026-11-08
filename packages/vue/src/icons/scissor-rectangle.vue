<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ScissorRectangleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the scissors snip inside the tile
// authored from scripts/authored
const scissorVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.6)', 'scaleY(1)', 'scaleY(0.6)', 'scaleY(1)', 'scaleY(1)'],
    transition: { duration: 0.7, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'easeInOut' },
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
            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M13.5 9.5L11 12M11 12L7 16M11 12L13.5 14.5M11 12L7 8M17 8C17 9.10457 16.1046 10 15 10C13.8954 10 13 9.10457 13 8C13 6.89543 13.8954 6 15 6C16.1046 6 17 6.89543 17 8ZM17 16C17 17.1046 16.1046 18 15 18C13.8954 18 13 17.1046 13 16C13 14.8954 13.8954 14 15 14C16.1046 14 17 14.8954 17 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="scissorVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 12px' }" />
          </svg>
        </div>
</template>
