<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GlobeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the desk globe spins on its stand
// authored from scripts/authored
const meridianVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.1)', 'scaleX(-1)', 'scaleX(-1)', 'scaleX(1)'],
    transition: {
      duration: 1,
      times: [0, 0.3, 0.55, 0.6, 1],
      ease: ['easeIn', 'easeOut', 'linear', 'easeInOut'],
    },
  },
};

const armVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.47px, 0.22px) rotate(-10deg)',
      'translate(0.89px, -0.01px) rotate(6deg)',
      'translate(-0.30px, 0.02px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

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
            <path d="M12.5 19L12.5 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M10.5 22H14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <circle cx="7" cy="7" r="7" transform="matrix(-1 0 0 1 20.5 2)" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M8.5 4C9.15431 4.0385 9.49236 4.35899 10.0735 4.97301C11.1231 6.08206 12.1727 6.1746 12.8724 5.80492C13.922 5.2504 13.04 4.35221 14.2719 3.86409C15.0748 3.54595 15.1868 2.68026 14.7399 2" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="meridianVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.8px 4.1px' }" />
            <motion.path d="M20 10C18.5 10 18.2338 11.2468 17 11C14.5 10.5 13.7916 11.0589 13.7916 12.2511C13.7916 13.4432 13.7916 13.4432 13.2717 14.3373C12.9335 14.9189 12.8153 15.5004 13.4894 16" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="meridianVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.4px 13px' }" />
            <motion.path d="M6.5 2C4.64864 3.79995 3.5 6.3082 3.5 9.08251C3.5 14.5598 7.97715 19 13.5 19C16.2255 19 18.6962 17.9187 20.5 16.165" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="armVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.5px' }" />
          </svg>
        </div>
</template>
