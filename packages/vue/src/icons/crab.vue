<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CrabIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after wifi-01: the arcs of the crab propagate outward from their geometric source
// generated from @hugeicons/core-free-icons
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

const arcVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0.82px) scale(0.82)', 'translateY(0px) scale(1.06)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.95, ease: [0.23, 1, 0.32, 1], delay: i * 0.12 },
  }),
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
            <motion.path d="M17 3C19.2867 3 23.096 3 21.7007 7.9709M21.7007 7.9709C20.3668 8.13688 18.524 8.5 18.016 6M21.7007 7.9709L21.7921 8.70069C21.9702 10.1229 21.3617 11.5302 20.197 12.39L18.016 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7 3C4.71333 3 0.903986 3 2.29933 7.9709M2.29933 7.9709C3.63322 8.13688 5.476 8.5 5.984 6M2.29933 7.9709L2.20794 8.70069C2.02983 10.1229 2.63829 11.5302 3.80302 12.39L5.984 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M18 15.1895C18 17.471 15.3597 19.4659 13.582 20.5505C12.5998 21.1498 11.4002 21.1498 10.418 20.5505C8.64031 19.4659 6 17.471 6 15.1895C6 11.7502 8.68629 10 12 10C15.3137 10 18 11.7502 18 15.1895Z" stroke="currentColor" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8 19C6.54545 19 5.09091 19 4 21M16 19C17.4545 19 18.9091 19 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M6 16.5C5 16.5 3 16 2 14.5M18 16.5C19 16.5 21 16 22 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M14 10L14.5 8.5M10 10L9.5 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
