<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Mosque05Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the dome lifts gently while the minarets remain grounded
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1.93px)', 'translateY(0px)'],
    transition: {
      duration: 0.48,
      ease: 'easeInOut',
      times: [0, 0.35, 1],
    },
  },
}

const markVariants: Variants = {
  normal: {
    pathLength: 1,
    visibility: 'visible',
  },
  animate: {
    pathLength: [0, 1],
    visibility: ['hidden', 'visible'],
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      delay: 0.2,
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
            <motion.path d="M17.5125 6C15.9698 4 18.3389 3 19 2C19.6611 3 22.0302 4 20.4875 6H17.5125Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 22px' }" />
            <motion.path d="M13 11.5V14H7L7 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 12.75px' }" />
            <motion.path d="M7.02497 11.5C3.93968 7.5 8.67782 5.5 9.99996 3.5C11.3222 5.5 16.0603 7.5 12.975 11.5H9.99998H7.02497Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 22px' }" />
            <motion.path d="M17 22H3V17C3 15.5858 3 14.8787 3.43934 14.4393C3.87868 14 4.58579 14 6 14H14C15.4142 14 16.1213 14 16.5607 14.4393C17 14.8787 17 15.5858 17 17V22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 22px' }" />
            <motion.path d="M8 22V21C8 20.0218 8 19.5326 8.14218 19.0874C8.23639 18.7924 8.37572 18.5137 8.55523 18.2613C8.8261 17.8804 9.2174 17.5869 10 17C10.7826 17.5869 11.1739 17.8804 11.4448 18.2613C11.6243 18.5137 11.7636 18.7924 11.8578 19.0874C12 19.5326 12 20.0218 12 21V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 22px' }" />
            <motion.path d="M17.5 6L17 15M17 22H21L20.5 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 22px' }" />
          </svg>
        </div>
</template>
