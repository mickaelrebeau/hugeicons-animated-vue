<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MailEditIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after mail-01: the envelope flap opens and the body catches its return
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scaleX(1) scaleY(1)',
  },
  animate: {
    transform: ['scaleX(1) scaleY(1)', 'scaleX(1.03) scaleY(0.96)', 'scaleX(0.99) scaleY(1.02)', 'scaleX(1) scaleY(1)'],
    transition: {
      duration: 0.68,
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
            <motion.path d="M2 5.49994L8.91302 9.41691C11.4616 10.8609 12.5384 10.8609 15.087 9.41691L22 5.49994" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.49px' }" />
            <motion.path d="M21.9953 10.0283C21.9299 6.96108 21.8972 5.42743 20.7655 4.29135C19.6337 3.15526 18.0586 3.11568 14.9083 3.03653C12.9668 2.98775 11.0443 2.98774 9.10276 3.03652C5.95252 3.11567 4.3774 3.15524 3.24564 4.29133C2.11389 5.42742 2.08118 6.96107 2.01577 10.0283C1.99474 11.0146 1.99474 11.995 2.01577 12.9813C2.08119 16.0486 2.11389 17.5822 3.24565 18.7183C4.3774 19.8544 5.95252 19.894 9.10277 19.9731C9.57102 19.9849 10.0382 19.9938 10.5047 19.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.49px' }" />
            <motion.path d="M20.8522 13.4391L21.5446 14.1315C22.1304 14.7172 22.1304 15.667 21.5446 16.2528L17.9172 19.9484C17.6319 20.2338 17.2669 20.4262 16.8702 20.5002L14.622 20.9883C14.2671 21.0653 13.951 20.7502 14.027 20.395L14.5056 18.1597C14.5796 17.763 14.772 17.398 15.0574 17.1126L18.7309 13.4391C19.3167 12.8533 20.2665 12.8533 20.8522 13.4391Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.49px' }" />
          </svg>
        </div>
</template>
