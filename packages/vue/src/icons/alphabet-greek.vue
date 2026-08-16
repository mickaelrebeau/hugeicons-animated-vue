<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlphabetGreekIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after list-view: the glyph rows resolve in reading order
// generated from @hugeicons/core-free-icons
const rowVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: (i: number) => ({
    transform: ['scaleX(1)', 'scaleX(0.68)', 'scaleX(1.04)', 'scaleX(0.98)', 'scaleX(1)'],
    transition: { duration: 0.44, ease: [0.77, 0, 0.175, 1], times: [0, 0.28, 0.56, 0.76, 1], delay: i * 0.06 },
  }),
}

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
            <motion.path d="M2 19C2.02342 19.7767 2.11012 20.24 2.43105 20.5607C2.87077 21 3.57849 21 4.99393 21H7.965C8.74255 21 9.13132 21 9.17551 20.8603C9.2197 20.7206 8.88712 20.4868 8.22198 20.0192C5.86888 18.3648 3.99306 15.5091 3.99306 12.2636C3.99306 7.14744 7.57789 3 12 3C16.4221 3 20.0069 7.14744 20.0069 12.2636C20.0069 15.5091 18.1311 18.3648 15.778 20.0192C15.1129 20.4868 14.7803 20.7206 14.8245 20.8603C14.8687 21 15.2574 21 16.035 21H19.0061C20.4215 21 21.1292 21 21.5689 20.5607C21.8899 20.24 21.9766 19.7767 22 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 12px' }" />
          </svg>
        </div>
</template>
