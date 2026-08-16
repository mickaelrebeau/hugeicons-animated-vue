<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Chart02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after dashboard-square-01: the data marks rise in reading order so the chart appears to calculate itself
// generated from @hugeicons/core-free-icons
const tileVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['translateY(1.51px) scale(0.74)', 'translateY(-0.43px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.58px) rotate(-1.86deg)', 'translateY(0.37px) rotate(0.65deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M3.5 12.5V19.5C3.5 19.9659 3.5 20.1989 3.57612 20.3827C3.67761 20.6277 3.87229 20.8224 4.11732 20.9239C4.30109 21 4.53406 21 5 21C5.46594 21 5.69891 21 5.88268 20.9239C6.12771 20.8224 6.32239 20.6277 6.42388 20.3827C6.5 20.1989 6.5 19.9659 6.5 19.5V12.5C6.5 12.0341 6.5 11.8011 6.42388 11.6173C6.32239 11.3723 6.12771 11.1776 5.88268 11.0761C5.69891 11 5.46594 11 5 11C4.53406 11 4.30109 11 4.11732 11.0761C3.87229 11.1776 3.67761 11.3723 3.57612 11.6173C3.5 11.8011 3.5 12.0341 3.5 12.5Z" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 16px' }" />
            <motion.path d="M10.5 14.5V19.4995C10.5 19.9654 10.5 20.1984 10.5761 20.3822C10.6776 20.6272 10.8723 20.8219 11.1173 20.9234C11.3011 20.9995 11.5341 20.9995 12 20.9995C12.4659 20.9995 12.6989 20.9995 12.8827 20.9234C13.1277 20.8219 13.3224 20.6272 13.4239 20.3822C13.5 20.1984 13.5 19.9654 13.5 19.4995V14.5C13.5 14.0341 13.5 13.8011 13.4239 13.6173C13.3224 13.3723 13.1277 13.1776 12.8827 13.0761C12.6989 13 12.4659 13 12 13C11.5341 13 11.3011 13 11.1173 13.0761C10.8723 13.1776 10.6776 13.3723 10.5761 13.6173C10.5 13.8011 10.5 14.0341 10.5 14.5Z" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <motion.path d="M17.5 10.5V19.5C17.5 19.9659 17.5 20.1989 17.5761 20.3827C17.6776 20.6277 17.8723 20.8224 18.1173 20.9239C18.3011 21 18.5341 21 19 21C19.4659 21 19.6989 21 19.8827 20.9239C20.1277 20.8224 20.3224 20.6277 20.4239 20.3827C20.5 20.1989 20.5 19.9659 20.5 19.5V10.5C20.5 10.0341 20.5 9.80109 20.4239 9.61732C20.3224 9.37229 20.1277 9.17761 19.8827 9.07612C19.6989 9 19.4659 9 19 9C18.5341 9 18.3011 9 18.1173 9.07612C17.8723 9.17761 17.6776 9.37229 17.5761 9.61732C17.5 9.80109 17.5 10.0341 17.5 10.5Z" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 15px' }" />
            <motion.path d="M6.5 6.5C6.5 7.32843 5.82843 8 5 8C4.17157 8 3.5 7.32843 3.5 6.5C3.5 5.67157 4.17157 5 5 5C5.82843 5 6.5 5.67157 6.5 6.5Z" stroke="currentColor" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M20.5 4.5C20.5 5.32843 19.8284 6 19 6C18.1716 6 17.5 5.32843 17.5 4.5C17.5 3.67157 18.1716 3 19 3C19.8284 3 20.5 3.67157 20.5 4.5Z" stroke="currentColor" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M13.5 8.5C13.5 9.32843 12.8284 10 12 10C11.1716 10 10.5 9.32843 10.5 8.5C10.5 7.67157 11.1716 7 12 7C12.8284 7 13.5 7.67157 13.5 8.5Z" stroke="currentColor" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6.44336 6.91199L10.558 8.08762M13.3033 7.75547L17.6981 5.24414" stroke="currentColor" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
