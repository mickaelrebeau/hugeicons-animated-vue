<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'NavigationTwoIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after location-01: the navigation mark hops toward its indicated destination
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: {
    transform: ['translateY(0px) scale(1)', 'translateY(-2.36px) scale(0.96)', 'translateY(0.43px) scale(1.04)', 'translateY(0px) scale(1)'],
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
            <motion.path d="M9.15858 7.1499L5.88425 14.6171C4.33136 18.1585 3.55491 19.9292 4.2651 20.64C4.35565 20.7306 4.45769 20.8098 4.5688 20.8756C5.44023 21.3918 7.05803 20.2738 10.2936 18.0379C11.0739 17.4987 11.464 17.2291 11.9067 17.2031C11.9689 17.1995 12.0313 17.1995 12.0935 17.2031C12.5362 17.2291 12.9263 17.4987 13.7066 18.0379C16.9421 20.2738 18.5598 21.3917 19.4312 20.8755C19.5424 20.8097 19.6444 20.7305 19.735 20.6399C20.4451 19.9291 19.6687 18.1584 18.1158 14.6172L14.8415 7.14995C13.6283 4.38332 13.0217 3.00001 12 3C10.9783 2.99999 10.3717 4.38329 9.15858 7.1499Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21.39px' }" />
          </svg>
        </div>
</template>
