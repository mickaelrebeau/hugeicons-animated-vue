<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Cupcake03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the cake rises in its wrapper and lands with a soft squash
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.44px) scaleY(0.82)', 'translateY(-3.51px) scaleY(1.08)', 'translateY(0.52px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.69,
      times: [0, 0.18, 0.48, 0.78, 1],
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
            <motion.path d="M12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4ZM12 4C12 3.5 12.4 2.4 14 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.91px' }" />
            <motion.path d="M10 6C7.79149 6 5.9019 8.49273 7.24928 10.0811C5.6231 9.73961 4 10.9457 4 12.5341C4 15.4859 8.66165 15.9075 9.27999 13.0367C9.84382 15.6544 14.1562 15.6544 14.72 13.0367C15.3384 15.9075 20 15.4859 20 12.5341C20 10.9457 18.3769 9.73961 16.7507 10.0811C18.0981 8.49273 16.2085 6 14 6" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.91px' }" />
            <motion.path d="M6 15L7.17111 19.0989C7.57006 20.4952 7.76954 21.1934 8.30421 21.5967C8.83888 22 9.56499 22 11.0172 22H12.9828C14.435 22 15.1611 22 15.6958 21.5967C16.2305 21.1934 16.4299 20.4952 16.8289 19.0989L18 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.91px' }" />
          </svg>
        </div>
</template>
