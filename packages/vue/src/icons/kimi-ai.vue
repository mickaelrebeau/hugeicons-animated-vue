<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'KimiAiIcon' })

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
    transform: ['translateY(0px) scale(1)', 'translateY(-1.51px) scale(1.2)', 'translateY(0.35px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.42, ease: 'easeOut', delay: i * 0.08 },
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
            <motion.path d="M19.5 4.5H20.5M21 4.5C21 5.05228 20.5523 5.5 20 5.5H19V4.5C19 3.94772 19.4477 3.5 20 3.5C20.5523 3.5 21 3.94772 21 4.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 4.5px' }" />
            <motion.path d="M5.5 6H3V20.5H5.5V17L7.75574 14.7443L13.8256 19.5669C14.586 20.1711 15.5287 20.5 16.5 20.5V17.5C15.8521 17.5 15.2228 17.283 14.7126 16.8836L9.61064 12.8894L16.5 6H13L5.5 13.5V6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '9.75px 13.25px' }" />
          </svg>
        </div>
</template>
