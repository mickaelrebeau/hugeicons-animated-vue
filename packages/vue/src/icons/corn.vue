<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CornIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the corn move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.78px) rotate(-2.1deg)', 'translateY(0.42px) rotate(0.73deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
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
            <motion.path d="M3.88481 20.1321C5.98804 22.2096 9.86304 21.7503 12.5399 19.1062C15.5988 16.0847 17.1823 15.1788 18.2931 14.5591C18.5175 14.434 18.5733 14.1229 18.3912 13.9429C14.7824 10.3783 8.75783 13.0463 8.10703 17.75M3.88481 20.1321L2.5 21.5M3.88481 20.1321C1.78158 18.0546 2.24717 14.2277 4.92401 11.5836C5.77111 10.956 7.39551 9.17678 7.65754 6.77425C7.68407 6.53098 7.99311 6.40789 8.16826 6.5809C9.47265 7.86934 10.1241 9.55848 10.1227 11.2472" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.18px 22.21px' }" />
            <motion.path d="M17.5917 13C19.9418 9.37568 22.5321 4.72423 21.0791 3.04556C19.3481 1.04574 14.0084 4.93844 10 8.33662" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.18px 22.21px' }" />
          </svg>
        </div>
</template>
