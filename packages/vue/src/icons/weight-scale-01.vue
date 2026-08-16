<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WeightScale01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after thumbs-up: the load dips, drives up, and comes back under control
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.16px) scaleY(0.94)', 'translateY(-2.96px) scaleY(1.04)', 'translateY(-2.54px) scaleY(1)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.84,
      times: [0, 0.18, 0.5, 0.68, 1],
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
            <motion.path d="M19 15V18.8889C19 21.1138 18.2644 22 15.8889 22H8.11111C5.88617 22 5 21.2644 5 18.8889V15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M16 15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M12 17L13 15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M16.3124 5H7.68756C6.80396 5 6.36216 5 5.97341 4.84796C5.84428 4.79746 5.72076 4.73499 5.60466 4.66148C5.25513 4.44018 5.01007 4.09284 4.51994 3.39815C4.13795 2.85675 3.94696 2.58604 4.0128 2.3647C4.03364 2.29467 4.07039 2.22977 4.1205 2.17455C4.27889 2 4.6232 2 5.31184 2H18.6882C19.3768 2 19.7211 2 19.8795 2.17455C19.9296 2.22977 19.9664 2.29467 19.9872 2.3647C20.053 2.58604 19.862 2.85675 19.4801 3.39815C18.9899 4.09283 18.7449 4.44019 18.3953 4.66148C18.2792 4.73499 18.1557 4.79746 18.0266 4.84796C17.6378 5 17.196 5 16.3124 5Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M14 8V5M10 8V5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
