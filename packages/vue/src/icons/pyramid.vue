<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PyramidIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the ridge line drops down and the faces redraw
// authored from scripts/authored
const ridgeVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const facesVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      delay: 0.12,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M12 2V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ridgeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14.8692 13.6759L21.9887 17.5864M21.9887 17.5864L21.9944 17.5895M21.9887 17.5864C22.0642 17.1494 21.7569 16.6584 21.1866 15.7472L13.7843 3.91929C12.9835 2.63976 12.5831 2 12 2C11.4169 2 11.0165 2.63976 10.2157 3.91929L2.81338 15.7472C2.24312 16.6584 1.93582 17.1494 2.01127 17.5864M21.9887 17.5864C21.9824 17.6232 21.9733 17.6597 21.9614 17.696C21.8087 18.1627 21.267 18.3791 20.1838 18.8118L12.7814 21.7688C12.3956 21.9229 12.2026 22 12 22C11.7974 22 11.6045 21.9229 11.2186 21.7688L3.8162 18.8118C2.73296 18.3791 2.19134 18.1627 2.0386 17.696C2.02672 17.6597 2.01764 17.6232 2.01127 17.5864M2.00558 17.5895L2.01127 17.5864M2.01127 17.5864L9.13079 13.6759" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="facesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
