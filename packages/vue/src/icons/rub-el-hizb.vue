<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RubElHizbIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the rub el hizb separate in depth and stack again
// generated from @hugeicons/core-free-icons
const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.5px, -1.29px)', 'translate(0.21px, -0.21px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.54,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.86px) rotate(-1.07deg)', 'translateY(0.48px) rotate(0.54deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
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
            <motion.path d="M4.5 6.64286C4.5 5.6327 4.5 5.12763 4.81381 4.81381C5.12763 4.5 5.6327 4.5 6.64286 4.5H17.3571C18.3673 4.5 18.8724 4.5 19.1862 4.81381C19.5 5.12763 19.5 5.6327 19.5 6.64286V17.3571C19.5 18.3673 19.5 18.8724 19.1862 19.1862C18.8724 19.5 18.3673 19.5 17.3571 19.5H6.64286C5.6327 19.5 5.12763 19.5 4.81381 19.1862C4.5 18.8724 4.5 18.3673 4.5 17.3571V6.64286Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M10.509 3.05426C11.2119 2.35142 11.5633 2 12 2C12.4367 2 12.7881 2.35142 13.491 3.05427L20.9457 10.509C21.6486 11.2119 22 11.5633 22 12C22 12.4367 21.6486 12.7881 20.9457 13.491L13.491 20.9457C12.7881 21.6486 12.4367 22 12 22C11.5633 22 11.2119 21.6486 10.509 20.9457L3.05426 13.491C2.35142 12.7881 2 12.4367 2 12C2 11.5633 2.35142 11.2119 3.05427 10.509L10.509 3.05426Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.circle cx="12" cy="12" r="2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
