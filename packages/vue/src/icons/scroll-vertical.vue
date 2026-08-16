<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ScrollVerticalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after list-view: the content rows travel through the viewport and ease to a stop
// generated from @hugeicons/core-free-icons
const rowVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: (i: number) => ({
    transform: ['scaleX(1)', 'scaleX(0.68)', 'scaleX(1.04)', 'scaleX(0.98)', 'scaleX(1)'],
    transition: { duration: 0.45, ease: [0.77, 0, 0.175, 1], times: [0, 0.28, 0.56, 0.76, 1], delay: i * 0.06 },
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
            <motion.path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="currentColor" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 12px' }" />
            <motion.path d="M11.9328 2.00023C13.3137 1.95947 16.5608 7.34458 15.9163 7.8518C15.1855 8.42696 13.0137 7.05181 12.3221 6.74208C11.9062 6.55582 11.7259 6.56093 11.3104 6.77271C9.42898 7.73186 8.49159 8.20766 8.08638 7.91196C7.44046 7.44063 10.5851 2.04001 11.9328 2.00023Z" stroke="currentColor" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '7.44px 5.19px' }" />
            <motion.path d="M12.0672 21.9998C10.6863 22.0403 7.43916 16.6805 8.08367 16.1756C8.81453 15.6032 10.9863 16.9719 11.6779 17.2801C12.0938 17.4655 12.2741 17.4604 12.6896 17.2497C13.2694 16.9554 15.1991 15.6005 15.9136 16.1157C16.5595 16.5849 13.4149 21.9602 12.0672 21.9998Z" stroke="currentColor" stroke-width="1.5" :variants="rowVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '7.44px 18.82px' }" />
          </svg>
        </div>
</template>
