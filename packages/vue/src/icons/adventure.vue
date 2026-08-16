<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AdventureIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the adventure take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-5.27deg)', 'scale(1.1) rotate(2.11deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.47, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.79px) rotate(-2.11deg)', 'translateY(0.42px) rotate(0.74deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
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
            <motion.path d="M6.56457 19.5607C5.97878 20.1464 5.02903 20.1464 4.44325 19.5607C3.85746 18.9749 3.85746 18.0251 4.44325 17.4393C5.02903 16.8536 5.97878 16.8536 6.56457 17.4393C7.15035 18.0251 7.15035 18.9749 6.56457 19.5607Z" stroke="currentColor" stroke-width="1.5" :variants="cellVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 18.5px' }" />
            <motion.path d="M6.00391 12H6.37548C6.90591 12 7.41462 12.2107 7.78969 12.5858L11.4181 16.2142C11.7932 16.5893 12.0039 17.098 12.0039 17.6284V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 15px' }" />
            <motion.path d="M10.5103 15L18.5559 8.37415C18.8887 8.10007 19.1248 7.7264 19.2294 7.30812L19.9938 4.25039C20.0307 4.10291 19.8971 3.96933 19.7496 4.0062L16.6919 4.77063C16.2736 4.8752 15.8999 5.11126 15.6258 5.44407L9 13.4897" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M13.9091 2.89255C12.86 2.29753 12.3355 2.00001 12.0007 2C11.6659 1.99999 11.1413 2.29748 10.0921 2.89247C9.07711 3.46803 8.01375 3.82383 6.97637 4.04312C4.91674 4.47852 3.88691 4.69622 3.44345 5.23327C3 5.77032 3 6.61265 3 8.29731V9.96205M12.0006 22C12.3126 22 12.6246 21.9587 12.9276 21.8762C13.4183 21.7426 13.8799 21.4552 14.8031 20.8804C16.8654 19.5964 17.8965 18.9545 18.6779 18.13C19.643 17.1117 20.3379 15.8876 20.7044 14.5603C20.9539 13.6568 20.9937 12.6829 21 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6.5 17.5L9.5 14.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 16px' }" />
          </svg>
        </div>
</template>
