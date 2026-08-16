<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CapStraightIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after bookmark-01: the brim catches a short gust and settles back on its crown
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translateX(0px)',
  },
  animate: {
    transform: ['rotate(0deg) translateX(0px)', 'rotate(-12.75deg) translateX(1.7px)', 'rotate(5.31deg) translateX(-0.42px)', 'rotate(-2.12deg) translateX(0.21px)', 'rotate(0deg) translateX(0px)'],
    transition: {
      duration: 0.72,
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
            <motion.path d="M21 5L11.3026 5C8.56425 5 7.19508 5 6.34438 5.87868C5.6596 6.58599 5.52605 7.64032 5.5 9.5M21 19L11.3026 19C8.56424 19 7.19508 19 6.34438 18.1213C5.6596 17.414 5.52605 16.3597 5.5 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.25px 19px' }" />
            <motion.path d="M8 12C8 13.3807 6.88071 14.5 5.5 14.5C4.11929 14.5 3 13.3807 3 12C3 10.6193 4.11929 9.5 5.5 9.5C6.88071 9.5 8 10.6193 8 12Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.25px 19px' }" />
            <motion.path d="M8 12H21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.25px 19px' }" />
          </svg>
        </div>
</template>
