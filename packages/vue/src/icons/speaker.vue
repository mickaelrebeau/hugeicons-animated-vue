<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SpeakerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the speaker separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.77px) rotate(-0.96deg)', 'translateY(0.43px) rotate(0.48deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.55,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.34px, -1.15px)', 'translate(0.19px, -0.19px)', 'translate(0px, 0px)'],
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
            <motion.path d="M20.5 13.5V10.5C20.5 6.74142 20.5 4.86213 19.4472 3.60746C19.2788 3.40678 19.0932 3.22119 18.8925 3.0528C17.6379 2 15.7586 2 12 2C8.24142 2 6.36213 2 5.10746 3.0528C4.90678 3.22119 4.72119 3.40678 4.5528 3.60746C3.5 4.86213 3.5 6.74142 3.5 10.5V13.5C3.5 17.2586 3.5 19.1379 4.5528 20.3925C4.72119 20.5932 4.90678 20.7788 5.10746 20.9472C6.36213 22 8.24142 22 12 22C15.7586 22 17.6379 22 18.8925 20.9472C19.0932 20.7788 19.2788 20.5932 19.4472 20.3925C20.5 19.1379 20.5 17.2586 20.5 13.5Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15.5 15C15.5 16.933 13.933 18.5 12 18.5C10.067 18.5 8.5 16.933 8.5 15C8.5 13.067 10.067 11.5 12 11.5C13.933 11.5 15.5 13.067 15.5 15Z" stroke="currentColor" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15px' }" />
            <motion.path d="M13.5 7C13.5 7.82843 12.8284 8.5 12 8.5C11.1716 8.5 10.5 7.82843 10.5 7C10.5 6.17157 11.1716 5.5 12 5.5C12.8284 5.5 13.5 6.17157 13.5 7Z" stroke="currentColor" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7px' }" />
          </svg>
        </div>
</template>
