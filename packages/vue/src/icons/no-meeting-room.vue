<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'NoMeetingRoomIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the no meeting room move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.78px) rotate(-2.1deg)', 'translateY(0.42px) rotate(0.73deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
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
            <motion.path d="M2.00024 2L22.0002 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M12.0005 21H8.00049C5.64347 21 4.46495 21 3.73272 20.2678C3.00049 19.5355 3.00049 18.357 3.00049 16V8C3.00049 5.64298 3.00049 4.46447 3.73272 3.73223M12.0005 21C14.3575 21 15.536 21 16.2683 20.2678C16.889 19.647 16.9835 18.7056 16.9979 16.9974M12.0005 21H17.0005C18.8861 21 19.8289 21 20.4147 20.4142M21.0005 16.9974V10C21.0005 8.11438 21.0005 7.17157 20.4147 6.58579C19.8289 6 18.8861 6 17.0005 6M17.0005 13.1109V8C17.0005 5.64298 17.0005 4.46447 16.2683 3.73223C15.536 3 14.3575 3 12.0005 3H8.00049C7.5983 3 7.23042 3 6.89321 3.00364" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
