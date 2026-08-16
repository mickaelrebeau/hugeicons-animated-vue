<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FileStackIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the sheet lifts from its stack while its details follow
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.78px) rotate(-0.97deg)', 'translateY(0.44px) rotate(0.49deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M20.6527 3.65269L20.0355 3.03553C19.6795 2.67949 19.5015 2.50147 19.2971 2.36916C19.0625 2.21732 18.8022 2.1095 18.5289 2.05099C18.2908 2 18.0391 2 17.5355 2C16.3835 2 15.8075 2 15.3581 2.20169C14.844 2.43247 14.4325 2.844 14.2017 3.35815C14 3.80748 14 4.3835 14 5.53553V8C14 9.59133 14 10.387 14.3768 10.9614C14.5497 11.2251 14.7749 11.4503 15.0386 11.6232C15.613 12 16.4087 12 18 12C19.5913 12 20.387 12 20.9614 11.6232C21.2251 11.4503 21.4503 11.2251 21.6232 10.9614C22 10.387 22 9.59133 22 8V6.90538C22 5.96526 22 5.49519 21.8249 5.07252C21.6498 4.64985 21.3175 4.31746 20.6527 3.65269Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 7px' }" />
            <motion.path d="M16 15.9571C15.8185 16.2218 15.5822 16.448 15.3055 16.6216C14.7027 17 13.8677 17 12.1977 17C10.5277 17 9.69273 17 9.08989 16.6216C8.81325 16.448 8.57686 16.2218 8.3954 15.9571C8 15.3802 8 14.5812 8 12.9831V10.5082C8 9.35133 8 8.77287 8.21166 8.32165C8.45385 7.80532 8.88571 7.39206 9.42527 7.1603C9.61718 7.07787 9.83111 7.02899 10.0989 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M10 20.9571C9.81855 21.2218 9.58216 21.448 9.30551 21.6216C8.70267 22 7.86768 22 6.1977 22C4.52772 22 3.69273 22 3.08989 21.6216C2.81325 21.448 2.57686 21.2218 2.3954 20.9571C2 20.3802 2 19.5812 2 17.9831V15.5082C2 14.3513 2 13.7729 2.21166 13.3216C2.45385 12.8053 2.88571 12.3921 3.42527 12.1603C3.61718 12.0779 3.83111 12.029 4.09885 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 17px' }" />
          </svg>
        </div>
</template>
