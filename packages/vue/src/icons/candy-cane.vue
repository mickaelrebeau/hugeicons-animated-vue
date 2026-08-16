<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CandyCaneIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the silhouette of the candy cane loads onto its base and settles with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.49px) scaleY(0.82)', 'translateY(-3.62px) scaleY(1.08)', 'translateY(0.53px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
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
            <motion.path d="M5.20209 14.4862L6.63118 19.7143M8.13036 9.51447L9.55945 14.7425M11.2373 5.19627L12.4877 9.77084M14.8801 2.8386L15.7733 6.10615M13.9519 7.28499L6.14314 20.5429C5.60406 21.4581 4.41013 21.7717 3.47641 21.2433C2.5427 20.7149 2.22279 19.5445 2.76187 18.6293L10.5706 5.37138C12.1878 2.62558 15.7696 1.6848 18.5708 3.27008C21.3719 4.85537 22.3316 8.36641 20.7144 11.1122C20.1753 12.0275 18.9814 12.3411 18.0477 11.8126C17.114 11.2842 16.794 10.1139 17.3331 9.1986C17.8722 8.28333 17.5523 7.11299 16.6186 6.58456C15.6849 6.05613 14.4909 6.36972 13.9519 7.28499Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.28px 21.77px' }" />
          </svg>
        </div>
</template>
