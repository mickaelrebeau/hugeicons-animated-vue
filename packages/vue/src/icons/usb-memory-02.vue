<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UsbMemory02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after login-01: the connector lines up, inserts, and seats with a small click
// generated from @hugeicons/core-free-icons
const frameVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1)', 'translateX(0.65px) scaleX(0.96)', 'translateX(-0.19px) scaleX(1.01)', 'translateX(0px) scaleX(1)'],
    transition: {
      duration: 0.6,
      delay: 0.08,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const arrowVariants: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(-2.89px)', 'translateX(0.96px)', 'translateX(-0.29px)', 'translateX(0px)'],
    transition: {
      duration: 0.54,
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
            <motion.path d="M7 11.5C7 9.61438 7 8.67157 7.58579 8.08579C8.17157 7.5 9.11438 7.5 11 7.5H13C14.8856 7.5 15.8284 7.5 16.4142 8.08579C17 8.67157 17 9.61438 17 11.5V17C17 17.9293 17 18.394 16.9231 18.7804C16.6075 20.3671 15.3671 21.6075 13.7804 21.9231C13.394 22 12.9293 22 12 22C11.0707 22 10.606 22 10.2196 21.9231C8.63288 21.6075 7.39249 20.3671 7.07686 18.7804C7 18.394 7 17.9293 7 17V11.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 14.75px' }" />
            <motion.path d="M15.5 7.5V5.5C15.5 4.09554 15.5 3.39331 15.1629 2.88886C15.017 2.67048 14.8295 2.48298 14.6111 2.33706C14.1067 2 13.4045 2 12 2C10.5955 2 9.89331 2 9.38886 2.33706C9.17048 2.48298 8.98298 2.67048 8.83706 2.88886C8.5 3.39331 8.5 4.09554 8.5 5.5V7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.75px' }" />
            <motion.path d="M11.5 4.5H12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 4.5px' }" />
          </svg>
        </div>
</template>
