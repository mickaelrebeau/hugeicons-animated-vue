<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UserWarning03Icon' })

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
    transform: ['rotate(0deg)', 'rotate(-8.65deg)', 'rotate(7.57deg)', 'rotate(-4.33deg)', 'rotate(2.16deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.54,
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
            <motion.path d="M15.5 7C15.5 9.20914 13.7091 11 11.5 11C9.29086 11 7.5 9.20914 7.5 7C7.5 4.79086 9.29086 3 11.5 3C13.7091 3 15.5 4.79086 15.5 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 17.5px' }" />
            <motion.path d="M13.5 14H9.5C6.73858 14 4.5 16.2386 4.5 19C4.5 20.1046 5.39543 21 6.5 21H16.5C17.6046 21 18.5 20.1046 18.5 19C18.5 16.2386 16.2614 14 13.5 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 17.5px' }" />
            <motion.path d="M19.5 6V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 17.5px' }" />
            <motion.path d="M19.5 13V13.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 17.5px' }" />
          </svg>
        </div>
</template>
