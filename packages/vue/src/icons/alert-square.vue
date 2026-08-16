<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlertSquareIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the sign rattles left-right on its nails, the bang keeping time
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: {
    transform: [
      'translateX(0px)',
      'translateX(-1.1px)',
      'translateX(0.9px)',
      'translateX(-0.35px)',
      'translateX(0px)',
    ],
    transition: { duration: 0.58, times: [0, 0.18, 0.42, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const stemVariants: Variants = {
  normal: { transform: 'translateY(0px) scaleY(1)' },
  animate: {
    transform: [
      'translateY(0px) scaleY(1)',
      'translateY(-0.8px) scaleY(1.1)',
      'translateY(0.3px) scaleY(0.94)',
      'translateY(0px) scaleY(1)',
    ],
    transition: { duration: 0.56, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const dotVariants: Variants = {
  normal: { transform: 'translateY(0px) scale(1)' },
  animate: {
    transform: [
      'translateY(0px) scale(1)',
      'translateY(0.9px) scale(0.86)',
      'translateY(-1px) scale(1.2)',
      'translateY(0px) scale(1)',
    ],
    transition: { duration: 0.56, delay: 0.04, times: [0, 0.18, 0.48, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 8V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stemVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12.125 15.75H12M12.25 15.75C12.25 15.8881 12.1381 16 12 16C11.8619 16 11.75 15.8881 11.75 15.75C11.75 15.6119 11.8619 15.5 12 15.5C12.1381 15.5 12.25 15.6119 12.25 15.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.75px' }" />
          </svg>
        </div>
</template>
