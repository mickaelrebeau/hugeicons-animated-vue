<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ProtectionMaskIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the mask presses onto the face and the face nods
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.26, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const maskVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.8px, -0.6px)',
      'translate(0.12px, 0.09px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
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
            <motion.path d="M4.27574 22V18.4493C4.27574 17.172 3.93486 16.5167 3.26456 15.4113C2.46115 14.0864 2 12.5402 2 10.8889C2 5.97969 6.07554 2 11.103 2C15.4666 2 19.1132 4.99817 20 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 12px' }" />
            <motion.path d="M15.0752 14.8454L18.991 12.4141C19.0832 12.3568 19.1294 12.3282 19.1753 12.3058C19.2213 12.2834 19.2749 12.2638 19.382 12.2245C19.933 12.0226 20.5435 11.8047 21.0395 12.2243C21.3015 12.4459 21.4245 12.8352 21.6707 13.6138C21.8649 14.2282 22.0806 14.8351 21.9699 15.487C21.9119 15.8283 21.7602 16.1483 21.4567 16.7883L20.0275 19.8024C19.4737 20.9703 19.1968 21.5542 18.2759 21.8609C17.3551 22.1675 16.9484 21.9358 16.135 21.4725C12.4487 19.3724 5.30998 13.2604 7.36438 10.4879C8.14017 9.44098 10.1234 9.73499 15.0752 14.8454ZM15.0752 14.8454L14.0098 20.0793" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="maskVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.7px 15.8px' }" />
          </svg>
        </div>
</template>
