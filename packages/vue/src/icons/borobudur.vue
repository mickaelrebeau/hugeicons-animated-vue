<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BorobudurIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the spire rises off the stupa and settles, the niches flickering like lamps
// authored from scripts/authored
const spireVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.6px)',
      'translate(0px, 0.192px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const nichesVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.25, 1, 1],
    transition: { duration: 0.6, delay: 0.12, times: [0, 0.3, 0.6, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M20 19H4C2.89543 19 2 19.8954 2 21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21C22 19.8954 21.1046 19 20 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M14 7L13.1961 2.98058C13.0821 2.41042 12.5815 2 12 2C11.4185 2 10.9179 2.41041 10.8039 2.98058L10 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="spireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.5px' }" />
            <path d="M20 19L18.1362 11.5448C17.5905 9.36211 17.3177 8.27077 16.5039 7.63538C15.6901 7 14.5652 7 12.3153 7H11.6847C9.4348 7 8.30988 7 7.49609 7.63538C6.68231 8.27077 6.40947 9.36211 5.8638 11.5448L4 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 10.5V11.5M15 14V15M9 14V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nichesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.8px' }" />
          </svg>
        </div>
</template>
