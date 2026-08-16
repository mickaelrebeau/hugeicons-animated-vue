<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GlobeLockIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after lock: the body reacts while the keyway turns in its own seat
// generated from @hugeicons/core-free-icons
const bodyVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-0.98deg) scale(0.985)', 'rotate(1.37deg) scale(1.018)', 'rotate(-0.34deg) scale(0.997)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.7,
      times: [0, 0.18, 0.48, 0.78, 1],
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const keyVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg) scale(1)', 'translateY(0.19px) rotate(0deg) scale(0.96)', 'translateY(-0.33px) rotate(-15.22deg) scale(1.035)', 'translateY(-0.11px) rotate(3.8deg) scale(1.012)', 'translateY(0px) rotate(0deg) scale(1)'],
    transition: {
      duration: 0.68,
      times: [0, 0.16, 0.42, 0.68, 0.86, 1],
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
            <motion.path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C16.8379 2 20.8734 5.43552 21.8 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.9px 12px' }" />
            <motion.path d="M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2C13.9352 2 15.5494 5.43552 15.92 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.96px 12px' }" />
            <motion.path d="M12 12H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="keyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 12px' }" />
            <motion.path d="M20.5 16.5V15C20.5 13.8954 19.6046 13 18.5 13C17.3954 13 16.5 13.8954 16.5 15V16.5M20.5 16.5H16.5M20.5 16.5C21.3284 16.5 22 17.1716 22 18V18.75C22 19.4489 22 19.7984 21.8858 20.074C21.7336 20.4416 21.4416 20.7336 21.074 20.8858C20.7984 21 20.4489 21 19.75 21H17.25C16.5511 21 16.2016 21 15.926 20.8858C15.5584 20.7336 15.2664 20.4416 15.1142 20.074C15 19.7984 15 19.4489 15 18.75V18C15 17.1716 15.6716 16.5 16.5 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 17px' }" />
          </svg>
        </div>
</template>
