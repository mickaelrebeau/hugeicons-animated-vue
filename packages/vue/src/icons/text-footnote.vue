<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TextFootnoteIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after list-view: the text rows write and settle from their reading edge
// generated from @hugeicons/core-free-icons
const rowVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: (i: number) => ({
    transform: ['scaleX(1)', 'scaleX(0.68)', 'scaleX(1.04)', 'scaleX(0.98)', 'scaleX(1)'],
    transition: { duration: 0.44, ease: [0.77, 0, 0.175, 1], times: [0, 0.28, 0.56, 0.76, 1], delay: i * 0.06 },
  }),
}

const plusVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-10.25deg) scale(0.82)', 'rotate(3.07deg) scale(1.08)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.42,
      delay: 0.04,
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
            <motion.path d="M19.75 5.88792L19.7494 8.72342M19.7494 8.72342L22 7.7061M19.7494 8.72342L17.5 7.7061M19.7494 8.72342L17.95 10.8879M19.7494 8.72342L21.55 10.8879" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '22px 8.39px' }" />
            <motion.path d="M12 21.0017H6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 21px' }" />
            <motion.path d="M16 5.99779C16 5.34082 16 5.01235 15.9194 4.7245C15.7518 4.12577 15.3066 3.61001 14.7541 3.37477C14.4886 3.26167 14.1885 3.2296 13.5884 3.16547C12.1695 3.01383 10.3874 2.99779 9 2.99779C7.61262 2.99779 5.83047 3.01383 4.41161 3.16547C3.8115 3.2296 3.51144 3.26167 3.24586 3.37477C2.69344 3.61001 2.24816 4.12577 2.08057 4.7245C2 5.01235 2 5.34082 2 5.99779" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 4.5px' }" />
            <motion.path d="M9 3.34984L9 21.0015" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 21px' }" />
          </svg>
        </div>
</template>
