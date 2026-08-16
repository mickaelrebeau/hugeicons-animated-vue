<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UnfoldMoreDownIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after more-horizontal: the dots lift in sequence from their own centers
// generated from @hugeicons/core-free-icons
const dotVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0px) scale(1)', 'translateY(-1.45px) scale(1.2)', 'translateY(0.34px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.4, ease: 'easeOut', delay: i * 0.08 },
  }),
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
            <motion.path d="M10.3483 10H13.6517C15.6822 10 16.6974 10 16.9501 9.39139C17.2028 8.78277 16.4849 8.06648 15.0491 6.63391L13.3974 4.9859L13.3974 4.9859C12.7387 4.32863 12.4093 4 12 4C11.5907 4 11.2613 4.32864 10.6026 4.9859L8.95091 6.63391L8.95091 6.63391C7.51513 8.06649 6.79724 8.78277 7.0499 9.39139C7.30256 10 8.31781 10 10.3483 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7px' }" />
            <motion.path d="M10.3483 14H13.6517C15.6822 14 16.6974 14 16.9501 14.6086C17.2028 15.2172 16.4849 15.9335 15.0491 17.3661L13.3974 19.0141C12.7387 19.6714 12.4093 20 12 20C11.5907 20 11.2613 19.6714 10.6026 19.0141L8.95091 17.3661C7.51513 15.9335 6.79724 15.2172 7.0499 14.6086C7.30256 14 8.31781 14 10.3483 14Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
          </svg>
        </div>
</template>
