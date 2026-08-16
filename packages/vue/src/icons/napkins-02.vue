<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Napkins02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after arrow-down-02: the napkins follows the down direction already encoded by its geometry
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleX(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleX(1)', 'translateY(2.41px) scaleX(0.94)', 'translateY(-0.28px) scaleX(1.02)', 'translateY(0.42px) scaleX(0.99)', 'translateY(0px) scaleX(1)'],
    transition: {
      duration: 0.53,
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
            <motion.path d="M17.129 9.93457L15.5593 6.7402C14.0063 3.5797 13.2297 1.99945 12 1.99945C10.7703 1.99945 9.99374 3.5797 8.44067 6.7402L6.87095 9.93457C6.22703 11.245 5.90506 11.9002 6.02457 12.5651C6.14407 13.2301 6.67308 13.7269 7.7311 14.7207L9.30082 16.195C10.5816 17.398 11.222 17.9995 12 17.9995C12.778 17.9995 13.4184 17.398 14.6992 16.195L16.2689 14.7207C17.3269 13.7269 17.8559 13.2301 17.9754 12.5651C18.0949 11.9002 17.773 11.245 17.129 9.93457Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17.129 13.9346C17.773 15.245 18.0949 15.9002 17.9754 16.5651C17.8559 17.2301 17.3269 17.7269 16.2689 18.7207L14.6992 20.195C13.4184 21.398 12.778 21.9995 12 21.9995C11.222 21.9995 10.5816 21.398 9.30082 20.195L7.7311 18.7207C6.67308 17.7269 6.14407 17.2301 6.02457 16.5651C5.90506 15.9002 6.22703 15.245 6.87095 13.9346" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16.5 9.5L12 14L7.5 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
