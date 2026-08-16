<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GraduateFemaleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the graduate female take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.66px) rotate(-1.96deg)', 'translateY(0.39px) rotate(0.69deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.54,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-4.74deg)', 'scale(1.1) rotate(1.9deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.44, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
  }),
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
            <motion.path d="M19 10C16.995 9.36815 14.5882 9 12 9C9.41179 9 7.00499 9.36815 5 10V13.5C7.00499 12.8682 9.41179 12.5 12 12.5C14.5882 12.5 16.995 12.8682 19 13.5V10Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19 11V14.2611C19.1795 15.4395 19.8462 18.0707 22 20.091C21.2821 21.2694 18.8769 23.1213 15 21.1011" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 17.06px' }" />
            <motion.path d="M5 11V14.2611C4.82051 15.4395 4.15385 18.0707 2 20.091C2.71795 21.2694 5.12308 23.1213 9 21.1011" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 17.06px' }" />
            <motion.path d="M16.5 16V17.3488C16.5 18.7695 15.8365 20.086 14.7522 20.8169L13.8522 21.4236C12.7121 22.1921 11.2879 22.1921 10.1478 21.4236L9.24782 20.8169C8.16348 20.086 7.5 18.7695 7.5 17.3488V16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19 10L20.1257 9.4071C21.3888 8.57875 22.0203 8.16457 21.9995 7.57281C21.9787 6.98105 21.32 6.62104 20.0025 5.90101L15.2753 3.31756C13.6681 2.43919 12.8645 2 12 2C11.1355 2 10.3319 2.43919 8.72468 3.31756L3.99753 5.90101C2.68004 6.62104 2.02129 6.98105 2.0005 7.57281C1.9797 8.16457 2.61125 8.57875 3.87434 9.4071L5 10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
