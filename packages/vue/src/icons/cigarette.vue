<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CigaretteIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the cigarette take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-5.28deg)', 'scale(1.1) rotate(2.11deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.47, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
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
            <motion.path d="M18 19H4C3.53501 19 3.30252 19 3.11177 18.9489C2.59413 18.8102 2.18981 18.4059 2.05111 17.8882C2 17.6975 2 17.465 2 17C2 16.535 2 16.3025 2.05111 16.1118C2.18981 15.5941 2.59413 15.1898 3.11177 15.0511C3.30252 15 3.53501 15 4 15H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 17px' }" />
            <motion.path d="M21 19C21.4656 18.8577 21.8293 18.4427 21.954 17.9115C22 17.7158 22 17.4772 22 17C22 16.5228 22 16.2842 21.954 16.0885C21.8293 15.5573 21.4656 15.1423 21 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '21.5px 17px' }" />
            <motion.path d="M22 12V11C22 9.11438 22 8.17157 21.4142 7.58579C20.8284 7 19.8856 7 18 7H15C13.8954 7 13 6.10457 13 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 8.5px' }" />
            <motion.path d="M15 10H17C17.465 10 17.6975 10 17.8882 10.0511C18.4059 10.1898 18.8102 10.5941 18.9489 11.1118C19 11.3025 19 11.535 19 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 11px' }" />
            <motion.path d="M7 15V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 17px' }" />
          </svg>
        </div>
</template>
