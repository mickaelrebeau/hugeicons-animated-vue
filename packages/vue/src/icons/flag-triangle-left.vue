<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FlagTriangleLeftIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after bookmark-01: the cloth snaps in a short wind, then hangs
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translateX(0px)',
  },
  animate: {
    transform: ['rotate(0deg) translateX(0px)', 'rotate(-11.92deg) translateX(1.59px)', 'rotate(4.97deg) translateX(-0.4px)', 'rotate(-1.99deg) translateX(0.2px)', 'rotate(0deg) translateX(0px)'],
    transition: {
      duration: 0.69,
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
            <motion.path d="M18.25 9V17.4118V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.99px 15.55px' }" />
            <motion.path d="M9.25927 5.43925L13.9953 3.12627C15.9058 2.19322 16.861 1.72669 17.5555 2.16767C18.25 2.60865 18.25 3.68174 18.25 5.82793V15.5484L9.18611 10.8056C6.88701 9.60252 5.73746 9.001 5.7501 8.07394C5.76274 7.14688 6.92825 6.57767 9.25927 5.43925Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.99px 15.55px' }" />
          </svg>
        </div>
</template>
