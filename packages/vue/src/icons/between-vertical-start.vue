<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BetweenVerticalStartIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after dashboard-square-01: the outer pieces make room and the middle element seats between them
// generated from @hugeicons/core-free-icons
const tileVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['translateY(1.46px) scale(0.74)', 'translateY(-0.42px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.49, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.82px) rotate(-2.14deg)', 'translateY(0.43px) rotate(0.75deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M21 18.5L21 11.5C21 10.5694 21 10.104 20.8776 9.72746C20.6303 8.96636 20.0336 8.36965 19.2725 8.12236C18.896 8 18.4306 8 17.5 8C16.5694 8 16.104 8 15.7275 8.12236C14.9664 8.36965 14.3697 8.96636 14.1224 9.72746C14 10.104 14 10.5694 14 11.5L14 18.5C14 19.4306 14 19.896 14.1224 20.2725C14.3697 21.0336 14.9664 21.6303 15.7275 21.8776C16.104 22 16.5694 22 17.5 22C18.4306 22 18.896 22 19.2725 21.8776C20.0336 21.6303 20.6303 21.0336 20.8776 20.2725C21 19.896 21 19.4306 21 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 15px' }" />
            <motion.path d="M10 18.5L10 11.5C10 10.5694 10 10.104 9.87764 9.72746C9.63035 8.96636 9.03364 8.36965 8.27254 8.12236C7.89596 8 7.43064 8 6.5 8C5.56936 8 5.10404 8 4.72746 8.12236C3.96636 8.36965 3.36965 8.96636 3.12236 9.72746C3 10.104 3 10.5694 3 11.5L3 18.5C3 19.4306 3 19.896 3.12236 20.2725C3.36965 21.0336 3.96636 21.6303 4.72746 21.8776C5.10404 22 5.56936 22 6.5 22C7.43064 22 7.89596 22 8.27254 21.8776C9.03364 21.6303 9.63035 21.0336 9.87764 20.2725C10 19.896 10 19.4306 10 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 15px' }" />
            <motion.path d="M9 2.00002C9 2.00002 11.2095 4.99999 12 5C12.7906 5.00001 15 2 15 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
