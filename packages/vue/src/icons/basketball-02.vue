<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Basketball02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the ball squashes on the floor and rebounds, equator and meridians riding
// authored from scripts/authored
const sphereVariants: Variants = {
  normal: { transform: 'translateY(0px) scaleY(1) scaleX(1)' },
  animate: {
    transform: [
      'translateY(0px) scaleY(1) scaleX(1)',
      'translateY(1.4px) scaleY(0.88) scaleX(1.08)',
      'translateY(-2.2px) scaleY(1.06) scaleX(0.96)',
      'translateY(0px) scaleY(1) scaleX(1)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.28, 0.64, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
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
            <motion.path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="1.5" :variants="sphereVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M2 12C4.28031 14.4289 7.91083 16 12 16C16.0892 16 19.7197 14.4289 22 12" stroke="currentColor" stroke-width="1.5" :variants="sphereVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M12 2V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sphereVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M5.1556 5C4.77388 6.5 5.04007 9 6.56621 11C8.1708 13.1028 9.18243 16 5.36932 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sphereVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M18.8444 5C19.2261 6.5 18.9599 9 17.4338 11C15.8292 13.1028 14.8176 16 18.6307 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sphereVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
