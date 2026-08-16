<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Structure02Icon' })

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
      duration: 0.47,
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
            <motion.path d="M2 13C2 12.0572 2 11.5858 2.29289 11.2929C2.58579 11 3.05719 11 4 11C4.94281 11 5.41421 11 5.70711 11.2929C6 11.5858 6 12.0572 6 13C6 13.9428 6 14.4142 5.70711 14.7071C5.41421 15 4.94281 15 4 15C3.05719 15 2.58579 15 2.29289 14.7071C2 14.4142 2 13.9428 2 13Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 13px' }" />
            <motion.path d="M18 13C18 12.0572 18 11.5858 18.2929 11.2929C18.5858 11 19.0572 11 20 11C20.9428 11 21.4142 11 21.7071 11.2929C22 11.5858 22 12.0572 22 13C22 13.9428 22 14.4142 21.7071 14.7071C21.4142 15 20.9428 15 20 15C19.0572 15 18.5858 15 18.2929 14.7071C18 14.4142 18 13.9428 18 13Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 13px' }" />
            <motion.path d="M12 6.99989V13.9999M12 18.9999V21.9999M4 11V9C4 5.69067 4.69067 5 8 5M20 11V9C20 5.69067 19.3093 5 16 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.5px' }" />
            <motion.path d="M14.5 16.5C14.5 17.8807 13.3807 19 12 19C10.6193 19 9.5 17.8807 9.5 16.5C9.5 15.1193 10.6193 14 12 14C13.3807 14 14.5 15.1193 14.5 16.5Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.5px' }" />
            <motion.path d="M10 2H14C15.8152 2 16 2.92494 16 4.5C16 6.07506 15.8152 7 14 7H10C8.1848 7 8 6.07506 8 4.5C8 2.92494 8.1848 2 10 2Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.5px' }" />
          </svg>
        </div>
</template>
