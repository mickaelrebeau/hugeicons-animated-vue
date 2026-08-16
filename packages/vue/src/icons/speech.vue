<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SpeechIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the speech move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.75px) rotate(-2.06deg)', 'translateY(0.41px) rotate(0.72deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.56,
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
            <motion.path d="M20.0001 7C21.2358 8.27961 22.0001 10.0474 22.0001 12C22.0001 13.9526 21.2358 15.7204 20.0001 17M17.1214 9.87868C17.6643 10.4216 18.0001 11.1716 18.0001 12C18.0001 12.8284 17.6643 13.5784 17.1214 14.1213" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 20px' }" />
            <motion.path d="M9.00012 20V19C9.00012 18.0572 9.00012 17.5858 9.29302 17.2929C9.58591 17 10.0573 17 11.0001 17C12.1047 17 13.0001 16.1046 13.0001 15V9.5C13.0001 6.46243 10.5377 4 7.50012 4C4.46256 4 2.00012 6.46243 2.00012 9.5C2.00012 10.3907 2.21187 11.232 2.58777 11.9763C3.03678 12.8652 3.37022 13.8573 3.15341 14.8294L2.00012 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 20px' }" />
          </svg>
        </div>
</template>
