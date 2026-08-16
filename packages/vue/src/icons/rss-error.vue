<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RssErrorIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after alert-circle: it refuses the input with a short head-shake
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-8.66deg)', 'rotate(7.58deg)', 'rotate(-4.33deg)', 'rotate(2.17deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.54,
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M11 21C11 16.5817 7.41828 13 3 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 13.5px' }" />
            <motion.path d="M3.75 20.5H3.5M4 20.5C4 20.7761 3.77614 21 3.5 21C3.22386 21 3 20.7761 3 20.5C3 20.2239 3.22386 20 3.5 20C3.77614 20 4 20.2239 4 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 13.5px' }" />
            <motion.path d="M16 10H16.009M16 7.5V5.5M21 8C21 10.7614 18.7614 13 16 13C13.2386 13 11 10.7614 11 8C11 5.23858 13.2386 3 16 3C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 13.5px' }" />
            <motion.path d="M18 21C18 19.6148 17.8122 18.2734 17.4608 17M3 6C4.38521 6 5.72656 6.18777 7 6.53923" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 13.5px' }" />
          </svg>
        </div>
</template>
