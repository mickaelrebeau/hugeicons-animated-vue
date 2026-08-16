<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PaypalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the paypal move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.73px) rotate(-2.04deg)', 'translateY(0.41px) rotate(0.71deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.56,
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
            <motion.path d="M6.29358 4.83499L4.16511 17.6712C3.98586 18.7522 3.89623 19.2927 4.19427 19.6464C4.49231 20 5.03749 20 6.12785 20H6.53027C7.35308 20 7.76448 20 8.04501 19.7555C8.32554 19.5109 8.38372 19.1016 8.50008 18.2828L8.96761 14.9934C9.00457 14.7333 9.02305 14.6033 9.05213 14.492C9.26041 13.6948 9.93391 13.1077 10.7485 13.0132C10.8622 13 10.9929 13 11.2543 13H12.4163C15.5113 13 18.1943 10.8473 18.8803 7.81384C19.5536 4.83576 17.3016 2 14.2631 2H9.62312C8.5093 2 7.95239 2 7.51383 2.2348C7.26304 2.36907 7.04377 2.55577 6.87077 2.78235C6.56824 3.17856 6.47669 3.7307 6.29358 4.83499Z" stroke="currentColor" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.72px 20px' }" />
            <motion.path d="M8.24315 19.4998L8.01451 20.8325C7.90978 21.4429 8.38532 21.9998 9.01128 21.9998H11.0018C11.4961 21.9998 11.9179 21.6464 11.9991 21.1642L12.7285 16.8354C12.8098 16.3533 13.2316 15.9998 13.7258 15.9998H15.5289C18.11 15.9998 20.3448 14.2267 20.9047 11.7345C21.2967 9.99004 20.4437 8.30993 19 7.50098" stroke="currentColor" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.72px 20px' }" />
          </svg>
        </div>
</template>
