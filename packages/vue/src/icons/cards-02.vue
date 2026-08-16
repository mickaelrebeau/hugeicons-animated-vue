<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Cards02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the cards separate in depth and stack again
// generated from @hugeicons/core-free-icons
const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.48px, -1.27px)', 'translate(0.21px, -0.21px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.53,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.85px) rotate(-1.06deg)', 'translateY(0.48px) rotate(0.53deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
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
            <motion.path d="M3 11C3 8.17157 3 6.75736 3.87868 5.87868C4.75736 5 6.17157 5 9 5H11C13.8284 5 15.2426 5 16.1213 5.87868C17 6.75736 17 8.17157 17 11V16C17 18.8284 17 20.2426 16.1213 21.1213C15.2426 22 13.8284 22 11 22H9C6.17157 22 4.75736 22 3.87868 21.1213C3 20.2426 3 18.8284 3 16V11Z" stroke="currentColor" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 13.5px' }" />
            <motion.path d="M16.9244 19C18.0202 18.3874 18.3929 17.0406 19.1383 14.3469L20.1925 10.5375C20.938 7.84378 21.3107 6.49694 20.678 5.4359C20.0453 4.37485 18.6543 4.01397 15.8724 3.2922L13.9052 2.78183C11.1232 2.06006 9.73225 1.69918 8.63642 2.31177C7.85623 2.74792 7.44258 3.55626 7 4.95786" stroke="currentColor" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.16px 10.35px' }" />
            <motion.path d="M7.76123 11.2762C8.56573 10.8192 9.26789 11.0034 9.68969 11.2967C9.86265 11.4169 9.94912 11.4771 10 11.4771C10.0509 11.4771 10.1374 11.4169 10.3103 11.2967C10.7321 11.0034 11.4343 10.8192 12.2388 11.2762C13.2946 11.8758 13.5335 13.8541 11.0981 15.5232C10.6343 15.8411 10.4024 16 10 16C9.59764 16 9.36572 15.8411 8.90186 15.5232C6.46652 13.8541 6.70542 11.8758 7.76123 11.2762Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 13.41px' }" />
          </svg>
        </div>
</template>
