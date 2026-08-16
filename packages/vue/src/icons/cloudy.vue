<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CloudyIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the cloudy move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.67px) rotate(-1.97deg)', 'translateY(0.39px) rotate(0.69deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M14.3821 12.8C14.388 12.8 14.394 12.8 14.4 12.8C16.3882 12.8 18 14.4118 18 16.4C18 18.3882 16.3882 20 14.4 20H6C3.79086 20 2 18.2091 2 16C2 13.9203 3.58718 12.2113 5.61634 12.0182M13.8675 14.5C14.1469 13.9866 14.327 13.4113 14.3821 12.8C14.3939 12.6683 14.4 12.5349 14.4 12.4C14.4 9.96995 12.4301 8 10 8C7.69859 8 5.80986 9.7669 5.61634 12.0182M5.61634 12.0182C5.74261 12.0061 5.87059 12 6 12C6.72857 12 7.41165 12.1948 8 12.5351" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 20px' }" />
            <motion.path d="M18.3829 8.80004C18.3889 8.80001 18.3949 8.8 18.4008 8.8C20.3891 8.8 22.0008 10.4118 22.0008 12.4C22.0008 13.3661 21.6203 14.2434 21.0009 14.89M18.3829 8.80004C18.3948 8.66829 18.4008 8.53485 18.4008 8.4C18.4008 5.96995 16.4309 4 14.0008 4C11.6994 4 9.81071 5.7669 9.61719 8.01816M18.3829 8.80004C18.3451 9.21981 18.2483 9.62258 18.1009 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 20px' }" />
          </svg>
        </div>
</template>
