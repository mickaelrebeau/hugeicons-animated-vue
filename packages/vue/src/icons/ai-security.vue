<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiSecurityIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the shield rocks aside to take the blow and the chip rides it out
// authored from scripts/authored
const chipVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.88)', 'scale(1.07)', 'scale(1)'],
    opacity: [1, 0.62, 1, 1],
    transition: { duration: 0.5, delay: 0.18, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const shieldVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-2.8deg)', 'rotate(2.2deg)', 'rotate(-0.6deg)', 'rotate(0deg)'],
    transition: { duration: 0.7, times: [0, 0.24, 0.5, 0.76, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

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
            <motion.path d="M10.461 6.50098V8.48M6.99998 10.0014H9.03668M14.9633 10.0014H17M14.9633 12.9746H17M6.99998 12.9746H9.03668M10.461 14.5202V16.4992M13.464 14.5202V16.4992M13.4533 6.50098V8.48M10.0292 14.4685H13.9707C14.5189 14.4685 14.9633 14.0208 14.9633 13.4685V9.48C14.9633 8.92771 14.5189 8.48 13.9707 8.48H10.0292C9.48106 8.48 9.03668 8.92771 9.03668 9.48V13.4685C9.03668 14.0208 9.48106 14.4685 10.0292 14.4685Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="chipVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.5px' }" />
            <motion.path d="M21 11.1833V8.28029C21 6.64029 21 5.82028 20.5959 5.28529C20.1918 4.75029 19.2781 4.49056 17.4507 3.9711C16.2021 3.6162 15.1016 3.18863 14.2223 2.79829C13.0234 2.2661 12.4239 2 12 2C11.576 2 10.9766 2.2661 9.7777 2.79829C8.89837 3.18863 7.79782 3.61619 6.54931 3.9711C4.72191 4.49056 3.80821 4.75029 3.4041 5.28529C2.99998 5.82028 2.99998 6.64029 2.99998 8.28029V11.1833C2.99998 16.8085 8.06276 20.1835 10.5939 21.5194C11.201 21.8398 11.5046 22 12 22C12.4954 22 12.7989 21.8398 13.406 21.5194C15.9372 20.1835 21 16.8085 21 11.1833Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="shieldVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
