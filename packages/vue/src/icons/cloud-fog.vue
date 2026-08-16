<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CloudFogIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cloud: a soft swell travels through the cloud while its baseline holds
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1.13px)', 'translateY(0.28px)', 'translateY(0px)'],
    transition: {
      duration: 0.66,
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M17.4776 9.50005C17.485 9.50002 17.4925 9.5 17.5 9.5C19.9853 9.5 22 11.5147 22 14C22 15.7415 21.0108 17.2519 19.5636 18M16.9003 11.5C17.2119 10.8904 17.4131 10.2149 17.4776 9.50005C17.4924 9.33536 17.5 9.16856 17.5 9C17.5 5.96243 15.0376 3.5 12 3.5C9.12324 3.5 6.76233 5.70862 6.52042 8.5227M6.52042 8.5227C3.98398 8.76407 2 10.9003 2 13.5C2 15.1358 2.78555 16.5882 4 17.5004M6.52042 8.5227C6.67826 8.50768 6.83823 8.5 7 8.5C7.7111 8.5 8.38754 8.64845 9 8.91604" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.75px' }" />
            <motion.path d="M15 16.5H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.75px' }" />
            <motion.path d="M16 20.5H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.75px' }" />
          </svg>
        </div>
</template>
