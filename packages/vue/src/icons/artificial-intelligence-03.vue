<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArtificialIntelligence03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after sparkles: the intelligence points answer one another instead of pulsing as a single badge
// generated from @hugeicons/core-free-icons
const dotVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0px) scale(1)', 'translateY(-1.58px) scale(1.2)', 'translateY(0.37px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.43, ease: 'easeOut', delay: i * 0.08 },
  }),
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
            <motion.path d="M16 22V21.5C16 20.3954 16.9321 19.5005 17.9223 19.011C18.8846 18.5354 19.6943 17.7511 19.7965 16.8313L20 15L22 14L19.5 10.25C19.5 5.69365 15.8063 2 11.25 2C10.096 2 8.99733 2.23694 8 2.66482M6.5 16.9962V22M6.5 16.9962C5.13927 16.0364 4.08188 14.6752 3.5 13.085M6.5 16.9962C7.25065 17.5257 8.09362 17.9331 9 18.1895" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12.75px 12px' }" />
            <motion.path d="M2.75 3.25L6 5.5H10M3.5 3.25C3.5 3.66421 3.16421 4 2.75 4C2.33579 4 2 3.66421 2 3.25C2 2.83579 2.33579 2.5 2.75 2.5C3.16421 2.5 3.5 2.83579 3.5 3.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 4px' }" />
            <motion.path d="M2.75 8.75H10M3.5 8.75C3.5 9.16421 3.16421 9.5 2.75 9.5C2.33579 9.5 2 9.16421 2 8.75C2 8.33579 2.33579 8 2.75 8C3.16421 8 3.5 8.33579 3.5 8.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 8.75px' }" />
          </svg>
        </div>
</template>
