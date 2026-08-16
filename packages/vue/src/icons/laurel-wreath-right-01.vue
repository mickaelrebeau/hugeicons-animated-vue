<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LaurelWreathRight01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after leaf-01: both branches open outward from the medal and settle symmetrically
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-8.6deg)', 'rotate(3.22deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.58,
      ease: [0.23, 1, 0.32, 1],
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
            <motion.path d="M16.7555 6.61105C16.9688 8.25332 15.6516 9.77729 15.6516 9.77729C15.6516 9.77729 13.9886 8.6386 13.7753 6.99633C13.5621 5.35405 14.8793 3.83008 14.8793 3.83008C14.8793 3.83008 16.5423 4.96877 16.7555 6.61105Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.95px 14.22px' }" />
            <motion.path d="M18.3173 12.1301C17.6213 13.6334 15.693 14.2234 15.693 14.2234C15.693 14.2234 14.8932 12.3759 15.5893 10.8726C16.2853 9.36923 18.2136 8.7793 18.2136 8.7793C18.2136 8.7793 19.0134 10.6267 18.3173 12.1301Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.95px 14.22px' }" />
            <motion.path d="M17.4973 17.4151C16.1692 18.4083 14.1914 18.0136 14.1914 18.0136C14.1914 18.0136 14.3669 16.0089 15.6951 15.0157C17.0232 14.0226 19.0009 14.4172 19.0009 14.4172C19.0009 14.4172 18.8254 16.422 17.4973 17.4151Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.95px 14.22px' }" />
            <motion.path d="M13.8878 21.7134C12.3828 22.4115 10.5293 21.6181 10.5293 21.6181C10.5293 21.6181 11.1158 19.6926 12.6208 18.9944C14.1258 18.2962 15.9793 19.0897 15.9793 19.0897C15.9793 19.0897 15.3927 21.0152 13.8878 21.7134Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.95px 14.22px' }" />
            <motion.path d="M12.22 2.96764C13.4305 4.10058 13.3838 6.11247 13.3838 6.11247C13.3838 6.11247 11.3746 6.28752 10.1641 5.15458C8.95358 4.02165 9.00024 2.00975 9.00024 2.00975C9.00024 2.00975 11.0095 1.83471 12.22 2.96764Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.95px 14.22px' }" />
          </svg>
        </div>
</template>
