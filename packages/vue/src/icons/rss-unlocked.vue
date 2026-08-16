<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RssUnlockedIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after wifi-01: the feed expands from the source dot to the outer arc
// generated from @hugeicons/core-free-icons
const arcVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0.74px) scale(0.82)', 'translateY(0px) scale(1.06)', 'translateY(0px) scale(1)'],
    transition: { duration: 1.01, ease: [0.23, 1, 0.32, 1], delay: i * 0.12 },
  }),
}

const sourceVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.86)', 'scale(1.18)', 'scale(1)'],
    transition: {
      duration: 1.01,
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
            <motion.path d="M18 21C18 19.2468 17.6992 17.5639 17.1465 16M3 6C5.13331 6 7.16261 6.44534 9 7.24813" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 20.5px' }" />
            <motion.path d="M11 21C11 16.5817 7.41828 13 3 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 20.5px' }" />
            <motion.path d="M3.75 20.5H3.5M4 20.5C4 20.7761 3.77614 21 3.5 21C3.22386 21 3 20.7761 3 20.5C3 20.2239 3.22386 20 3.5 20C3.77614 20 4 20.2239 4 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sourceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 20.5px' }" />
            <motion.path d="M15 7V5C15 3.89543 15.8954 3 17 3C17.5973 3 18.1335 3.26188 18.5 3.67709" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 20.5px' }" />
            <motion.path d="M18.5 7H15.5C14.5654 7 14.0981 7 13.75 7.20096C13.522 7.33261 13.3326 7.52197 13.201 7.75C13 8.09808 13 8.56538 13 9.5C13 10.4346 13 10.9019 13.201 11.25C13.3326 11.478 13.522 11.6674 13.75 11.799C14.0981 12 14.5654 12 15.5 12H18.5C19.4346 12 19.9019 12 20.25 11.799C20.478 11.6674 20.6674 11.478 20.799 11.25C21 10.9019 21 10.4346 21 9.5C21 8.56538 21 8.09808 20.799 7.75C20.6674 7.52197 20.478 7.33261 20.25 7.20096C19.9019 7 19.4346 7 18.5 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 20.5px' }" />
          </svg>
        </div>
</template>
