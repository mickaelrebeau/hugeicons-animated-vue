<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PointingLeft02Icon' })

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
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.81px) scaleX(0.9) scaleY(1.04)', 'translateX(2.03px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
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
            <motion.path d="M22 19.8917H20.382C19.4564 19.8917 18.488 20.6158 17.6892 20.9983C16.2125 21.7055 13.3226 22.6731 11.9618 21.3209C9.81667 19.1893 9.42404 16.2081 9.5 14.4999L3.75 14.4999C2.7835 14.4999 2 13.7164 2 12.7499C2 11.7834 2.7835 10.9999 3.75 10.9999L10.0001 10.9999M10.0001 10.9999L14 10.9999M10.0001 10.9999C10.0177 10.9765 12.1753 8.12164 13.6086 7.62367C14.8916 7.17793 16.0336 8.03229 17.0914 8.67457C17.9105 9.1719 19.9316 11 21.0049 11H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 14.93px' }" />
            <motion.path d="M2 4.5L8 4.5M2 4.5C2 3.79977 3.9943 2.49153 4.5 2M2 4.5C2 5.20023 3.9943 6.50847 4.5 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 14.93px' }" />
          </svg>
        </div>
</template>
