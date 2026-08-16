<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'InjectionIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after login-03: the plunger presses in, then draws back
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(-2.97px)', 'translateX(0.99px)', 'translateX(-0.3px)', 'translateX(0px)'],
    transition: {
      duration: 0.55,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frameVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1)', 'translateX(0.67px) scaleX(0.96)', 'translateX(-0.19px) scaleX(1.01)', 'translateX(0px) scaleX(1)'],
    transition: {
      duration: 0.54,
      delay: 0.08,
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
            <motion.path d="M17 2C17 2.50986 17 2.76479 17.0677 3.00236C17.1049 3.13286 17.157 3.25864 17.223 3.37723C17.3431 3.59309 17.5234 3.77336 17.8839 4.13388L19.8661 6.11612C20.2266 6.47664 20.4069 6.65691 20.6228 6.77701C20.7414 6.84298 20.8671 6.89509 20.9976 6.93228C21.2352 7 21.4901 7 22 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 4.5px' }" />
            <motion.path d="M11.6931 7L6.76525 11.9278C5.70048 12.9926 5.1681 13.525 5.0412 14.163C4.98627 14.4391 4.98627 14.7234 5.0412 14.9996C5.1681 15.6376 5.70049 16.17 6.76525 17.2348C7.83001 18.2995 8.3624 18.8319 9.00037 18.9588C9.27655 19.0137 9.56085 19.0137 9.83704 18.9588C10.475 18.8319 11.0074 18.2995 12.0722 17.2348L17 12.3069" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.99px 13.01px' }" />
            <motion.path d="M11 6L18 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 9.5px' }" />
            <motion.path d="M8 18.6372L6.83054 19.4725C6.35987 19.8087 6.12454 19.9768 5.86646 19.9971C5.76637 20.005 5.66567 19.9967 5.56824 19.9724C5.31702 19.91 5.11252 19.7055 4.70352 19.2965C4.29453 18.8875 4.09003 18.683 4.02756 18.4318C4.00333 18.3343 3.995 18.2336 4.00288 18.1335C4.0232 17.8755 4.1913 17.6401 4.52749 17.1695L5.36282 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 18px' }" />
            <motion.path d="M13.5 8L18.5 4M16 10.5L20 5.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 7.25px' }" />
            <motion.path d="M4.5 19.5L2 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 20.75px' }" />
          </svg>
        </div>
</template>
