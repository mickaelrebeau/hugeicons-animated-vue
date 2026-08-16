<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ConferenceIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the conference separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.82px) rotate(-1.02deg)', 'translateY(0.46px) rotate(0.51deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.43px, -1.23px)', 'translate(0.2px, -0.2px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.52,
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
            <motion.path d="M19 15V9C19 6.17157 19 4.75736 18.1213 3.87868C17.2426 3 15.8284 3 13 3H11C8.17157 3 6.75736 3 5.87868 3.87868C5 4.75736 5 6.17157 5 9V15C5 17.8284 5 19.2426 5.87868 20.1213C6.75736 21 8.17157 21 11 21H13C15.8284 21 17.2426 21 18.1213 20.1213C19 19.2426 19 17.8284 19 15Z" stroke="currentColor" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M22 7V17" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '22px 12px' }" />
            <motion.path d="M2 7V17" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 12px' }" />
            <motion.path d="M13.9995 8.50873C13.9995 9.61326 13.1041 10.5087 11.9995 10.5087C10.895 10.5087 9.99958 9.61326 9.99958 8.50873C9.99958 7.40419 10.895 6.50879 11.9995 6.50879C13.1041 6.50879 13.9995 7.40419 13.9995 8.50873Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.51px' }" />
            <motion.path d="M8.04443 15.7322C9.10278 14.1029 10.7835 13.4923 11.9995 13.4935C13.2156 13.4948 14.847 14.1029 15.9054 15.7322C15.9738 15.8376 15.9926 15.9673 15.9309 16.0768C15.6834 16.5157 14.9149 17.3866 14.3598 17.4457C13.7221 17.5135 12.0537 17.523 12.0008 17.5233C11.9478 17.523 10.228 17.5135 9.58996 17.4457C9.0349 17.3866 8.26641 16.5157 8.0189 16.0768C7.95714 15.9673 7.976 15.8376 8.04443 15.7322Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.97px 15.51px' }" />
          </svg>
        </div>
</template>
