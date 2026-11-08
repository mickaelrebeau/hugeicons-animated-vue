<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LayoutTable01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the columns slide while the header holds
// authored from scripts/authored
const dividerVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-2px, 0px)',
      'translate(-2px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.9, times: [0, 0.3, 0.62, 0.9, 1], ease: 'easeInOut' },
  },
};

const divider2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(2px, 0px)',
      'translate(2px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.9, times: [0, 0.3, 0.62, 0.9, 1], ease: 'easeInOut' },
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
            <path d="M3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28248 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28248 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M2.5 9L21.5 9" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M16 21.5L16 2.5" stroke="currentColor" stroke-width="1.5" :variants="dividerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 12px' }" />
            <motion.path d="M8 21.4998L8 2.49976" stroke="currentColor" stroke-width="1.5" :variants="divider2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 12px' }" />
          </svg>
        </div>
</template>
