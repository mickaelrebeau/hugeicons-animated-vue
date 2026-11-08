<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'VolumeMuteIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the silent speaker shudders in place
// authored from scripts/authored
const speakerVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-4deg) scale(0.97)',
      'rotate(3.2deg) scale(1.03)',
      'rotate(-1.2deg) scale(0.995)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.56, times: [0, 0.2, 0.46, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

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
            <motion.path d="M18 14.8135V9.18646C18 6.04126 18 4.46866 17.074 4.0773C16.1481 3.68593 15.0583 4.79793 12.8787 7.02192C11.7499 8.17365 11.1059 8.42869 9.5 8.42869C8.3879 8.42869 7.02749 8.28131 6.33706 9.33566C6 9.85038 6 10.5669 6 12C6 13.4331 6 14.1496 6.33706 14.6643C7.02749 15.7187 8.3879 15.5713 9.5 15.5713C11.106 15.5713 11.7499 15.8264 12.8787 16.9781C15.0583 19.2021 16.1481 20.3141 17.074 19.9227C18 19.5313 18 17.9587 18 14.8135Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="speakerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
