<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ClipboardMinusIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the minus squeezes short and springs back
// authored from scripts/authored
const minusVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(0.25)',
      'translate(0.00px, 0px) scaleX(1.12)',
      'translate(0.00px, 0px) scaleX(0.98)',
      'translate(0.00px, 0px) scaleX(1)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.18, 0.46, 0.74, 1],
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
            <path d="M14.5 2.00024H9.5C8.67157 2.00024 8 2.67182 8 3.50024C8 4.32867 8.67157 5.00024 9.5 5.00024H14.5C15.3284 5.00024 16 4.32867 16 3.50024C16 2.67182 15.3284 2.00024 14.5 2.00024Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M16 3.50024C17.5535 3.54706 18.48 3.72032 19.1213 4.36161C20 5.24028 20 6.65448 20 9.48287L20 15.9997C20 18.8281 20 20.2423 19.1213 21.121C18.2426 21.9997 16.8284 21.9997 14 21.9997L10 21.9997C7.17158 21.9997 5.75737 21.9997 4.87869 21.121C4.00001 20.2424 4.00001 18.8282 4 15.9997L4.00001 9.48293C4.00001 6.6545 4 5.24028 4.87868 4.3616C5.51997 3.72031 6.44651 3.54705 7.9999 3.50024" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M9.00391 13.0002H15.0039" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="minusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
          </svg>
        </div>
</template>
