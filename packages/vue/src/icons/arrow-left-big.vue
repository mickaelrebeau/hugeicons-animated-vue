<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowLeftBigIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the whole filled arrow slides left and squashes, same beat as arrow-left-02
// authored from scripts/authored
const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0px) scaleY(1)',
      'translate(-2.6px, 0px) scaleY(0.94)',
      'translate(0.312px, 0px) scaleY(1.02)',
      'translate(0px, 0px) scaleY(1)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
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
            <motion.path d="M11.5 8.45596V9L17.5 9C18.4319 9 18.8978 9 19.2654 9.15224C19.7554 9.35523 20.1448 9.74458 20.3478 10.2346C20.5 10.6022 20.5 11.0681 20.5 12C20.5 12.9319 20.5 13.3978 20.3478 13.7654C20.1448 14.2554 19.7554 14.6448 19.2654 14.8478C18.8978 15 18.4319 15 17.5 15H11.5V15.544C11.5 17.6268 11.5 18.6681 10.8997 18.9422C10.2994 19.2163 9.58174 18.5026 8.14642 17.0751L4.58281 13.5311C3.86094 12.8132 3.5 12.4542 3.5 12C3.5 11.5458 3.86094 11.1868 4.58281 10.4689L8.14643 6.92487C9.58175 5.49743 10.2994 4.78372 10.8997 5.05779C11.5 5.33185 11.5 6.37322 11.5 8.45596Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
