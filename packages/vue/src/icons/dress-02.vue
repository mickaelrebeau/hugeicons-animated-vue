<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Dress02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after leaf-01: the fabric catches a short breeze from its hanging point
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translateX(0px)',
  },
  animate: {
    transform: ['rotate(0deg) translateX(0px)', 'rotate(-11.68deg) translateX(1.56px)', 'rotate(4.87deg) translateX(-0.39px)', 'rotate(-1.95deg) translateX(0.19px)', 'rotate(0deg) translateX(0px)'],
    transition: {
      duration: 0.68,
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
            <motion.path d="M9.5 9C8.0449 8.5 7.26946 7.98853 7.5 6C7.62989 4.87968 8 4 7 3L9.5 2C9.66667 3.16667 10.5 4.5 12 5C13.5 4.5 14.3333 3.16667 14.5 2L17 3C16 4 16.3701 4.87968 16.5 6C16.7305 7.98853 15.9551 8.5 14.5 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22.18px' }" />
            <motion.path d="M8.5 12H15.5C15 11 15 10 15 9H9C9 10 9 11 8.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22.18px' }" />
            <motion.path d="M16.3124 21.4483C17.5989 22.1839 19.2888 22.1672 20.5946 21.4316C20.9541 21.2254 21.142 20.7479 20.8721 20.4605C18.9447 18.4075 17.4975 15.9016 16.4925 13.3545C16.2273 12.6825 16.0947 12.3465 15.8401 12.1732C15.5855 12 15.2432 12 14.5585 12H9.44152C8.75684 12 8.41451 12 8.1599 12.1732C7.90529 12.3465 7.77271 12.6825 7.50755 13.3545C6.50254 15.9016 5.05527 18.4075 3.12788 20.4605C2.85805 20.7479 3.04595 21.2254 3.40544 21.4316C4.71122 22.1672 6.40105 22.1839 7.68763 21.4483C8.49414 20.9969 9.51189 20.9969 10.2992 21.4483C10.8231 21.7434 11.4622 22 12 22C12.5378 22 13.1769 21.7434 13.7008 21.4483C14.4881 20.9969 15.5059 20.9969 16.3124 21.4483Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22.18px' }" />
          </svg>
        </div>
</template>
