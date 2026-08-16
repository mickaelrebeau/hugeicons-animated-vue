<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CloudSunRainIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cloud-rain: drops fall through the glyph while the cloud holds
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1.25px)', 'translateY(0.31px)', 'translateY(0px)'],
    transition: {
      duration: 0.71,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

const dropVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
    opacity: 1,
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(3.53px)', 'translateY(-2.52px)', 'translateY(0px)'],
    opacity: [1, 0, 0, 1],
    transition: {
      duration: 0.69,
      times: [0, 0.42, 0.5, 1],
      ease: ['easeIn', 'linear', 'easeOut'],
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
            <motion.path d="M14 20.7938C15.1709 20.3563 16 19.2703 16 18C16 16.3431 14.5897 15 12.85 15C12.8448 15 12.8395 15 12.8343 15C12.8447 14.8902 12.85 14.779 12.85 14.6667C12.85 12.6416 11.1263 11 9 11C6.98627 11 5.33363 12.4724 5.1643 14.3485C3.38879 14.5094 2 15.9336 2 17.6667C2 18.9964 2.81753 20.1442 4 20.6792" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 15.9px' }" />
            <motion.path d="M17.3686 13C17.4509 12.6804 17.4946 12.3453 17.4946 12C17.4946 9.79086 15.7038 8 13.4946 8C12.7915 8 12.1308 8.18142 11.5566 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.53px 10.5px' }" />
            <motion.path d="M13.494 3V4M21.999 11.495H20.999M19.5059 5.48617L18.7988 6.19328M8.19929 6.19343L7.49218 5.48633" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.75px 7.25px' }" />
            <motion.path d="M11 19V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 20px' }" />
            <motion.path d="M7 18V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dropVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 19px' }" />
          </svg>
        </div>
</template>
