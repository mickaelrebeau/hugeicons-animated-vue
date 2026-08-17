<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BitcoinUp01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the upload chevron commits off the still coin
// authored from scripts/authored
const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -2.2px)',
      'translate(0px, 0.264px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.52,
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
            <path d="M12 8.99988C8.41012 8.99988 5.49997 11.91 5.49997 15.4999C5.49997 19.0897 8.41012 21.9999 12 21.9999C15.5898 21.9999 18.5 19.0897 18.5 15.4999C18.5 11.91 15.5898 8.99988 12 8.99988Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M14.5 4.49988C14.0085 3.99418 12.7002 1.99988 12 1.99988M9.49998 4.49988C9.99151 3.99418 11.2998 1.99988 12 1.99988M12 1.99988L12 6.49988" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.2px' }" />
            <path d="M10.4375 18.1667L10.4375 12.8333M12 12.8333V11.5M12 19.5V18.1667M10.4375 15.5H13.5625M13.5625 15.5C14.0803 15.5 14.5 15.9477 14.5 16.5V17.1667C14.5 17.719 14.0803 18.1667 13.5625 18.1667H9.49998M13.5625 15.5C14.0803 15.5 14.5 15.0523 14.5 14.5V13.8333C14.5 13.281 14.0803 12.8333 13.5625 12.8333H9.49998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
