<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HandPointingLeft02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after thumbs-up: the wrist leads one readable hand gesture
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.49px) rotate(-3.72deg)', 'translateY(0.28px) rotate(0.93deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
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
            <motion.path d="M14 7.41601L10.5 7.41601M10.5 7.41601L4.25 7.41601C3.2835 7.41601 2.5 8.19951 2.5 9.16601C2.5 10.1325 3.2835 10.916 4.25 10.916L9.5 10.916L9.97758 13.993C10.2669 15.9216 10.4115 16.886 10.8184 17.5652C11.4906 18.6872 12.5 19.5 13.9736 19.5C15 19.5 15.6886 19.2463 17.5387 18.6296C18.7127 18.2383 19.2996 18.0426 19.7643 17.7236C20.5293 17.1983 21.0878 16.4233 21.3442 15.5315C21.5 14.9898 21.5 14.3711 21.5 13.1336L21.5 11.7287C21.5 9.94422 21.5 9.05198 21.1651 8.28584C21.0137 7.9397 20.8141 7.61674 20.5722 7.32659C20.0367 6.68438 19.2387 6.28535 17.6426 5.48731C16.3483 4.84015 15.7011 4.51657 15.0302 4.50082C14.7276 4.49372 14.4256 4.53246 14.1346 4.61571C13.4894 4.80031 12.9448 5.27678 11.8558 6.2297L10.5 7.41601Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19.5px' }" />
          </svg>
        </div>
</template>
