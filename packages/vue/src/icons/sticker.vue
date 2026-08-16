<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'StickerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the sticker separate in depth and stack again
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
            <motion.path d="M3 13V11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H12.6863C14.3213 3 15.1388 3 15.8739 3.30449C16.609 3.60897 17.1871 4.18704 18.3432 5.34318L18.6569 5.65686C19.813 6.81298 20.391 7.39104 20.6955 8.12612C21 8.8612 21 9.67869 21 11.3137V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15 3.5C15 5.84558 15 7.01836 15.6199 7.82628C15.7795 8.03428 15.9657 8.22046 16.1737 8.38006C16.9816 9 18.1544 9 20.5001 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.75px 6.25px' }" />
            <motion.path d="M14.5 16C13.8152 16.6257 12.9459 17 12 17C11.0541 17 10.1848 16.6257 9.5 16M8.25 12.125V12.25M15.75 12.1257V12.2507M8.5 12.25C8.5 12.3881 8.38807 12.5 8.25 12.5C8.11193 12.5 8 12.3881 8 12.25C8 12.1119 8.11193 12 8.25 12C8.38807 12 8.5 12.1119 8.5 12.25ZM16 12.2507C16 12.3887 15.8881 12.5007 15.75 12.5007C15.6119 12.5007 15.5 12.3887 15.5 12.2507C15.5 12.1126 15.6119 12.0007 15.75 12.0007C15.8881 12.0007 16 12.1126 16 12.2507Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
          </svg>
        </div>
</template>
