<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'IceCreamIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after arrow-left-02: the ice cream follows the left direction already encoded by its geometry
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleY(1)', 'translateX(-2.46px) scaleY(0.94)', 'translateX(0.28px) scaleY(1.02)', 'translateX(-0.43px) scaleY(0.99)', 'translateX(0px) scaleY(1)'],
    transition: {
      duration: 0.47,
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
            <motion.path d="M12 12.1534C14.4268 12.1534 16.7094 11.8086 18.6994 11.202C19.3273 11.0106 19.6412 10.9149 19.8479 11.0982C20.0546 11.2815 20.0152 11.5735 19.9363 12.1577C19.4239 15.9501 16.0416 19 12 19C7.95837 19 4.57608 15.9501 4.06374 12.1577C3.98483 11.5735 3.94537 11.2815 4.15209 11.0982C4.3588 10.9149 4.67272 11.0106 5.30056 11.202C7.29063 11.8086 9.57324 12.1534 12 12.1534Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z" stroke="currentColor" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 19V22H9H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7.08771 5C6.61656 6.46159 8.10425 7.61154 10.0967 7.22833C11.8214 6.89661 11.4094 7.44878 13.5462 7.89178C16.0476 8.41038 17 6.94879 17 5.97439" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M4.99561 9.02924C5.29529 7.27396 6.75091 3.89183 10.4969 2.9928" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19.0229 9.00095C18.6978 7.501 17.2515 3.87646 13.54 3.01184" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
