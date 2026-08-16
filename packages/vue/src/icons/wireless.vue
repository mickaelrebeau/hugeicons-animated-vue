<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WirelessIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the wireless move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.86px) rotate(-2.19deg)', 'translateY(0.44px) rotate(0.77deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M14.5 11H9.5C7.6341 11 6.70115 11 5.98141 11.3466C5.26703 11.6906 4.69063 12.267 4.34661 12.9814C4 13.7011 4 14.6341 4 16.5C4 18.3659 4 19.2989 4.34661 20.0186C4.69063 20.733 5.26703 21.3094 5.98141 21.6534C6.70115 22 7.6341 22 9.5 22H14.5C16.3659 22 17.2989 22 18.0186 21.6534C18.733 21.3094 19.3094 20.733 19.6534 20.0186C20 19.2989 20 18.3659 20 16.5C20 14.6341 20 13.7011 19.6534 12.9814C19.3094 12.267 18.733 11.6906 18.0186 11.3466C17.2989 11 16.3659 11 14.5 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M13 15H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M9.5 6.99002C10.2106 6.42455 11.0929 6.11744 12.0018 6.11926C12.9106 6.12107 13.7917 6.4317 14.5 7M7 3.7515C8.4189 2.61774 10.1824 2 12 2C13.8176 2 15.5811 2.61774 17 3.7515" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
