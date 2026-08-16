<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'EllipsisIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the body of the ellipsis lifts while its detail lines follow
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.78px) rotate(-0.98deg)', 'translateY(0.44px) rotate(0.49deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M12 12.002H12.5M19 12.002H19.5M5 12.002H5.5M12 13.002C12.5523 13.002 13 12.5542 13 12.002C13 11.4497 12.5523 11.002 12 11.002C11.4477 11.002 11 11.4497 11 12.002C11 12.5542 11.4477 13.002 12 13.002ZM19 13.002C19.5523 13.002 20 12.5542 20 12.002C20 11.4497 19.5523 11.002 19 11.002C18.4477 11.002 18 11.4497 18 12.002C18 12.5542 18.4477 13.002 19 13.002ZM5 13.002C5.55228 13.002 6 12.5542 6 12.002C6 11.4497 5.55228 11.002 5 11.002C4.44772 11.002 4 11.4497 4 12.002C4 12.5542 4.44772 13.002 5 13.002Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
