<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Resize01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after full-screen: opposite corners pull the frame to its new extent
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.9)', 'scale(1.08)', 'scale(1)'],
    transition: {
      duration: 0.5,
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
            <motion.path d="M17 4H21M17 4C17 4.56018 18.4943 5.60678 19 6M17 4C17 3.43982 18.4943 2.39322 19 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7 4H3M7 4C7 3.43982 5.5057 2.39322 5 2M7 4C7 4.56018 5.5057 5.60678 5 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9.8348 22L9.8348 21.0513C9.8348 20.4058 9.6261 19.7775 9.23964 19.2595L5.58206 14.3566C5.16022 13.7911 4.8233 13.0896 5.1018 12.4419C5.55264 11.3935 6.82458 10.7124 8.38144 12.2843L9.97865 13.9937L9.97865 3.57057C10.0349 1.52742 13.3229 1.42614 13.4635 3.57057L13.4635 9.5106C14.9435 9.31946 21.9155 10.3629 20.8993 14.7831C20.851 14.9931 20.8028 15.2063 20.7557 15.4165C20.5501 16.3353 19.9422 17.9727 19.2719 18.93C18.5741 19.9266 18.8203 20.9192 18.8203 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
