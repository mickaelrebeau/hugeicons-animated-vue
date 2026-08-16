<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CurvyRightDirectionIcon' })

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
    transform: ['translateX(0px) scaleY(1)', 'translateX(2.86px) scaleY(0.94)', 'translateX(-0.33px) scaleY(1.02)', 'translateX(0.49px) scaleY(0.99)', 'translateX(0px) scaleY(1)'],
    transition: {
      duration: 0.53,
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
            <motion.path d="M20.0029 15.0004C20.0029 15.0004 22.0019 13.5274 22.0019 13.0004C22.0019 12.4733 20.0029 11.0004 20.0029 11.0004M21.7771 12.8677C20.3654 13.1577 17.7194 13.2702 16.4089 10.8165C15.8656 9.95293 15.9675 8.50693 15.9675 6.8613C15.9336 6.19049 15.3622 4.97019 13.93 5.00081C12.4979 5.03143 12.0277 6.20757 11.9716 6.79182V16.9024C11.9861 17.7541 11.4924 18.9995 9.97603 18.9995C8.49556 18.9995 7.91604 17.6875 8.04374 16.7039C8.38959 14.0398 7.58132 11.2475 4.08109 11.0033H1.99707" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
