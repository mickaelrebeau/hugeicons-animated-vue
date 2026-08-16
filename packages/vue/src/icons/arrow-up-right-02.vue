<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowUpRight02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after arrow-up-right-01: the mark commits up-right along its diagonal
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px) rotate(0deg)',
  },
  animate: {
    transform: ['translate(0px, 0px) rotate(0deg)', 'translate(2.31px, -2.31px) rotate(-1.65deg)', 'translate(-0.27px, 0.27px) rotate(0.55deg)', 'translate(0.38px, -0.38px) rotate(-0.22deg)', 'translate(0px, 0px) rotate(0deg)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M12.9997 11L5.99969 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15.5407 6.08278L14.2989 6.19567C12.287 6.37857 11.2811 6.47002 11.0444 7.12388C10.8076 7.77774 11.5219 8.49198 12.9504 9.92046L14.0792 11.0493C15.5077 12.4778 16.222 13.1921 16.8758 12.9553C17.5297 12.7186 17.6211 11.7127 17.804 9.70078L17.9169 8.45902C18.027 7.24766 18.0821 6.64198 17.7199 6.27979C17.3577 5.9176 16.752 5.97266 15.5407 6.08278Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
