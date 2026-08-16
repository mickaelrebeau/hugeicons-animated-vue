<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UsbMemory01Icon' })

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
    transform: ['translateX(0px) scaleX(1)', 'translateX(0.76px) scaleX(0.96)', 'translateX(-0.22px) scaleX(1.01)', 'translateX(0px) scaleX(1)'],
    transition: {
      duration: 0.59,
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
    transform: ['translateX(-2.81px)', 'translateX(0.94px)', 'translateX(-0.28px)', 'translateX(0px)'],
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
            <motion.path d="M4.03751 12.5387L9.9765 6.59975C11.3763 5.19992 12.0763 4.5 12.946 4.5C13.8157 4.5 14.5157 5.19992 15.9155 6.59975L17.4002 8.0845C18.8001 9.48434 19.5 10.1843 19.5 11.054C19.5 11.9237 18.8001 12.6237 17.4002 14.0235L11.4613 19.9625C9.41124 22.0125 6.08752 22.0125 4.03751 19.9625C1.9875 17.9125 1.9875 14.5888 4.03751 12.5387Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '1.99px 13.26px' }" />
            <motion.path d="M8.5 17C8.5 16.1716 7.82843 15.5 7 15.5C6.17157 15.5 5.5 16.1716 5.5 17C5.5 17.8284 6.17157 18.5 7 18.5C7.82843 18.5 8.5 17.8284 8.5 17Z" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 17px' }" />
            <motion.path d="M14.5 5.35034L15.8832 3.96713C16.8613 2.98904 17.3503 2.5 17.958 2.5C18.5657 2.5 19.0548 2.98904 20.0329 3.96713C21.011 4.94521 21.5 5.43425 21.5 6.04195C21.5 6.64966 21.011 7.1387 20.0329 8.11678L18.6497 9.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 6px' }" />
          </svg>
        </div>
</template>
