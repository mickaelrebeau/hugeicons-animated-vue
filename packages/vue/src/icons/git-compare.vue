<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GitCompareIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after share-08: the branch signal travels from root to each commit node
// generated from @hugeicons/core-free-icons
const wireVariants: Variants = {
  normal: {
    pathLength: 1,
    visibility: 'visible',
  },
  animate: {
    pathLength: [0, 1],
    visibility: 'visible',
    transition: {
      duration: 0.47,
      ease: 'easeOut',
    },
  },
}

const nodeVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: (i: number) => ({
    transform: ['scale(1)', 'scale(1.25)', 'scale(1)'],
    transition: { duration: 0.43, ease: 'easeInOut', delay: i * 0.12 },
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
            <motion.path d="M19 17L19 11C19 8.17157 19 6.75736 18.1213 5.87868C17.2426 5 15.8284 5 13 5H10M10 5C10 4.29977 11.9943 2.99153 12.5 2.5M10 5C10 5.70023 11.9943 7.00847 12.5 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 9.75px' }" />
            <motion.path d="M5 7.5L5 13.5C5 16.3284 5 17.7426 5.87868 18.6213C6.75736 19.5 8.17157 19.5 11 19.5H14M14 19.5C14 20.2002 12.0057 21.5085 11.5 22M14 19.5C14 18.7998 12.0057 17.4915 11.5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 14.75px' }" />
            <motion.circle cx="19" cy="19" r="2" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 19px' }" />
            <motion.circle cx="5" cy="5" r="2" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 5px' }" />
          </svg>
        </div>
</template>
