<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowUpBigIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the whole filled arrow lifts and squashes, same beat as arrow-up-02
// authored from scripts/authored
const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0px, 0px) scaleX(1)',
      'translate(0px, -2.6px) scaleX(0.94)',
      'translate(0px, 0.312px) scaleX(1.02)',
      'translate(0px, 0px) scaleX(1)',
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
            <motion.path d="M15.544 11.5H15V17.5C15 18.4319 15 18.8978 14.8478 19.2654C14.6448 19.7554 14.2554 20.1448 13.7654 20.3478C13.3978 20.5 12.9319 20.5 12 20.5C11.0681 20.5 10.6022 20.5 10.2346 20.3478C9.74458 20.1448 9.35523 19.7554 9.15224 19.2654C9 18.8978 9 18.4319 9 17.5V11.5H8.45596C6.37322 11.5 5.33185 11.5 5.05779 10.8997C4.78372 10.2994 5.49744 9.58174 6.92487 8.14642L10.4689 4.58281C11.1868 3.86094 11.5458 3.5 12 3.5C12.4542 3.5 12.8132 3.86094 13.5311 4.58281L17.0751 8.14643C18.5026 9.58175 19.2163 10.2994 18.9422 10.8997C18.6681 11.5 17.6268 11.5 15.544 11.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
