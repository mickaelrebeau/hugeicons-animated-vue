<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Yoga01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the meditating figure levitates and hovers
// authored from scripts/authored
const figureVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.26, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

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
            <motion.path d="M9.0923 16C8.78292 16.6819 8.0701 16.986 7.43887 17.3162L3.79262 19.2233C2.32845 19.9891 3.05949 22 4.62985 22C8.12204 22 10.8836 20.3064 14.0404 19C14.835 18.6711 15.2201 18.7415 16 19.0912" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="figureVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.2px 19px' }" />
            <motion.path d="M9 19.0912C9.77995 18.7415 10.165 18.6711 10.9596 19C14.1164 20.3064 16.878 22 20.3702 22C21.9405 22 22.6715 19.9891 21.2074 19.2233L17.5611 17.3162C16.9299 16.986 16.2171 16.6819 15.9077 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="figureVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.8px 19px' }" />
            <motion.path d="M10 4C10 5.10457 10.8954 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4Z" stroke="currentColor" stroke-width="1.5" :variants="figureVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4px' }" />
            <motion.path d="M12 8C8.68629 8 6 10.6863 6 14C9.31371 14 12 11.3137 12 8Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="figureVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 11px' }" />
            <motion.path d="M12 8C15.3137 8 18 10.6863 18 14C14.6863 14 12 11.3137 12 8Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="figureVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 11px' }" />
          </svg>
        </div>
</template>
