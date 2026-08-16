<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SettingDone03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after circle-check: the confirmation stroke writes from tail to tip and lands once
// generated from @hugeicons/core-free-icons
const markVariants: Variants = {
  normal: {
    pathLength: 1,
    pathOffset: 0,
    visibility: 'visible',
  },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.85,
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
      ],
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
    },
  },
}

const frameVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg) scale(1)', 'translateY(0px) rotate(0deg) scale(1)', 'translateY(-0.33px) rotate(0.76deg) scale(1.08)', 'translateY(0px) rotate(0deg) scale(1)'],
    transition: {
      duration: 0.78,
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
      times: [0, 0.78, 0.9, 1],
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
            <motion.path d="M15 17.5C15 17.5 15.5 17.5 16 18.5C16 18.5 17.5882 16 19 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 17px' }" />
            <motion.path d="M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 17px' }" />
            <motion.path d="M14.384 9.43749C13.7591 8.85581 12.9211 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 12.9211 8.85581 13.7591 9.43749 14.384" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.44px 11.44px' }" />
            <motion.path d="M9.78 20.436C9.33442 19.9904 9.18844 19.8566 8.90573 19.7389C8.62149 19.6204 8.3257 19.6161 7.69171 19.6161C6.1838 19.6161 5.32083 19.6161 4.85239 19.1476C4.38394 18.6792 4.38394 17.8162 4.38394 16.3083C4.38394 15.6777 4.37981 15.3817 4.26299 15.0987C4.14573 14.8147 3.93965 14.6022 3.49166 14.1541C2.92759 13.59 2 12.8859 2 12C2 11.114 2.92756 10.4099 3.49166 9.84585C3.93756 9.39996 4.14378 9.18799 4.26137 8.90515C4.37951 8.62098 4.38394 8.32526 4.38394 7.69171C4.38394 6.1838 4.38394 5.32083 4.85239 4.85239C5.32083 4.38394 6.1838 4.38394 7.69171 4.38394C8.32091 4.38394 8.61661 4.38 8.89929 4.26379C9.18454 4.14652 9.39688 3.94064 9.84585 3.49166C10.4099 2.92756 11.2104 2 12 2C12.7896 2 13.59 2.92759 14.1541 3.49167C14.6029 3.94037 14.8155 4.14637 15.1001 4.26355C15.3827 4.37992 15.6787 4.38394 16.3083 4.38394C17.8162 4.38394 18.6792 4.38394 19.1476 4.85239C19.6161 5.32083 19.6161 6.1838 19.6161 7.69171C19.6161 8.32383 19.6202 8.6196 19.7378 8.9032C19.8555 9.18695 19.9891 9.3211 20.436 9.768" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.22px 11.22px' }" />
          </svg>
        </div>
</template>
