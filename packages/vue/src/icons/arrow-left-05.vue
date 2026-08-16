<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowLeft05Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the filled body slides onto the end-line, which takes the weight
// authored from scripts/authored
const lineVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.72)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: { duration: 0.48, delay: 0.14, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const bodyVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-2.4px, 0px)',
      'translate(0.288px, 0px)',
      'translate(0px, 0px)',
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
            <motion.path d="M4.00002 5.99951L4.00005 18.0002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 12px' }" />
            <motion.path d="M12.4968 12.0109V12.3814C12.5374 15.3525 12.4024 16.3847 11.1519 15.9055L10.8438 15.7236L10.5952 15.5508L10.06 15.1378L9.0596 14.2685L8.03672 13.4047L7.53672 12.9516L7.31406 12.7251L7.05189 12.346L6.99807 12.0097L7.05189 11.6757L7.31406 11.2967L7.53672 11.0701L8.03672 10.617L9.0596 9.75323L10.06 8.8839L10.5952 8.47091L10.8438 8.29813L11.1519 8.11621C12.4024 7.63699 12.5374 8.66922 12.4968 11.6403V12.0109ZM12.4968 12.0109H19.9998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 12px' }" />
          </svg>
        </div>
</template>
