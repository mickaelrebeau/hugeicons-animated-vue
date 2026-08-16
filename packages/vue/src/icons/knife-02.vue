<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Knife02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after scissor-01: the blade draws through the cut and returns to guard
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-22.28deg)', 'rotate(8.1deg)', 'rotate(-2.03deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.52,
      times: [0, 0.32, 0.55, 0.8, 1],
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
            <motion.path d="M13.6468 17.7161C14.0276 17.6191 14.3277 17.2686 14.9279 16.5674L20.1144 10.5083C22.0236 8.27791 22.7538 5.16032 21.0179 2.53909C20.4426 1.67029 19.4814 1.97862 18.8802 2.57285L2.57422 18.6916C1.80859 19.4484 1.80859 20.6755 2.57422 21.4323C3.44222 22.2903 4.88535 22.1577 5.57852 21.1563C6.52528 19.7884 8.00705 16.2711 9.65825 15.6456C11.371 14.9968 11.9676 18.1437 13.6468 17.7161Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.28px 22.29px' }" />
          </svg>
        </div>
</template>
