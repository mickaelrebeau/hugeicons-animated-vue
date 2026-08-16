<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ApiGatewayIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the api gateway separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.83px) rotate(-1.04deg)', 'translateY(0.47px) rotate(0.52deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.46px, -1.25px)', 'translate(0.21px, -0.21px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.53,
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
            <motion.path d="M18 17L18 7L6 7L6 17L18 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M22 17.9296L22 6.07037C22 5.5464 22 5.28442 21.8817 5.06333C21.7633 4.84223 21.5454 4.69691 21.1094 4.40627L19.1934 3.12892C19.0673 3.04486 18.9191 3 18.7676 3C18.3437 3 18 3.34366 18 3.76759L18 20.2324C18 20.6563 18.3437 21 18.7676 21C18.9191 21 19.0673 20.9551 19.1934 20.8711L21.1094 19.5937C21.5454 19.3031 21.7633 19.1578 21.8817 18.9367C22 18.7156 22 18.4536 22 17.9296Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 12px' }" />
            <motion.path d="M2.8906 19.5937C2.45463 19.3031 2.23665 19.1578 2.11833 18.9367C2 18.7156 2 18.4536 2 17.9296L2 6.07037C2 5.5464 2 5.28442 2.11833 5.06333C2.23665 4.84223 2.45463 4.69691 2.8906 4.40627L4.80662 3.12892C4.93271 3.04486 5.08087 3 5.23241 3C5.65634 3 6 3.34366 6 3.76759L6 20.2324C6 20.6563 5.65634 21 5.23241 21C5.08087 21 4.93272 20.9551 4.80663 20.8711L2.8906 19.5937Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 12px' }" />
            <motion.path d="M13.5001 10.0004L14.7267 11.0576C15.2423 11.502 15.5001 11.7242 15.5001 12.0004C15.5001 12.2765 15.2423 12.4987 14.7267 12.9432L13.5001 14.0004" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 12px' }" />
            <motion.path d="M10.5 10L9.27346 11.0572C8.75782 11.5016 8.5 11.7239 8.5 12C8.5 12.2761 8.75782 12.4984 9.27346 12.9428L10.5 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 12px' }" />
          </svg>
        </div>
</template>
