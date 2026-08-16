<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TransmissionIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the transmission move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.65px) rotate(-1.94deg)', 'translateY(0.39px) rotate(0.68deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.54,
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
            <motion.path d="M5.6 22C5.6 21.1163 4.88366 20.4 4 20.4M8.8 22C8.8 19.349 6.65097 17.2 4 17.2M12 22C12 17.5817 8.41828 14 4 14" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 22px' }" />
            <motion.path d="M4.99994 11V9.50003C4.99994 6.21252 4.99994 4.56876 5.90791 3.46241C6.07412 3.25989 6.25982 3.07418 6.46235 2.90797C7.5687 2 9.21246 2 12.5 2C15.7875 2 17.4312 2 18.5376 2.90797C18.7401 3.07418 18.9258 3.25989 19.092 3.46241C20 4.56876 20 6.21252 20 9.50003V17C20 17.9293 20 18.394 19.9231 18.7804C19.6075 20.3671 18.3671 21.6075 16.7804 21.9231C16.394 22 15.9293 22 15 22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 22px' }" />
          </svg>
        </div>
</template>
