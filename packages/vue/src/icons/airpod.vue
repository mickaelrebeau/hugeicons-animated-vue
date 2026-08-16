<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AirpodIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the case lid parts along its seam and closes again over the bud
// authored from scripts/authored
const caseVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(1.035)', 'scaleY(0.995)', 'scaleY(1)'],
    transition: { duration: 0.66, times: [0, 0.36, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const seamVariants: Variants = {
  normal: { transform: 'translateY(0px) scaleX(1)' },
  animate: {
    transform: [
      'translateY(0px) scaleX(1)',
      'translateY(-1.6px) scaleX(1.05)',
      'translateY(0.2px) scaleX(1)',
      'translateY(0px) scaleX(1)',
    ],
    transition: { duration: 0.66, times: [0, 0.36, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const budVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.9)', 'scale(1.03)', 'scale(1)'],
    transition: { duration: 0.6, delay: 0.1, times: [0, 0.36, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" :variants="caseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21.5px' }" />
            <motion.path d="M2.5 9H7.25M21.5 9H16.75" stroke="currentColor" stroke-width="1.5" :variants="seamVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
            <motion.rect x="7" y="7" width="10" height="4" rx="2" stroke="currentColor" stroke-width="1.5" :variants="budVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
          </svg>
        </div>
</template>
