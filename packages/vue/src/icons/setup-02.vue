<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Setup02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the setup separate in depth and stack again
// generated from @hugeicons/core-free-icons
const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.4px, -1.2px)', 'translate(0.2px, -0.2px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.51,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.8px) rotate(-1deg)', 'translateY(0.45px) rotate(0.5deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
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
            <motion.path d="M17.0298 13.3482C17.5713 13.0991 17.842 12.9746 17.921 12.8513C18 12.728 18 12.5316 18 12.1387V11.8613C18 11.4685 18 11.272 17.921 11.1487C17.842 11.0254 17.5712 10.9009 17.0298 10.6519C16.2269 10.2827 15.7113 9.4748 15.7389 8.62937C15.76 7.98338 15.7706 7.66038 15.7005 7.53758C15.6304 7.41478 15.4608 7.32183 15.1215 7.13594L14.7988 6.95919C14.4699 6.77898 14.3054 6.68887 14.1649 6.69551C14.0244 6.70215 13.7855 6.86408 13.3077 7.18794C12.5306 7.71461 11.4704 7.71459 10.6933 7.18789C10.2154 6.86403 9.97652 6.70209 9.83603 6.69545C9.69554 6.68881 9.53106 6.77892 9.20212 6.95913L8.87949 7.13588C8.54023 7.32174 8.3706 7.41467 8.30054 7.53744C8.23048 7.66021 8.24097 7.98325 8.26193 8.62934C8.28937 9.47481 7.77333 10.2827 6.97024 10.6519C6.4288 10.9008 6.15807 11.0253 6.07904 11.1486C6 11.2719 6 11.4684 6 11.8613V12.1387C6 12.5316 6 12.7281 6.07902 12.8514C6.15804 12.9747 6.42877 13.0992 6.97023 13.3482C7.77308 13.7174 8.28871 14.5253 8.26109 15.3707C8.23999 16.0167 8.22944 16.3397 8.2995 16.4625C8.36956 16.5853 8.53922 16.6782 8.87854 16.8641L9.20117 17.0409C9.53017 17.2211 9.69466 17.3112 9.83518 17.3046C9.9757 17.2979 10.2145 17.136 10.6922 16.812C11.4699 16.2847 12.5311 16.2847 13.3087 16.812C13.7864 17.1359 14.0253 17.2979 14.1658 17.3045C14.3063 17.3112 14.4708 17.2211 14.7998 17.0408L15.1224 16.8641C15.4618 16.6781 15.6315 16.5852 15.7015 16.4623C15.7716 16.3395 15.761 16.0166 15.7397 15.3707C15.7119 14.5253 16.2272 13.7174 17.0298 13.3482Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.circle cx="12" cy="12" r="1.75" stroke="currentColor" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19 2V4.85857C17.1962 3.09032 14.7255 2 12 2C6.47715 2 2 6.47715 2 12C2 13.4222 2.29689 14.7751 2.83209 16M5 22V19.1414C6.80375 20.9097 9.27455 22 12 22C17.5228 22 22 17.5228 22 12C22 10.5778 21.7031 9.22492 21.1679 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
