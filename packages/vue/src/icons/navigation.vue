<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'NavigationIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after location-01: the navigation mark hops toward its indicated destination
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: {
    transform: ['translateY(0px) scale(1)', 'translateY(-2.39px) scale(0.96)', 'translateY(0.43px) scale(1.04)', 'translateY(0px) scale(1)'],
    transition: {
      duration: 0.59,
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
            <motion.path d="M15.8353 4.29256L8.34527 7.32048C4.79302 8.75652 3.0169 9.47453 3.00021 10.459C2.99809 10.5846 3.01186 10.7098 3.04121 10.8319C3.2714 11.7893 5.16111 12.1042 8.94051 12.7341C9.85191 12.886 10.3076 12.962 10.6276 13.2454C10.6725 13.2852 10.715 13.3277 10.7548 13.3726C11.0382 13.6925 11.1141 14.1482 11.266 15.0597C11.8959 18.8389 12.2109 20.7286 13.1682 20.9588C13.2902 20.9881 13.4156 21.0019 13.5411 20.9998C14.5256 20.9831 15.2435 19.207 16.6795 15.6549L19.7074 8.16477C20.8293 5.38967 21.3902 4.00211 20.6941 3.30595C19.9979 2.60978 18.6104 3.17071 15.8353 4.29256Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.19px 21px' }" />
          </svg>
        </div>
</template>
