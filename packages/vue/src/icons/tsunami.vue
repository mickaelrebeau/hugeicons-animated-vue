<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TsunamiIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cloud: a swell rolls through and the surface finds level
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.51px) rotate(-3.23deg)', 'translateY(1.08px) rotate(2.69deg)', 'translateY(-0.43px) rotate(-1.08deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.91,
      ease: 'easeInOut',
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
            <motion.path d="M7.06641 12.0024C7.06641 12.0024 7.06616 15.0024 9.99951 16.0024" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.43px 10.19px' }" />
            <motion.path d="M22 21.3757C20.5547 22.1867 18.7056 22.1867 17.2604 21.3757C16.3889 20.878 15.2412 20.878 14.3698 21.3757C14.3698 21.3757 14.3486 21.3757 14.3486 21.3941C12.9033 22.2052 11.0542 22.2052 9.63019 21.3941C8.73752 20.8964 7.61105 20.8964 6.73964 21.3941M6.73964 21.3757C5.29436 22.1867 3.44527 22.1867 2 21.3757" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.43px 10.19px' }" />
            <motion.path d="M11 7.00244C11 12.2491 15.2533 16.5024 20.5 16.5024H22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.43px 10.19px' }" />
            <motion.path d="M6.88792 6.92656C7.25992 7.14256 7.97992 7.68256 9.17992 7.46656C10.6199 7.02256 11.8009 6.65115 12.7199 7.20256C13.6199 7.74256 14.2199 8.22256 14.5799 7.98256C14.7578 8.01814 15.0555 7.33634 14.9939 6.36256C14.9517 5.69425 14.7207 4.8884 14.2079 4.08256C13.9079 3.66256 13.7148 3.51528 13.6799 3.48256C11.7361 1.65713 8.59877 1.35756 5.81992 3.48256C2.69992 6.00256 2.27992 9.18256 2.09992 10.7426C1.79992 13.7426 2.27992 17.1626 2.75992 19.0226" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.43px 10.19px' }" />
          </svg>
        </div>
</template>
