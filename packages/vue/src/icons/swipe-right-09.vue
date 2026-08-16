<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SwipeRight09Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cursor-pointer-01: the gesture gathers momentum, crosses the surface, and eases out
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(3.49px) rotate(4.36deg)', 'translateX(-0.44px) rotate(-1.09deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.65,
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
            <motion.path d="M10.8654 9.68476L11.7434 4.76072C11.8889 3.94488 11.338 3.16689 10.513 3.02304C9.68807 2.87918 8.90138 3.42394 8.75591 4.23978L7 14.0879L6.85439 14.8511L4.88875 12.8372C4.17559 12.124 3.00086 12.1891 2.37081 12.9766C1.88873 13.5792 1.87541 14.4317 2.33844 15.049L5.35188 19.067C6.03575 19.9788 6.3777 20.4347 6.7892 20.7891C7.41699 21.3297 8.16928 21.7058 8.97845 21.8837C9.50883 22.0003 10.0787 22.0003 11.2185 22.0003H13.6206C15.9993 22.0003 18.0487 20.3245 18.521 17.9932L19.3889 13.7096L19.4767 13.2172C19.6222 12.4014 19.0713 11.6234 18.2463 11.4795C17.4214 11.3357 16.6347 11.8804 16.4892 12.6963L16.4014 13.1887M10.8654 9.68476L10.6021 11.162M10.8654 9.68476C11.0109 8.86892 11.7976 8.32417 12.6226 8.46802C13.4475 8.61188 13.9984 9.38986 13.8529 10.2057L13.6773 11.1905M13.6773 11.1905L13.5895 11.6829M13.6773 11.1905C13.8228 10.3747 14.6095 9.82992 15.4345 9.97377C16.2594 10.1176 16.8103 10.8956 16.6648 11.7115L16.577 12.2039" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.75px 22px' }" />
            <motion.path d="M22 4.5H15.5M22 4.5C22 3.79977 20.0057 2.49153 19.5 2M22 4.5C22 5.20023 20.0057 6.50847 19.5 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.75px 22px' }" />
          </svg>
        </div>
</template>
