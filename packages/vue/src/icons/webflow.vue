<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WebflowIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the webflow separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.77px) rotate(-0.96deg)', 'translateY(0.43px) rotate(0.48deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.56,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.35px, -1.16px)', 'translate(0.19px, -0.19px)', 'translate(0px, 0px)'],
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
            <motion.path d="M2 15.5001V16.0001C2 16.943 2 17.4145 2.4029 17.7144C2.80579 18.0143 3.19193 17.8986 3.9642 17.6673C8.5 16.3087 13.5 12.5001 13.5 12.5001L12.1228 15.0424C11.4082 16.3615 11.0509 17.021 11.3395 17.5105C11.6281 18.0001 12.3743 18.0001 13.8666 18.0001H15.1678C15.7492 18.0001 16.0399 18.0001 16.276 17.8573C16.512 17.7145 16.6485 17.456 16.9215 16.9392L21.1469 8.93916C21.8403 7.62643 22.1869 6.97007 21.8975 6.48508C21.6081 6.00008 20.8698 6.00008 19.3932 6.00008H17.714C17.1167 6.00008 16.818 6.00008 16.578 6.14943C16.338 6.29878 16.2045 6.56774 15.9373 7.10565L15.9373 7.10566L14.5 9.99976L14.219 7.75169C14.1147 6.9175 14.0626 6.5004 13.779 6.25008C13.4955 5.99976 13.0751 5.99976 12.2344 5.99976L11.0657 6.00008C10.3846 6.00008 10.0441 6.00008 9.79099 6.17038C9.53786 6.34067 9.40074 6.67773 9.12649 7.35187C8.18609 9.66345 6.60882 12.2919 3.96645 13.1846C2.90559 13.5429 2.37517 13.7221 2.18758 13.9835C2 14.2448 2 14.6633 2 15.5001Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.09px 12.01px' }" />
            <motion.path d="M2 7.99976V8.49976C2 9.44256 2 9.91397 2.29289 10.2069C2.58579 10.4998 3.05719 10.4998 4 10.4998H4.5C5.44281 10.4998 5.91421 10.4998 6.20711 10.2069C6.5 9.91397 6.5 9.44256 6.5 8.49976V7.99976C6.5 7.05695 6.5 6.58554 6.20711 6.29265C5.91421 5.99976 5.44281 5.99976 4.5 5.99976H4C3.05719 5.99976 2.58579 5.99976 2.29289 6.29265C2 6.58554 2 7.05695 2 7.99976Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.25px 8.25px' }" />
          </svg>
        </div>
</template>
