<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Move02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cursor-pointer-01: the object travels along the direction encoded by its handles and returns
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(3.4px) rotate(4.24deg)', 'translateX(-0.42px) rotate(-1.06deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.64,
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
            <motion.path d="M4.8749 13.158L7.01079 14.9893V5.22695C7.01079 4.25922 7.79502 3.47473 8.76243 3.47473C9.72982 3.47473 10.514 4.25922 10.514 5.22695V10.4836L13.5047 10.9618C15.4351 11.2515 16.4004 11.3962 17.0802 11.8037C18.2033 12.4767 19.0169 13.4874 19.0169 14.9628C19.0169 15.9905 18.7629 16.68 18.1456 18.5325C17.754 19.7079 17.5581 20.2956 17.2388 20.7609C16.713 21.5268 15.9373 22.086 15.0446 22.3428C14.5024 22.4988 13.8832 22.4988 12.6445 22.4988H11.5946C9.9479 22.4988 9.12455 22.4988 8.39156 22.1965C8.26011 22.1423 8.13164 22.0811 8.0067 22.0133C7.30998 21.6348 6.79078 20.9956 5.75239 19.7172L2.39075 15.5783C1.87417 14.9423 1.87073 14.0322 2.38247 13.3923C2.99756 12.6232 4.12733 12.517 4.8749 13.158Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.44px 22.5px' }" />
            <motion.path d="M16.9191 2.3683L17.7245 1.61078C17.801 1.53875 17.899 1.50241 17.9971 1.50196M19.1063 2.3683L18.2685 1.60624C18.1915 1.53621 18.0942 1.5015 17.9971 1.50196M19.1063 8.61122L18.3009 9.36874C18.2162 9.44842 18.1054 9.48442 17.9971 9.4765M16.9191 8.61122L17.7569 9.37329C17.8256 9.43581 17.9106 9.47017 17.9971 9.4765M17.9971 1.50196V9.4765M21.1337 4.39544L21.8907 5.20132C21.9627 5.27796 21.999 5.37595 21.9995 5.47414M21.1337 6.5841L21.8953 5.74575C21.9653 5.66871 21.9999 5.57133 21.9995 5.47414M14.8951 6.58408L14.1381 5.77819C14.0584 5.69342 14.0225 5.58252 14.0304 5.47414M14.8951 4.39542L14.1335 5.23376C14.071 5.30254 14.0367 5.38754 14.0304 5.47414M21.9995 5.47414L14.0304 5.47414" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.44px 22.5px' }" />
          </svg>
        </div>
</template>
