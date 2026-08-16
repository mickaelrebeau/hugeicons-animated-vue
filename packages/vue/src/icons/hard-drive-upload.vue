<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HardDriveUploadIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after upload-01: the arrow launches off the top
// generated from @hugeicons/core-free-icons
const trayVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(0.84px)', 'translateY(0px)'],
    transition: {
      duration: 0.32,
      ease: 'easeOut',
      delay: 0.08,
    },
  },
}

const arrowVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
    visibility: 'visible',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(-4.81px)', 'translateY(4.81px)', 'translateY(0px)'],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.67,
      times: [0, 0.42, 0.5, 1],
      ease: ['easeIn', 'linear', 'easeOut'],
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
            <motion.path d="M7 18V17.8M7.25 18C7.25 17.8619 7.13807 17.75 7 17.75C6.86193 17.75 6.75 17.8619 6.75 18C6.75 18.1381 6.86193 18.25 7 18.25C7.13807 18.25 7.25 18.1381 7.25 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="trayVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 18px' }" />
            <motion.path d="M11 18V17.8M11.25 18C11.25 17.8619 11.1381 17.75 11 17.75C10.8619 17.75 10.75 17.8619 10.75 18C10.75 18.1381 10.8619 18.25 11 18.25C11.1381 18.25 11.25 18.1381 11.25 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="trayVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 18px' }" />
            <motion.path d="M8 5.99997C8 5.99997 10.946 2.00001 12 2C13.0541 1.99999 16 6 16 6M12 3V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="trayVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6px' }" />
            <motion.path d="M17 14H7C5.59987 14 4.8998 14 4.36502 14.2725C3.89462 14.5122 3.51217 14.8946 3.27248 15.365C3 15.8998 3 16.5999 3 18C3 19.4001 3 20.1002 3.27248 20.635C3.51217 21.1054 3.89462 21.4878 4.36502 21.7275C4.8998 22 5.59987 22 7 22H17C18.4001 22 19.1002 22 19.635 21.7275C20.1054 21.4878 20.4878 21.1054 20.7275 20.635C21 20.1002 21 19.4001 21 18C21 16.5999 21 15.8998 20.7275 15.365C20.4878 14.8946 20.1054 14.5122 19.635 14.2725C19.1002 14 18.4001 14 17 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
          </svg>
        </div>
</template>
