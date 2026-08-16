<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ConciergeBellIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after notification-03: the bell rings from its hanging point and decays naturally
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-13.01deg)', 'rotate(10.22deg)', 'rotate(-7.44deg)', 'rotate(4.65deg)', 'rotate(-1.86deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.96,
      ease: 'easeInOut',
      times: [0, 0.18, 0.38, 0.56, 0.72, 0.87, 1],
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
            <motion.path d="M3.5 20.5H20.5C20.9659 20.5 21.1989 20.5 21.3827 20.4239C21.6277 20.3224 21.8224 20.1277 21.9239 19.8827C22 19.6989 22 19.4659 22 19C22 18.5341 22 18.3011 21.9239 18.1173C21.8224 17.8723 21.6277 17.6776 21.3827 17.5761C21.1989 17.5 20.9659 17.5 20.5 17.5H3.5C3.03406 17.5 2.80109 17.5 2.61732 17.5761C2.37229 17.6776 2.17761 17.8723 2.07612 18.1173C2 18.3011 2 18.5341 2 19C2 19.4659 2 19.6989 2.07612 19.8827C2.17761 20.1277 2.37229 20.3224 2.61732 20.4239C2.80109 20.5 3.03406 20.5 3.5 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6.5px' }" />
            <motion.path d="M20 14.5C20 10.0817 16.4183 6.5 12 6.5C7.58172 6.5 4 10.0817 4 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6.5px' }" />
            <motion.path d="M12 3.50195V6.50195" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6.5px' }" />
            <motion.path d="M10 3.50195L14 3.50158" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6.5px' }" />
          </svg>
        </div>
</template>
