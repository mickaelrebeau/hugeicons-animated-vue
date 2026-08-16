<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SnailIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the silhouette of the snail loads onto its base and settles with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.51px) scaleY(0.82)', 'translateY(-3.66px) scaleY(1.08)', 'translateY(0.54px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.71,
      times: [0, 0.18, 0.48, 0.78, 1],
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
            <motion.path d="M9.57687 14C9.57687 16.5 11.5 20 15.5399 20C19.5798 20 21.9999 16.866 21.9999 13C21.9999 8.02944 17.7699 4 12.0615 4C6.41519 4 1.41338 8.25529 2.0558 15.3865C2.08969 15.7628 2.34812 16.0843 2.71438 16.1769C5.41315 16.8591 8.18768 15.8637 9.57687 14ZM9.57687 14C9.57687 8.87223 17.5276 7.79116 17.5276 13C17.5276 14.4689 16.4999 15.7264 15.043 16.2456" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.71px 20px' }" />
          </svg>
        </div>
</template>
