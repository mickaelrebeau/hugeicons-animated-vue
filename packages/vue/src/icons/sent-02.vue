<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Sent02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after sent: it pulls back, banks, and leaves toward the top-right
// generated from @hugeicons/core-free-icons
const planeVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px) rotate(0deg)',
    visibility: 'visible',
  },
  animate: {
    transform: ['translate(0px, 0px) rotate(0deg)', 'translate(1.87px, -0.56px) rotate(-0.94deg)', 'translate(7.49px, -4.68px) rotate(-5.62deg)', 'translate(14.98px, -11.24px) rotate(-10.3deg)', 'translate(24.35px, -16.86px) rotate(-12.17deg)', 'translate(-20.6px, 11.24px) rotate(11.24deg)', 'translate(-7.49px, 3.75px) rotate(3.75deg)', 'translate(0px, 0px) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible', 'visible', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 1.55,
      times: [0, 0.08, 0.2, 0.36, 0.48, 0.52, 0.78, 1],
      ease: [
        'easeIn',
        'easeIn',
        'easeIn',
        'linear',
        'linear',
        'easeOut',
        [0.23, 1, 0.32, 1],
      ],
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
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="hidden">
            <motion.path d="M9.49811 15L16.9981 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.25px 11.25px' }" />
            <motion.path d="M8.00634 7.67888L15.327 4.21881C18.3688 2.78111 19.8897 2.06226 20.8598 2.78341C21.8299 3.50455 21.5527 5.14799 20.9984 8.43486L20.0435 14.0968C19.6811 16.246 19.4998 17.3205 18.6989 17.7891C17.8979 18.2577 16.8574 17.8978 14.7765 17.178L8.41077 14.9762C4.51917 13.6301 2.57337 12.9571 2.50019 11.6365C2.427 10.3159 4.28678 9.43692 8.00634 7.67888Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.13px 10.16px' }" />
            <motion.path d="M9.49811 15.5V17.7274C9.49811 20.101 9.49811 21.2878 10.2083 21.4771C10.9185 21.6663 11.6664 20.6789 13.1622 18.7039L13.9981 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.75px 18.58px' }" />
          </svg>
        </div>
</template>
