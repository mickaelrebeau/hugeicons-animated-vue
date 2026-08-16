<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChurchIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after dashboard-square-01: the separate cells of the church assemble from top-left to bottom-right
// generated from @hugeicons/core-free-icons
const tileVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['translateY(1.41px) scale(0.74)', 'translateY(-0.4px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.48, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.76px) rotate(-2.08deg)', 'translateY(0.42px) rotate(0.73deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M18.7889 14.3944L17 13.5V22C18.8856 22 19.8284 22 20.4142 21.4142C21 20.8284 21 19.8799 21 17.9828C21 16.7729 21 16.1679 20.7013 15.6846C20.4026 15.2013 19.8647 14.9323 18.7889 14.3944Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 17.75px' }" />
            <motion.path d="M5.21114 14.3944L7 13.5V22C5.11438 22 4.17157 22 3.58579 21.4142C3 20.8284 3 19.8799 3 17.9828C3 16.7729 3 16.1679 3.2987 15.6846C3.5974 15.2013 4.13531 14.9323 5.21114 14.3944Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 17.75px' }" />
            <motion.path d="M8.7812 8.81253L11.084 7.27735C11.3552 7.0965 11.674 7 12 7C12.326 7 12.6448 7.0965 12.916 7.27735L15.2188 8.81253C16.0907 9.39382 16.5267 9.68447 16.7633 10.1267C17 10.5688 17 11.0928 17 12.1407V22H7V12.1407C7 11.0928 7 10.5688 7.23665 10.1267C7.4733 9.68447 7.90927 9.39382 8.7812 8.81253Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M10 22V19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19.5px' }" />
            <motion.path d="M12 7V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M10 4H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12.125 12.25H12M12.25 12.25C12.25 12.3881 12.1381 12.5 12 12.5C11.8619 12.5 11.75 12.3881 11.75 12.25C11.75 12.1119 11.8619 12 12 12C12.1381 12 12.25 12.1119 12.25 12.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
