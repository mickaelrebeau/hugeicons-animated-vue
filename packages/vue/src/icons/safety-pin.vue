<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SafetyPinIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pin rocks on its coil
// authored from scripts/authored
const tiltVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(8deg)', 'rotate(-4.8deg)', 'rotate(2deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.7,
      times: [0, 0.22, 0.5, 0.76, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.77, 0, 0.175, 1],
        [0.77, 0, 0.175, 1],
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
            <motion.g :variants="tiltVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 19.5px', transformBox: 'view-box' }">
              <path d="M13.5459 3.79364L12.2929 5.4104C11.2216 6.79272 13.3531 8.46736 14.4395 7.07557L14.8139 6.59591C15.5066 5.70846 16.8119 5.61801 17.5969 6.40307C18.382 7.18812 18.2915 8.49338 17.4041 9.18609L16.9244 9.56049C15.5326 10.6469 17.2073 12.7784 18.5896 11.7071L20.2064 10.4541C22.4319 8.7293 22.6147 5.42276 20.596 3.40405C18.5772 1.38533 15.2707 1.56805 13.5459 3.79364Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <circle cx="4.5" cy="19.5" r="2.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M3 17.4103L12 7M6.58974 21L17 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            </motion.g>
          </svg>
        </div>
</template>
