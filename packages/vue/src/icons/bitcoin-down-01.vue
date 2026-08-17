<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BitcoinDown01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the download arrow commits off the still coin
// authored from scripts/authored
const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 2.2px)',
      'translate(0px, -0.264px)',
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
            <path d="M12 2C8.41015 2 5.5 4.91015 5.5 8.5C5.5 12.0898 8.41015 15 12 15C15.5898 15 18.5 12.0899 18.5 8.5C18.5 4.91015 15.5898 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M9.5 19.5C9.99153 20.0057 11.2998 22 12 22M14.5 19.5C14.0085 20.0057 12.7002 22 12 22M12 22V17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19.8px' }" />
            <path d="M10.4375 11.1667L10.4375 5.83333M12 5.83333V4.5M12 12.5V11.1667M10.4375 8.5H13.5625M13.5625 8.5C14.0803 8.5 14.5 8.94772 14.5 9.5V10.1667C14.5 10.719 14.0803 11.1667 13.5625 11.1667H9.5M13.5625 8.5C14.0803 8.5 14.5 8.05228 14.5 7.5V6.83333C14.5 6.28105 14.0803 5.83333 13.5625 5.83333H9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
