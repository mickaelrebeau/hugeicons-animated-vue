<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'NodeEditIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after share-08: the connected nodes receive the signal one after another
// generated from @hugeicons/core-free-icons
const wireVariants: Variants = {
  normal: {
    pathLength: 1,
    visibility: 'visible',
  },
  animate: {
    pathLength: [0, 1],
    visibility: 'visible',
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
}

const nodeVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: (i: number) => ({
    transform: ['scale(1)', 'scale(1.25)', 'scale(1)'],
    transition: { duration: 0.47, ease: 'easeInOut', delay: i * 0.12 },
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
            <motion.path d="M13 19.5H12C9.17157 19.5 7.75736 19.5 6.87868 18.6213C6 17.7426 6 16.3284 6 13.5V11.5M6 11.5V8M6 11.5H11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 13.75px' }" />
            <motion.path d="M13 19.5C13 18.3215 13 17.7322 13.3515 17.3661C13.7029 17 14.2686 17 15.4 17H16.6C17.7314 17 18.2971 17 18.6485 17.3661C19 17.7322 19 18.3215 19 19.5C19 20.6785 19 21.2678 18.6485 21.6339C18.2971 22 17.7314 22 16.6 22H15.4C14.2686 22 13.7029 22 13.3515 21.6339C13 21.2678 13 20.6785 13 19.5Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 19.5px' }" />
            <motion.path d="M4.28571 2H7.71429C9.7888 2 10 3.10993 10 5C10 6.89007 9.7888 8 7.71429 8H4.28571C2.2112 8 2 6.89007 2 5C2 3.10993 2.2112 2 4.28571 2Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 5px' }" />
            <motion.path d="M21.0058 5.38441L21.614 5.99021C22.1286 6.50276 22.1286 7.33376 21.6141 7.84631L18.4275 11.0799C18.1768 11.3296 17.8561 11.4979 17.5077 11.5627L15.5327 11.9898C15.2209 12.0572 14.9432 11.7814 15.01 11.4706L15.4304 9.5148C15.4955 9.1677 15.6645 8.84834 15.9151 8.59867L19.1423 5.38441C19.6569 4.87186 20.4912 4.87186 21.0058 5.38441Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nodeVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '18.54px 8.46px' }" />
          </svg>
        </div>
</template>
