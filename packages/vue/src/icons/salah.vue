<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SalahIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the silhouette of the salah loads onto its base and settles with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.47px) scaleY(0.82)', 'translateY(-3.57px) scaleY(1.08)', 'translateY(0.53px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.69,
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
            <motion.path d="M17.5 18C17.2128 17.2408 16.9563 16.1375 16 15.5C14.5 14.5 13 14 13 12.5C13 11 12.5 8 12.5 8L13.1955 7.26803C14.8935 8.02463 16.5 5.88071 16.5 4.5C16.5 3.11929 15.3807 2 14 2C12.6193 2 11.5 3.11929 11.5 4.5C11.5 5.5 10.7 6.1 9.5 6.5C8 7 6 8 6 13C6 17 7.83333 18.3333 8.5 19C5.3 19 4.5 21 4.5 22H17.5C18.6046 22 19.5 21.1046 19.5 20C19.5 18.8954 18.6046 18 17.5 18ZM17.5 18C9.7719 18 9.05992 13.3333 9.5 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
