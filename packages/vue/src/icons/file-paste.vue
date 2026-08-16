<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FilePasteIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the sheet lifts from its stack while its details follow
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.83px) rotate(-1.04deg)', 'translateY(0.47px) rotate(0.52deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
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
            <motion.path d="M3.99994 10L3.99994 14.5442C3.99994 17.7892 3.99994 19.4117 4.88601 20.5107C5.06502 20.7327 5.26725 20.9349 5.48927 21.1139C6.58825 22 8.21076 22 11.4558 22C12.1613 22 12.5141 22 12.8371 21.886C12.9043 21.8623 12.9702 21.835 13.0345 21.8043C13.3435 21.6564 13.5929 21.407 14.0918 20.9081L18.8284 16.1716C19.4064 15.5935 19.6955 15.3045 19.8477 14.9369C19.9999 14.5694 19.9999 14.1606 19.9999 13.3431V10C19.9999 6.22876 19.9999 4.34315 18.8284 3.17157C17.6568 2 15.7712 2 11.9999 2M12.9999 21.5V21C12.9999 18.1716 12.9999 16.7574 13.8786 15.8787C14.7573 15 16.1715 15 18.9999 15H19.4999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6.99994 8C6.3931 7.41016 3.99994 5.84027 3.99994 5C3.99994 4.15973 6.3931 2.58984 6.99994 2M4.49994 5H6.99994C8.86917 5 9.80379 5 10.4999 5.40192C10.956 5.66523 11.3347 6.04394 11.598 6.5C11.9999 7.19615 11.9999 8.13077 11.9999 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 6px' }" />
          </svg>
        </div>
</template>
