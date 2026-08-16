<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SquareLockCheck02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after circle-check: the confirmation stroke writes from tail to tip and lands once
// generated from @hugeicons/core-free-icons
const frameVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg) scale(1)', 'translateY(0px) rotate(0deg) scale(1)', 'translateY(-0.35px) rotate(0.8deg) scale(1.08)', 'translateY(0px) rotate(0deg) scale(1)'],
    transition: {
      duration: 0.81,
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
      times: [0, 0.78, 0.9, 1],
    },
  },
}

const markVariants: Variants = {
  normal: {
    pathLength: 1,
    pathOffset: 0,
    visibility: 'visible',
  },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.77,
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
      ],
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
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
            <motion.path d="M18.5002 11.4996C18.2252 10.4746 16.9752 8.99609 15.0752 9.09963C15.0752 9.09963 13.1434 8.99609 11.1909 8.99609C9.23839 8.99609 8.25019 9.02463 6.72519 9.09963C5.70019 9.09963 4.07519 9.67463 3.45019 11.4246C2.87446 13.1751 2.89974 16.7991 3.2502 18.6496C3.32529 19.5999 3.84822 20.9494 5.4002 21.6496C6.1502 22.0996 10.8502 21.9496 11.5002 21.9996" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.69px 15.55px' }" />
            <motion.path d="M6.51635 8.19624C6.46629 5.82059 6.36616 3.94508 9.11967 2.39466C10.0458 2.01956 11.4226 1.69447 13.1248 2.49469C14.902 3.56998 15.1234 4.70796 15.2775 4.99537C15.7031 6.12068 15.4778 7.72111 15.5278 8.37129" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.03px 5.03px' }" />
            <motion.path d="M15.6702 18.444C15.9702 18.588 16.3422 18.96 16.5222 19.26C16.5822 19.68 16.8822 18.06 18.3462 17.1M21.0002 18C21.0002 20.2091 19.2094 22 17.0002 22C14.7911 22 13.0002 20.2091 13.0002 18C13.0002 15.7909 14.7911 14 17.0002 14C19.2094 14 21.0002 15.7909 21.0002 18Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 18px' }" />
          </svg>
        </div>
</template>
