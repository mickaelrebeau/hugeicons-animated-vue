<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DangerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after alert-circle: the sign shakes to flag the hazard and holds the warning
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-7.57deg)', 'rotate(6.62deg)', 'rotate(-3.78deg)', 'rotate(1.89deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.49,
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M10.5 11.25C10.5 10.2835 9.7165 9.5 8.75 9.5C7.7835 9.5 7 10.2835 7 11.25C7 12.2165 7.7835 13 8.75 13C9.7165 13 10.5 12.2165 10.5 11.25Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.24px' }" />
            <motion.path d="M17 11.25C17 10.2835 16.2165 9.5 15.25 9.5C14.2835 9.5 13.5 10.2835 13.5 11.25C13.5 12.2165 14.2835 13 15.25 13C16.2165 13 17 12.2165 17 11.25Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.24px' }" />
            <motion.path d="M11 16L11.2929 15.6306C11.6262 15.2102 11.7929 15 12 15C12.2071 15 12.3738 15.2102 12.7071 15.6306L13 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.24px' }" />
            <motion.path d="M12 2C7.30558 2 3.5 5.76644 3.5 10.4126C3.5 12.1664 4.04229 13.795 4.96997 15.1428C4.71662 15.4221 4.5625 15.7914 4.5625 16.1962C4.5625 17.0674 5.27605 17.7736 6.15625 17.7736V18.9929C6.15625 19.6422 6.46621 20.2619 7.02648 20.5901C10.2351 22.47 13.7649 22.47 16.9735 20.5901C17.5338 20.2619 17.8438 19.6422 17.8438 18.9929V17.7736C18.724 17.7736 19.4375 17.0674 19.4375 16.1962C19.4375 15.7914 19.2834 15.4221 19.03 15.1428C19.9577 13.795 20.5 12.1664 20.5 10.4126C20.5 5.76644 16.6944 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.24px' }" />
            <motion.path d="M14 21.5V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.24px' }" />
            <motion.path d="M10 21.5V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.24px' }" />
          </svg>
        </div>
</template>
