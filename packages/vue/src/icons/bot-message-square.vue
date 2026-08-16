<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BotMessageSquareIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after message-01: the speech tail anchors the bubble as it answers
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.92)', 'scale(1.08)', 'scale(1)'],
    transition: {
      duration: 0.48,
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
            <motion.path d="M15 11.75V13.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.11px' }" />
            <motion.path d="M20 13.226V12.7144C20 9.90275 20 8.49693 19.1213 7.62346C18.2426 6.75 16.8284 6.75 14 6.75H10C7.17157 6.75 5.75736 6.75 4.87868 7.62346C4 8.49693 4 9.90275 4 12.7144V14.951C4 15.6439 4 15.9903 4.05764 16.2784C4.29436 17.4614 5.22466 18.3861 6.41473 18.6215C6.70453 18.6788 7.05302 18.6788 7.75 18.6788H7.82843C7.98779 18.6788 8.06748 18.6788 8.13435 18.6878C8.58001 18.7478 8.93051 19.0963 8.99093 19.5393C9 19.6058 9 19.685 9 19.8434C9 20.1851 9 20.3559 9.02036 20.4547C9.16244 21.1439 9.96003 21.4723 10.5508 21.0848C10.6354 21.0293 10.7569 20.9085 11 20.6669L11.9781 19.6946C12.4077 19.2676 12.6224 19.0541 12.8818 18.9155C12.9998 18.8526 13.1238 18.8015 13.252 18.7631C13.534 18.6788 13.8425 18.6788 14.4597 18.6788C16.8278 18.6788 18.0119 18.6788 18.8171 18.0695C19.0319 17.907 19.2236 17.7164 19.3871 17.5029C20 16.7025 20 15.5437 20 13.226Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.11px' }" />
            <motion.path d="M9 11.75V13.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.11px' }" />
            <motion.path d="M7 2.75H8C8.92997 2.75 9.39496 2.75 9.77646 2.85222C10.8117 3.12962 11.6204 3.93827 11.8978 4.97354C12 5.35504 12 5.82003 12 6.75" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.11px' }" />
            <motion.path d="M2 12.75H4" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.11px' }" />
            <motion.path d="M20 12.75H22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.11px' }" />
          </svg>
        </div>
</template>
