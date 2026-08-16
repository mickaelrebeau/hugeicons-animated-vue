<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BluetoothNotConnectedIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after bluetooth: the two endpoints exchange a signal along the central path
// generated from @hugeicons/core-free-icons
const wireVariants: Variants = {
  normal: {
    pathLength: 1,
    visibility: 'visible',
  },
  animate: {
    pathLength: [0, 1],
    visibility: 'visible',
    transition: {
      duration: 0.48,
      ease: 'easeOut',
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
            <motion.path d="M4 3.99304L20 20.0137" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12.0094 7.97976C12.0094 6.85151 11.8211 4.37371 12.4988 3.62154C13.3394 2.88737 16.666 5.70138 18.2835 7.05515C17.4525 7.90736 17.0866 8.72598 14.6659 10.5223" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.05px 6.7px' }" />
            <motion.path d="M17.5002 17.5094C14.6596 19.5714 13.4835 20.7985 12.6288 20.4349C12.5439 20.3988 12.4741 20.3348 12.427 20.2554C11.9013 19.3692 12.0095 17.0485 12.0095 15.9707V11.9932L4.97754 16.7063" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.24px 16.4px' }" />
          </svg>
        </div>
</template>
