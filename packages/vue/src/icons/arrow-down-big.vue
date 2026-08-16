<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowDownBigIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after arrow-down-02: the mark commits downward along its own axis
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleX(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleX(1)', 'translateY(2.78px) scaleX(0.94)', 'translateY(-0.32px) scaleX(1.02)', 'translateY(0.48px) scaleX(0.99)', 'translateY(0px) scaleX(1)'],
    transition: {
      duration: 0.52,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

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
            <motion.path d="M15.544 12.5H15V6.5C15 5.56812 15 5.10218 14.8478 4.73463C14.6448 4.24458 14.2554 3.85523 13.7654 3.65224C13.3978 3.5 12.9319 3.5 12 3.5C11.0681 3.5 10.6022 3.5 10.2346 3.65224C9.74458 3.85523 9.35523 4.24458 9.15224 4.73463C9 5.10218 9 5.56812 9 6.5V12.5H8.45596C6.37322 12.5 5.33185 12.5 5.05779 13.1003C4.78372 13.7006 5.49744 14.4183 6.92487 15.8536L10.4689 19.4172C11.1868 20.1391 11.5458 20.5 12 20.5C12.4542 20.5 12.8132 20.1391 13.5311 19.4172L17.0751 15.8536C18.5026 14.4183 19.2163 13.7006 18.9422 13.1003C18.6681 12.5 17.6268 12.5 15.544 12.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
