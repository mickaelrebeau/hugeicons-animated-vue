<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PointingRight02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cursor-pointer-01: the fingertip commits toward the direction it already points
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.75px) scaleX(0.9) scaleY(1.04)', 'translateX(1.87px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
    transition: {
      duration: 0.56,
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
            <motion.path d="M2 19.8917H3.61802C4.54364 19.8917 5.51198 20.6158 6.31081 20.9983C7.78747 21.7055 10.6774 22.6731 12.0382 21.3209C14.1833 19.1893 14.576 16.2081 14.5 14.4999L20.25 14.4999C21.2165 14.4999 22 13.7164 22 12.7499C22 11.7834 21.2165 10.9999 20.25 10.9999L13.9999 10.9999M13.9999 10.9999L10 10.9999M13.9999 10.9999C13.9823 10.9765 11.8247 8.12164 10.3914 7.62367C9.10844 7.17793 7.96635 8.03229 6.90859 8.67457C6.08953 9.1719 4.06844 11 2.99509 11H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 14.93px' }" />
            <motion.path d="M22 4.5L16 4.5M22 4.5C22 3.79977 20.0057 2.49153 19.5 2M22 4.5C22 5.20023 20.0057 6.50847 19.5 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 14.93px' }" />
          </svg>
        </div>
</template>
