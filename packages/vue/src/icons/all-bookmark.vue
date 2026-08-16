<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AllBookmarkIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the back page peels, then the ribbon folds into the saved-state like bookmark-01
// authored from scripts/authored
const ribbonVariants: Variants = {
  normal: { transform: 'translateY(0px) scaleY(1)' },
  animate: {
    transform: [
      'translateY(0px) scaleY(1)',
      'translateY(2.2px) scaleY(0.9)',
      'translateY(-0.7px) scaleY(1.05)',
      'translateY(0px) scaleY(1)',
    ],
    transition: { duration: 0.6, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const pageVariants: Variants = {
  normal: { transform: 'translateX(0px) rotate(0deg)' },
  animate: {
    transform: [
      'translateX(0px) rotate(0deg)',
      'translateX(1.4px) rotate(4deg)',
      'translateX(-0.2px) rotate(-0.8deg)',
      'translateX(0px) rotate(0deg)',
    ],
    transition: { duration: 0.62, delay: 0.08, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M3 17.9808V12.7075C3 9.07416 3 7.25748 4.09835 6.12874C5.1967 5 6.96447 5 10.5 5C14.0355 5 15.8033 5 16.9017 6.12874C18 7.25748 18 9.07416 18 12.7075V17.9808C18 20.2867 18 21.4396 17.2755 21.8523C15.8724 22.6514 13.2405 19.9852 11.9906 19.1824C11.2657 18.7168 10.9033 18.484 10.5 18.484C10.0967 18.484 9.73425 18.7168 9.00938 19.1824C7.7595 19.9852 5.12763 22.6514 3.72454 21.8523C3 21.4396 3 20.2867 3 17.9808Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ribbonVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 5px' }" />
            <motion.path d="M9 2H11C15.714 2 18.0711 2 19.5355 3.46447C21 4.92893 21 7.28595 21 12V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pageVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '21px 2px' }" />
          </svg>
        </div>
</template>
