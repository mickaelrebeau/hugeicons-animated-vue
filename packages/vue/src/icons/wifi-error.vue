<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WifiErrorIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the warning sign rattles under the arcs
// authored from scripts/authored
const signVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-4deg) scale(0.97)',
      'rotate(3.2deg) scale(1.03)',
      'rotate(-1.2deg) scale(0.995)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.56, times: [0, 0.2, 0.46, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M18.5 9.99761C14.7324 6.66535 9.5 6.66535 5.5 9.99761" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M2 6.9986C8.31579 1.66699 15.6842 1.66698 22 6.99849" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M11.9933 14.9853V16.4964M11.9933 18.4673V18.4984M12.1444 12.0075C12.4933 11.9942 13.375 12.163 14.2349 13.6825L16.3884 17.3742C17.2109 18.5922 17.6154 20.7778 14.5873 20.9418L12 21.0002L9.3841 20.926C6.35606 20.7621 6.82207 18.5938 7.58302 17.3585L9.73652 13.6667C10.5964 12.1473 11.4781 11.9784 11.8271 11.9918L12.1444 12.0075Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="signVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.5px' }" />
          </svg>
        </div>
</template>
