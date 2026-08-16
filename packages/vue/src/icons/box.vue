<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BoxIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after arrow-down-02: the box follows the down direction already encoded by its geometry
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleX(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleX(1)', 'translateY(2.66px) scaleX(0.94)', 'translateY(-0.31px) scaleX(1.02)', 'translateY(0.46px) scaleX(0.99)', 'translateY(0px) scaleX(1)'],
    transition: {
      duration: 0.5,
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
            <motion.path d="M21 13.6376V10.3624C21 8.71559 21 7.89217 20.6166 7.20744C20.2332 6.52271 19.5317 6.09334 18.1287 5.2346L15.1287 3.39836C13.6056 2.46612 12.8441 2 12 2C11.1559 2 10.3944 2.46612 8.8713 3.39836L5.8713 5.2346C4.46832 6.09334 3.76683 6.52271 3.38341 7.20744C3 7.89217 3 8.71559 3 10.3624V13.6376C3 15.2844 3 16.1078 3.38341 16.7926C3.76683 17.4773 4.46832 17.9067 5.8713 18.7654L8.8713 20.6016C10.3944 21.5339 11.1559 22 12 22C12.8441 22 13.6056 21.5339 15.1287 20.6016L18.1287 18.7654C19.5317 17.9067 20.2332 17.4773 20.6166 16.7926C21 16.1078 21 15.2844 21 13.6376Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M3.5 7L12 12L20.5 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 12V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
