<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Hexagon01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the silhouette of the hexagon loads onto its base and settles with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.5px) scaleY(0.82)', 'translateY(-3.64px) scaleY(1.08)', 'translateY(0.54px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.7,
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
            <motion.path d="M8.88231 3.32966C10.4038 2.44322 11.1646 2 12 2C12.8354 2 13.5962 2.44322 15.1177 3.32966L17.8823 4.94031C19.4038 5.82675 20.1646 6.26997 20.5823 7C21 7.73003 21 8.61647 21 10.3894V13.6106C21 15.3835 21 16.27 20.5823 17C20.1646 17.73 19.4038 18.1733 17.8823 19.0597L15.1177 20.6703C13.5962 21.5568 12.8354 22 12 22C11.1646 22 10.4038 21.5568 8.88231 20.6703L6.11769 19.0597C4.59615 18.1733 3.83538 17.73 3.41769 17C3 16.27 3 15.3835 3 13.6106V10.3894C3 8.61647 3 7.73003 3.41769 7C3.83538 6.26997 4.59615 5.82675 6.11769 4.94031L8.88231 3.32966Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
