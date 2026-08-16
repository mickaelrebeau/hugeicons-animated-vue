<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'VineIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the silhouette of the vine loads onto its base and settles with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.41px) scaleY(0.82)', 'translateY(-3.43px) scaleY(1.08)', 'translateY(0.5px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.67,
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
            <motion.path d="M3.04261 4.41495C2.7122 8.99913 4.26712 17.1284 8.97309 21.0871C10.406 22.2925 11.9014 22.3165 13.3266 21.0857C15.6727 19.0596 17.3041 15.9398 18.2214 14.2938C18.2214 14.2938 19.3849 14.6873 20.3522 14.7846C20.931 14.8427 21.4613 11.7387 20.3517 11.7315C17.4157 11.7122 14.1381 11.4181 13.6775 8.14692C13.1726 4.56122 17.2116 5.07346 16.7068 8.19571C17.7165 9.17141 19.7361 9.17141 19.7361 9.17141C20.7458 6.09795 18.7263 2 15.697 2C11.6579 2 10.1433 4.95167 10.1433 7.12244C10.1433 12.7571 14.6872 13.7816 14.6872 13.7816C13.9496 15.6526 12.6725 16.9898 11.8409 17.7649C11.2705 18.2965 11.0258 18.3051 10.5066 17.7152C7.16109 13.9145 6.21504 7.99135 6.55256 4.51754C6.62801 3.74099 3.10939 3.48846 3.04261 4.41495Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.09px 22.32px' }" />
          </svg>
        </div>
</template>
