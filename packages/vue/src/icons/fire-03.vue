<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Fire03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the flame flickers around its core
// authored from scripts/authored
const flameVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1) skewX(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1) skewX(0deg)',
      'translate(0px, -0.76px) scaleY(1.08) skewX(-4deg)',
      'translate(0px, 0.57px) scaleY(0.94) skewX(3deg)',
      'translate(0px, -0.48px) scaleY(1.05) skewX(-2deg)',
      'translate(0px, 0.00px) scaleY(1) skewX(0deg)',
    ],
    transition: { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
  },
};

const flame2Variants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1) skewX(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1) skewX(0deg)',
      'translate(0px, -0.36px) scaleY(1.08) skewX(-4deg)',
      'translate(0px, 0.27px) scaleY(0.94) skewX(3deg)',
      'translate(0px, -0.23px) scaleY(1.05) skewX(-2deg)',
      'translate(0px, 0.00px) scaleY(1) skewX(0deg)',
    ],
    transition: { duration: 0.8, delay: 0.08, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
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
            <motion.path d="M12 21.5008C16.4183 21.5008 20 17.9191 20 13.5008C20 10.5397 18.3912 6.60684 16 4.33478L14 6.99915L10.5 2.49915C7 4.99915 4 9.59526 4 13.5008C4 17.9191 7.58172 21.5008 12 21.5008Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="flameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 18.4991C14.2091 18.4991 16 16.4844 16 13.9991C16 13.2081 15.8186 12.4648 15.5 11.8189L13.5 13.4991L10.5 9.49811C9.5 10.4981 8 12.1106 8 13.9991C8 16.4844 9.79086 18.4991 12 18.4991Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="flame2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
          </svg>
        </div>
</template>
