<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GarbageTruckIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after shopping-cart-01: it rolls forward on its wheels, then eases back
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(3.32px) rotate(4.15deg)', 'translateX(-0.41px) rotate(-1.04deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.63,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.circle cx="17" cy="18" r="2" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.circle cx="7" cy="18" r="2" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M11 9V12" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M7 10V12" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M17 4H15M15 4H9.48528C8.25903 4 7.6459 4 7.09459 4.22836C6.54328 4.45672 6.10973 4.89027 5.24264 5.75736L3.46446 7.53554C2.74189 8.25811 2.3806 8.6194 2.1903 9.07883C2 9.53825 2 10.0492 2 11.0711V13C2 15.357 2 16.5355 2.73223 17.2678C3.2191 17.7546 3.90328 17.9178 5 17.9724M15 4V8C15 9.88562 15 10.8284 15.5858 11.4142C16.1716 12 17.1144 12 19 12H22V13C22 15.357 22 16.5355 21.2678 17.2678C20.7809 17.7546 20.0967 17.9178 19 17.9724M9 18H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M15 7H16.6998C18.0581 7 18.7373 7 19.29 7.35371C19.8427 7.70742 20.1647 8.34811 20.8087 9.6295L22 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
          </svg>
        </div>
</template>
