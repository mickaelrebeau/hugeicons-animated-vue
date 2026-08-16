<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CookieIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the cookie separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.87px) rotate(-1.09deg)', 'translateY(0.49px) rotate(0.55deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.61,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.53px, -1.31px)', 'translate(0.22px, -0.22px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M12.0579 22C16.9725 22 21.0638 18.4937 21.9416 13.8586C22.1996 12.4967 21.5931 12.5686 20.3101 12.3438C19.3996 12.1844 18.5498 11.5667 18.2333 10.588C18.0178 9.9216 17.9376 9.89475 17.2352 9.86554C15.7861 9.80529 14.625 8.2689 15.2032 7.02602C15.419 6.56236 15.412 6.50892 15.0078 6.19448C14.3005 5.6443 13.9706 4.6166 14.0978 3.62604C14.2347 2.5591 14.3147 2.1747 13.1854 2.05455C7.45657 1.44501 2 6.0196 2 11.9948C2 17.5205 6.50308 22 12.0579 22Z" stroke="currentColor" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.1px 11.72px' }" />
            <motion.path d="M12.0078 18L11.9988 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M10 6L9 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 6.5px' }" />
            <motion.path d="M17 14L16 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 14.5px' }" />
            <motion.path d="M7 15L8 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 15.5px' }" />
            <motion.path d="M11.125 12H11M11.25 12C11.25 12.1381 11.1381 12.25 11 12.25C10.8619 12.25 10.75 12.1381 10.75 12C10.75 11.8619 10.8619 11.75 11 11.75C11.1381 11.75 11.25 11.8619 11.25 12Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 12px' }" />
            <motion.path d="M6.125 10H6M6.25 10C6.25 10.1381 6.13807 10.25 6 10.25C5.86193 10.25 5.75 10.1381 5.75 10C5.75 9.86193 5.86193 9.75 6 9.75C6.13807 9.75 6.25 9.86193 6.25 10Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 10px' }" />
          </svg>
        </div>
</template>
