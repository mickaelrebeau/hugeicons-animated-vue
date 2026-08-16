<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CallEnd02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after call-02: the handset rings from its cradle with a decaying swing
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-9.74deg)', 'rotate(7.79deg)', 'rotate(-4.87deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.68,
      ease: 'easeInOut',
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M17.0539 6.02918V8.79278C17.0539 9.35653 17.4143 9.87054 17.9747 10.1385C18.413 10.3481 18.9322 10.6067 19.3546 10.847C19.7452 11.0692 20.293 11.0557 20.6214 10.765L21.5133 9.97573C22.17 9.3945 22.1749 8.44418 21.4501 7.93021C15.9402 4.02326 8.05983 4.02326 2.54993 7.93021C1.82509 8.44418 1.82997 9.3945 2.48673 9.97573L3.3786 10.765C3.70697 11.0557 4.24369 11.0574 4.62554 10.8235C5.0468 10.5655 5.53006 10.3258 5.94613 10.1356C6.54384 9.86234 6.94607 9.3266 6.94607 8.73122V6.02918" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.02px' }" />
            <motion.path d="M8.5 15.5C9.18814 16.208 11.0197 19 12 19C12.9803 19 14.8119 16.208 15.5 15.5M12 18.5V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.02px' }" />
          </svg>
        </div>
</template>
