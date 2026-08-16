<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WavingHand02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after thumbs-up: the wrist leads one readable hand gesture
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.5px) rotate(-3.74deg)', 'translateY(0.28px) rotate(0.94deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
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
            <motion.path d="M18.9154 11.6997L17.373 15.8314C16.6547 17.7556 16.2955 18.7177 15.709 19.377C14.812 20.3851 13.5203 20.9748 12.1549 20.9995C11.262 21.0156 10.2783 20.6665 8.31091 19.9683C7.27913 19.6022 6.76324 19.4191 6.32165 19.1455C5.64795 18.7281 5.09127 18.1534 4.70166 17.4731C4.44628 17.0272 4.28743 16.5137 3.96974 15.4867L2.56985 10.9613C2.35476 10.266 2.64855 9.51553 3.28412 9.13687C4.11475 8.64198 5.19966 8.96175 5.60953 9.82225L6.5443 11.7848L9.1763 4.73429C9.4501 4.00083 10.2819 3.62265 11.0342 3.88961C11.7865 4.15657 12.1743 4.96757 11.9005 5.70103M11.9005 5.70103L12.5616 3.93029C12.8354 3.19683 13.6672 2.81866 14.4194 3.08562C15.1717 3.35257 15.5596 4.16357 15.2858 4.89704L14.6248 6.66777M11.9005 5.70103L10.4132 9.68518M14.6248 6.66777C14.8986 5.93431 15.7304 5.55613 16.4826 5.82309C17.2349 6.09005 17.6228 6.90105 17.349 7.63451L16.688 9.40524M14.6248 6.66777L13.1374 10.6519M18.5859 12.5854L19.4122 10.372C19.686 9.63852 19.2981 8.82752 18.5458 8.56056C17.7936 8.2936 16.9618 8.67178 16.688 9.40524M16.688 9.40524L15.8617 11.6187" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.02px 21.02px' }" />
            <motion.path d="M21.3307 14C21.877 15.6354 21.0574 17.4263 19.5 18" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.02px 21.02px' }" />
          </svg>
        </div>
</template>
