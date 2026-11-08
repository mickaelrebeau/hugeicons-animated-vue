<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HandPointingDown03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the hand winds back and thrusts down
// authored from scripts/authored
const handVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 2px)',
      'translate(0px, -0.2px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.66,
      times: [0, 0.3, 0.5, 0.76, 1],
      ease: ['easeOut', 'easeIn', 'easeOut', 'easeInOut'],
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
            <motion.path d="M11.5004 16.0002H12.5004C13.605 16.0002 14.5004 15.1048 14.5004 14.0002M14.5004 14.0002V13.0002M14.5004 14.0002C14.5004 14.5525 14.9481 15.0002 15.5004 15.0002C16.605 15.0002 17.5004 14.1048 17.5004 13.0002M17.5004 13.0002V12.0002M17.5004 13.0002C17.5004 13.5237 17.9705 13.9219 18.4868 13.8358L18.8292 13.7788C19.7936 13.618 20.5004 12.7837 20.5004 11.806L20.5 10.3334C20.5 8.16008 20.5 7.07338 20.1689 6.20824C19.9769 5.70638 19.4703 5.06636 19.0652 4.60386C18.7148 4.20383 18.5 3.69642 18.5 3.16465V2.00008M11.5002 14.0002V20.5002C11.5002 21.3287 10.8286 22.0002 10.0002 22.0002C9.17178 22.0002 8.50021 21.3287 8.50021 20.5002L8.5 10.5378L6.8797 12.1632C6.16877 12.8764 4.99772 12.8113 4.36965 12.0237C3.88907 11.4211 3.8758 10.5687 4.33738 9.95133L7.93707 5.35312C8.62579 4.47336 9 3.11736 9 2.00008" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.2px 12px' }" />
          </svg>
        </div>
</template>
