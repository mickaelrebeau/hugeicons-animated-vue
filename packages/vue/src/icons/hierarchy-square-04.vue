<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HierarchySquare04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after dashboard-square-01: the hierarchy resolves from parent to children
// generated from @hugeicons/core-free-icons
const tileVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['translateY(1.39px) scale(0.74)', 'translateY(-0.4px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.47, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.74px) rotate(-2.04deg)', 'translateY(0.41px) rotate(0.72deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.56,
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
            <motion.path d="M9 12C9 10.5858 9 9.87868 8.48744 9.43934C7.97487 9 7.14992 9 5.5 9C3.85008 9 3.02513 9 2.51256 9.43934C2 9.87868 2 10.5858 2 12C2 13.4142 2 14.1213 2.51256 14.5607C3.02513 15 3.85008 15 5.5 15C7.14992 15 7.97487 15 8.48744 14.5607C9 14.1213 9 13.4142 9 12Z" stroke="currentColor" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 12px' }" />
            <motion.path d="M22 5C22 3.58579 22 2.87868 21.5899 2.43934C21.1799 2 20.5199 2 19.2 2H17.8C16.4801 2 15.8201 2 15.4101 2.43934C15 2.87868 15 3.58579 15 5C15 6.41421 15 7.12132 15.4101 7.56066C15.8201 8 16.4801 8 17.8 8H19.2C20.5199 8 21.1799 8 21.5899 7.56066C22 7.12132 22 6.41421 22 5Z" stroke="currentColor" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 5px' }" />
            <motion.path d="M22 19C22 17.5858 22 16.8787 21.5899 16.4393C21.1799 16 20.5199 16 19.2 16H17.8C16.4801 16 15.8201 16 15.4101 16.4393C15 16.8787 15 17.5858 15 19C15 20.4142 15 21.1213 15.4101 21.5607C15.8201 22 16.4801 22 17.8 22H19.2C20.5199 22 21.1799 22 21.5899 21.5607C22 21.1213 22 20.4142 22 19Z" stroke="currentColor" stroke-width="1.5" :variants="tileVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 19px' }" />
            <motion.path d="M12 11.999L12 16.0462C12 17.9201 12.9172 18.7615 15 19M12 11.999L12 7.95192C12 6.18453 12.779 5.25846 15 5M12 11.999L9 11.999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
