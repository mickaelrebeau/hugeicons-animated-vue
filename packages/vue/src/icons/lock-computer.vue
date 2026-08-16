<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LockComputerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after lock: the body reacts while the keyway turns in its own seat
// generated from @hugeicons/core-free-icons
const bodyVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-0.96deg) scale(0.985)', 'rotate(1.34deg) scale(1.018)', 'rotate(-0.33deg) scale(0.997)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.69,
      times: [0, 0.18, 0.48, 0.78, 1],
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const keyVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg) scale(1)', 'translateY(0.19px) rotate(0deg) scale(0.96)', 'translateY(-0.32px) rotate(-14.8deg) scale(1.035)', 'translateY(-0.11px) rotate(3.7deg) scale(1.012)', 'translateY(0px) rotate(0deg) scale(1)'],
    transition: {
      duration: 0.76,
      times: [0, 0.16, 0.42, 0.68, 0.86, 1],
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
            <motion.path d="M12.9994 2H9.99936C6.22812 2 4.34251 2 3.17093 3.17157C1.99936 4.34315 1.99936 6.22876 1.99936 10C1.99936 13.7712 1.99936 15.6569 3.17093 16.8284C4.34251 18 6.22812 18 9.99936 18H13.9994C17.7706 18 19.6563 18 20.8278 16.8284C21.481 16.1752 21.77 15.3001 21.8979 14" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.95px 10px' }" />
            <motion.path d="M11.9994 18V22" stroke="currentColor" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20px' }" />
            <motion.path d="M7.99936 22H15.9994" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M10.9994 15H12.9994" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="keyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15px' }" />
            <motion.path d="M16.7501 5.37603C16.7501 5.31603 16.7487 4.55715 16.7501 4.12257C16.7514 3.72548 16.7165 3.34257 16.9061 2.99217C17.6165 1.57857 19.6565 1.72257 20.1605 3.16257C20.2478 3.39964 20.2531 3.77549 20.2505 4.12257C20.2472 4.56606 20.2565 5.37603 20.2565 5.37603M16.7501 5.37603C15.6701 5.37603 15.2165 6.15603 15.0965 6.63603C14.9765 7.11603 14.9765 8.85603 15.0485 9.57603C15.2885 10.476 15.8885 10.848 16.4765 10.968C17.0165 11.016 19.2965 10.998 19.9565 10.998C20.9165 11.016 21.6365 10.656 21.9365 9.57603C21.9965 9.21603 22.0565 7.23603 21.9065 6.63603C21.5885 5.67603 20.8565 5.37603 20.2565 5.37603M16.7501 5.37603H20.2565" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.52px 6.3px' }" />
          </svg>
        </div>
</template>
