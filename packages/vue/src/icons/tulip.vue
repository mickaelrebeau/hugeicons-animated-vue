<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TulipIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after flower: the petals open outward one by one from the core
// generated from @hugeicons/core-free-icons
const petalVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['rotate(0deg) scale(0.82)', 'rotate(3.91deg) scale(1.1)', 'rotate(0deg) scale(1)'],
    transition: { duration: 0.58, ease: [0.23, 1, 0.32, 1], delay: i * 0.08 },
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
            <path d="M12 21C12 17.6863 14.6863 15 18 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 21C12 17.6863 9.31371 15 6 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="petalVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 21px' }" />
            <motion.path d="M12 13V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="petalVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M12 13C14.7614 13 17 10.7614 17 8V4C14.2386 4 12 6.23858 12 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="petalVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 13px' }" />
            <motion.path d="M14.5 4.5C14 3 12 2 12 2C12 2 10 3 9.5 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="petalVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.5px' }" />
            <motion.path d="M12 13C9.23858 13 7 10.7614 7 8V4C8.36273 4 9.59812 4.54516 10.5 5.42928" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="petalVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 13px' }" />
          </svg>
        </div>
</template>
