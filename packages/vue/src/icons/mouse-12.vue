<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Mouse12Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after mouse-left-click-01: the shell presses under the active button and releases
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.81px) scaleX(0.9) scaleY(1.04)', 'translateX(2.03px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
    transition: {
      duration: 0.52,
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
            <motion.path d="M12 22C17.6 22 19 18.1665 19 13.5C19 8.83348 17.6 5 12 5C6.39994 5 5 8.83346 5 13.5C5 18.1665 6.39994 22 12 22Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 13.5px' }" />
            <motion.path d="M12 8V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 13.5px' }" />
            <motion.path d="M10.5 9.5C10.5 9.03406 10.5 8.80109 10.5761 8.61732C10.6776 8.37229 10.8723 8.17761 11.1173 8.07612C11.3011 8 11.5341 8 12 8C12.4659 8 12.6989 8 12.8827 8.07612C13.1277 8.17761 13.3224 8.37229 13.4239 8.61732C13.5 8.80109 13.5 9.03406 13.5 9.5V10.5C13.5 10.9659 13.5 11.1989 13.4239 11.3827C13.3224 11.6277 13.1277 11.8224 12.8827 11.9239C12.6989 12 12.4659 12 12 12C11.5341 12 11.3011 12 11.1173 11.9239C10.8723 11.8224 10.6776 11.6277 10.5761 11.3827C10.5 11.1989 10.5 10.9659 10.5 10.5V9.5Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 13.5px' }" />
          </svg>
        </div>
</template>
