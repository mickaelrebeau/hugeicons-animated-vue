<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Shaka02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the shaka hand hops up
// authored from scripts/authored
const handVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.6px)',
      'translate(0px, 0.22400000000000003px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
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
            <motion.path d="M17.7116 11.671L15.6393 13.5C15.6393 12.1103 15.6393 11.4155 15.4376 10.8867C15.0858 9.96466 14.3147 9.28087 13.377 9.05945C12.8393 8.93248 12.172 9.03555 10.8373 9.2417L6.899 10V4.75C6.899 3.7835 6.13811 3 5.1995 3C4.26089 3 3.5 3.7835 3.5 4.75V13.1795C3.5 15.8106 3.5 17.1261 3.98274 18.1435C4.47679 19.1846 5.31535 20.0232 6.35655 20.5173C7.37391 21 8.68944 21 11.3205 21C12.791 21 13.5263 21 14.188 20.7435C14.392 20.6643 14.5893 20.5677 14.7776 20.4545C15.3882 20.0874 15.8519 19.4998 16.7792 18.3246L20.1218 14.0883C20.623 13.4531 20.6264 12.5441 20.1299 11.905C19.5331 11.1369 18.4369 11.0308 17.7116 11.671Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.1px 12px' }" />
          </svg>
        </div>
</template>
