<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WazeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the waze separate in depth and stack again
// generated from @hugeicons/core-free-icons
const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.46px, -1.25px)', 'translate(0.21px, -0.21px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.53,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.84px) rotate(-1.04deg)', 'translateY(0.47px) rotate(0.52deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
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
            <motion.path d="M16.3741 9.00098H16.2491M9.87415 9.00098H9.74915M16.4991 9.00098C16.4991 9.13905 16.3872 9.25098 16.2491 9.25098C16.1111 9.25098 15.9991 9.13905 15.9991 9.00098C15.9991 8.86291 16.1111 8.75098 16.2491 8.75098C16.3872 8.75098 16.4991 8.86291 16.4991 9.00098ZM9.99915 9.00098C9.99915 9.13905 9.88722 9.25098 9.74915 9.25098C9.61107 9.25098 9.49915 9.13905 9.49915 9.00098C9.49915 8.86291 9.61107 8.75098 9.74915 8.75098C9.88722 8.75098 9.99915 8.86291 9.99915 9.00098Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 9px' }" />
            <motion.path d="M15.9991 13.001C15.4003 13.8977 14.2811 14.501 12.9991 14.501C11.7172 14.501 10.598 13.8977 9.99915 13.001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 13.75px' }" />
            <motion.path d="M11.0011 18.999C11.0011 20.1036 10.1057 20.999 9.0011 20.999C7.89653 20.999 7.0011 20.1036 7.0011 18.999C7.0011 17.8945 7.89653 16.999 9.0011 16.999C10.1057 16.999 11.0011 17.8945 11.0011 18.999Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 19px' }" />
            <motion.path d="M15.0011 18.999C15.0011 20.1036 15.8965 20.999 17.0011 20.999C18.1057 20.999 19.0011 20.1036 19.0011 18.999C19.0011 18.4027 18.7402 17.8674 18.3262 17.501" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 19.25px' }" />
            <motion.path d="M11.28 18.8155C11.8343 18.9369 12.4101 19.001 13.0008 19.001C17.4191 19.001 21.0008 15.4193 21.0008 11.001C21.0008 6.5827 17.4191 3.00098 13.0008 3.00098C8.58252 3.00098 5.00079 6.5827 5.00079 11.001C5.00079 11.9363 4.79948 13.802 2.99915 14.7022C3.84969 16.6159 5.31673 17.7259 7.0011 18.3646" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
          </svg>
        </div>
</template>
