<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ElearningExchangeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the elearning exchange move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.85px) rotate(-2.17deg)', 'translateY(0.43px) rotate(0.76deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
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
            <motion.path d="M2.45898 9C3.7364 4.94289 7.53608 2 12.0248 2C17.223 2 21.4971 5.94668 22 11L20 10.5929" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.23px 11px' }" />
            <motion.path d="M21.541 15C20.2636 19.0571 16.4639 22 11.9752 22C6.77707 22 2.50297 18.0533 2 13L4.00005 13.4071" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.23px 11px' }" />
            <motion.path d="M9.00198 13.5279V15.5197C9.00198 15.8464 9.15779 16.1573 9.43401 16.3301C10.2776 16.8578 10.9193 17.0125 12.0054 17.046C13.0061 17.0729 13.6336 16.9156 14.5679 16.3316C14.8481 16.1564 15.0089 15.8427 15.0089 15.5113V13.5279M17.0112 11.0149V14.0304M7.04924 10.8436C7.41086 10.0796 9.65363 8.74957 11.7009 8.09253C11.8984 8.02914 12.1106 8.03542 12.3053 8.10674C14.1154 8.76943 16.1288 9.77168 16.8597 10.5853C17.2414 11.01 16.8682 11.552 16.4068 11.8874C15.4704 12.5682 14.4364 13.0978 12.3491 13.8996C12.1282 13.9844 11.8828 13.9873 11.6608 13.9049C9.52012 13.1101 7.51902 12.0842 7.06587 11.1817C7.01245 11.0752 6.9983 10.9512 7.04924 10.8436Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.23px 11px' }" />
          </svg>
        </div>
</template>
