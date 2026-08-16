<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AirplayIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the screen pulses as the stream connects and the cast mark snaps up from its base
// authored from scripts/authored
const screenVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(1.03)', 'scale(1)'],
    opacity: [1, 0.55, 1],
    transition: { duration: 0.62, times: [0, 0.38, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const castMarkVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.5)', 'scale(1.12)', 'scale(1)'],
    transition: { duration: 0.56, delay: 0.16, times: [0, 0.32, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M5.5 17C3.52684 16.7534 2 15.0665 2 13.0222V10.0155C2 7.20036 2 5.79279 2.67412 4.78166C2.96596 4.34393 3.34096 3.9681 3.77772 3.67561C4.78661 3 6.19108 3 9 3H15C17.8089 3 19.2134 3 20.2223 3.67561C20.659 3.9681 21.034 4.34393 21.3259 4.78166C22 5.79279 22 7.20036 22 10.0155V13.0222C22 15.0665 20.4732 16.7534 18.5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="screenVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M14.9026 17.6435L13.4706 16.0921C12.7828 15.347 12.4388 14.9744 12.001 14.9744C11.5632 14.9744 11.2192 15.347 10.5314 16.0921L9.09936 17.6435C7.77092 19.0826 7.10671 19.8022 7.36893 20.4011C7.63116 21 8.61043 21 10.569 21H13.433C15.3916 21 16.3708 21 16.6331 20.4011C16.8953 19.8022 16.2311 19.0826 14.9026 17.6435Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="castMarkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
          </svg>
        </div>
</template>
