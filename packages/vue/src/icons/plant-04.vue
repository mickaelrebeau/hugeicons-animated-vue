<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Plant04Icon' })

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
    transform: ['rotate(0deg) scale(0.82)', 'rotate(4.21deg) scale(1.1)', 'rotate(0deg) scale(1)'],
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
            <path d="M12 12V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 12V13H15C18.3137 13 21 10.3137 21 7V6H18C14.6863 6 12 8.68629 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="petalVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 13px' }" />
            <motion.path d="M12 10V11H9C5.68629 11 3 8.31371 3 5V4H6C9.31371 4 12 6.68629 12 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="petalVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 11px' }" />
          </svg>
        </div>
</template>
