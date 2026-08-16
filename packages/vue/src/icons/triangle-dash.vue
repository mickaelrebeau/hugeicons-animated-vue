<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TriangleDashIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after shield-02: the triangular mass loads toward its point and settles
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.94)', 'scale(1.08)', 'scale(1)'],
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
            <motion.path d="M13.9248 3.97827C13.2978 3.32609 12.6956 3 12 3C11.3044 3 10.7022 3.32609 10.0752 3.97827M16.3534 7.5C16.5886 7.89214 16.8364 8.30992 17.0994 8.75332L17.5423 9.5M7.64658 7.5C7.41137 7.89215 7.16357 8.30992 6.90057 8.75333L6.45769 9.5M19.3216 12.5C19.7565 13.2343 20.1465 13.8974 20.4854 14.5M4.6784 12.5C4.24346 13.2343 3.8535 13.8974 3.51458 14.5M21.9695 18C22.0492 18.5659 21.9745 19.0511 21.7236 19.4939C21.3899 20.0831 20.8323 20.4418 20 20.6602M2.0305 18C1.95078 18.5659 2.0255 19.0511 2.27636 19.4939C2.61013 20.0831 3.16765 20.4418 4 20.6602M16 20.9936C15.388 20.9998 14.7224 21 14 21M10 21C9.27757 21 8.612 20.9998 8 20.9936" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
