<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ClipboardTypeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the clipboard type separate in depth and stack again
// generated from @hugeicons/core-free-icons
const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.45px, -1.25px)', 'translate(0.21px, -0.21px)', 'translate(0px, 0px)'],
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
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.83px) rotate(-1.04deg)', 'translateY(0.47px) rotate(0.52deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
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
            <motion.path d="M14.5 2H9.5C8.67157 2 8 2.67157 8 3.5C8 4.32843 8.67157 5 9.5 5H14.5C15.3284 5 16 4.32843 16 3.5C16 2.67157 15.3284 2 14.5 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3.5px' }" />
            <motion.path d="M16 3.5C17.5535 3.54681 18.48 3.72007 19.1213 4.36137C20 5.24004 20 6.65424 20 9.48263L20 15.9995C20 18.8279 20 20.2421 19.1213 21.1208C18.2426 21.9995 16.8284 21.9995 14 21.9995L10 21.9995C7.17158 21.9995 5.75737 21.9995 4.87869 21.1208C4.00001 20.2421 4.00001 18.8279 4 15.9995L4.00001 9.48269C4.00001 6.65425 4 5.24004 4.87868 4.36136C5.51997 3.72007 6.44651 3.54681 7.9999 3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.75px' }" />
            <motion.path d="M12.7508 10C12.7508 9.58579 12.4151 9.25 12.0008 9.25C11.5866 9.25 11.2508 9.58579 11.2508 10H12.0008H12.7508ZM11.2508 16C11.2508 16.4142 11.5866 16.75 12.0008 16.75C12.4151 16.75 12.7508 16.4142 12.7508 16H12.0008H11.2508ZM10.0008 15.25C9.58664 15.25 9.25085 15.5858 9.25085 16C9.25085 16.4142 9.58664 16.75 10.0008 16.75V16V15.25ZM14.0008 16.75C14.4151 16.75 14.7508 16.4142 14.7508 16C14.7508 15.5858 14.4151 15.25 14.0008 15.25V16V16.75ZM14.25 10.9994C14.2496 11.4136 14.5851 11.7496 14.9994 11.75C15.4136 11.7504 15.7496 11.4149 15.75 11.0006L15 11L14.25 10.9994ZM8.25 11C8.25 11.4142 8.58579 11.75 9 11.75C9.41421 11.75 9.75 11.4142 9.75 11H9H8.25ZM12.0008 10H11.2508V16H12.0008H12.7508V10H12.0008ZM10.0008 16V16.75H14.0008V16V15.25H10.0008V16ZM10 10V10.75H14.0009V10V9.25H10V10ZM14.0009 10V10.75C14.1385 10.75 14.2501 10.8617 14.25 10.9994L15 11L15.75 11.0006C15.7508 10.034 14.9675 9.25 14.0009 9.25V10ZM10 10V9.25C9.0335 9.25 8.25 10.0335 8.25 11H9H9.75C9.75 10.8619 9.86193 10.75 10 10.75V10Z" fill="currentColor" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
          </svg>
        </div>
</template>
