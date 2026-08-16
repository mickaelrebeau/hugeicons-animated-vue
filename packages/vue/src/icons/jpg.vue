<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'JpgIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the jpg move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.63px) rotate(-1.91deg)', 'translateY(0.38px) rotate(0.67deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.53,
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
            <motion.path d="M20 12.9999V10.6567C20 9.83923 20 9.43048 19.8478 9.06294C19.6955 8.6954 19.4065 8.40637 18.8284 7.82831L14.0919 3.09176C13.593 2.59287 13.3436 2.34343 13.0345 2.19562C12.9702 2.16488 12.9044 2.1376 12.8372 2.11389C12.5141 1.99988 12.1614 1.99988 11.4558 1.99988C8.21082 1.99988 6.58831 1.99988 5.48933 2.88595C5.26731 3.06496 5.06508 3.26719 4.88607 3.48921C4 4.58818 4 6.2107 4 9.45572V12.9999M13 2.49988V2.99988C13 5.82831 13 7.24252 13.8787 8.1212C14.7574 8.99988 16.1716 8.99988 19 8.99988H19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
            <motion.path d="M20 16.9999C20 16.4476 19.5523 15.9999 19 15.9999H17C16.4477 15.9999 16 16.4476 16 16.9999V20.9999C16 21.5522 16.4477 21.9999 17 21.9999H19C19.5523 21.9999 20 21.5522 20 20.9999V19.4999H18.6667M4 19.9999V20.2499C4 21.2164 4.7835 21.9999 5.75 21.9999C6.7165 21.9999 7.5 21.2164 7.5 20.2499V15.9999M10 21.9999V18.9999M10 18.9999V16.9999C10 16.4476 10.4477 15.9999 11 15.9999H12C12.8284 15.9999 13.5 16.6715 13.5 17.4999C13.5 18.3283 12.8284 18.9999 12 18.9999H10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
          </svg>
        </div>
</template>
