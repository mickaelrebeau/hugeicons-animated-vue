<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Plug02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after login-01: the plug aligns with its socket, inserts, and seats
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(-3px)', 'translateX(1px)', 'translateX(-0.3px)', 'translateX(0px)'],
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
    transform: ['translateX(0px) scaleX(1)', 'translateX(0.68px) scaleX(0.96)', 'translateX(-0.19px) scaleX(1.01)', 'translateX(0px) scaleX(1)'],
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
            <motion.path d="M14 8V11M10 11V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.5px' }" />
            <motion.path d="M8.00297 12.0267C7.95812 11.4726 8.42638 11 9.02009 11H14.9799C15.5736 11 16.0419 11.4726 15.997 12.0267L15.8745 13.5403C15.7864 14.6285 15.4008 15.6771 14.7546 16.5856L14.3541 17.1487C13.9759 17.6805 13.3385 18 12.6558 18H11.3442C10.6615 18 10.0241 17.6805 9.64588 17.1487L9.24535 16.5856C8.59923 15.6771 8.2136 14.6285 8.12551 13.5403L8.00297 12.0267Z" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.96px 14.5px' }" />
            <motion.path d="M16 21.2109C19.5318 19.6644 22 16.1323 22 12.0224C22 6.4872 17.5228 2 12 2C6.47715 2 2 6.4872 2 12.0224C2 17.2199 5.94741 21.4933 11.0014 21.9955C11.551 22.0501 12 21.5962 12 21.0426V18.0359" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 12.03px' }" />
          </svg>
        </div>
</template>
