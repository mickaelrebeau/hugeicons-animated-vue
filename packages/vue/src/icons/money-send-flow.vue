<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MoneySendFlowIcon' })

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
    transform: ['translateX(0px)', 'translateX(1.9px)', 'translateX(-0.26px)', 'translateX(0px)'],
    transition: {
      duration: 0.51,
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
            <motion.path d="M2.01709 7.00221C4.21666 7.00221 5.99977 5.2191 5.99977 3.01953" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 10px' }" />
            <motion.path d="M18 3.01953V3.11144C18 5.26025 19.742 7.00221 21.8908 7.00221" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 10px' }" />
            <motion.path d="M2.01738 13.019C4.21681 13.0192 6 14.8005 6 17C4.44655 16.9532 3.51998 16.7799 2.87868 16.1386C2.23761 15.4976 2.06425 14.5714 2.01738 13.019ZM2.01738 13.019C2.01728 13.019 2.01747 13.019 2.01738 13.019ZM2.01738 13.019C2 12.4436 2 11.7822 2 11.0173V9C2 6.17157 2 4.75736 2.87868 3.87868C3.75736 3 5.17157 3 8 3H16C18.8284 3 20.2426 3 21.1213 3.87868C22 4.75736 22 6.17157 22 9V11.0173C22 13.8458 22 15.26 21.1213 16.1386C20.48 16.7799 19.5534 16.9549 18 17.0017C18 14.8214 19.769 13.0503 21.9423 13.0194" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 10px' }" />
            <motion.path d="M12 17V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 10px' }" />
            <motion.path d="M15 17V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 10px' }" />
            <motion.path d="M9 17V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 10px' }" />
            <motion.path d="M15 10.0039C15 8.34705 13.6569 7.00391 12 7.00391C10.3431 7.00391 9 8.34705 9 10.0039C9 11.6608 10.3431 13.0039 12 13.0039C13.6569 13.0039 15 11.6608 15 10.0039Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 10px' }" />
          </svg>
        </div>
</template>
