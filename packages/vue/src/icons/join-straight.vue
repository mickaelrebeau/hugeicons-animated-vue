<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'JoinStraightIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the silhouette of the join straight loads onto its base and settles with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.37px) scaleY(0.82)', 'translateY(-3.33px) scaleY(1.08)', 'translateY(0.49px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.66,
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
            <motion.path d="M8.00018 22.0002H18.0002C19.8858 22.0002 20.8286 22.0002 21.4144 21.4145C22.0002 20.8287 22.0002 19.8859 22.0002 18.0002V17.0002C22.0002 15.1146 22.0002 14.1718 21.4144 13.586C20.8286 13.0002 19.8858 13.0002 18.0002 13.0002L15.0002 13.0002C13.1146 13.0002 12.1718 13.0002 11.586 12.4145C11.0002 11.8287 11.0002 10.8859 11.0002 9.00024V6.00024C11.0002 4.11463 11.0002 3.17182 10.4144 2.58603C9.82861 2.00024 8.8858 2.00024 7.00018 2.00024L6.00018 2.00024C4.11456 2.00024 3.17176 2.00024 2.58597 2.58603C2.00018 3.17182 2.00018 4.11463 2.00018 6.00024L2.00018 16.0002C2.00018 18.8287 2.00018 20.2429 2.87886 21.1216C3.75754 22.0002 5.17176 22.0002 8.00018 22.0002Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
