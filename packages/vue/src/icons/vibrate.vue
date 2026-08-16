<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'VibrateIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the vibrate move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.84px) rotate(-2.17deg)', 'translateY(0.43px) rotate(0.76deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M17 15V9C17 6.64298 17 5.46447 16.2678 4.73223C15.5355 4 14.357 4 12 4C9.64298 4 8.46447 4 7.73223 4.73223C7 5.46447 7 6.64298 7 9V15C7 17.357 7 18.5355 7.73223 19.2678C8.46447 20 9.64298 20 12 20C14.357 20 15.5355 20 16.2678 19.2678C17 18.5355 17 17.357 17 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20px' }" />
            <motion.path d="M22 8L20.3578 9.23167C20.1325 9.40059 20 9.66569 20 9.94721C20 10.286 20.1914 10.5957 20.4944 10.7472L21.5528 11.2764C21.8269 11.4134 22 11.6936 22 12C22 12.3064 21.8269 12.5866 21.5528 12.7236L20.4944 13.2528C20.1914 13.4043 20 13.714 20 14.0528C20 14.3343 20.1325 14.5994 20.3578 14.7683L22 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20px' }" />
            <motion.path d="M2 8L3.64223 9.23167C3.86745 9.40059 4 9.66569 4 9.94721C4 10.286 3.80859 10.5957 3.50557 10.7472L2.44721 11.2764C2.17313 11.4134 2 11.6936 2 12C2 12.3064 2.17313 12.5866 2.44721 12.7236L3.50557 13.2528C3.80859 13.4043 4 13.714 4 14.0528C4 14.3343 3.86745 14.5994 3.64223 14.7683L2 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20px' }" />
          </svg>
        </div>
</template>
