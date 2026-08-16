<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Structure03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after share-08: the structure resolves from its root toward each branch
// generated from @hugeicons/core-free-icons
const nodeVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: (i: number) => ({
    transform: ['scale(1)', 'scale(1.25)', 'scale(1)'],
    transition: { duration: 0.48, ease: 'easeInOut', delay: i * 0.12 },
  }),
}

const wireVariants: Variants = {
  normal: {
    pathLength: 1,
    visibility: 'visible',
  },
  animate: {
    pathLength: [0, 1],
    visibility: 'visible',
    transition: {
      duration: 0.45,
      ease: 'easeOut',
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
            <motion.path d="M14.5 16.5C14.5 17.8807 13.3807 19 12 19C10.6193 19 9.5 17.8807 9.5 16.5C9.5 15.1193 10.6193 14 12 14C13.3807 14 14.5 15.1193 14.5 16.5Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.5px' }" />
            <motion.path d="M10.2857 2H13.7143C15.7888 2 16 2.92494 16 4.5C16 6.07506 15.7888 7 13.7143 7H10.2857C8.2112 7 8 6.07506 8 4.5C8 2.92494 8.2112 2 10.2857 2Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.5px' }" />
            <motion.path d="M4 13C4.24764 11.377 5.24469 11 7.98759 11H16.0153C18.7582 11 19.7524 11.377 20 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2 15C2 14.0572 2 13.5858 2.29289 13.2929C2.58579 13 3.05719 13 4 13C4.94281 13 5.41421 13 5.70711 13.2929C6 13.5858 6 14.0572 6 15C6 15.9428 6 16.4142 5.70711 16.7071C5.41421 17 4.94281 17 4 17C3.05719 17 2.58579 17 2.29289 16.7071C2 16.4142 2 15.9428 2 15Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 15px' }" />
            <motion.path d="M18 15C18 14.0572 18 13.5858 18.2929 13.2929C18.5858 13 19.0572 13 20 13C20.9428 13 21.4142 13 21.7071 13.2929C22 13.5858 22 14.0572 22 15C22 15.9428 22 16.4142 21.7071 16.7071C21.4142 17 20.9428 17 20 17C19.0572 17 18.5858 17 18.2929 16.7071C18 16.4142 18 15.9428 18 15Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 15px' }" />
            <motion.path d="M12 7L12 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.5px' }" />
            <motion.path d="M12 19L12 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.5px' }" />
          </svg>
        </div>
</template>
