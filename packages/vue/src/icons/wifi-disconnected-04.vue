<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WifiDisconnected04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after wifi-01: the signal expands physically from its source to its outer arc
// generated from @hugeicons/core-free-icons
const arcVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0.85px) scale(0.82)', 'translateY(0px) scale(1.06)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.98, ease: [0.23, 1, 0.32, 1], delay: i * 0.12 },
  }),
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M12 21C11.0173 21 10.2863 20.003 8.82421 18.009L3.48742 10.7306C2.40801 9.25847 1.86831 8.52241 2.02741 7.57659C2.18651 6.63078 2.81754 6.2161 4.07962 5.38675C6.38289 3.87318 9.0958 3 12 3C14.9042 3 17.6171 3.87318 19.9204 5.38675C21.1825 6.2161 21.8135 6.63078 21.9726 7.57659C22.1317 8.52241 21.592 9.25847 20.5126 10.7306L19 12.6988" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M21.0002 15L15.0002 21M21.0002 21L15.0002 15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
          </svg>
        </div>
</template>
