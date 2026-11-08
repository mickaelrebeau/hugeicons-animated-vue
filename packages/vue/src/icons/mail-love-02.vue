<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MailLove02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the inner flap redraws and the heart beats
// authored from scripts/authored
const flapVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.56,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const heartVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.98)', 'scale(1.1)', 'scale(1)'],
    transition: { duration: 0.72, delay: 0.22, times: [0, 0.18, 0.36, 0.54, 1], ease: 'easeInOut' },
  },
};

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
            <motion.path d="M7 7.5L9.94202 9.23943C11.6572 10.2535 12.3428 10.2535 14.058 9.23943L17 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flapVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M11.5 19.4959C11.0337 19.4898 9.56682 19.5077 9.09883 19.4959C5.95033 19.4166 4.37608 19.377 3.24496 18.2394C2.11383 17.1018 2.08114 15.5661 2.01577 12.4947C1.99475 11.5071 1.99474 10.5254 2.01576 9.53781C2.08114 6.46642 2.11382 4.93072 3.24495 3.79312C4.37608 2.65551 5.95033 2.61589 9.09882 2.53663C11.0393 2.48779 12.9607 2.48779 14.9012 2.53664C18.0497 2.6159 19.6239 2.65553 20.755 3.79313C21.8862 4.93073 21.9189 6.46643 21.9842 9.53783C21.9983 10.1973 22.0029 10.8542 21.9982 11.512" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M15.015 14.8866C16.0876 14.2469 17.0238 14.5047 17.5863 14.9153C17.8169 15.0837 17.9322 15.1679 18 15.1679C18.0678 15.1679 18.1831 15.0837 18.4137 14.9153C18.9762 14.5047 19.9124 14.2469 20.985 14.8866C22.3928 15.7261 22.7113 18.4958 19.4642 20.8324C18.8457 21.2775 18.5365 21.5 18 21.5C17.4635 21.5 17.1543 21.2775 16.5358 20.8324C13.2887 18.4958 13.6072 15.7261 15.015 14.8866Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="heartVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 17.4px' }" />
          </svg>
        </div>
</template>
