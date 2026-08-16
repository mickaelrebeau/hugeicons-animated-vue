<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Touch03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after mouse-left-click-01: the touch point compresses and sends the response outward
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.82px) scaleX(0.9) scaleY(1.04)', 'translateX(2.04px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
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
            <motion.path d="M6.37124 12.171L8.50514 14V4.25C8.50514 3.2835 9.28864 2.5 10.2551 2.5C11.2216 2.5 12.0051 3.2835 12.0051 4.25V9.5L14.993 9.97757C16.9216 10.2669 17.886 10.4115 18.5652 10.8184C19.6872 11.4906 20.5 12.5 20.5 13.9736C20.5 15 20.2463 15.6886 19.6296 17.5387C19.2383 18.7127 19.0426 19.2996 18.7236 19.7643C18.1983 20.5293 17.4233 21.0878 16.5315 21.3442C15.9898 21.5 15.3711 21.5 14.1336 21.5H13.0847C11.4395 21.5 10.6169 21.5 9.88462 21.1981C9.75329 21.144 9.62494 21.0829 9.50012 21.0151C8.80405 20.6371 8.28533 19.9987 7.24791 18.7219L3.88941 14.5883C3.37331 13.9531 3.36987 13.0441 3.88114 12.405C4.49565 11.6369 5.62437 11.5308 6.37124 12.171Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.37px 12px' }" />
          </svg>
        </div>
</template>
