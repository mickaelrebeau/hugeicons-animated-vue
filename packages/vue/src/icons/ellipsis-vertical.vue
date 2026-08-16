<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'EllipsisVerticalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the silhouette of the ellipsis vertical loads onto its base and settles with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.46px) scaleY(0.82)', 'translateY(-3.54px) scaleY(1.08)', 'translateY(0.52px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
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
            <motion.path d="M12 12.002V11.502M12 5.00195V4.50195M12 19.002V18.502M13 12.002C13 11.4497 12.5523 11.002 12 11.002C11.4477 11.002 11 11.4497 11 12.002C11 12.5542 11.4477 13.002 12 13.002C12.5523 13.002 13 12.5542 13 12.002ZM13 5.00195C13 4.44967 12.5523 4.00195 12 4.00195C11.4477 4.00195 11 4.44967 11 5.00195C11 5.55424 11.4477 6.00195 12 6.00195C12.5523 6.00195 13 5.55424 13 5.00195ZM13 19.002C13 18.4497 12.5523 18.002 12 18.002C11.4477 18.002 11 18.4497 11 19.002C11 19.5542 11.4477 20.002 12 20.002C12.5523 20.002 13 19.5542 13 19.002Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20px' }" />
          </svg>
        </div>
</template>
