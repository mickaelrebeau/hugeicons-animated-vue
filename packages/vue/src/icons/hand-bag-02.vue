<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HandBag02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after thumbs-up: the wrist leads one readable hand gesture
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.61px) rotate(-4.04deg)', 'translateY(0.3px) rotate(1.01deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M19.9933 10.5C20.8401 12.9778 23.118 17.458 21.3419 19.8804C19.0536 23.0016 4.50551 22.3952 2.66177 19.8804C0.885738 17.458 3.15325 12.9778 4 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 23px' }" />
            <motion.path d="M12 15C13.2636 15 14.9984 17.5713 13.2796 17.8929C12.5102 18.0368 11.4776 18.0346 10.7204 17.8929C9.00158 17.5713 10.7364 15 12 15Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 23px' }" />
            <motion.path d="M7.5 15C5.72205 13.8047 4.61134 12.0921 4.17261 10.0698C3.98648 9.21181 3.89341 8.78282 4.19523 8.39141C4.49706 8 4.98753 8 5.96846 8H18.0315C19.0125 8 19.5029 8 19.8048 8.39141C20.1066 8.78282 20.0135 9.21181 19.8274 10.0698C19.3887 12.0921 18.278 13.8047 16.5 15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 23px' }" />
            <motion.path d="M12 15V8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 23px' }" />
            <motion.path d="M6.5 8C7.0699 3.99202 9.316 1 12 1C14.684 1 16.9301 3.99202 17.5 8" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 23px' }" />
          </svg>
        </div>
</template>
