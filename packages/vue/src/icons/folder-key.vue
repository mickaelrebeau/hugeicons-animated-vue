<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FolderKeyIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the tab leads a compact lift and the folder lands on its base
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.7px) rotate(-2.01deg)', 'translateY(0.4px) rotate(0.7deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M8.01332 6.50116H16.7827C18.8941 6.50116 19.9498 6.50116 20.7081 7.0069C21.0364 7.22584 21.3183 7.50717 21.5377 7.83484C21.8193 8.25555 21.9444 8.76795 22 9.50203M12.0222 6.50116L11.3874 5.23392C10.8614 4.18406 10.3808 3.1273 9.21524 2.69106C8.70475 2.5 8.12158 2.5 6.95525 2.5C5.13474 2.5 4.22449 2.5 3.54148 2.88043C3.0546 3.15161 2.65287 3.55257 2.38116 4.03851C2 4.72021 2 5.62871 2 7.44571V10.5023C2 15.2177 2 17.5754 3.46772 19.0403C4.71129 20.2815 6.59706 20.4711 10.0178 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.5px' }" />
            <motion.path d="M17.5 18L22 13.5M21 15L22 16M18 19.5C18 20.6046 17.1046 21.5 16 21.5C14.8954 21.5 14 20.6046 14 19.5C14 18.3954 14.8954 17.5 16 17.5C17.1046 17.5 18 18.3954 18 19.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.5px' }" />
          </svg>
        </div>
</template>
