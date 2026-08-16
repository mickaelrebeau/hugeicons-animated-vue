<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TimelineListIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after list-view: the rows answer in reading order from alternating edges
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
            <motion.path d="M4 9C4.55228 9 5 8.55228 5 8C5 7.44772 4.55228 7 4 7C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 8px' }" />
            <motion.path d="M4 17C4.55228 17 5 16.5523 5 16C5 15.4477 4.55228 15 4 15C3.44772 15 3 15.4477 3 16C3 16.5523 3.44772 17 4 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 16px' }" />
            <motion.path d="M4 21V3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 12px' }" />
            <motion.path d="M9.91421 9.41421L9.35355 8.85355C9.29393 8.79393 9.26412 8.76412 9.23778 8.73311C9.10232 8.5736 9.02031 8.37561 9.00331 8.16703C9 8.12647 9 8.08432 9 8C9 7.91568 9 7.87353 9.00331 7.83297C9.02031 7.62439 9.10232 7.4264 9.23778 7.26689C9.26412 7.23588 9.29393 7.20607 9.35355 7.14645L9.91421 6.58579C10.2032 6.29676 10.3478 6.15224 10.5315 6.07612C10.7153 6 10.9197 6 11.3284 6H17C17.9428 6 18.4142 6 18.7071 6.29289C19 6.58579 19 7.05719 19 8C19 8.94281 19 9.41421 18.7071 9.70711C18.4142 10 17.9428 10 17 10H11.3284C10.9197 10 10.7153 10 10.5315 9.92388C10.3478 9.84776 10.2032 9.70324 9.91421 9.41421Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 8px' }" />
            <motion.path d="M9.91421 17.4142L9.35355 16.8536C9.29393 16.7939 9.26412 16.7641 9.23778 16.7331C9.10232 16.5736 9.02031 16.3756 9.00331 16.167C9 16.1265 9 16.0843 9 16C9 15.9157 9 15.8735 9.00331 15.833C9.02031 15.6244 9.10232 15.4264 9.23778 15.2669C9.26412 15.2359 9.29393 15.2061 9.35355 15.1464L9.91421 14.5858C10.2032 14.2968 10.3478 14.1522 10.5315 14.0761C10.7153 14 10.9197 14 11.3284 14H19C19.9428 14 20.4142 14 20.7071 14.2929C21 14.5858 21 15.0572 21 16C21 16.9428 21 17.4142 20.7071 17.7071C20.4142 18 19.9428 18 19 18H11.3284C10.9197 18 10.7153 18 10.5315 17.9239C10.3478 17.8478 10.2032 17.7032 9.91421 17.4142Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 16px' }" />
          </svg>
        </div>
</template>
