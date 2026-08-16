<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TeaPodIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the tea pod move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.57px) rotate(-1.85deg)', 'translateY(0.37px) rotate(0.65deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
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
            <motion.path d="M19.0063 10.005V6.5038C19.0063 4.01763 16.9835 2.0022 14.4881 2.0022C11.9928 2.0022 9.96997 4.01763 9.96997 6.5038V10.005" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.01px 22.26px' }" />
            <motion.path d="M14.488 9.00468V7.50415" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.01px 22.26px' }" />
            <motion.path d="M2.16958 11.1285L6.65238 16.903C6.69082 16.9525 6.71276 17.0127 6.71512 17.0753L6.80491 19.4596C6.83613 20.2884 7.41233 20.9974 8.21953 21.2002L8.46708 21.2624C12.4487 22.2628 16.6198 22.242 20.5912 21.202C21.3686 20.9984 21.9164 20.3061 21.9338 19.5054L21.9942 16.7139C22.0796 12.7815 20.8064 11.9342 20.1836 11.3632C18.7421 10.0416 16.5969 9.72382 14.5369 9.72382C10.9645 9.72382 9.24461 10.7395 8.44615 11.4301C8.27084 11.5817 8.0179 11.618 7.81808 11.5003L3.84377 9.15827C3.49819 8.95462 3.05477 9.03649 2.80537 9.34999L2.17546 10.1418C1.946 10.4302 1.94358 10.8374 2.16958 11.1285Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.01px 22.26px' }" />
          </svg>
        </div>
</template>
