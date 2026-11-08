<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Tornado01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the funnel bands sway one after another
// authored from scripts/authored
const bandVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1px, 0px)',
      'translate(-1px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.8, times: [0, 0.18, 0.46, 0.74, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const band2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1px, 0px)',
      'translate(-1px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.8, delay: 0.08, times: [0, 0.18, 0.46, 0.74, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const band3Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1px, 0px)',
      'translate(-1px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.8, delay: 0.16, times: [0, 0.18, 0.46, 0.74, 1], ease: [0.77, 0, 0.175, 1] },
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
            <motion.path d="M20 7C20 9.20914 16.4183 11 12 11C7.58172 11 4 9.20914 4 7C4 4.79086 7.58172 3 12 3C16.4183 3 20 4.79086 20 7Z" stroke="currentColor" stroke-width="1.5" :variants="bandVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7px' }" />
            <motion.path d="M18 14C18 15.6569 15.3137 17 12 17C8.68629 17 6 15.6569 6 14C6 12.3431 8.68629 11 12 11" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="band2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M16 19C16 20.1046 14.2091 21 12 21C9.79086 21 8 20.1046 8 19C8 17.8954 9.79086 17 12 17" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="band3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
          </svg>
        </div>
</template>
