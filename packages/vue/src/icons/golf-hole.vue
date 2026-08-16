<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GolfHoleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the ball loads on the ground and comes back up with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.31px) scaleY(0.82)', 'translateY(-3.18px) scaleY(1.08)', 'translateY(0.47px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.73,
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
            <motion.path d="M8.49101 16.9944C5.84739 17.3919 3.99991 18.3674 3.99991 19.4237C3.99991 20.8463 7.35113 21.9996 11.4851 21.9996C15.619 21.9996 18.9703 20.8463 18.9703 19.4237C18.9703 18.3021 16.8874 17.348 13.9801 16.9944" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.66px 19.03px' }" />
            <motion.path d="M10.9803 19.0279C11.063 11.8537 10.7826 5.1379 11.1511 2.88854C11.4308 2.09171 11.9223 1.29472 15.1486 3.06315L17.3293 4.13174C18.6711 4.78928 20.5387 5.83761 19.7703 7.1192C19.4206 7.70244 18.6245 8.35403 17.0701 9.01647L10.9782 11.9837" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.66px 19.03px' }" />
          </svg>
        </div>
</template>
