<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlignBottomIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after list-view: the rows slide toward the named alignment edge
// generated from @hugeicons/core-free-icons
const rowVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: (i: number) => ({
    transform: ['scaleX(1)', 'scaleX(0.68)', 'scaleX(1.04)', 'scaleX(0.98)', 'scaleX(1)'],
    transition: { duration: 0.43, ease: [0.77, 0, 0.175, 1], times: [0, 0.28, 0.56, 0.76, 1], delay: i * 0.06 },
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
            <motion.path d="M16.502 10.0023C17.3458 10.0023 18.3198 9.91895 18.801 10.7523C19.002 11.1004 19.002 11.5677 19.002 12.5023V13.5023C19.002 14.4369 19.002 14.9042 18.801 15.2523C18.3198 16.0857 17.3458 16.0023 16.502 16.0023C15.6581 16.0023 14.6841 16.0857 14.2029 15.2523C14.002 14.9042 14.002 14.4369 14.002 13.5023L14.002 12.5023C14.002 11.5677 14.002 11.1004 14.2029 10.7523C14.6841 9.91895 15.6581 10.0023 16.502 10.0023Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 13px' }" />
            <motion.path d="M7.50195 4.00232C8.34585 4.00232 9.31984 3.91895 9.80099 4.75232C10.002 5.10039 10.002 5.5677 10.002 6.50232L10.002 13.5023C10.002 14.4369 10.002 14.9042 9.80099 15.2523C9.31984 16.0857 8.34585 16.0023 7.50195 16.0023C6.65806 16.0023 5.68406 16.0857 5.20292 15.2523C5.00195 14.9042 5.00195 14.4369 5.00195 13.5023L5.00195 6.50232C5.00195 5.5677 5.00195 5.10039 5.20292 4.75232C5.68406 3.91895 6.65806 4.00232 7.50195 4.00232Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 10px' }" />
            <motion.path d="M22 20L2 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 20px' }" />
          </svg>
        </div>
</template>
