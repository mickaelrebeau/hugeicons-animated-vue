<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DeliveredSentIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after sent: it pulls back, banks, and leaves toward the top-right
// generated from @hugeicons/core-free-icons
const planeVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px) rotate(0deg)',
    visibility: 'visible',
  },
  animate: {
    transform: ['translate(0px, 0px) rotate(0deg)', 'translate(2.04px, -0.61px) rotate(-1.02deg)', 'translate(8.14px, -5.09px) rotate(-6.11deg)', 'translate(16.28px, -12.21px) rotate(-11.2deg)', 'translate(26.46px, -18.32px) rotate(-13.23deg)', 'translate(-22.39px, 12.21px) rotate(12.21deg)', 'translate(-8.14px, 4.07px) rotate(4.07deg)', 'translate(0px, 0px) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible', 'visible', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 1.45,
      times: [0, 0.08, 0.2, 0.36, 0.48, 0.52, 0.78, 1],
      ease: [
        'easeIn',
        'easeIn',
        'easeIn',
        'linear',
        'linear',
        'easeOut',
        [0.23, 1, 0.32, 1],
      ],
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
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="hidden">
            <motion.circle cx="17" cy="19.0001" r="2" stroke="currentColor" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 19px' }" />
            <motion.circle cx="7" cy="19.0001" r="2" stroke="currentColor" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 19px' }" />
            <motion.path d="M2 9.00012V13.9471C2 16.3291 2 17.5201 2.73223 18.2601C3.2191 18.7522 3.90328 18.917 5 18.9723M12.4271 5.00012C13.3404 5.30002 14.0564 6.02366 14.3532 6.94666C14.5 7.40334 14.5 7.96765 14.5 9.09625C14.5 9.84865 14.5 10.2249 14.5979 10.5293C14.7957 11.1446 15.2731 11.6271 15.882 11.827C16.1832 11.9259 16.5555 11.9259 17.3 11.9259H22V13.9471C22 16.3291 22 17.5201 21.2678 18.2601C20.7809 18.7522 20.0967 18.917 19 18.9723M9 19.0001H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14.5 7.00012H16.3212C17.7766 7.00012 18.5042 7.00012 19.0964 7.35383C19.6886 7.70754 20.0336 8.34824 20.7236 9.62962L22 12.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.25px 9.5px' }" />
            <motion.path d="M7.32653 8.00012L8.81309 6.82595C9.60436 6.20095 10 5.88845 10 5.50012M7.32653 3.00012L8.81309 4.1743C9.60436 4.7993 10 5.1118 10 5.50012M10 5.50012L2 5.50012" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 5.5px' }" />
          </svg>
        </div>
</template>
