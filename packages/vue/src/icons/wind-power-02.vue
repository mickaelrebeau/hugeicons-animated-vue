<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WindPower02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after leaf-01: a gust leans the silhouette, then it springs back
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translateX(0px)',
  },
  animate: {
    transform: ['rotate(0deg) translateX(0px)', 'rotate(-12.1deg) translateX(1.61px)', 'rotate(5.04deg) translateX(-0.4px)', 'rotate(-2.02deg) translateX(0.2px)', 'rotate(0deg) translateX(0px)'],
    transition: {
      duration: 0.69,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.8px 16.28px' }" />
            <motion.path d="M4 2.84924C5.10457 1.71692 6.89543 1.71692 8 2.84924L11.5934 6.5329C10.5589 6.70212 9.73787 7.50632 9.54369 8.53222L4 2.84924Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.8px 16.28px' }" />
            <motion.path d="M20 15.1508C18.8954 16.2831 17.1046 16.2831 16 15.1508L12.4066 11.4671C13.4411 11.2979 14.2621 10.4937 14.4563 9.46778L20 15.1508Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.8px 16.28px' }" />
            <motion.path d="M20 2.84943C18.8954 1.71711 17.1046 1.7171 16 2.84943L12.4068 6.53293C13.4413 6.70221 14.2622 7.50646 14.4563 8.53238L20 2.84943Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.8px 16.28px' }" />
            <motion.path d="M4 15.1509C5.10457 16.2833 6.89543 16.2833 8 15.1509L11.5935 11.4671C10.559 11.298 9.73796 10.4938 9.54372 9.46793L4 15.1509Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.8px 16.28px' }" />
            <motion.path d="M13.4502 16L13.7702 18.5212C13.9962 20.125 14.1092 20.9269 13.8547 21.4634C13.6001 22 13.1067 22 12.1199 22H11.8801C10.8933 22 10.3999 22 10.1453 21.4634C9.89078 20.9269 10.0038 20.125 10.2298 18.5212L10.5498 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.8px 16.28px' }" />
          </svg>
        </div>
</template>
