<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SpadesIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the silhouette of the spades loads onto its base and settles with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.43px) scaleY(0.82)', 'translateY(-3.48px) scaleY(1.08)', 'translateY(0.51px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.68,
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
            <motion.path d="M15.3747 21.3991C15.5506 21.1194 15.3236 20.6714 14.8696 19.7753C14.6285 19.2994 13.2915 16.8919 13.7551 16.4097C13.8763 16.2836 14.304 16.3909 15.1593 16.6054C16.4152 16.9205 18.0294 16.8096 19.4282 15.7714C24.7293 11.8367 15.1828 2 12 2C8.81719 2 -0.729335 11.8367 4.57182 15.7714C5.97058 16.8096 7.58483 16.9205 8.84066 16.6054C9.696 16.3909 10.1237 16.2836 10.2449 16.4097C10.7085 16.8919 9.37152 19.2994 9.13041 19.7753C8.67639 20.6714 8.44938 21.1194 8.6253 21.3991C9.04019 22.0588 14.789 22.3304 15.3747 21.3991Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22.33px' }" />
          </svg>
        </div>
</template>
