<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FilterMailEditIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after filter: the funnel narrows the data from its wide mouth to its result
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(0px)', 'translateX(1.64px)', 'translateX(-0.21px)', 'translateX(0px)'],
    transition: {
      duration: 0.48,
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
            <motion.path d="M3 6H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.54px 14.46px' }" />
            <motion.path d="M6 12H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.54px 14.46px' }" />
            <motion.path d="M9 18H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.54px 14.46px' }" />
            <motion.path d="M16.0071 17.5986L14 18L14.4014 15.9929C14.4367 15.8165 14.5234 15.6545 14.6506 15.5273L18.9111 11.2668C19.2668 10.9111 19.8437 10.9111 20.1995 11.2668L20.7332 11.8005C21.0889 12.1563 21.0889 12.7332 20.7332 13.0889L16.4727 17.3494C16.3455 17.4766 16.1835 17.5633 16.0071 17.5986Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.54px 14.46px' }" />
          </svg>
        </div>
</template>
