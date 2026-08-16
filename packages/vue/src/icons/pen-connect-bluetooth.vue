<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PenConnectBluetoothIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after edit-02: the nib leads a short handwritten stroke and lifts
// generated from @hugeicons/core-free-icons
const nibVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translate(0px, 0px)',
  },
  animate: {
    transform: ['rotate(0deg) translate(0px, 0px)', 'rotate(-8.27deg) translate(-0.41px, 0.62px)', 'rotate(4.13deg) translate(0.31px, -0.31px)', 'rotate(0deg) translate(0px, 0px)'],
    transition: {
      duration: 0.56,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.88px) rotate(-1.09deg)', 'translateY(0.49px) rotate(0.55deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.61,
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
            <motion.path d="M5.35588 7.05145L8.12475 8.96165C8.7073 9.36354 8.99857 9.56449 8.99999 9.83111C9.00142 10.0977 8.7123 10.3009 8.13407 10.7072L7.55758 11.1123C6.6051 11.7815 6.12886 12.1162 5.74237 11.9635C5.35588 11.8109 5.35588 11.2882 5.35588 10.2427V7.05145ZM5.35588 7.05145L5.2813 7M5.35588 7.05145V6.94855M5.2813 7L2 4.73627M5.2813 7L5.35588 6.94855M5.2813 7L2 9.26373M5.35588 6.94855L8.12475 5.03835C8.7073 4.63646 8.99857 4.43551 8.99999 4.16889C9.00142 3.90227 8.7123 3.69912 8.13407 3.29281L7.55758 2.88774C6.6051 2.21847 6.12886 1.88383 5.74237 2.03647C5.35588 2.18911 5.35588 2.71182 5.35588 3.75726V6.94855Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nibVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 7px' }" />
            <motion.path d="M17.2141 7.98239L18.6158 6.58063C19.39 5.80646 20.6452 5.80646 21.4194 6.58063C22.1935 7.3548 22.1935 8.60998 21.4194 9.38415L20.0176 10.7859M17.2141 7.98239L8.98023 16.2163C7.93493 17.2616 7.41226 17.7842 7.05637 18.4211C6.70047 19.058 6.52927 19.7771 6.18687 21.2151L6 22L6.78486 21.8131C8.22295 21.4707 8.94199 21.2995 9.57889 20.9436C10.2158 20.5877 10.7384 20.0651 11.7837 19.0198L20.0176 10.7859M17.2141 7.98239L20.0176 10.7859" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.1px 13.9px' }" />
          </svg>
        </div>
</template>
