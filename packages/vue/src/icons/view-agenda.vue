<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ViewAgendaIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the body of the view agenda lifts while its detail lines follow
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.87px) rotate(-1.09deg)', 'translateY(0.49px) rotate(0.54deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.61,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const lineVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1.1)', 'scaleX(1)'],
    transition: {
      duration: 0.49,
      delay: 0.12,
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
            <motion.path d="M17 10L7 10C6.06812 10 5.60218 10 5.23463 9.84776C4.74458 9.64477 4.35523 9.25542 4.15224 8.76537C4 8.39782 4 7.93188 4 7C4 6.06812 4 5.60218 4.15224 5.23463C4.35523 4.74458 4.74458 4.35523 5.23463 4.15224C5.60218 4 6.06812 4 7 4H17C17.9319 4 18.3978 4 18.7654 4.15224C19.2554 4.35523 19.6448 4.74458 19.8478 5.23463C20 5.60218 20 6.06812 20 7C20 7.93188 20 8.39783 19.8478 8.76537C19.6448 9.25542 19.2554 9.64477 18.7654 9.84776C18.3978 10 17.9319 10 17 10Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7px' }" />
            <motion.path d="M17 20L7 20C6.06812 20 5.60218 20 5.23463 19.8478C4.74458 19.6448 4.35523 19.2554 4.15224 18.7654C4 18.3978 4 17.9319 4 17C4 16.0681 4 15.6022 4.15224 15.2346C4.35523 14.7446 4.74458 14.3552 5.23463 14.1522C5.60218 14 6.06812 14 7 14H17C17.9319 14 18.3978 14 18.7654 14.1522C19.2554 14.3552 19.6448 14.7446 19.8478 15.2346C20 15.6022 20 16.0681 20 17C20 17.9319 20 18.3978 19.8478 18.7654C19.6448 19.2554 19.2554 19.6448 18.7654 19.8478C18.3978 20 17.9319 20 17 20Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 17px' }" />
          </svg>
        </div>
</template>
