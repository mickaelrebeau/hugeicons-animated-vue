<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Hamburger02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after wifi-01: the arcs of the hamburger propagate outward from their geometric source
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.61px) rotate(-1.9deg)', 'translateY(0.38px) rotate(0.66deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.53,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const arcVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0.85px) scale(0.82)', 'translateY(0px) scale(1.06)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.98, ease: [0.23, 1, 0.32, 1], delay: i * 0.12 },
  }),
}

const sourceVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.86)', 'scale(1.18)', 'scale(1)'],
    transition: {
      duration: 0.9,
      ease: [0.23, 1, 0.32, 1],
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
            <motion.path d="M14.8543 4H9.14613C6.6505 4 4.52893 5.96401 3.75315 8.7004C3.49773 9.6013 3.37003 10.0517 3.69086 10.5259C4.01169 11 4.53398 11 5.57854 11H18.4219C19.4664 11 19.9887 11 20.3096 10.5259C20.6304 10.0517 20.5027 9.6013 20.2473 8.7004C19.4715 5.96401 17.3499 4 14.8543 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6 15H5.57833C4.53377 15 4.01149 15 3.69065 15.3387C3.36982 15.6773 3.49753 15.9991 3.75294 16.6426C4.52873 18.5971 6.65029 20 9.14593 20H14.8541C17.3497 20 19.4713 18.5971 20.2471 16.6426C20.5025 15.9991 20.6302 15.6773 20.3093 15.3387C19.9885 15 19.4662 15 18.4217 15H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 8px' }" />
            <motion.path d="M19 15H20C21.1046 15 22 14.1046 22 13C22 11.8954 21.1046 11 20 11H12M5 15H4C2.89543 15 2 14.1046 2 13C2 11.8954 2.89543 11 4 11H6M6 11L7.48149 12.7284C8.18721 13.5517 8.54007 13.9634 9 13.9634C9.45993 13.9634 9.81279 13.5517 10.5185 12.7284L12 11M6 11H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 8px' }" />
            <motion.path d="M15 7L14 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9.125 8H9M9.25 8C9.25 8.13807 9.13807 8.25 9 8.25C8.86193 8.25 8.75 8.13807 8.75 8C8.75 7.86193 8.86193 7.75 9 7.75C9.13807 7.75 9.25 7.86193 9.25 8Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="sourceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 8px' }" />
          </svg>
        </div>
</template>
