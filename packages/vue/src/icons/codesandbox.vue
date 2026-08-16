<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CodesandboxIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the codesandbox take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-5.06deg)', 'scale(1.1) rotate(2.02deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.46, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.83px) rotate(-2.15deg)', 'translateY(0.43px) rotate(0.75deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
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
            <motion.path d="M10.8453 2.47782C11.4088 2.15927 11.6906 2 12 2C12.3094 2 12.5912 2.15927 13.1547 2.47782L19.8453 6.25983C20.4088 6.57838 20.6906 6.73766 20.8453 7C21 7.26234 21 7.58089 21 8.21799V15.782C21 16.4191 21 16.7377 20.8453 17C20.6906 17.2623 20.4088 17.4216 19.8453 17.7402L13.1547 21.5222C12.5912 21.8407 12.3094 22 12 22C11.6906 22 11.4088 21.8407 10.8453 21.5222L4.1547 17.7402C3.59117 17.4216 3.3094 17.2623 3.1547 17C3 16.7377 3 16.4191 3 15.782V8.21799C3 7.58089 3 7.26234 3.1547 7C3.3094 6.73766 3.59117 6.57838 4.1547 6.25983L10.8453 2.47782Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15.5 4.27051L13.134 5.55062C12.5803 5.85019 12.3035 5.99998 12 5.99998C11.6965 5.99998 11.4197 5.85019 10.866 5.55062L8.5 4.27051" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 11.6154V22M12 11.6154L20.5 7M12 11.6154L3.5 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
            <motion.path d="M3 12L5.89443 13.5585C6.43234 13.8482 6.7013 13.993 6.85065 14.2532C7 14.5135 7 14.8373 7 15.485V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M21 12L18.1056 13.5585C17.5677 13.8482 17.2987 13.993 17.1493 14.2532C17 14.5135 17 14.8373 17 15.485V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
