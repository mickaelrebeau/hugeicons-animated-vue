<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Pizza03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the slice lifts by its crust and settles back onto the plate
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.4px) scaleY(0.82)', 'translateY(-3.41px) scaleY(1.08)', 'translateY(0.5px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.67,
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
            <motion.path d="M12 12.0009L4.63613 7.74935C3.91916 7.33541 2.99043 7.57796 2.68795 8.3486C2.24385 9.47999 2 10.712 2 12.0009C2 13.2898 2.24385 14.5218 2.68795 15.6532C2.99043 16.4238 3.91916 16.6664 4.63613 16.2524L12 12.0009ZM12 12.0009L19.3639 16.2524C20.0808 16.6664 21.0096 16.4238 21.3121 15.6532C21.7561 14.5218 22 13.2898 22 12.0009C22 10.712 21.7561 9.47999 21.3121 8.3486C21.0096 7.57796 20.0808 7.33541 19.3639 7.74935L12 12.0009Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22.01px' }" />
            <motion.path d="M12 12V3.49998C12 2.67156 11.3245 1.98816 10.5052 2.11095C7.95672 2.49293 5.72284 3.83656 4.18472 5.76067C3.6671 6.40818 3.92063 7.33537 4.63854 7.74985L12 12ZM12 12V20.5C12 21.3284 12.6755 22.0118 13.4948 21.889C16.0433 21.507 18.2771 20.1634 19.8153 18.2393C20.3329 17.5918 20.0793 16.6646 19.3614 16.2501L12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22.01px' }" />
            <motion.path d="M12 12V3.49998C12 2.67156 12.6755 1.98816 13.4948 2.11095C16.0433 2.49293 18.2771 3.83656 19.8153 5.76067C20.3329 6.40818 20.0793 7.33536 19.3614 7.74985L12 12ZM12 12V20.5C12 21.3284 11.3245 22.0118 10.5052 21.889C7.95672 21.507 5.72284 20.1634 4.18472 18.2393C3.6671 17.5918 3.92063 16.6646 4.63854 16.2501L12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22.01px' }" />
            <motion.path d="M15 5.00092V5.10092" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22.01px' }" />
            <motion.path d="M9.5 16.0009V16.1009" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22.01px' }" />
            <motion.path d="M6 12.0009V12.1009" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22.01px' }" />
            <motion.path d="M19 12.0009V12.1009" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22.01px' }" />
            <motion.path d="M14.5 8.00092L15.5 7.50092" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22.01px' }" />
            <motion.path d="M8 6.50183L9 6.00183" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22.01px' }" />
            <motion.path d="M8.5 19.0009L9.5 18.5009" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22.01px' }" />
            <motion.path d="M15 17.5009L16 18.0009" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22.01px' }" />
          </svg>
        </div>
</template>
