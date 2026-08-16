<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HopOffIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after notification-off-01: the slash cuts through and the rest of the glyph recoils
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translateY(0px)',
    opacity: 1,
  },
  animate: {
    transform: ['rotate(0deg) translateY(0px)', 'rotate(-8.47deg) translateY(0.42px)', 'rotate(0deg) translateY(1.27px)', 'rotate(0deg) translateY(0px)'],
    opacity: [1, 1, 0.55, 1],
    transition: {
      duration: 0.72,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

const markVariants: Variants = {
  normal: {
    transform: 'scale(1) rotate(0deg)',
  },
  animate: {
    transform: ['scale(1) rotate(0deg)', 'scale(0.86) rotate(-1.93deg)', 'scale(1.08) rotate(0.77deg)', 'scale(1) rotate(0deg)'],
    transition: {
      duration: 0.5,
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
            <motion.path d="M12.0001 15.0896C11.4415 15.8159 10.0556 17.2304 8.44241 17.8979C7.88984 18.1266 7.2629 17.9643 6.89842 17.4793C6.11297 16.4341 5.25788 14.5445 5.5637 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.63px 15.06px' }" />
            <motion.path d="M9.42025 4.42013C10.2305 4.14766 11.0981 4 12.0001 4C12.0001 4.90206 11.8525 5.76963 11.58 6.57987M6.32506 6.32494C5.3848 7.25082 4.67002 8.40505 4.2706 9.69773C3.97331 10.6599 3.82467 11.141 4.3419 11.6582C4.85914 12.1755 5.34022 12.0268 6.30239 11.7295C7.59508 11.3301 8.7493 10.6153 9.67518 9.67506" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.91px 8.09px' }" />
            <motion.path d="M17.6979 11.7295C18.66 12.0268 19.1411 12.1755 19.6583 11.6582C20.1756 11.141 20.0269 10.6599 19.7296 9.69773C18.71 6.39767 15.6351 4 12.0001 4C12.0001 7.63494 14.3978 10.7099 17.6979 11.7295Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.09px 8.09px' }" />
            <motion.path d="M12.0001 4V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3px' }" />
            <motion.path d="M12 15.0896C12.5586 15.8159 13.9446 17.2304 15.5577 17.8979C16.1103 18.1266 16.7372 17.9643 17.1017 17.4793C17.154 17.4096 17.2067 17.3362 17.2593 17.2592M18.4364 12C18.4995 12.5245 18.5132 13.0211 18.4883 13.4882" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.26px 15.06px' }" />
            <motion.path d="M9 10.5C9.4 12.5 11.1667 14.3333 12 15C12.375 14.7 12.939 14.1638 13.4824 13.4824" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.24px 12.75px' }" />
            <motion.path d="M15.5001 18C15.2254 18.7508 14.3847 20.343 12.9781 21.6142C12.4088 22.1286 11.5915 22.1286 11.0222 21.6142C9.61551 20.343 8.77483 18.7508 8.50012 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.06px' }" />
            <motion.path d="M2 2L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
