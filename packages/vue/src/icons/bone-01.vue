<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Bone01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after edit-02: the open stroke of the bone writes along the direction of its path
// generated from @hugeicons/core-free-icons
const nibVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translate(0px, 0px)',
  },
  animate: {
    transform: ['rotate(0deg) translate(0px, 0px)', 'rotate(-8.57deg) translate(-0.43px, 0.64px)', 'rotate(4.28deg) translate(0.32px, -0.32px)', 'rotate(0deg) translate(0px, 0px)'],
    transition: {
      duration: 0.58,
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
            <motion.path d="M17.3997 5.83806C17.8288 5.40901 18.3665 5.15489 18.9243 5.07568M18.9243 5.07568C19.7347 4.96061 20.5874 5.21474 21.2107 5.83806C22.2631 6.89044 22.2631 8.59667 21.2107 9.64905C20.3628 10.497 19.0904 10.6617 18.0775 10.1432C17.6635 9.93132 17.1331 9.91564 16.8043 10.2445L10.2445 16.8043C9.91564 17.1331 9.93132 17.6635 10.1432 18.0775C10.6617 19.0904 10.497 20.3628 9.64904 21.2107C8.59667 22.2631 6.89044 22.2631 5.83806 21.2107C5.21474 20.5874 4.96061 19.7347 5.07568 18.9243M18.9243 5.07568C19.0394 4.26531 18.7853 3.41261 18.1619 2.78928C17.1096 1.73691 15.4033 1.73691 14.351 2.78928C13.503 3.6372 13.3383 4.90961 13.8568 5.92247C14.0687 6.33646 14.0844 6.86686 13.7555 7.19572L7.19572 13.7555C6.86686 14.0844 6.33646 14.0687 5.92247 13.8568C4.90961 13.3383 3.6372 13.503 2.78928 14.351C1.73691 15.4033 1.73691 17.1096 2.78928 18.1619C3.4126 18.7853 4.26532 19.0394 5.07568 18.9243M6.60026 18.1619C6.17121 18.591 5.63348 18.8451 5.07568 18.9243" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nibVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
