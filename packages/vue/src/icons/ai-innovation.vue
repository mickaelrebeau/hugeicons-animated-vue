<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiInnovationIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after sparkles: the intelligence points answer one another instead of pulsing as a single badge
// generated from @hugeicons/core-free-icons
const dotVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0px) scale(1)', 'translateY(-1.53px) scale(1.2)', 'translateY(0.36px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.42, ease: 'easeOut', delay: i * 0.08 },
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
            <motion.path d="M11 2C6.58172 2 3 5.54539 3 9.91886C3 11.4118 3.41735 12.8082 4.14286 14" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 8px' }" />
            <motion.path d="M17 5H15C14.0572 5 13.5858 5 13.2929 5.29289C13 5.58579 13 6.05719 13 7V9C13 9.94281 13 10.4142 13.2929 10.7071C13.5858 11 14.0572 11 15 11H17C17.9428 11 18.4142 11 18.7071 10.7071C19 10.4142 19 9.94281 19 9V7C19 6.05719 19 5.58579 18.7071 5.29289C18.4142 5 17.9428 5 17 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 8px' }" />
            <motion.path d="M14.5 11V13M17.5 11V13M14.5 3V5M17.5 3V5M13 6.5H11M13 9.5H11M21 6.5H19M21 9.5H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 8px' }" />
            <motion.path d="M6.38287 17.0982C6.291 16.8216 6.24507 16.6833 6.25042 16.5713C6.26174 16.3343 6.41114 16.1262 6.63157 16.0405C6.73579 16 6.88105 16 7.17157 16H14.8284C15.119 16 15.2642 16 15.3684 16.0405C15.5889 16.1262 15.7383 16.3343 15.7496 16.5713C15.7549 16.6833 15.709 16.8216 15.6171 17.0982C15.4473 17.6094 15.3624 17.8651 15.2315 18.072C14.9572 18.5056 14.5272 18.8167 14.0306 18.9408C13.7935 19 13.525 19 12.9881 19H9.01186C8.47495 19 8.2065 19 7.96944 18.9408C7.47283 18.8167 7.04281 18.5056 6.7685 18.072C6.63755 17.8651 6.55266 17.6094 6.38287 17.0982Z" stroke="currentColor" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 17.5px' }" />
            <motion.path d="M14 19L13.8707 19.6466C13.7293 20.3537 13.6586 20.7072 13.5001 20.9866C13.2552 21.4185 12.8582 21.7439 12.3866 21.8994C12.0816 22 11.7211 22 11 22C10.2789 22 9.91842 22 9.61338 21.8994C9.14175 21.7439 8.74484 21.4185 8.49987 20.9866C8.34144 20.7072 8.27073 20.3537 8.12932 19.6466L8 19" stroke="currentColor" stroke-width="1.5" :variants="dotVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 20.5px' }" />
          </svg>
        </div>
</template>
