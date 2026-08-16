<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'VestIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the body of the vest lifts while its detail lines follow
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.8px) rotate(-1deg)', 'translateY(0.45px) rotate(0.5deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const lineVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1.1)', 'scaleX(1)'],
    transition: {
      duration: 0.46,
      delay: 0.12,
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
            <motion.path d="M4.51046 10.8307C6.9018 9.18607 7.10283 6.5528 6.37584 4.78313C6.07534 4.05166 5.92509 3.68592 6.00595 3.4945C6.29496 2.81042 8.36823 2.2903 9.00002 2L13.1722 11.7263C13.7687 13.1852 14.067 13.9147 13.9873 14.6637C13.9076 15.4127 13.4621 16.0664 12.571 17.3738L10.1303 20.9552C9.34647 22.1053 8.9197 22.2198 7.62956 21.715L5.30629 20.8059C4.23506 20.3867 4.00004 20.0761 4.00004 18.9185V11.7372C4.00004 11.1831 3.98581 11.1916 4.51046 10.8307Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.03px 12.11px' }" />
            <motion.path d="M12 8.99367L15 2C15.6318 2.2903 17.705 2.81042 17.994 3.4945C18.0749 3.68592 17.9247 4.05166 17.6242 4.78313C16.8972 6.5528 17.0982 9.18607 19.4895 10.8307C20.0142 11.1916 20 11.1831 20 11.7372V18.9185C20 20.0761 19.7649 20.3867 18.6937 20.8059L16.3704 21.715C15.0803 22.2198 14.6535 22.1053 13.8697 20.9552L12 18.2117" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.01px 12.11px' }" />
            <motion.path d="M9 2L15 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 2px' }" />
            <motion.path d="M10.625 14H10.5M10.75 14C10.75 14.1381 10.6381 14.25 10.5 14.25C10.3619 14.25 10.25 14.1381 10.25 14C10.25 13.8619 10.3619 13.75 10.5 13.75C10.6381 13.75 10.75 13.8619 10.75 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 14px' }" />
          </svg>
        </div>
</template>
