<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MailSend01Icon' })

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
    transform: ['translate(0px, 0px) rotate(0deg)', 'translate(1.87px, -0.56px) rotate(-0.93deg)', 'translate(7.46px, -4.66px) rotate(-5.6deg)', 'translate(14.92px, -11.19px) rotate(-10.26deg)', 'translate(24.25px, -16.79px) rotate(-12.12deg)', 'translate(-20.52px, 11.19px) rotate(11.19deg)', 'translate(-7.46px, 3.73px) rotate(3.73deg)', 'translate(0px, 0px) rotate(0deg)'],
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
            <motion.path d="M22 12.5C22 12.0086 21.9947 11.0172 21.9842 10.5244C21.9189 7.45883 21.8862 5.92606 20.7551 4.79063C19.6239 3.6552 18.0497 3.61565 14.9012 3.53654C12.9607 3.48778 11.0393 3.48778 9.09882 3.53653C5.95033 3.61563 4.37608 3.65518 3.24495 4.79062C2.11382 5.92605 2.08114 7.45882 2.01576 10.5243C1.99474 11.51 1.99475 12.4899 2.01577 13.4756C2.08114 16.5411 2.11383 18.0739 3.24496 19.2093C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C9.90159 20.4836 10.7011 20.4954 11.5 20.4989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.99px' }" />
            <motion.path d="M2 6L8.91302 9.92462C11.4387 11.3585 12.5613 11.3585 15.087 9.92462L22 6" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.68px' }" />
            <motion.path d="M22 17.5L14 17.5M22 17.5C22 16.7998 20.0057 15.4915 19.5 15M22 17.5C22 18.2002 20.0057 19.5085 19.5 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 17.5px' }" />
          </svg>
        </div>
</template>
