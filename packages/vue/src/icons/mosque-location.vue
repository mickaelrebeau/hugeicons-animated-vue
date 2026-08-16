<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MosqueLocationIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the dome lifts gently while the minarets remain grounded
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(-2.03px)', 'translateY(0px)'],
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      times: [0, 0.35, 1],
    },
  },
}

const markVariants: Variants = {
  normal: {
    pathLength: 1,
    visibility: 'visible',
  },
  animate: {
    pathLength: [0, 1],
    visibility: ['hidden', 'visible'],
    transition: {
      duration: 0.42,
      ease: 'easeOut',
      delay: 0.2,
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
            <motion.path d="M11.0063 7.49912C10.55 6.89215 9.82344 6.49954 9.00514 6.49954C7.62376 6.49954 6.50393 7.61836 6.50393 8.99848C6.50393 10.2075 7.36323 11.2159 8.5049 11.4475M8.94989 17.9947C8.69895 17.9947 8.45232 17.9276 8.23424 17.8002C5.24722 15.8848 2.00175 13.1276 2.00175 9.13903C2.00175 5.22645 5.18975 2.00143 8.94989 2.00143C10.9174 2.00143 12.7281 2.88435 14.0076 4.28671" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 17.99px' }" />
            <motion.path d="M12.6195 15.5501C11.2592 13.8947 11.0271 12.2323 12.9734 10.2138C15.018 8.38932 16.1955 7.52647 16.5092 7.00723C16.8228 7.52647 18.0194 8.38932 20.0641 10.2138C21.9171 11.8673 21.8005 13.8947 20.4402 15.5501M12.6195 15.5501H12.0973M12.6195 15.5501H20.4402M20.4402 15.5501H20.9003M11.0271 15.5501H12.0973M12.0973 15.5501V21.0928C12.1372 21.7603 12.0973 22.0718 13.3077 21.9843H16.4903M20.9003 15.5501H21.9987M20.9003 15.5501V21.1943C21.017 22.1008 20.2953 21.9418 19.8338 21.9843H16.4903M16.4903 21.9843L16.5257 19.8505" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.03px 14.55px' }" />
          </svg>
        </div>
</template>
