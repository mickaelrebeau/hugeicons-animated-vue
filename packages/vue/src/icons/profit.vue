<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ProfitIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after list-view: the bars step up one after another to their new highs
// generated from @hugeicons/core-free-icons
const barVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(2.36px) scaleY(0.6)', 'translateY(-0.54px) scaleY(1.08)', 'translateY(0px) scaleY(1)'],
    transition: { duration: 0.52, ease: [0.23, 1, 0.32, 1], delay: i * 0.07 },
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
            <path d="M12 2C8.13401 2 5 5.134 5 9C5 12.866 8.13401 16 12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M15 18C13 18 12 19.5 12 19.5C12 19.5 13 21 15 21C17 21 18 19.5 18 19.5C18 19.5 17 18 15 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M9 18C7 18 6 19.5 6 19.5C6 19.5 7 21 9 21C11 21 12 19.5 12 19.5C12 19.5 11 18 9 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 22V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M10.4375 11.6667L10.4375 6.33333M12 6.33333V5M12 13V11.6667M10.4375 9H13.5625M13.5625 9C14.0803 9 14.5 9.44772 14.5 10V10.6667C14.5 11.219 14.0803 11.6667 13.5625 11.6667H9.5M13.5625 9C14.0803 9 14.5 8.55228 14.5 8V7.33333C14.5 6.78105 14.0803 6.33333 13.5625 6.33333H9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
          </svg>
        </div>
</template>
