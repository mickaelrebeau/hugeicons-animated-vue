<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CarTaxiFrontIcon' })

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
    transform: ['translateX(0px) rotate(0deg)', 'translateX(3.15px) rotate(3.94deg)', 'translateX(-0.39px) rotate(-0.99deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
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
            <motion.path d="M3 18.5V14.3885C3 13.4485 3 12.9785 3.107 12.5253C3.21401 12.072 3.4242 11.6516 3.84458 10.8108L4.89443 8.71115C5.43234 7.63531 5.7013 7.0974 6.18461 6.7987C6.66791 6.5 7.26932 6.5 8.47214 6.5H15.5279C16.7307 6.5 17.3321 6.5 17.8154 6.7987C18.2987 7.0974 18.5677 7.63531 19.1056 8.71114L20.1554 10.8108C20.5758 11.6516 20.786 12.072 20.893 12.5253C21 12.9785 21 13.4485 21 14.3885V18.5C21 19.4428 21 19.9142 20.7071 20.2071C20.4142 20.5 19.9428 20.5 19 20.5C18.0572 20.5 17.5858 20.5 17.2929 20.2071C17 19.9142 17 19.4428 17 18.5H7C7 19.4428 7 19.9142 6.70711 20.2071C6.41421 20.5 5.94281 20.5 5 20.5C4.05719 20.5 3.58579 20.5 3.29289 20.2071C3 19.9142 3 19.4428 3 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.5px' }" />
            <motion.path d="M21 12.5L23 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.5px' }" />
            <motion.path d="M3 12.5L1 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.5px' }" />
            <motion.path d="M3 12.5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.5px' }" />
            <motion.path d="M15 6.5C15 5.08579 15 4.37868 14.5607 3.93934C14.1213 3.5 13.4142 3.5 12 3.5C10.5858 3.5 9.87868 3.5 9.43934 3.93934C9 4.37868 9 5.08579 9 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.5px' }" />
            <motion.path d="M6 15.5H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.5px' }" />
            <motion.path d="M17 15.5H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.5px' }" />
          </svg>
        </div>
</template>
