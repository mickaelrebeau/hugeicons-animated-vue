<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlignVerticalDistributeStartIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after list-view: the rows slide toward the named alignment edge
// generated from @hugeicons/core-free-icons
const rowVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: (i: number) => ({
    transform: ['scaleX(1)', 'scaleX(0.68)', 'scaleX(1.04)', 'scaleX(0.98)', 'scaleX(1)'],
    transition: { duration: 0.44, ease: [0.77, 0, 0.175, 1], times: [0, 0.28, 0.56, 0.76, 1], delay: i * 0.06 },
  }),
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
            <motion.path d="M22 14H1.99997" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '22px 14px' }" />
            <motion.path d="M22 5H1.99997" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 5px' }" />
            <motion.path d="M7.50003 19L16.4971 19C16.9617 19 17.194 19 17.3872 18.9616C18.1806 18.8038 18.8008 18.1836 18.9586 17.3902C18.9971 17.197 18.9971 16.9647 18.9971 16.5C18.9971 16.0353 18.9971 15.803 18.9586 15.6098C18.8008 14.8164 18.1806 14.1962 17.3872 14.0384C17.194 14 16.9617 14 16.4971 14L7.50003 14C7.03538 14 6.80305 14 6.60985 14.0384C5.81647 14.1962 5.19627 14.8164 5.03846 15.6098C5.00003 15.803 5.00003 16.0353 5.00003 16.5C5.00003 16.9647 5.00003 17.197 5.03846 17.3902C5.19627 18.1836 5.81647 18.8038 6.60985 18.9616C6.80305 19 7.03537 19 7.50003 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 16.5px' }" />
            <motion.path d="M10.5 10H13.4971C13.9617 10 14.194 10 14.3872 9.96157C15.1806 9.80376 15.8008 9.18356 15.9586 8.39018C15.9971 8.19698 15.9971 7.96466 15.9971 7.5C15.9971 7.03534 15.9971 6.80302 15.9586 6.60982C15.8008 5.81644 15.1806 5.19624 14.3872 5.03843C14.194 5 13.9617 5 13.4971 5L10.5 5C10.0354 5 9.80305 5 9.60985 5.03843C8.81647 5.19624 8.19627 5.81644 8.03846 6.60982C8.00003 6.80302 8.00003 7.03535 8.00003 7.5C8.00003 7.96466 8.00003 8.19698 8.03846 8.39018C8.19627 9.18356 8.81647 9.80376 9.60985 9.96157C9.80305 10 10.0354 10 10.5 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7.5px' }" />
          </svg>
        </div>
</template>
