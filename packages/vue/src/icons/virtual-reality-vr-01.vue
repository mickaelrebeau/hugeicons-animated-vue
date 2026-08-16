<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'VirtualRealityVr01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the virtual reality vr move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.8px) rotate(-2.12deg)', 'translateY(0.42px) rotate(0.74deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
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
            <motion.path d="M17 9H7C5.13077 9 4.19615 9 3.5 9.44212C3.04394 9.73175 2.66523 10.1483 2.40192 10.65C2 11.4158 2 12.4438 2 14.5C2 16.5562 2 17.5842 2.40192 18.35C2.66523 18.8517 3.04394 19.2682 3.5 19.5579C4.19615 20 5.13077 20 7 20C7.61332 20 7.91998 20 8.21032 19.9529C8.98496 19.8272 9.70902 19.4541 10.2927 18.88C10.5115 18.6648 10.7078 18.4057 11.1005 17.8874L11.4346 17.4463C11.6334 17.1839 11.7328 17.0527 11.8543 17.0014C11.9552 16.9587 12.0659 16.9532 12.1699 16.9856C12.2951 17.0246 12.4049 17.1454 12.6245 17.3869L13.5858 18.4444C13.8243 18.7067 13.9435 18.8379 14.0676 18.9537C14.7056 19.5498 15.4976 19.9106 16.3319 19.9855C16.4941 20 16.6627 20 17 20C18.8692 20 19.8038 20 20.5 19.5579C20.9561 19.2682 21.3348 18.8517 21.5981 18.35C22 17.5842 22 16.5562 22 14.5C22 12.4438 22 11.4158 21.5981 10.65C21.3348 10.1483 20.9561 9.73175 20.5 9.44212C19.8038 9 18.8692 9 17 9Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20px' }" />
            <motion.path d="M16 13H18" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20px' }" />
            <motion.path d="M22 15V12.4522C22 11.4723 22 10.9823 21.9227 10.5086C21.8844 10.2743 21.8322 10.0438 21.7664 9.81888C21.6333 9.36411 21.427 8.94392 21.0145 8.1036C20.1876 6.41927 19.7742 5.5771 19.1715 5.01138C18.8756 4.73365 18.5493 4.50788 18.2022 4.34065C17.4952 4 16.6916 4 15.0845 4H8.91548C7.30836 4 6.5048 4 5.79779 4.34065C5.45069 4.50788 5.12444 4.73365 4.82853 5.01138C4.22579 5.5771 3.81236 6.41927 2.9855 8.1036C2.57298 8.94394 2.36671 9.3641 2.23364 9.81888C2.16781 10.0438 2.11557 10.2743 2.07733 10.5086C2 10.9823 2 11.4723 2 12.4522V15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20px' }" />
          </svg>
        </div>
</template>
