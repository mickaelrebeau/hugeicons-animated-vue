<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RobotIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the robot separate in depth and stack again
// generated from @hugeicons/core-free-icons
const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.33px, -1.14px)', 'translate(0.19px, -0.19px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.49,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.76px) rotate(-0.95deg)', 'translateY(0.43px) rotate(0.47deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M12 4V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3px' }" />
            <motion.path d="M20 22C20 17.5817 16.4183 14 12 14C7.58172 14 4 17.5817 4 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M9.375 8.25H9.25M9.5 8.25C9.5 8.38807 9.38807 8.5 9.25 8.5C9.11193 8.5 9 8.38807 9 8.25C9 8.11193 9.11193 8 9.25 8C9.38807 8 9.5 8.11193 9.5 8.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.25px 8.25px' }" />
            <motion.path d="M14.875 8.25H14.75M15 8.25C15 8.38807 14.8881 8.5 14.75 8.5C14.6119 8.5 14.5 8.38807 14.5 8.25C14.5 8.11193 14.6119 8 14.75 8C14.8881 8 15 8.11193 15 8.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.75px 8.25px' }" />
            <motion.path d="M15.1538 4H8.84615C7.59095 4 6.96334 4 6.47397 4.22025C5.91693 4.47095 5.47095 4.91693 5.22025 5.47397C5 5.96334 5 6.59095 5 7.84615C5 9.85448 5 10.8586 5.3524 11.6417C5.75353 12.5329 6.46709 13.2465 7.35835 13.6476C8.14135 14 9.14552 14 11.1538 14H12.8462C14.8545 14 15.8586 14 16.6417 13.6476C17.5329 13.2465 18.2465 12.5329 18.6476 11.6417C19 10.8586 19 9.85448 19 7.84615C19 6.59095 19 5.96334 18.7797 5.47397C18.529 4.91693 18.0831 4.47095 17.526 4.22025C17.0367 4 16.4091 4 15.1538 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
          </svg>
        </div>
</template>
