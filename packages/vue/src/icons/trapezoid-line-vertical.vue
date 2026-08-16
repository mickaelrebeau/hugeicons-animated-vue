<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TrapezoidLineVerticalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the trapezoid line vertical move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.74px) rotate(-2.05deg)', 'translateY(0.41px) rotate(0.72deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.56,
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
            <motion.path d="M12 5C14.6653 5 15.998 5 16.9449 5.62726C17.0483 5.69576 17.1471 5.76916 17.2409 5.84711C18.1001 6.56098 18.2886 7.69057 18.6655 9.94975L19.0328 12.1515C19.5645 15.338 19.8303 16.9312 18.7825 17.9656C17.7348 19 15.8551 19 12.0957 19H11.9043C8.14492 19 6.26523 19 5.21745 17.9656C4.16967 16.9312 4.4355 15.338 4.96716 12.1515L5.33451 9.94974C5.71144 7.69057 5.89991 6.56098 6.75905 5.84711C6.85287 5.76915 6.95171 5.69576 7.05511 5.62726C8.00198 5 9.33465 5 12 5Z" stroke="currentColor" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <motion.path d="M12 22L12 2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
          </svg>
        </div>
</template>
