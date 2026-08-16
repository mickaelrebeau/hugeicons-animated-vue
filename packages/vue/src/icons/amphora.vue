<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AmphoraIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the body of the amphora lifts while its detail lines follow
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.75px) rotate(-0.94deg)', 'translateY(0.42px) rotate(0.47deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.62,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const lineVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1.1)', 'scaleX(1)'],
    transition: {
      duration: 0.5,
      delay: 0.12,
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
            <motion.path d="M14.5 9C14.5 5.5 16.5 3.83333 16.5 3C16.5 2.44772 16.0523 2 15.5 2H8.5C7.94772 2 7.5 2.44772 7.5 3C7.5 3.83333 9.5 5.5 9.5 9C9.5 12.5 6 13 6 16C6 16.7606 6.19285 17.5936 6.46853 18.4163C7.01669 20.0522 7.29077 20.8702 8.07582 21.4351C8.86088 22 9.87366 22 11.8992 22H12.1008C14.1263 22 15.1391 22 15.9242 21.4351C16.7092 20.8702 16.9833 20.0522 17.5315 18.4163C17.8072 17.5936 18 16.7606 18 16C18 13 14.5 12.5 14.5 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9 6H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 6px' }" />
            <motion.path d="M16.5 4H17.6207C18.3825 4 19 4.6175 19 5.37924C19 5.45959 18.9929 5.53979 18.979 5.61893L17.5 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.75px 9px' }" />
            <motion.path d="M7.50006 4H6.37924C5.6175 4 5 4.6175 5 5.37924C5 5.45959 5.00702 5.53979 5.02099 5.61893L6.5 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.25px 9px' }" />
          </svg>
        </div>
</template>
