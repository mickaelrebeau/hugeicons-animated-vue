<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BaseballBatIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the ball loads on the ground and comes back up with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.29px) scaleY(0.82)', 'translateY(-3.14px) scaleY(1.08)', 'translateY(0.46px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.72,
      times: [0, 0.18, 0.48, 0.78, 1],
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
            <motion.path d="M5.45946 20L20.5567 8.68934C22.3317 7.30882 22.495 4.68503 20.905 3.09501C19.315 1.50499 16.6912 1.66834 15.3107 3.4433L4 18.5405" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.25px 20px' }" />
            <motion.path d="M5.57835 21.8426C7.08033 19.7713 4.24567 16.9109 2.15723 18.4251C1.96763 18.5625 1.94595 18.8368 2.11159 19.0023L5.00015 21.8884C5.16597 22.0541 5.44077 22.0323 5.57835 21.8426Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.25px 20px' }" />
            <motion.path d="M10 17L7 14" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.25px 20px' }" />
            <motion.circle cx="2.5" cy="2.5" r="2.5" transform="matrix(-1 0 0 1 21 16)" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.25px 20px' }" />
          </svg>
        </div>
</template>
