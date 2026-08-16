<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CircleDashedIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after add-circle: the circular boundary absorbs the inner action and returns to round
// generated from @hugeicons/core-free-icons
const frameVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.96)', 'scale(1.025)', 'scale(1)'],
    transition: {
      duration: 0.48,
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
            <motion.path d="M11.9082 1.99805C11.0831 2.0062 10.2457 2.11736 9.41182 2.34079C8.57798 2.56421 7.79714 2.88668 7.07854 3.29214M1.99789 11.9082C2.01271 10.1907 2.47297 8.53244 3.29451 7.07923M6.92124 20.6143C5.48316 19.7666 4.25544 18.5606 3.38386 17.0807M12.0918 22.002C12.9169 21.9939 13.7544 21.8827 14.5882 21.6593C15.422 21.4359 16.2029 21.1134 16.9215 20.7079M22.0021 12.0919C21.9873 13.8094 21.527 15.4677 20.7055 16.9209M17.0788 3.38574C18.5169 4.23349 19.7446 5.43944 20.6162 6.91943" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
