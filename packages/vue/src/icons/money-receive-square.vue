<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MoneyReceiveSquareIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after wallet-01: the value rises from the wallet and settles back into place
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(0px)', 'translateX(1.84px)', 'translateX(-0.26px)', 'translateX(0px)'],
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
            <motion.path d="M12.002 9.00708C10.8974 9.00708 10.002 9.67865 10.002 10.5071C10.002 11.3355 10.8974 12.0071 12.002 12.0071C13.1065 12.0071 14.002 12.6787 14.002 13.5071C14.002 14.3355 13.1065 15.0071 12.002 15.0071M12.002 9.00708C12.8728 9.00708 13.6136 9.42448 13.8881 10.0071M12.002 9.00708V8.00708M12.002 15.0071C11.1311 15.0071 10.3903 14.5897 10.1158 14.0071M12.002 15.0071V16.0071" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2.5px 12.01px' }" />
            <motion.path d="M13 2.50708C13 2.50708 12.6839 2.50708 12 2.50708C7.52166 2.50708 5.28249 2.50708 3.89124 3.89833C2.5 5.28957 2.5 7.52874 2.5 12.0071C2.5 16.4854 2.5 18.7246 3.89124 20.1159C5.28249 21.5071 7.52166 21.5071 12 21.5071C16.4783 21.5071 18.7175 21.5071 20.1088 20.1159C21.5 18.7246 21.5 16.4854 21.5 12.0071C21.5 11.3232 21.5 11.0071 21.5 11.0071" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2.5px 12.01px' }" />
            <motion.path d="M21.4883 2.49292L17.3125 6.67112M16.4883 3.01468L16.6065 6.10617C16.6065 6.83481 17.0416 7.2888 17.8341 7.34606L20.9581 7.49292" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2.5px 12.01px' }" />
          </svg>
        </div>
</template>
