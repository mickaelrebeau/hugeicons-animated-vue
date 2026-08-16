<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FlowerPotIcon' })

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
    transform: ['rotate(0deg) scale(0.82)', 'rotate(4.14deg) scale(1.1)', 'rotate(0deg) scale(1)'],
    transition: { duration: 0.61, ease: [0.23, 1, 0.32, 1], delay: i * 0.08 },
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
            <motion.path d="M12 9C12 4.5 14 4 16 4C16 7 14.5 9 12 9ZM12 9C12 4.5 10 4 8 4C8 7 9.5 9 12 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="petalVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
            <motion.path d="M10 4C10 4 10.5 2.5 12 2C13.5 2.5 14 4 14 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="petalVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4px' }" />
            <motion.path d="M12 9V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="petalVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15px' }" />
            <motion.path d="M12 13C12.25 12.3333 13.2 11 15 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="petalVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 13px' }" />
            <path d="M13.1509 15H10.8491C8.79675 15 7.77055 15 7.2641 15.5967C6.75765 16.1934 7.03957 17.0703 7.6034 18.8242L7.69704 19.1154C8.14071 20.4955 8.36255 21.1855 8.95349 21.5878L8.97997 21.6055C9.57752 22 10.385 22 12 22C13.615 22 14.4225 22 15.02 21.6055L15.0465 21.5878C15.6375 21.1855 15.8593 20.4955 16.303 19.1154L16.3966 18.8242C16.9604 17.0703 17.2423 16.1934 16.7359 15.5967C16.2294 15 15.2033 15 13.1509 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
