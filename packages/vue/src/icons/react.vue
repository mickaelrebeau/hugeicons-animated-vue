<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ReactIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after dashboard-square-01: the separate cells of the react assemble from top-left to bottom-right
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.62px) rotate(-1.91deg)', 'translateY(0.38px) rotate(0.67deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.53,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const tileVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['translateY(1.5px) scale(0.74)', 'translateY(-0.43px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
  }),
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
            <motion.path d="M12.0001 8C17.5229 8 22.0001 9.79086 22.0001 12C22.0001 14.2091 17.5229 16 12.0001 16C6.47721 16 2.00006 14.2091 2.00006 12C2.00006 9.79086 6.47721 8 12.0001 8Z" stroke="currentColor" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15.5591 9.97529C18.3962 14.8173 19.1027 19.649 17.1371 20.7672C15.1715 21.8855 11.2781 18.8667 8.44104 14.0247C5.60395 9.18269 4.89746 4.35097 6.86306 3.23275C8.82865 2.11454 12.722 5.13327 15.5591 9.97529Z" stroke="currentColor" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15.5591 14.0247C12.722 18.8667 8.82865 21.8855 6.86306 20.7672C4.89746 19.649 5.60395 14.8173 8.44104 9.97529C11.2781 5.13327 15.1715 2.11454 17.1371 3.23275C19.1027 4.35097 18.3962 9.18269 15.5591 14.0247Z" stroke="currentColor" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12.2501 12H12.0001M12.5001 12C12.5001 12.2761 12.2762 12.5 12.0001 12.5C11.7239 12.5 11.5001 12.2761 11.5001 12C11.5001 11.7239 11.7239 11.5 12.0001 11.5C12.2762 11.5 12.5001 11.7239 12.5001 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
