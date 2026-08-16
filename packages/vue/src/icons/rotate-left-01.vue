<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RotateLeft01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after refresh: the glyph winds back and completes the named turn
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-24.67deg)', 'rotate(360deg)'],
    transition: {
      duration: 0.88,
      times: [0, 0.2, 1],
      ease: ['easeIn', 'easeOut'],
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
            <motion.path d="M20.0071 14.5662L19.3587 14.1731C18.7986 13.8508 18.3579 13.3564 18.102 12.7634L15.68 7.15102C15.5927 6.94865 15.4729 6.77988 15.328 6.64097C14.6876 6.02689 13.5808 6.28697 13.0432 6.99226C12.0506 8.29448 13.3839 9.52751 13.1022 10.6133L5.35908 6.26089C3.55799 5.28913 2.0024 7.87074 3.79277 9.06333L8.37607 11.6124C7.4934 12.765 5.25512 18.3551 8.12341 20.0599C8.28646 20.1568 8.4672 20.2213 8.64852 20.2773C8.76516 20.3134 8.88186 20.3496 8.99761 20.3857C9.8979 20.6667 11.6003 21.02 12.7668 20.9182C13.9811 20.8123 14.7421 21.4597 15.68 21.9995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9.36184 4.96447C9.75873 5.36011 11.4854 5.24597 12.1223 5.16653M9.36184 4.96447C8.96494 4.56883 8.95358 2.63679 9.03328 2.0019M9.36184 4.96447C10.3829 3.19624 14.4425 0.375691 18.4708 3.19624C20.4175 4.55924 20.6922 5.4182 21 5.99362" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
