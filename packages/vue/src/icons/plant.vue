<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PlantIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after flower: the petals open outward one by one from the core
// generated from @hugeicons/core-free-icons
const petalVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['rotate(0deg) scale(0.82)', 'rotate(4.28deg) scale(1.1)', 'rotate(0deg) scale(1)'],
    transition: { duration: 0.62, ease: [0.23, 1, 0.32, 1], delay: i * 0.08 },
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
            <motion.path d="M18 10C18 10 12 14 12 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="petalVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 21px' }" />
            <motion.path d="M9.34882 11.1825C7.73784 12.3891 5.44323 12.26 3.9785 10.7953C1.55484 8.37164 2.03957 3.03957 2.03957 3.03957C2.03957 3.03957 7.37164 2.55484 9.7953 4.9785C10.7548 5.93803 11.1412 7.25369 10.9543 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="petalVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '6.35px 12.39px' }" />
            <motion.path d="M14.9638 12.8175C13.644 11.3832 13.6797 9.14983 15.0708 7.75867C17.2252 5.6043 21.9648 6.03517 21.9648 6.03517C21.9648 6.03517 22.3957 10.7748 20.2413 12.9292C19.4877 13.6828 18.487 14.0386 17.5 13.9967" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="petalVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '18.02px 14.04px' }" />
            <path d="M6 7C6 7 12 12 12 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
