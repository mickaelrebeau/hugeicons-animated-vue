<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'NintendoIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the nintendo separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.81px) rotate(-1.01deg)', 'translateY(0.45px) rotate(0.5deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.41px, -1.21px)', 'translate(0.2px, -0.2px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.51,
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
            <motion.path d="M16 19.5H8C5.17157 19.5 3.75736 19.5 2.87868 18.5586C2 17.6171 2 16.1019 2 13.0714V10.9286C2 7.89811 2 6.38288 2.87868 5.44144C3.75736 4.5 5.17157 4.5 8 4.5H16C18.8284 4.5 20.2426 4.5 21.1213 5.44144C22 6.38288 22 7.89811 22 10.9286V13.0714C22 16.1019 22 17.6171 21.1213 18.5586C20.2426 19.5 18.8284 19.5 16 19.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17 4.5V19.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 12px' }" />
            <motion.path d="M7 4.5V19.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 12px' }" />
            <motion.path d="M4.625 8.5H4.5M4.75 8.5C4.75 8.63807 4.63807 8.75 4.5 8.75C4.36193 8.75 4.25 8.63807 4.25 8.5C4.25 8.36193 4.36193 8.25 4.5 8.25C4.63807 8.25 4.75 8.36193 4.75 8.5Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 8.5px' }" />
            <motion.path d="M19.625 15.5H19.5M19.75 15.5C19.75 15.6381 19.6381 15.75 19.5 15.75C19.3619 15.75 19.25 15.6381 19.25 15.5C19.25 15.3619 19.3619 15.25 19.5 15.25C19.6381 15.25 19.75 15.3619 19.75 15.5Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 15.5px' }" />
          </svg>
        </div>
</template>
