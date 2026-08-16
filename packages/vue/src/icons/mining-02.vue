<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Mining02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after scissor-01: the tool lifts and strikes the working face once
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-20.43deg)', 'rotate(7.43deg)', 'rotate(-1.86deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M14.8814 5.18592C13.459 4.31437 9.8081 2.64142 6.51949 3.06842C8.50877 4.43842 9.55528 5.17528 12.3785 7.68884M18.8139 9.11839C19.6855 10.5408 21.3585 14.1917 20.9315 17.4803C19.5614 15.491 18.8246 14.4445 16.311 11.6213M10.4727 11.4182L3.4233 18.4675C2.85149 19.0393 2.86008 19.975 3.44248 20.5574C4.02489 21.1398 4.96056 21.1484 5.53237 20.5766L12.5818 13.5272M11.9865 9.22552L14.7742 12.0132C15.0838 12.3228 15.5845 12.3239 15.8927 12.0158L19.3464 8.56208C19.6546 8.25393 19.6534 7.75319 19.3439 7.44364L16.5561 4.65592C16.2466 4.34637 15.7458 4.34523 15.4377 4.65338L11.9839 8.10708C11.6758 8.41523 11.6769 8.91597 11.9865 9.22552Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.1px 21.15px' }" />
          </svg>
        </div>
</template>
