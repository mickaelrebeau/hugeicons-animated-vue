<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'VimeoIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the silhouette of the vimeo loads onto its base and settles with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.33px) scaleY(0.82)', 'translateY(-3.23px) scaleY(1.08)', 'translateY(0.48px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.65,
      times: [0, 0.18, 0.48, 0.78, 1],
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
            <motion.path d="M21.3459 4.65406C19.0372 2.82124 15.4614 5.64316 14.5961 7.12694C15.8974 7.43176 18.5 7.54313 16 12.0276C15 13.6885 12.7 15.8145 11.5 11.0311C10 5.05175 10 0.567257 2 7.54313C2.47556 8.4911 3.76645 8.5883 4.74116 8.17029C5.62781 7.79005 6.54267 7.94136 7 9.53652C8 13.0245 8.5 19.9866 12 19.9866C15.6345 20.4812 24.461 7.12711 21.3459 4.65406Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.23px 20.48px' }" />
          </svg>
        </div>
</template>
