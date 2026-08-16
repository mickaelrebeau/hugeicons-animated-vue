<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CircleArrowVerticalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after arrow-right-02: the mark commits right along its own axis
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleY(1)', 'translateX(2.75px) scaleY(0.94)', 'translateX(-0.32px) scaleY(1.02)', 'translateX(0.48px) scaleY(0.99)', 'translateX(0px) scaleY(1)'],
    transition: {
      duration: 0.51,
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
            <motion.circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 17L12 7M12 17C12.5602 17 13.6068 15.604 14 15.25M12 17C11.4398 17 10.3932 15.604 10 15.25M12 7C12.5602 7 13.6068 8.39601 14 8.75M12 7C11.4398 7 10.3932 8.39601 10 8.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
