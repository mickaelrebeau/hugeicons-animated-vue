<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WellnessIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after wifi-01: the arcs of the wellness propagate outward from their geometric source
// generated from @hugeicons/core-free-icons
const arcVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0.87px) scale(0.82)', 'translateY(0px) scale(1.06)', 'translateY(0px) scale(1)'],
    transition: { duration: 1, ease: [0.23, 1, 0.32, 1], delay: i * 0.12 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.71px) rotate(-2.01deg)', 'translateY(0.4px) rotate(0.7deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.55,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M4 14.0695C5.0145 14.0695 6.43122 13.7685 7.31944 14.4193L9.08188 15.7108C9.73667 16.1906 10.4458 16.0325 11.1765 15.9178C12.1389 15.7667 13 16.5875 13 17.6562C13 17.9482 10.9272 18.6905 10.6276 18.8316C10.0391 19.1088 9.36297 19.0406 8.83021 18.6502L6.84211 17.1934" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M13 17L17.091 15.1096C17.8244 14.854 18.6331 15.0535 19.1797 15.625L19.8505 16.3262C20.0902 16.5768 20.0338 16.9976 19.7375 17.1697L11.8829 21.7315C11.4097 22.0063 10.8514 22.0734 10.3309 21.9179L4 20.0269" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M12.0019 12C12.0019 12 14.1019 9.76142 14.1019 7C14.1019 4.23858 12.0019 2 12.0019 2C12.0019 2 9.9019 4.23858 9.9019 7C9.9019 9.76142 12.0019 12 12.0019 12ZM12.0019 12C12.0019 12 15.0689 11.9316 17.0019 9.95918C18.9349 7.98674 19.0019 4.85714 19.0019 4.85714C19.0019 4.85714 17.7324 4.88544 16.3122 5.43087M12.0019 12C12.0019 12 8.9349 11.9316 7.0019 9.95918C5.0689 7.98674 5.0019 4.85714 5.0019 4.85714C5.0019 4.85714 6.27135 4.88544 7.69157 5.43087" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
