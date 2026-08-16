<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SecurityBlockIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after shield-02: the shield absorbs a centered impact and passes force into its core
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.94)', 'scale(1.08)', 'scale(1)'],
    transition: {
      duration: 0.52,
      ease: [0.23, 1, 0.32, 1],
    },
  },
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
            <motion.path d="M19.8598 15.8599C20.5537 14.5522 21 13.0186 21 11.2371L21 7.74821C21 6.34255 21 5.63972 20.5504 4.91385C20.1008 4.18797 19.6368 3.95712 18.7088 3.4954C16.8165 2.55388 14.5009 2.00006 12 2.00006C10.1475 2.00006 8.3966 2.30394 6.84414 2.8442M4.1416 4.14166C3.8764 4.33979 3.6614 4.57189 3.4496 4.91385C3 5.63972 3 6.34254 3 7.7482V11.2371C3 16.9205 7.54236 20.0804 10.173 21.4339C10.9067 21.8113 11.2735 22.0001 12 22.0001C12.7265 22.0001 13.0933 21.8113 13.8269 21.4339C15.0804 20.789 16.7679 19.734 18.1912 18.1913" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2 2.00006L22 22.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
