<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ShovelIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the shovel separate in depth and stack again
// generated from @hugeicons/core-free-icons
const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.31px, -1.12px)', 'translate(0.19px, -0.19px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.56,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.75px) rotate(-0.94deg)', 'translateY(0.42px) rotate(0.47deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.62,
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
            <motion.path d="M16.5 4.70711V7.5L19.2928 7.50043C19.7456 7.5005 20.1799 7.32065 20.5001 7.00046L21.1463 6.35424C21.3728 6.12777 21.5 5.82061 21.5 5.50033C21.5 5.17998 21.3728 4.87276 21.1462 4.64627L19.3525 2.85316C19.1263 2.62703 18.8195 2.5 18.4997 2.5C18.1797 2.5 17.8729 2.62709 17.6467 2.8533L17 3.5C16.6799 3.82014 16.5 4.25435 16.5 4.70711Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 5px' }" />
            <motion.path d="M16.5 7.5L8.50005 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 11.5px' }" />
            <motion.path d="M5.63517 21.5002H5.45182C4.05997 21.5002 3.36405 21.5002 2.93174 21.0679C2.49943 20.6355 2.49962 19.9396 2.49999 18.5478L2.50004 18.3654C2.50004 16.2778 3.32936 14.2758 4.80556 12.7997C5.95398 11.651 6.52819 11.0766 7.23229 11.0092C7.35699 10.9973 7.48254 10.9973 7.60724 11.0092C8.31135 11.0765 8.88563 11.6508 10.0342 12.7994L11.2005 13.9658C12.3496 15.115 12.9241 15.6895 12.9911 16.3941C13.0029 16.5178 13.0029 16.6424 12.9912 16.7661C12.9244 17.4707 12.35 18.0454 11.2012 19.1949C9.72499 20.671 7.72283 21.5002 5.63517 21.5002Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.75px 16.25px' }" />
          </svg>
        </div>
</template>
