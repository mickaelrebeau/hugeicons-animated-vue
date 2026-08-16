<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SkippingRopeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the skipping rope separate in depth and stack again
// generated from @hugeicons/core-free-icons
const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.46px, -1.25px)', 'translate(0.21px, -0.21px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.53,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.83px) rotate(-1.04deg)', 'translateY(0.47px) rotate(0.52deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M7.99414 5.51768C7.99414 7.44857 9.78763 9.01387 12 9.01387C14.2124 9.01387 16.0058 7.44857 16.0058 5.51768C16.0058 3.58678 14.2124 2.02148 12 2.02148C9.78763 2.02148 7.99414 3.58678 7.99414 5.51768Z" stroke="currentColor" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5.52px' }" />
            <motion.path d="M4.51026 12.0001C3.66411 12.0172 2.86428 12.2077 2.59603 12.4307C2.28753 12.8966 2.98897 13.9351 3.09659 14.3722L2.74329 17.2346L2.50384 19.7476C2.35862 22.4164 6.3772 23.0706 6.49172 19.7476L5.87926 14.4271C6.14559 13.6302 6.78891 12.5758 6.31849 12.3294C5.83405 12.0756 5.15856 11.9869 4.51026 12.0001ZM4.51026 12.0001C4.46247 10.8024 4.3938 8.29973 4.78373 7.50793" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.54px 15.29px' }" />
            <motion.path d="M19.4897 12C20.3359 12.0171 21.1357 12.2076 21.404 12.4306C21.7125 12.8966 21.011 13.935 20.9034 14.3721L21.2567 17.2345L21.4962 19.7476C21.6414 22.4163 17.6228 23.0705 17.5083 19.7476L18.1207 14.427C17.8544 13.6301 17.2111 12.5758 17.6815 12.3293C18.166 12.0755 18.8414 11.9869 19.4897 12ZM19.4897 12C19.5291 11.014 19.5879 9.27148 19.3855 8.13919C19.3088 7.70989 19.1796 7.29042 19.0346 6.87912C17.5293 2.60859 10.8114 -0.613747 6.01109 4.98876" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.86px 11.23px' }" />
          </svg>
        </div>
</template>
