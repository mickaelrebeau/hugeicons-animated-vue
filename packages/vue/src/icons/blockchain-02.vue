<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Blockchain02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after share-08: the transaction travels block by block through the chain
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
      duration: 0.44,
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
            <motion.path d="M12 22C12.2443 22 12.4714 21.8869 12.9256 21.6608L16.5766 19.8432C18.1922 19.039 19 18.6368 19 18V10M12 22C11.7557 22 11.5286 21.8869 11.0744 21.6608L7.42337 19.8432C5.80779 19.039 5 18.6368 5 18V10M12 22V14M19 10C19 9.36317 18.1922 8.96103 16.5766 8.15675L12.9256 6.33919C12.4714 6.11306 12.2443 6 12 6C11.7557 6 11.5286 6.11306 11.0744 6.33919L7.42337 8.15675C5.80779 8.96103 5 9.36317 5 10M19 10C19 10.6368 18.1922 11.039 16.5766 11.8432L12.9256 13.6608C12.4714 13.8869 12.2443 14 12 14M5 10C5 10.6368 5.80779 11.039 7.42337 11.8432L11.0744 13.6608C11.5286 13.8869 11.7557 14 12 14" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M22 21L19 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20.5px 19.75px' }" />
            <motion.path d="M12 2V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4px' }" />
            <motion.path d="M2 21L5 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 19.75px' }" />
          </svg>
        </div>
</template>
