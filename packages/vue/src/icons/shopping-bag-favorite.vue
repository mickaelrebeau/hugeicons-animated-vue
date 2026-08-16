<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ShoppingBagFavoriteIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after shopping-cart-01: the cart rolls on its wheels while its contents lag behind
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(0px)', 'translateX(2.29px)', 'translateX(-0.31px)', 'translateX(0px)'],
    transition: {
      duration: 0.51,
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
            <motion.path d="M20.1765 12.5113C19.8261 9.50898 19.3142 7.25784 18.8394 5.65851C18.4501 4.34711 18.2554 3.69141 17.4572 3.0957C16.659 2.5 15.8431 2.5 14.2113 2.5H8.78876C7.15697 2.5 6.34107 2.5 5.54283 3.0957C4.74459 3.69141 4.54994 4.34711 4.16063 5.65851C3.68586 7.25784 3.1739 9.50898 2.82352 12.5113C2.41058 16.0497 2.20411 17.8189 3.39731 19.1594C4.59052 20.5 6.52422 20.5 10.3916 20.5H12.6084" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.19px 20.5px' }" />
            <motion.path d="M8.5 6.5C8.5 8.15685 9.84315 9.5 11.5 9.5C13.1569 9.5 14.5 8.15685 14.5 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.19px 20.5px' }" />
            <motion.path d="M18 21.5C18 21.5 14.5 19.3824 14.5 17.3333C14.5 16.3208 15.2368 15.5 16.25 15.5C16.775 15.5 17.3 15.6765 18 16.3824C18.7 15.6765 19.225 15.5 19.75 15.5C20.7632 15.5 21.5 16.3208 21.5 17.3333C21.5 19.3824 18 21.5 18 21.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.19px 20.5px' }" />
          </svg>
        </div>
</template>
